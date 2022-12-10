# CNN

![cnn1](/images/cnn1.png)

![cnn2 (2)](/images/cnn2%20(2).png)

![cnn3](/images/cnn3.png)

**分类猫和狗**

使用一个还不错的相机采集图片(12M)   

RGB figure 36M 元素  

使用100大小的单隐藏层MLP 模型有3.6B = 14GB 元素   

远多于世界上所有的猫狗总数(900M dog 600M cat)  

**两个原则**

平移不变性  

局部性  

**重新考察全连接层**  

将输入和输出变形为矩阵（宽度，高度）

将权重变形为4-D张量（h,w）到（h',w'）
$$
h_{i,j}=\sum_{k,l}w_{i,j,k,l}x_{k,l}=\sum_{a,b}=v_{i,j,a,b}x_{i+a,j+b}
$$
V是W的重新索引
$$
v_{i,j,a,b}=w_{i,j,i+a,j+b}
$$


**原则#1 - 平移不变性**

x的平移导致h的平移
$$
h_{i,j}=\sum_{a,b}v_{i,j,a,b}x_{i+a,j+b}
$$
v不应依赖于（i, j）  

解决方案：
$$
v_{i,j,a,b}=v_{a, b},
h_{i,j}=\sum_{a,b}v_{a,b}x_{i+a,j+b}
$$
这就是交叉相关  

**原则#2 - 局部性**

### 局部性


$$
\begin{aligned}
&为了收集用来训练参数[\mathbf{H}]_{i, j}的相关信息，\\
&我们不应偏离到距(i, j)很远的地方。\\
&这意味着在|a|> \Delta或|b| > \Delta的范围之外，\\
&我们可以设置[\mathbf{V}]_{a, b} = 0。\\
&因此，我们可以将[\mathbf{H}]_{i, j}重写为:\\
&[\mathbf{H}]*_{i, j} = u + \sum_*{a = -\Delta}^{\Delta} \sum*_{b = -\Delta}^{\Delta} [\mathbf{V}]_*{a, b} [\mathbf{X}]_{i+a, j+b}.
\end{aligned}
$$
当图像处理的局部区域很小时，卷积神经网络与多层感知机的训练差异可能是巨大的：以前，多层感知机可能需要数十亿个参数来表示网络中的一层，而现在卷积神经网络通常只需要几百个参数，而且不需要改变输入或隐藏表示的维数。

参数大幅减少的代价是，我们的特征现在是平移不变的，并且当确定每个隐藏活性值时，每一层只包含局部的信息。

以上所有的权重学习都将依赖于归纳偏置。当这种偏置与现实相符时，我们就能得到样本有效的模型，并且这些模型能很好地泛化到未知数据中。

但如果这偏置与现实不符时，比如当图像不满足平移不变时，我们的模型可能难以拟合我们的训练数据。

![cnn4](/images/cnn4.png)

![image-20220127104222384](/images/cnn5.png)

![cnn6](/images/cnn6.png)

![cnn7](/images/cnn7.png)

![cnn8](/images/cnn8.png)

![cnn9](/images/cnn9.png)

![image-20220127105601246](/images/image-20220127105601246.png)

## Sharing-Weight

![cnn11](/images/cnn11.png)

![image-20220127110147649](/images/image-20220127110147649.png)

![cnn12](/images/cnn12.png)

![cnn13](/images/cnn13.png)

![cnn14](/images/cnn14.png)

![cnn15](/images/cnn15.png)

![cnn16](/images/cnn16.png)

![cnn17](/images/cnn17.png)

![cnn18](/images/cnn18.png)

![cnn19](/images/cnn19.png)

## Pooling - Max Pooling

![cnn20](/images/cnn20.png)

![cnn20.1](/images/cnn20.1.png)

**Max-Pooling:选取最大的值 也可选取其他的采用 当然也可不做采用前提是性能足够**

![cnn21](/images/cnn21.png)

![cnn22](/images/cnn22.png)

![cnn23](/images/cnn23.png)

**但CNN无法直接对一个放大的图像做识别，需要data augmentation(对数据集进行旋转，放大，缩小，等操作)**

# YOLOv1

## Bounding-Box

将一张图片分割为有限个单元格(Cell,图中红色网格)   
![split-pic](/images/split-image.png)  
每一个输出和标签都是针对每一个单元格的物体中心(midpiont,图中蓝色圆点)
每一个单元格会有[X1, Y1, X2, Y2]
对应的物体中心会有一个[X, Y, W, H]  
![bb1](/images/bounding-box1.png)
X, Y 在[0, 1]内表示水平或垂直的距离  
W, H > 1 表示物体水平或垂直方向上高于该单元格 数值表示水平或垂直方向的单位长度的倍数  
[0.95, 0.55, 0.5, 1.5]=>显然图像靠近右下角 单元格不能表示出完整的物体  
![bb2](/images/bounding-box2.png)
根据 [X, Y, W, H] => [0.95, 0.55, 0.5, 1.5] 计算得到Bounding Box(图中蓝色网格)

![bbx3](/images/b-box-seq.png)

## Image-Label

$$
\begin{aligned}
&label_{cell}=[C_1,C_2,\cdots,C_{20},P_c,X,Y,W,H]\\
&[C_1,C_2,\cdots,C_{20}]:20\space different\space classes\\
&[P_c]:Probability\space for\space there\space is\space an\space object(0or1)\\
&[X,Y,W,H]:Bounding-Box\\
&pred_{cell}=[C_1,C_2,\cdots,C_{20},P_{c1},X_1,Y_1,W_1,H_1,P_{c2},X_2,Y_2,W_2,H_2]\\
&Taget\space shape\space for\space one \space images:(S, S, 25)\\
&Predication\space shape \space for\space one\space images:(S,S,30)\\
\end{aligned}
$$

## Model-Framework

![yolov1](/images/yolov1-modelfw.png)

