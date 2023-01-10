```python
import torch
import torch.nn.functional as F
```


```python
import  torch
import  torch.nn as nn
import  torch.nn.functional as F
import  torch.optim as optim
from    torchvision import datasets, transforms

#超参数
batch_size=200
learning_rate=0.01
epochs=10

#获取训练数据
train_loader = torch.utils.data.DataLoader(
    datasets.MNIST('../data', train=True, download=True,          #train=True则得到的是训练集
                   transform=transforms.Compose([                 #transform进行数据预处理
                       transforms.ToTensor(),                     #转成Tensor类型的数据
                       transforms.Normalize((0.1307,), (0.3081,)) #进行数据标准化(减去均值除以方差)
                   ])),
    batch_size=batch_size, shuffle=True)                          #按batch_size分出一个batch维度在最前面,shuffle=True打乱顺序

#获取测试数据
test_loader = torch.utils.data.DataLoader(
    datasets.MNIST('../data', train=False, transform=transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.1307,), (0.3081,))
    ])),
    batch_size=batch_size, shuffle=True)


class MLP(nn.Module):

    def __init__(self):
        super(MLP, self).__init__()

        self.model = nn.Sequential(         #定义网络的每一层，nn.ReLU可以换成其他激活函数，比如nn.LeakyReLU()
            nn.Linear(784, 200),
            nn.ReLU(inplace=True),
            nn.Linear(200, 200),
            nn.ReLU(inplace=True),
            nn.Linear(200, 10),
            nn.ReLU(inplace=True),
        )

    def forward(self, x):
        x = self.model(x)
        return x


net = MLP()
#定义sgd优化器,指明优化参数、学习率，net.parameters()得到这个类所定义的网络的参数[[w1,b1,w2,b2,...]
optimizer = optim.SGD(net.parameters(), lr=learning_rate)
criteon = nn.CrossEntropyLoss()

for epoch in range(epochs):

    for batch_idx, (data, target) in enumerate(train_loader):
        data = data.view(-1, 28*28)          #将二维的图片数据摊平[样本数,784]

        logits = net(data)                   #前向传播
        loss = criteon(logits, target)       #nn.CrossEntropyLoss()自带Softmax

        optimizer.zero_grad()                #梯度信息清空
        loss.backward()                      #反向传播获取梯度
        optimizer.step()                     #优化器更新

        if batch_idx % 100 == 0:             #每100个batch输出一次信息
            print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(
                epoch, batch_idx * len(data), len(train_loader.dataset),
                       100. * batch_idx / len(train_loader), loss.item()))


    test_loss = 0
    correct = 0                                         #correct记录正确分类的样本数
    for data, target in test_loader:
        data = data.view(-1, 28 * 28)
        logits = net(data)
        test_loss += criteon(logits, target).item()     #其实就是criteon(logits, target)的值，标量

        pred = logits.data.max(dim=1)[1]                #也可以写成pred=logits.argmax(dim=1)
        correct += pred.eq(target.data).sum()

    test_loss /= len(test_loader.dataset)
    print('\nTest set: Average loss: {:.4f}, Accuracy: {}/{} ({:.0f}%)\n'.format(
        test_loss, correct, len(test_loader.dataset),
        100. * correct / len(test_loader.dataset)))
```

    C:\Users\ygx79\AppData\Local\Programs\Python\Python37\lib\site-packages\torchvision\io\image.py:11: UserWarning: Failed to load image Python extension: [WinError 126] 找不到指定的模块。
      warn(f"Failed to load image Python extension: {e}")
    

    Downloading http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz
    Downloading http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz to ../data\MNIST\raw\train-images-idx3-ubyte.gz
    

    9913344it [09:45, 16922.35it/s]                              
    

    Extracting ../data\MNIST\raw\train-images-idx3-ubyte.gz to ../data\MNIST\raw
    
    Downloading http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz
    Downloading http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz to ../data\MNIST\raw\train-labels-idx1-ubyte.gz
    

    29696it [00:00, 112126.01it/s]                          
    

    Extracting ../data\MNIST\raw\train-labels-idx1-ubyte.gz to ../data\MNIST\raw
    
    Downloading http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz
    Downloading http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz to ../data\MNIST\raw\t10k-images-idx3-ubyte.gz
    

    1649664it [00:06, 236143.14it/s]                             
    

    Extracting ../data\MNIST\raw\t10k-images-idx3-ubyte.gz to ../data\MNIST\raw
    
    Downloading http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz
    Downloading http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz to ../data\MNIST\raw\t10k-labels-idx1-ubyte.gz
    

    5120it [00:00, ?it/s]                   
    

    Extracting ../data\MNIST\raw\t10k-labels-idx1-ubyte.gz to ../data\MNIST\raw
    
    Train Epoch: 0 [0/60000 (0%)]	Loss: 2.307192
    Train Epoch: 0 [20000/60000 (33%)]	Loss: 2.138816
    Train Epoch: 0 [40000/60000 (67%)]	Loss: 1.768016
    
    Test set: Average loss: 0.0070, Accuracy: 6058/10000 (61%)
    
    Train Epoch: 1 [0/60000 (0%)]	Loss: 1.505597
    Train Epoch: 1 [20000/60000 (33%)]	Loss: 1.149395
    Train Epoch: 1 [40000/60000 (67%)]	Loss: 1.039293
    
    Test set: Average loss: 0.0047, Accuracy: 7143/10000 (71%)
    
    Train Epoch: 2 [0/60000 (0%)]	Loss: 1.061429
    Train Epoch: 2 [20000/60000 (33%)]	Loss: 0.741140
    Train Epoch: 2 [40000/60000 (67%)]	Loss: 0.901448
    
    Test set: Average loss: 0.0041, Accuracy: 7299/10000 (73%)
    
    Train Epoch: 3 [0/60000 (0%)]	Loss: 0.809117
    Train Epoch: 3 [20000/60000 (33%)]	Loss: 0.892138
    Train Epoch: 3 [40000/60000 (67%)]	Loss: 0.659411
    
    Test set: Average loss: 0.0030, Accuracy: 8170/10000 (82%)
    
    Train Epoch: 4 [0/60000 (0%)]	Loss: 0.622007
    Train Epoch: 4 [20000/60000 (33%)]	Loss: 0.592337
    Train Epoch: 4 [40000/60000 (67%)]	Loss: 0.445400
    
    Test set: Average loss: 0.0027, Accuracy: 8225/10000 (82%)
    
    Train Epoch: 5 [0/60000 (0%)]	Loss: 0.519135
    Train Epoch: 5 [20000/60000 (33%)]	Loss: 0.491247
    Train Epoch: 5 [40000/60000 (67%)]	Loss: 0.562315
    
    Test set: Average loss: 0.0026, Accuracy: 8295/10000 (83%)
    
    Train Epoch: 6 [0/60000 (0%)]	Loss: 0.509583
    Train Epoch: 6 [20000/60000 (33%)]	Loss: 0.553628
    Train Epoch: 6 [40000/60000 (67%)]	Loss: 0.484189
    
    Test set: Average loss: 0.0025, Accuracy: 8336/10000 (83%)
    
    Train Epoch: 7 [0/60000 (0%)]	Loss: 0.619250
    Train Epoch: 7 [20000/60000 (33%)]	Loss: 0.634936
    Train Epoch: 7 [40000/60000 (67%)]	Loss: 0.440220
    
    Test set: Average loss: 0.0024, Accuracy: 8370/10000 (84%)
    
    Train Epoch: 8 [0/60000 (0%)]	Loss: 0.410350
    Train Epoch: 8 [20000/60000 (33%)]	Loss: 0.460459
    Train Epoch: 8 [40000/60000 (67%)]	Loss: 0.395150
    
    Test set: Average loss: 0.0024, Accuracy: 8395/10000 (84%)
    
    Train Epoch: 9 [0/60000 (0%)]	Loss: 0.515630
    Train Epoch: 9 [20000/60000 (33%)]	Loss: 0.546718
    Train Epoch: 9 [40000/60000 (67%)]	Loss: 0.496167
    
    Test set: Average loss: 0.0023, Accuracy: 8433/10000 (84%)
    
    


```python
device = torch.device('cuda:0')
net = MLP().to(device)
#定义sgd优化器,指明优化参数、学习率，net.parameters()得到这个类所定义的网络的参数[[w1,b1,w2,b2,...]
optimizer = optim.SGD(net.parameters(), lr=learning_rate)
criteon = nn.CrossEntropyLoss().to(device)
```

##### GPU acc


```python
import  torch
import  torch.nn as nn
import  torch.nn.functional as F
import  torch.optim as optim
from    torchvision import datasets, transforms

#超参数
batch_size=200
learning_rate=0.01
epochs=10

#获取训练数据
train_loader = torch.utils.data.DataLoader(
    datasets.MNIST('../data', train=True, download=True,          #train=True则得到的是训练集
                   transform=transforms.Compose([                 #transform进行数据预处理
                       transforms.ToTensor(),                     #转成Tensor类型的数据
                       transforms.Normalize((0.1307,), (0.3081,)) #进行数据标准化(减去均值除以方差)
                   ])),
    batch_size=batch_size, shuffle=True)                          #按batch_size分出一个batch维度在最前面,shuffle=True打乱顺序

#获取测试数据
test_loader = torch.utils.data.DataLoader(
    datasets.MNIST('../data', train=False, transform=transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.1307,), (0.3081,))
    ])),
    batch_size=batch_size, shuffle=True)


class MLP(nn.Module):

    def __init__(self):
        super(MLP, self).__init__()

        self.model = nn.Sequential(         #定义网络的每一层,
            nn.Linear(784, 200),
            nn.ReLU(inplace=True),
            nn.Linear(200, 200),
            nn.ReLU(inplace=True),
            nn.Linear(200, 10),
            nn.ReLU(inplace=True),
        )

    def forward(self, x):
        x = self.model(x)
        return x

device = torch.device('cuda:0')
net = MLP().to(device)
#定义sgd优化器,指明优化参数、学习率，net.parameters()得到这个类所定义的网络的参数[[w1,b1,w2,b2,...]
optimizer = optim.SGD(net.parameters(), lr=learning_rate)
criteon = nn.CrossEntropyLoss().to(device)


for epoch in range(epochs):

    for batch_idx, (data, target) in enumerate(train_loader):
        data = data.view(-1, 28*28)          #将二维的图片数据摊平[样本数,784]
        data, target = data.to(device), target.cuda()

        logits = net(data)               #前向传播
        loss = criteon(logits, target)       #nn.CrossEntropyLoss()自带Softmax

        optimizer.zero_grad()                #梯度信息清空
        loss.backward()                      #反向传播获取梯度
        optimizer.step()                     #优化器更新

        if batch_idx % 100 == 0:             #每100个batch输出一次信息
            print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(
                epoch, batch_idx * len(data), len(train_loader.dataset),
                       100. * batch_idx / len(train_loader), loss.item()))


    test_loss = 0
    correct = 0                                         #correct记录正确分类的样本数
    for data, target in test_loader:
        data = data.view(-1, 28 * 28)
        data, target = data.to(device), target.cuda()

        logits = net(data)
        test_loss += criteon(logits, target).item()     #其实就是criteon(logits, target)的值，标量

        pred = logits.data.max(dim=1)[1]                #也可以写成pred=logits.argmax(dim=1)
        correct += pred.eq(target.data).sum()

    test_loss /= len(test_loader.dataset)
    print('\nTest set: Average loss: {:.4f}, Accuracy: {}/{} ({:.0f}%)\n'.format(
        test_loss, correct, len(test_loader.dataset),
        100. * correct / len(test_loader.dataset)))
```

    Train Epoch: 0 [0/60000 (0%)]	Loss: 2.291108
    Train Epoch: 0 [20000/60000 (33%)]	Loss: 2.003711
    Train Epoch: 0 [40000/60000 (67%)]	Loss: 1.419139
    
    Test set: Average loss: 0.0038, Accuracy: 8229/10000 (82%)
    
    Train Epoch: 1 [0/60000 (0%)]	Loss: 0.754257
    Train Epoch: 1 [20000/60000 (33%)]	Loss: 0.655030
    Train Epoch: 1 [40000/60000 (67%)]	Loss: 0.444529
    
    Test set: Average loss: 0.0021, Accuracy: 8884/10000 (89%)
    
    Train Epoch: 2 [0/60000 (0%)]	Loss: 0.439030
    Train Epoch: 2 [20000/60000 (33%)]	Loss: 0.355868
    Train Epoch: 2 [40000/60000 (67%)]	Loss: 0.366360
    
    Test set: Average loss: 0.0017, Accuracy: 9037/10000 (90%)
    
    Train Epoch: 3 [0/60000 (0%)]	Loss: 0.439010
    Train Epoch: 3 [20000/60000 (33%)]	Loss: 0.344060
    Train Epoch: 3 [40000/60000 (67%)]	Loss: 0.255032
    
    Test set: Average loss: 0.0015, Accuracy: 9116/10000 (91%)
    
    Train Epoch: 4 [0/60000 (0%)]	Loss: 0.331074
    Train Epoch: 4 [20000/60000 (33%)]	Loss: 0.301065
    Train Epoch: 4 [40000/60000 (67%)]	Loss: 0.276514
    
    Test set: Average loss: 0.0014, Accuracy: 9169/10000 (92%)
    
    Train Epoch: 5 [0/60000 (0%)]	Loss: 0.281249
    Train Epoch: 5 [20000/60000 (33%)]	Loss: 0.316320
    Train Epoch: 5 [40000/60000 (67%)]	Loss: 0.248902
    
    Test set: Average loss: 0.0013, Accuracy: 9210/10000 (92%)
    
    Train Epoch: 6 [0/60000 (0%)]	Loss: 0.317820
    Train Epoch: 6 [20000/60000 (33%)]	Loss: 0.315888
    Train Epoch: 6 [40000/60000 (67%)]	Loss: 0.302683
    
    Test set: Average loss: 0.0013, Accuracy: 9258/10000 (93%)
    
    Train Epoch: 7 [0/60000 (0%)]	Loss: 0.290187
    
