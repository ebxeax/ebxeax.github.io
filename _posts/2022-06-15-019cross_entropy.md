#### Entropy
Uncetainly  
measure of surprise  
higher entropy = less info  
$$Entropy = -\sum_i P(i)\log P(i)$$

#### Lottery


```python
import torch
```


```python
a = torch.full([4], 1/4.)
```


```python
a * torch.log2(a)
```




    tensor([-0.5000, -0.5000, -0.5000, -0.5000])




```python
-(a * torch.log2(a)).sum()
```




    tensor(2.)




```python
a = torch.tensor([0.1, 0.1, 0.1, 0.7])
-(a * torch.log2(a)).sum()
```




    tensor(1.3568)




```python
a = torch.tensor([0.001, 0.001, 0.001, 0.999])
-(a * torch.log2(a)).sum()
```




    tensor(0.0313)



#### Croos Entropy
$$
\begin{aligned}
&H(p,q)=-\sum p(x)\log q(x)\\
&H(p,q)=H(p)+D_{KL}(p|q)\\
\end{aligned}  
$$
##### P=Q  
cross Entropy = Entropy
##### for one-hot encoding
entropy = log1 =0

#### Binary Classification
$$
\begin{aligned}
&H(P,Q)=-P(cat)\log Q(cat)-(1-P(cat))\log(1-Q(cat))\\
&P(dog)=(1-P(cat))\\
&H(P,Q)=-\sum_{i=(cat,dog)}P(i)\log(Q(i))\\
&=-P(cat)\log Q(cat)-P(dog)\log Q(dog)-(y\log(p)+(1-y)\log (1-p))\\
\end{aligned}
$$


```python

```
