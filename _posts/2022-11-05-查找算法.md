# 查找
## 1.顺序查找
### 一般表
（1）代码
```c++
typedef struct{
    ElemType *elem;
    int tableLen;
}SSTable;

int searchSeq(SSTable ST, ElemType key){
    ST.elem[e] = key;   //设置哨兵
    for(int i = 0; i<ST.tableLen; i++)
        return i;   //存在返回, 不存在返回1
}
```
（2）设置哨兵：可以不必判断是否越界，注意数据下表从1开始
（3）ASL
$$
如果不能知道查找概率，可先对记录的查找概率进行排序，是表中的记录按查找概率从小到大\\
ASL_{success} = \sum_{i=1}^{n} P_i(n-i+1) = \frac{n+1}{2}\\
ASL_{unsuccess} = n+1\\
$$
（4）优缺点
优点：对数据的存储无要求，顺序存储或者链式存储皆可
缺点：当n较大，平均查找长度较大，效率低

### 有序表

```mermaid
graph LR
id1((10))-->id2((20))
id1((10)).->-infinity,10
id2((20))-->id3((30))
id2((20)).->-infinity,20
id3((30))-->id4((40))
id3((30)).->-infinity,30
id4((40))-->id5((50))
id4((40)).->-infinity,40
id5((50))-->id6((60))
id5((50)).->-infinity,50
id6((60))-->60,=
id6((60)).->-infinity,60
```
（1）一旦查到某个元素大于该元素便停止查找
（2）方框是虚构的节点，查找长度=方框上的圆环
（3)ASL
$$
ASL_{success} = \sum_{i=1}^{n} P_i(n-i+1) = \frac{n+1}{2}\\
ASL_{unsuccess} = \sum_{j=1}^{n} Q_j(l_j-1) =  \frac{1+2+...+n+n}{n+1} = \frac{n}{2} +  \frac{n}{n+1}\\
$$

### 折半查找（二分查找）
```mermaid
graph LR
id29((29))-->id37((37))-->id41((41))-->id43((43))
id43((43))-->43,+infinity
id43((43))-->37,43
id37((37))-->id32((32))-->id33((33))
id32((32))-->29,32
id33((33))-->33,37
id33((33))-->32,33
id13((13))-->id16((16))-->id19((19))-->19,29
id19((19))-->16,19
id29((29))-->id13((13))-->id7((7))-->id10((10))-->10,13
id10((10))-->7,10
id7((7))-->-infinity,7
```
（1）仅适用于顺序表
（2）代码
```c++
int binarySearch(SeqList L, ElemType key){
    int low, high, mid = 0, L.tableLen, 0;
    while(low <= high){
        mid = (low + high) / 2;
        if(L.elem[mid] == key)
            return mid;
        else if(L.elem[mid] > key)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}
```
（3）ASL
$$
ASL = \frac{1}{n}\sum_{i=1}^{n} l_i = \frac{1}{n}(1*1+2*2+...+h*2^{h-1}) = \frac{n+1}{n} log_2(n+1)-1 = log_2(n+1)-1\\
h=[log_2(n+1)]（向上取整）
$$
#### 查找11
##### low=7, high=43, mid=29
##### 11<29
```mermaid
graph 
7-->low
10
13
16
19
29-->mid
32
33
37
41
43-->high

```
##### low=7, high=mid-1=19, mid=13
##### 11<13
```mermaid
graph 
7-->low
10
13-->mid
16
19-->high
29
32
33
37
41
43

```

##### low=7, high=mid-1=7, mid=10
##### 11>7
```mermaid
graph 
7-->low-->mid
10-->high
13
16
19
29
32
33
37
41
43

```
##### low=mid+1=10, high=10, mid=10
##### 10>10 ×
```mermaid
graph 
7
10-->low-->mid-->high
13
16
19
29
32
33
37
41
43

```
##### 没找到，停在low
### 分块查找
（1）将查找表分为若干子块，块内可以无序，但块之间有序的

```mermaid
graph 
id24((24))-->id((索引块24,54,78,88))
id21((21))
id6((6))
id11((11))
id8((8))
id22((22))
id32((32))-->id((索引块24,54,78,88))
id31((31))
id54((54))
id72((72))-->id((索引块24,54,78,88))
id61((61))
id78((78))
id88((88))-->id((索引块24,54,78,88))
id83((83))

```
（2）ASL
$$
n:长度\\
b:分块个数\\
s:每块s个记录\\
P:等概率\\
ASL = L_I+L_S = \frac{b+1}{2}+\frac{s+1}{2}=\frac{s^2+2s+n}{2s}\\
s=\sqrt{n},ASL=\sqrt{n}+1\\
采用折半查找：ASL=L_I+L_S=[log_2(b+1)]+\frac{s+1}{2}（向上取整）
$$

###B树（多路平衡查找树）
$$
m阶B树或空树\\
每棵子树至多m棵子树，最多包含m-1个关键字\\
若根节点不是终端节点，至少两棵子树\\
除根结点外所有非叶节点至少[\frac{m}{2}]（向上取整）棵子树（关键字）\\
$$

```mermaid
graph 
id[22]-->id0[5,11]
id[22]-->id1[36,45]
id0[5,11]-->id00[1,3]
id0[5,11]-->id01[6,8,9]
id0[5,11]-->id02[13,15]
id1[36,45]-->id10[30,35]
id1[36,45]-->id11[40,42]
id1[36,45]-->id12[47,48,50,56]
```