##### Derivative Rules  
$$
\begin{aligned}
&\frac{\delta E}{\delta w^1_{jk}}=\frac{\delta E}{\delta O_k^1}\frac{\delta O_k^1}{\delta w^1_{jk}}=\frac{\delta E}{\delta O_k^2}\frac{\delta O_k^2}{\delta O_k^1}\frac{\delta O_k^1}{\delta w^1_{jk}}\\
\end{aligned}
$$


```python
import torch, torch.nn.functional as F
```


```python
x = torch.tensor(1.)
w1, w2 = torch.tensor(2., requires_grad=True), torch.tensor(2., requires_grad=True)
b1, b2 = torch.tensor(1.), torch.tensor(1.)
```


```python
y1 = x * w1 + b1 
y2 = y1 * w2 +b2 
```


```python
dy2_dy1 = torch.autograd.grad(y2, [y1], retain_graph=True)[0]
dy1_dw1 = torch.autograd.grad(y1, [w1], retain_graph=True)[0]
dy2_dw1 = torch.autograd.grad(y2, [w1], retain_graph=True)[0]
```


```python
dy2_dy1 * dy1_dw1
```




    tensor(2.)




```python
dy2_dw1
```




    tensor(2.)


