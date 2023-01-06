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