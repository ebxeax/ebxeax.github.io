环境：

NVIDIA GeForce GTX 1050
cuda 10.2.89 windows
visual studio 2017
windows SDK 10.0.14393.0
go 1.13.4 windows/amd64
我们在文件 lib.cu 中实现一个 GPU 计算的浮点数向量内积函数，以及一个 CPU 的入口函数进行数据传递和调用：

__global__ void devDot(double *x, double *y, int n, double *r) {
    double res = 0.0;
    for (int i = 0; i < n; i++) {
        res += x[i] * y[i];
    }
    *r = res;
}

extern "C" __declspec(dllexport) void dot(double *x, double *y, int n, double *r) {
    double *xd, *yd, *rd;
    int sz = sizeof(double) * n;
    cudaMalloc(&xd, sz);
    cudaMalloc(&yd, sz);
    cudaMalloc(&rd, sizeof(double));
    cudaMemcpy(xd, x, sz, cudaMemcpyHostToDevice);
    cudaMemcpy(yd, y, sz, cudaMemcpyHostToDevice);

    devDot<<<1, 1>>>(xd, yd, n, rd);
    cudaDeviceSynchronize();
    cudaMemcpy(r, rd, sizeof(double), cudaMemcpyDeviceToHost);
    cudaFree(xd);
    cudaFree(yd);
    cudaFree(rd);
}
文件后缀 cu 表示 C/C++ 的语法加上 CUDA 自己的一些扩展。其中，__global__ 表示该函数可运行于 GPU。由 cudaMalloc 申请的内存不能在 CPU 函数中访问，同样，在 GPU 函数中也只能访问由 cudaMalloc 一族的函数申请的内存。两边内存的数据传输使用 cudaMemcpy。devDot 函数后面的 <<<1, 1>>> 是 CUDA 扩展的语法，所以只能用 CUDA 专用的编译器前端 nvcc 进行编译，其意义以后再表。

使用以下命令将代码编译为一个动态库（需要将 VC 编译器所在目录加入 PATH）：

nvcc lib.cu -o libcuda.dll --shared
将 dll 文件复制到 main.go 同目录下，main.go如下：

package main

import (
    "math/rand"
    "syscall"
    "time"
    "unsafe"
)

type Lib struct {
    dll     *syscall.DLL
    dotProc *syscall.Proc
}

func LoadLib() (*Lib, error) {
    l := &Lib{}
    var err error
    if l.dll, err = syscall.LoadDLL("libcuda.dll"); nil != err {
        return nil, err
    }
    if l.dotProc, err = l.dll.FindProc("dot"); nil != err {
        l.dll.Release()
        return nil, err
    }
    return l, nil
}

func (l *Lib) Release() {
    l.dll.Release()
}

func (l *Lib) Dot(x, y []float64) float64 {
    var r float64
    l.dotProc.Call(
        uintptr(unsafe.Pointer(&x[0])),
        uintptr(unsafe.Pointer(&y[0])),
        uintptr(len(x)),
        uintptr(unsafe.Pointer(&r)),
    )
    return r
}

const N = 1 << 20

func main() {
    lib, err := LoadLib()
    if nil != err {
        println(err.Error())
        return
    }
    defer lib.Release()

    rand.Seed(time.Now().Unix())
    x, y := make([]float64, N), make([]float64, N)
    for i := 0; i < N; i++ {
        x[i], y[i] = rand.Float64(), rand.Float64()
    }

    var r float64
    for i := 0; i < N; i++ {
        r += x[i] * y[i]
    }
    println(r)
    println(lib.Dot(x, y))

    t := time.Now()
    for i := 0; i < 100; i++ {
        var r float64
        for i := 0; i < N; i++ {
            r += x[i] * y[i]
        }
    }
    println(time.Now().Sub(t).Microseconds())

    t = time.Now()
    for i := 0; i < 100; i++ {
        lib.Dot(x, y)
    }
    println(time.Now().Sub(t).Microseconds())
}
在 golang 中使用动态加载，比较计算结果和运行时间，运行的结果基本是同样的画风，计算结果正确，但是在性能上，这种哈喽级别的 CUDA 尝试终究惨败被虐出 N 个数量级，浮点数计算的性能优势在其他性能损耗面前完全入不敷出。这就是所谓的从入门到放弃……吗？

