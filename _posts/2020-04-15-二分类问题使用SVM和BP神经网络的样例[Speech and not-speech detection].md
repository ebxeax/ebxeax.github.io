> [二分类问题使用SVM和BP神经网络的样例【Speech and not-speech detection】 - ebxeax - 博客园 (cnblogs.com)](https://www.cnblogs.com/Carraway-Space/p/13520316.html)
>
> > >数据集采用浙大胡老师的编程作业为例
> > >
> > >Assignment 1: Speech and not-speech detection
> > >DDL：2017-10-17 Tue.
> > >（1）This assignment is carried out by group. You could choose your teammate freely. Each group consists of at most 3 students. 
> > >
> > >（2）The ‘training.data’ contains the training data. It is from our project to detect whether a person in a video speaks or not. The features are generated in the following way, which may help you making the most of these features.
> > >1、Get the mouth region M from the origin image based on facial landmark detection.
> > >2、Calculate dense optic flow between mouth region of last frame and the current frame and generate a score S that depicts the motion of mouth.
> > >3、Calculate the parameter V which depicts the degree of mouth opening.
> > >4、For frame i, we also calculate the S and V for its previous and next frames.
> > >5、Hence, we generate a 6 dimensional feature vector is X=[Si-1 Si Si+1 Vi-1 Vi Vi+1].
> > >6、The label is at the end of each line, where +1 represents speaking, and -1 represents not-speaking.
> > >
> > >In the training.data, the ratio of positive examples over negative examples is 1:1. Keep this in mind, for if you find your training error or validation error is larger than 50%, that means your solution learns nothing and performs worse than guessing.
> > >
> > >（4）You need to write a program to predict speaking or not speaking. 
> > >For convenience to evaluate your grogram, please use this name for your matlab main function: 
> > >speakingDetection.m
> > >Note about the interface in your function ‘speakingDetection.m’, it should be:
> > >function predY= speakingDetection (X)
> > >X: The input feature vectors, which is an N*6 matrix, where N is the number of feature vectors. 
> > >predY: The output vector to predict labels of X, which is a N*1 vector, and predY(i) = 1 or -1. 
> > >
> > >Besides MATLAB, you also use Python, as long as you hold the interface protocol above. Note we don’t recommend C/C++.
> > >
> > >（5）You can use ANY method to solve this problem.
>
> 问题分析
>
> > > 1. 数据解读：training.data数据为N*7的matrix矩阵，其中6维vector向量为输入特征 input feature
> > > 2. 数据预处理：将training.data读入，进行dataset的分割，分为6维向量input feature和1维向量label,分割前对数据集进行shuffle，分出测试集以及训练集
> > > 3. 模型选择：该问题为数据的分类，采用分类算法可以解决，本文以SVM和BP神经网络为样例
> > > 4. 建立相应模型求解问题
> > > 5. 调节参数，达到最优解

> BP神经网络代码
>
> ```matlab
> clc;
> clear;
> data=importdata('training.data');
> P=data(:,1:6);
> T=data(:,7);
> temp = randperm(size(data,1));
> % 训练集——5000个样本
> P_train = P(temp(1:5000),:)';
> T_train = T(temp(1:5000),:)';
> P_test = P(temp(end-50:end),:)';
> T_test = T(temp(end-50:end),:)';
> N=size(T_test,2);
> [pn,minp,maxp,tn,mint,maxt]=premnmx(P_train,T_train);
> [pn_,minp_,maxp_,tn_,mint_,maxt_]=premnmx(P_test,T_test);
> dx=[-1,1;-1,1;-1,1;-1,1;-1,1;-1,1];
> net=newff(dx,[6,10,1]);
> net.trainParam.goal = 0;
> net.trainParam.epochs = 30000;
> net.trainParam.lr = 0.03;
> net.trainParam.showWindow = 1;
> net = train(net,pn,tn);
> an = sim(net,pn_);
> a=postmnmx(an,mint_,maxt_);
> disp(['mse: ' num2str(mse(T_test-an))]);
> count=0;
> error=0;
> for i=1:N
>     if abs(a(i)-T_test(i))<0.2
>         count=count+1;
>     else
>         error=error+1;
>     end
> end
> accuracy=count/(count+error)
> figure
> plot(1:N,T_test,'b*',1:N,a,'ro')
> legend('真实值','预测值')
> xlabel('预测样本')
> ylabel('实值')
> ```
>
> 运行结果 accuracy：0.7059 mse: 1.0783
>
> ![img](https://files-cdn.cnblogs.com/files/Carraway-Space/Speech_and_notSpeech_detection.bmp)
>
> SVM代码[采用LIBSVM]
>
> ```matlab
> data=importdata('training.data');
> features=data(:,1:6);%特征列表
> classlabel=data(:,7);%对应类别
> n = randperm(size(features,1));%随机产生训练集和测试集
> %% 训练集--70个样本
> train_features=features(n(1:44000),:);
> train_label=classlabel(n(1:44000),:);
> %% 测试集--30个样本
> test_features=features(n(44000:end),:);
> test_label=classlabel(n(44000:end),:);
> %% 数据归一化
>  [Train_features,PS] = mapminmax(train_features');
>  Train_features = Train_features'; 
>  Test_features = mapminmax('apply',test_features',PS); 
>  Test_features = Test_features';
>  %% 创建/训练SVM模型
> model = svmtrain(train_label,Train_features,'-h 0');
> %% SVM仿真测试
> [predict_train_label] = svmpredict(train_label,Train_features,model);
> [predict_test_label] = svmpredict(test_label,Test_features,model);
> %% 打印准确率
> compare_train = (train_label == predict_train_label);
> accuracy_train = sum(compare_train)/size(train_label,1)*100; 
> fprintf('训练集准确率：%f\n',accuracy_train)
> compare_test = (test_label == predict_test_label);
> accuracy_test = sum(compare_test)/size(test_label,1)*100;
> fprintf('测试集准确率：%f\n',accuracy_test)
> ```
>
> 运行结果
>
> ```matlab
> .................*
> optimization finished, #iter = 17228
> nu = 0.658959
> obj = -28684.553581, rho = 4.599546
> nSV = 29001, nBSV = 28987
> Total nSV = 29001
> Accuracy = 71.7273% (31560/44000) (classification)
> Accuracy = 71.1948% (435/611) (classification)
> 训练集准确率：71.727273
> 测试集准确率：71.194763
> ```
>
> 结果分析
>
> 两种模型按照题目要求可以达到错误率低于50%的要求，相对而言，SVM在该问题上无论是性能还是效果都略高于BP神经网络算法，SVM更适用于小样本的分类问题
>
> 

> 文件下载：training.data
>
> https://files.cnblogs.com/files/Carraway-Space/training.zip
>
> 