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