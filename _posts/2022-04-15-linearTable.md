Data Structure Notes

> ```c++
> Author : "ebxeax"
> Version : 1.0
> Refresh Date 2020.11.26
> Description : 
> Just record and review some points about Data Structure.
> Have mistakes that please correct it yourself.
> ```

线性表

> 1.定义：线性表是具有相同数据类型的n个数据类型的有限序列，n为表长
>
> >线性表中第一个元素称为表头元素，最后一个元素称为表位元素
> >
> >除第一个元素外，每个元素仅有一个直接前驱，除最后一个元素外，每个元素有且仅有一个直接后继
> >
> >

顺序存储

>线性表的顺序存储又称顺序表
>
>使用一组地址连续的存储单元(数组等)依次存储线性表的数据元素，从而使得逻辑相邻的两个元素在物理位置上也相邻
>
>三个属性：
>
>> 1.存储空间的起始位置
>>
>> 2.顺序表最大存储容量
>>
>> 3.顺序表当前的长度
>
>宏定义
>
>>静态分配大小
>>
>>```c++
>>#define MaxSize 100
>>typedef int Elemtype
>>typedef struct{
>>    Elemtype elem[MaxSize];
>>    int length;
>>}SqList;
>>```
>>
>>动态分配大小(这里动态指空间大小运行时决定，但分配大小后，空间大小被固定)
>>
>>```c++
>>typedef int Elemtype
>>typedef struct{
>>    Elemtype *elem;
>>    int length;
>>}SqList;
>>```
>>
>>优点：访问效率高、存储密度高
>>
>>缺点：插入删除操作复杂
>
>顺序存储线性表操作
>
>>1.初始化顺序存储线性表
>>
>>>```c++
>>>int initLinklist(SqList &L){
>>>	L.elem=new Elemtype[MaxSize];
>>>    if(!L.elem)
>>>        exit(OVERFLOWS);
>>>    L.length=0;
>>>    return OK;
>>>}
>>>```
>>>
>>>（1）创建一个顺序存储表后，需要初始化，首先根据数组大小通过new在堆空间开辟一段连续的空间赋值于先前创建的顺序存储表的elem空间
>>>
>>>（2）检查elem是否存在，不存在溢出退出程序
>>>
>>>（3）将length元素赋值为0，即设置顺序存储线性表长度为0
>>
>>2.销毁顺序存储线性表
>>
>>>```c++
>>>void destroyList(SqList &L){
>>>    if(L.elem)
>>>        delete(L.elem);
>>>}
>>>```
>>>
>>>如果线性表存在，删除线性表elem开辟的空间
>>
>>3.清空顺序存储线性表
>>
>>>```c++
>>>void clearList(SqList &L){
>>>    L.length=0;
>>>}
>>>```
>>>
>>>将线性表的长度置为0
>>
>>4.判断顺序存储线性表是否为空
>>
>>>```c++
>>>bool isEmpty(SqList &L){
>>>    if(L.length==0)
>>>        return 1;
>>>    else
>>>        return 0;
>>>}
>>>```
>>>
>>>判断线性表长度是否为0，并返回相应bool值
>>
>>5.引用类型按下表获取顺序存储线性表元素
>>
>>> ```c++
>>> int getElem(SqList L,int i,type&e){
>>>     if(i<1||i>L.length)
>>>         return ERROR;
>>>     e=L.elem[i-1];
>>>     return OK;
>>> }
>>> ```
>>>
>>> （1）先检查传递参数下标量是否正确
>>>
>>> （2）通过访问elem内数据存入引用类型变量内
>>
>>6.按下表获取顺序存储线性表元素
>>
>>> ```c++
>>> Elemtype getElem(SqList L,int i){
>>> 	if(i<1||i>L.length)
>>>         return ERROR;
>>>     return L.elem[i-1];
>>> }
>>> ```
>>>
>>> （1）先检查传递参数下标量是否正确
>>>
>>> （2）通过访问elem内数据并返回
>>
>>7.引用类型按值查询顺序存储线性表元素下标
>>
>>> ```c++
>>> int locateElem(SqList L,Elemtype e,int &i){
>>> 	for(int i=0;i<L.length;i++)
>>>         if(L.elem[i]==e)
>>>             return OK;
>>> }
>>> ```
>>>
>>> 按照elem开辟空间进行迭代，当迭代元素与目标元素值相等时，将迭代量赋值于引用类型下标变量
>>
>>8.按值获取顺序存储线性表元素下标
>>
>>> ```c++
>>> int locateElem(SqList L,Elemtype e){
>>>     for(int i=0;i<L.length;i++)
>>>         if(L.elem[i]==e)
>>>             return i;
>>> }
>>> ```
>>>
>>> 按照elem开辟空间进行迭代，当迭代元素与目标元素值相等时，将迭代量返回
>>
>>9.按下标插入元素
>>
>>> ```c++
>>> int listInsert(SqList &L,type e,int i){
>>>     if(i<1||i>L.length)
>>>         return ERROR;
>>>     ++L.length;
>>>     for(int j=L.length-1;j>=i-1;j--)
>>>         L.elem[j+1]=L.elem[j];
>>>     L.elem[i-1]=e;
>>>     return OK;
>>> }
>>> ```
>>>
>>> （1）先检查传递参数下标量是否正确
>>>
>>> （2）增加线性表长度
>>>
>>> （3）按照目标元素位置，将其尾部元素后移1偏移量
>>>
>>> （4）将目标元素存入下标位置
>>>
>>> __时间复杂度分析:__
>>>
>>> > （1）
>>> > $$
>>> > 最好情况：在表尾插入(即i=n+1)
>>> > $$
>>> >
>>> > $$
>>> > 元素后移语句执行的时间复杂度为O(1)
>>> > $$
>>> >
>>> > （2）
>>> > $$
>>> > 最坏情况：在表头插入(即i=1)
>>> > $$
>>> >
>>> > $$
>>> > 元素后移语句执行n次，时间复杂度为O(n)
>>> > $$
>>> >
>>> > （3）
>>> > $$
>>> > 平均情况：假设p_i(p_i=1/(n+1))
>>> > $$
>>> >
>>> > $$
>>> > 是第i个位置上插入一个结点的概率
>>> > $$
>>> >
>>> > $$
>>> > 则在长度为n的线性表中插入一个节点是需要移动结点的平均次数为
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > f = \sum_{i=1}^{n+1}p_i(n-i-1)
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > =\sum_{i=1}^{n+1}{\frac{n+1}{n-i+1}}
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > =\frac{1}{n+1} \sum_{i=1}^{n+1}(n-i-1)
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > =\frac{1}{n+1}\frac{n(n+2)}{2}=\frac{n}{2}
>>> > $$
>>> >
>>> > $$
>>> > 因此顺序存储线性表的插入算法平均时间复杂度为O(n)
>>> > $$
>>> >
>>> > 
>>
>>10.按下标删除元素
>>
>>> ```c++
>>> int listDelete(SqList &L, int i) {
>>> 	if ((i < 1) || (i > L.length))
>>> 		return ERROR;
>>> 	for (int j = i; i <= L.length - 1; j++) {
>>> 		L.elem[j - 1] = L.elem[j];
>>> 		--L.length;
>>> 	}
>>> 	return OK;
>>> }
>>> ```
>>>
>>> （1）先检查传递参数下标量是否正确
>>>
>>> （2）按照目标元素位置，将其头部元素前移1偏移量
>>>
>>> （3）减少线性表长度
>>>
>>> __时间复杂度分析:__
>>>
>>> > （1）
>>> > $$
>>> > 最好情况：在表尾插入(即i=n)
>>> > $$
>>> >
>>> > $$
>>> > 无需移动元素，时间复杂度为O(1)
>>> > $$
>>> >
>>> > （2）
>>> > $$
>>> > 最坏情况：在表头插入(即i=1)
>>> > $$
>>> >
>>> > $$
>>> > 需移动除第一个元素外的所有元素，时间复杂度为O(n)
>>> > $$
>>> >
>>> > （3）
>>> > $$
>>> > 平均情况：假设p_i(p_i=1/(n+1))
>>> > $$
>>> >
>>> > $$
>>> > 是第i个位置上插入一个结点的概率
>>> > $$
>>> >
>>> > $$
>>> > 则在长度为n的线性表中插入一个节点是需要移动结点的平均次数为
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > f = \sum_{i=1}^{n}p_i(n-i)
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > =\sum_{i=1}^{n}{\frac{n}{n-i}}
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > \begin{equation*}
>>> > 
>>> > =\frac{1}{n} \sum_{i=1}^{n}(n-i)
>>> > 
>>> > \end{equation*}
>>> > $$
>>> >
>>> > $$
>>> > =\frac{1}{n}\frac{n(n-1)}{2}=\frac{n-1}{2}
>>> > $$
>>> >
>>> > $$
>>> > 因此顺序存储线性表的插入算法平均时间复杂度为O(n)
>>> > $$
>>> >
>>> > 
>>
>>11.创建顺序存储线性表
>>
>>> ```c++
>>> int createList(SqList &L, int n) {
>>> 	type e;
>>> 	L.length = n;
>>> 	for (int i = 0; i < n; i++) {
>>> 		cout << "Please in put an element:";
>>> 		cin >> e;
>>> 		L.elem[i] = e;
>>> 	}
>>> 	return OK;
>>> }
>>> ```
>>
>>11.打印顺序存储线性表内元素
>>
>>> ```c++
>>> void printList(SqList L) {
>>> 	printf("\nList's element：\n");
>>> 	for (int i = 0; i < L.length; i++) {
>>> 		cout << "elem[" << i << "] =" << L.elem[i] << endl;
>>> 	}
>>> }
>>> ```
>>>
>>> 

