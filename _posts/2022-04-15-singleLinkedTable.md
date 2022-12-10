Data Structure Notes

> ```c++
> Author : "ebxeax"
> Version : 1.0
> Refresh Date 2020.11.26
> Description : 
> Just record and review some points about Data Structure.
> Have mistakes that please correct it yourself.
> ```

链式存储线性表

>通过一组任意的存储单元来储存线性表的数据元素
>
>为了建立数据元素之间的线性关系，对每个链表结点，除了存放元素信息外，还需要存放一个指向后继的指针
>
>![](https://files.cnblogs.com/files/Carraway-Space/Link_zh.bmp)
>
>
>链式存储的宏定义
>
>> ```c++
>> struct LNode {
>> 	ElemType data;
>> 	LNode* next;
>> 	LNode() {
>> 		data = 0;
>> 		next = nullptr;
>> 	}
>> };
>> typedef LNode* LinkList;
>> ```
>>
>> 单链表的第一个结点之前附加一个结点，称为头结点。头结点不存放任何信息，也可以记录表长等相关信息。头结点的指针域指向线性表的第一个元素结点
>>
>> 头结点和头指针的区别：
>>
>> > 不管带不带头结点，头指针始终指向链表的第一个结点，而 头结点是带头结点链表中的第一个结点，结点内通常不存储信息
>>
>> 为什么要设置头结点？
>>
>> > 处理操作起来方便 例如：对在第一元素结点前插入结点和删除第一结点起操作与其它结 点的操作就统一了
>>
>> > 无论链表是否为空，其头指针是指向头结点的非空指针，因此空表和非空表的处理也就 统一了。
>
>单链表的操作
>
>> 1.初始化单链表
>>
>> ```c++
>> int initLinkList(LinkList &L){
>>  L=new LNode;
>>  if(!L){
>>      exit(OVERFLOWS);
>>  }
>>  L->next=NULL;
>> }
>> ```
>>
>> 2.销毁单链表
>>
>> ```c++
>> int destroyLinkList(LinkList &L){
>> 	LinkList p;
>> 	while(L){
>>  	p=L;
>>  	L=L->next;
>>  	delete p;
>> 		}
>> 	return OK;
>> }
>> ```
>>
>> 3.清空单链表
>>
>> ```c++
>> int clearLinkList(LinkList &L){
>>  LinkList p,q;
>>  p=L->next;
>>  while(p){
>>      q=p->next;
>>      delete p;
>>      p=q;
>>  }
>>  L->next=NULL;
>>  return OK;
>> }
>> ```
>>
>> 4.获得单链表长度
>>
>> ```c++
>> int getLinkListLength(LinkList &L){
>>  LinkList p;
>>  p=L->next;
>>  int i=0;
>>  while(p){
>>      i++;
>>      p=p->next;
>>  }
>>  return i;
>> }
>> ```
>>
>> 5.判断单链表是否为空
>>
>> ```c++
>> bool isLinkListEmpty(LinkList &L){
>> 	if(L->next)
>>      return false;
>>  else
>>      return true;
>> }
>> ```
>>
>> 6.从头部创建单链表
>>
>> ```c++
>> void createLinkList2Title(LinkList &L,int n){
>>  L=new LNode;
>>  if(!L)
>>      exit(OVERFLOWS);
>>  L->next=NULL;
>>  for(int i=n;i>0;i--){
>>      LNode *p=new LNode;
>>      if(!p)
>>          exit(OVERFLOWS);
>>      cout<<"Please input elem's data: \n";
>>      cin>>p->data;
>>      p->next=L->next;
>>      L->next=p;
>>      
>>  }
>> ```
>>
>> 7.从头部创建单链表
>>
>> ```c++
>> void crevoid createLinklist2Tail(LinkList& L, int n)
>> {   //正位序输入n个元素的值，建立带表头结点的单链表L 
>> 	L = new LNode;
>> 	if (!L) exit(OVERFLOWS);       //存储分配失败
>> 	L->next = NULL;
>> 	LNode* r = L;//尾指针r指向头结点 
>> 	for (int i = 0; i < n; i++) {
>> 		LNode* p = new LNode;//生成新结点 
>> 		if (!p) exit(OVERFLOWS);       //存储分配失败
>> 		cout << "请输入元素的值:";
>> 		cin >> p->data;   		//输入元素值 
>> 		p->next = NULL;
>> 		r->next = p; 	    	//插入到表尾 
>> 		r = p; 	//r指向新的尾结点 
>> 	}
>> }ateLinkList2Tail(LinkList &L,int n){
>>  
>> }
>> ```
>>
>> 8.输出单链表全部元素
>>
>> ```c++
>> int linklistAll(LinkList p, int len){
>> 	if (p == NULL)
>> 		return ERROR;
>> 	p = p->next;
>> 	for (int i = 0; i <len; i++) {
>> 		cout << p->data << "\n";
>> 		p = p->next;
>> 	}
>> 	return OK;
>> }
>> ```
>>
>> 9.排序
>>
>> ```c++
>> void swap(ElemType& a, ElemType& b) {
>> 	ElemType temp;
>> 	temp = a;
>> 	a = b;
>> 	b = temp;
>> }
>> 
>> void sorted(LinkList &L,int len) {
>> 	//ElemType temp;
>> 	int i;
>> 	LNode* r = L;
>> 	LNode* p = r->next;
>> 	for (i = 0; i < len; i++) {
>> 		if (r->data > p->data)
>> 			swap(r->data, p->data);
>> 		r = r->next;
>> 		p = p->next;
>> 	}
>> 
>> }
>> ```
>>
>> 10.按序号查找结点
>>
>> ```c++
>> LNode *GetElem(LinkList L,int i){
>>     int j=1;
>>     LNode*p=L->next;
>>     if(i==0)return L;
>>     if(i<1)return NULL;
>>     while(p&&j<i){
>>         p=p->next;
>>         j++;
>>     }
>>     return p;
>> }
>>     
>> ```
>>
>> 11.按值查找结点
>>
>> ```c++
>> LNode *locateElem(LinkList L,ElemType e){
>>     LNode *p=L->next;
>>     while(p!=NULL&&p->data!=e)
>>         p=p->next;
>>     return p;
>> }
>> ```
>>
>> 12.插入元素
>>
>> ```c++
>> void insert(LinkList &L,ElemType e){
>>     LNode*p=L->next;
>>     LNode*s=p->next; 
>>     p=GetElem(L,i-1);
>>     s->next=p->next;
>>     p->next=s;        
>> }
>> ```
>>
>> 13.删除元素
>>
>> ```c++
>> void insert(LinkList &L,ElemType e){
>>     LNode*p=L->next;
>>     LNode*q=p->next; 
>>     p=GetElem(L,i-1);
>>     p->next=q->next;
>>     free(q);      
>> }
>> ```
>>
>> 
>
>附录：
>
>完整程序：
>
>> ```c++
>> #include <stdio.h> // EOF(=^Z或F6),NULL
>> #include <stdlib.h> // srand( ) ,rand( ),exit(n)
>> #include <malloc.h> // malloc( ),alloc( ),realloc( )等
>> #include <limits.h> // INT_MAX等
>> #include <string.h>
>> #include <ctype.h>
>> #include <math.h> // floor(),ceil( ),abs( )
>> #include <iostream> // cout,cin
>> #include <time.h> // clock( ),CLK_TCK,clock_t
>> #define    TRUE          1
>> #define     FALSE        0
>> #define     OK              1
>> #define     ERROR      0
>> #define     INFEASIBLE     -1
>> #define     OVERFLOWS     -2
>> typedef      int         Status;      // Status是函数的类型,其值是函数结果状态代码，如OK等
>> typedef      int   ElemType;
>> #define  MAXSIZE 100     //最大长度
>> #define LIST_INIT_SIZE 100 // 线性表存储空间的初始分配量
>> using namespace std;
>> 
>> 
>> 
>> struct LNode {
>> 	ElemType data;
>> 	LNode* next;
>> 	LNode() {
>> 		data = 0;
>> 		next = nullptr;
>> 	}
>> };
>> typedef LNode* LinkList;
>> // *LinkList为LNode类型的指针
>> 
>> int initLinklist(LinkList& L) {
>> 	L = new LNode;
>> 	if (!L) {
>> 		exit(OVERFLOWS);
>> 	}
>> 	L->next = NULL;
>> 	return OK;
>> }
>> 
>> int destroyLinklist(LinkList& L) {
>> 	LinkList p;
>> 	while (L) {
>> 		p = L;
>> 		L = L->next;
>> 		delete p;
>> 	}
>> 	return OK;
>> }
>> 
>> int clearLinklist(LinkList& L) {
>> 	LinkList p, q;
>> 	p = L->next;
>> 	while (p) {
>> 		q = p->next;
>> 		delete p;
>> 		p = q;
>> 	}
>> 	L->next = NULL;
>> 	return OK;
>> }
>> 
>> int linklistLength(LinkList& L) {
>> 	LinkList p;
>> 	p = L->next;
>> 	int i = 0;
>> 	while (p) {
>> 		i++;
>> 		p = p->next;
>> 	}
>> 	return i;
>> }
>> 
>> bool isLinklistEmpty(LinkList& L) {
>> 	if (L->next)
>> 		return false;
>> 	else
>> 		return true;
>> }
>> 
>> void createLinklist2Title(LinkList& L, int n) {
>> 	L = new LNode;
>> 	if (!L)
>> 		exit(OVERFLOWS);
>> 	L->next = NULL;
>> 	for (int i = n; i > 0; i--) {
>> 		LNode* p = new LNode;
>> 		if (!p)
>> 			exit(OVERFLOWS);
>> 		cout << "请输入元素的值:";
>> 		cin >> p->data;
>> 		p->next = L->next;
>> 		L->next = p;
>> 	}
>> }
>> 
>> void createLinklist2Tail(LinkList& L, int n)
>> {   //正位序输入n个元素的值，建立带表头结点的单链表L 
>> 	L = new LNode;
>> 	if (!L) exit(OVERFLOWS);       //存储分配失败
>> 	L->next = NULL;
>> 	LNode* r = L;//尾指针r指向头结点 
>> 	for (int i = 0; i < n; i++) {
>> 		LNode* p = new LNode;//生成新结点 
>> 		if (!p) exit(OVERFLOWS);       //存储分配失败
>> 		cout << "请输入元素的值:";
>> 		cin >> p->data;   		//输入元素值 
>> 		p->next = NULL;
>> 		r->next = p; 	    	//插入到表尾 
>> 		r = p; 	//r指向新的尾结点 
>> 	}
>> }
>> 
>> int linklistAll(LinkList p, int len){
>> 	if (p == NULL)
>> 		return ERROR;
>> 	p = p->next;
>> 	for (int i = 0; i <len; i++) {
>> 		cout << p->data << "\n";
>> 		p = p->next;
>> 	}
>> 	return OK;
>> }
>> 
>> void swap(ElemType& a, ElemType& b) {
>> 	ElemType temp;
>> 	temp = a;
>> 	a = b;
>> 	b = temp;
>> }
>> 
>> void sorted(LinkList &L,int len) {
>> 	//ElemType temp;
>> 	int i;
>> 	LNode* r = L;
>> 	LNode* p = r->next;
>> 	for (i = 0; i < len; i++) {
>> 		if (r->data > p->data)
>> 			swap(r->data, p->data);
>> 		r = r->next;
>> 		p = p->next;
>> 	}
>> 
>> }
>> 
>> int main() {
>> 	LinkList p;
>> 	initLinklist(p);
>> 	int n;
>> 	cout << "请输入单链表的长度 : ";
>> 	cin >> n;
>> 	createLinklist2Tail(p, n);
>> 	int len=linklistLength(p);
>> 	linklistAll(p, len);
>> 	printf("After Sorted func:\n");
>> 	sorted(p, len);
>> 	linklistAll(p, len);
>> 	return 0;
>> }
>> ```
>>
>> 
>
>

