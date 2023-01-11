```python
import torch
```


```python
x, y = torch.arange(12), torch.arange(24)
```


```python
x, y
```




    (tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11]),
     tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
             18, 19, 20, 21, 22, 23]))




```python
x.shape, y.shape
```




    (torch.Size([12]), torch.Size([24]))




```python
x.numel(), y.numel()
```




    (12, 24)




```python
x.reshape(3, 4), y.reshape(6, 4)
```




    (tensor([[ 0,  1,  2,  3],
             [ 4,  5,  6,  7],
             [ 8,  9, 10, 11]]),
     tensor([[ 0,  1,  2,  3],
             [ 4,  5,  6,  7],
             [ 8,  9, 10, 11],
             [12, 13, 14, 15],
             [16, 17, 18, 19],
             [20, 21, 22, 23]]))




```python
zeros, ones, randn = torch.zeros(2, 3), torch.ones(2, 3), torch.randn(2, 3)
```


```python
zeros, ones, randn
```




    (tensor([[0., 0., 0.],
             [0., 0., 0.]]),
     tensor([[1., 1., 1.],
             [1., 1., 1.]]),
     tensor([[-0.7930,  0.2799,  0.7478],
             [-1.2043,  0.7893,  2.0885]]))




```python
tensorX = torch.tensor([[1, 2, 3], [4, 5, 6]])
```


```python
tensorX
```




    tensor([[1, 2, 3],
            [4, 5, 6]])




```python

```


```python

```


```python

```


```python
X, Y = torch.tensor([1.0, 2, 4, 8]), torch.tensor([2, 2, 2, 2])
```


```python
X + Y, X - Y, X * Y, X / Y, X ** Y
```




    (tensor([ 3.,  4.,  6., 10.]),
     tensor([-1.,  0.,  2.,  6.]),
     tensor([ 2.,  4.,  8., 16.]),
     tensor([0.5000, 1.0000, 2.0000, 4.0000]),
     tensor([ 1.,  4., 16., 64.]))




```python
torch.exp(X)
```




    tensor([2.7183e+00, 7.3891e+00, 5.4598e+01, 2.9810e+03])




```python
a, b =torch.arange(12, dtype = torch.float64).reshape(3, 4), torch.tensor([[2.0, 1, 4, 3], [1, 2, 3, 4], [4, 3, 2, 1]])
```


```python
torch.cat((a, b), dim = 0), torch.cat((a, b), dim = 1)
```




    (tensor([[ 0.,  1.,  2.,  3.],
             [ 4.,  5.,  6.,  7.],
             [ 8.,  9., 10., 11.],
             [ 2.,  1.,  4.,  3.],
             [ 1.,  2.,  3.,  4.],
             [ 4.,  3.,  2.,  1.]], dtype=torch.float64),
     tensor([[ 0.,  1.,  2.,  3.,  2.,  1.,  4.,  3.],
             [ 4.,  5.,  6.,  7.,  1.,  2.,  3.,  4.],
             [ 8.,  9., 10., 11.,  4.,  3.,  2.,  1.]], dtype=torch.float64))




```python
a == b
```




    tensor([[False,  True, False,  True],
            [False, False, False, False],
            [False, False, False, False]])




```python
a.sum(), b.sum()
```




    (tensor(66., dtype=torch.float64), tensor(30.))




```python
p, q = torch.arange(3).reshape((3, 1)), torch.arange(2).reshape((1, 2))
```


```python
p, q
```




    (tensor([[0],
             [1],
             [2]]),
     tensor([[0, 1]]))




```python
q + p
```




    tensor([[0, 1],
            [1, 2],
            [2, 3]])




```python
arr = torch.randn(3,4)
arr
```




    tensor([[-0.2175,  1.2975, -1.4377, -0.6559],
            [-0.4125,  0.2430,  0.6188,  0.8181],
            [-0.7755,  0.2852,  0.8682,  0.5547]])




```python
arr[:]
```




    tensor([[-0.2175,  1.2975, -1.4377, -0.6559],
            [-0.4125,  0.2430,  0.6188,  0.8181],
            [-0.7755,  0.2852,  0.8682,  0.5547]])




```python
arr[1:3]
```




    tensor([[-0.4125,  0.2430,  0.6188,  0.8181],
            [-0.7755,  0.2852,  0.8682,  0.5547]])




```python
arr[-1]
```




    tensor([-0.7755,  0.2852,  0.8682,  0.5547])




```python
arr[1, 2]
```




    tensor(0.6188)




```python
arr[1, 2] = 0.0
```


```python
arr[:]
```




    tensor([[-0.2175,  1.2975, -1.4377, -0.6559],
            [-0.4125,  0.2430,  0.0000,  0.8181],
            [-0.7755,  0.2852,  0.8682,  0.5547]])




```python
arr[0:2, :]
```




    tensor([[-0.2175,  1.2975, -1.4377, -0.6559],
            [-0.4125,  0.2430,  0.0000,  0.8181]])




```python
arr[0:2, :] = 12.
```


```python
arr[:]
```




    tensor([[12.0000, 12.0000, 12.0000, 12.0000],
            [12.0000, 12.0000, 12.0000, 12.0000],
            [-0.7755,  0.2852,  0.8682,  0.5547]])




```python
before = id(arr)
brr = torch.randn(3,4)
```


```python
arr = arr + brr
```


```python
id(arr) == before
```




    False




```python
Z = torch.zeros_like(arr)
print(id(Z))
```

    140595909928264



```python
Z[:] = arr + brr
print(id(Z))
```

    140595909928264



```python
before = id(arr)
arr += brr
id(arr) == before
```




    True




```python
A = arr.numpy()
B = torch.tensor(A)
type(A), type(B)
```




    (numpy.ndarray, torch.Tensor)




```python
a = torch.tensor([3.5])
a, a.item(), float(a), int(a)
```




    (tensor([3.5000]), 3.5, 3.5, 3)




```python

```


```python

```


```python

```


```python

```


```python

```


```python
x = torch.arange(4.0)
```


```python
x
```




    tensor([0., 1., 2., 3.])




```python
x.requires_grad_(True)
x.grad
```


```python
y = 2 * torch.dot(x, x)
y
```




    tensor(28., grad_fn=<MulBackward0>)




```python
y.backward()
x.grad
```




    tensor([ 0.,  4.,  8., 12.])




```python
x.grad == 4 * x
```




    tensor([True, True, True, True])




```python
x.grad.zero_()
```




    tensor([0., 0., 0., 0.])




```python
y = x.sum()
```


```python
y.backward()
```


```python
x.grad
```




    tensor([1., 1., 1., 1.])




```python

```


```python

```


```python

```


```python

```


```python
x, y = torch.tensor([3.0]), torch.tensor([2.0])
x + y, x - y, x * y, x / y, x ** y
```




    (tensor([5.]), tensor([1.]), tensor([6.]), tensor([1.5000]), tensor([9.]))




```python
x = torch.arange(4)
x
```




    tensor([0, 1, 2, 3])




```python
x[3]
```




    tensor(3)




```python
len(x)
```




    4




```python
x.shape
```




    torch.Size([4])




```python
A = torch.arange(20).reshape(5,4)
```


```python
A
```




    tensor([[ 0,  1,  2,  3],
            [ 4,  5,  6,  7],
            [ 8,  9, 10, 11],
            [12, 13, 14, 15],
            [16, 17, 18, 19]])




```python
A.T
```




    tensor([[ 0,  4,  8, 12, 16],
            [ 1,  5,  9, 13, 17],
            [ 2,  6, 10, 14, 18],
            [ 3,  7, 11, 15, 19]])




```python
B = torch.tensor([[1, 2, 3], [2, 0, 4], [3, 4, 5]])
B, B.T
```




    (tensor([[1, 2, 3],
             [2, 0, 4],
             [3, 4, 5]]),
     tensor([[1, 2, 3],
             [2, 0, 4],
             [3, 4, 5]]))




```python
B == B.T
```




    tensor([[True, True, True],
            [True, True, True],
            [True, True, True]])




```python
X = torch.arange(24).reshape(2, 3, 4)
```


```python
X
```




    tensor([[[ 0,  1,  2,  3],
             [ 4,  5,  6,  7],
             [ 8,  9, 10, 11]],
    
            [[12, 13, 14, 15],
             [16, 17, 18, 19],
             [20, 21, 22, 23]]])




```python
A = torch.arange(20, dtype = torch.float64).reshape(5, 4)
B = A.clone()
```


```python
A, A + B
```




    (tensor([[ 0.,  1.,  2.,  3.],
             [ 4.,  5.,  6.,  7.],
             [ 8.,  9., 10., 11.],
             [12., 13., 14., 15.],
             [16., 17., 18., 19.]], dtype=torch.float64),
     tensor([[ 0.,  2.,  4.,  6.],
             [ 8., 10., 12., 14.],
             [16., 18., 20., 22.],
             [24., 26., 28., 30.],
             [32., 34., 36., 38.]], dtype=torch.float64))




```python
A * B #对应乘积
```




    tensor([[  0.,   1.,   4.,   9.],
            [ 16.,  25.,  36.,  49.],
            [ 64.,  81., 100., 121.],
            [144., 169., 196., 225.],
            [256., 289., 324., 361.]], dtype=torch.float64)




```python
x = torch.arange(4, dtype = torch.float64)
x, x.sum()
```




    (tensor([0., 1., 2., 3.], dtype=torch.float64),
     tensor(6., dtype=torch.float64))




```python
A.shape, A.sum()
```




    (torch.Size([5, 4]), tensor(190., dtype=torch.float64))




```python

```
