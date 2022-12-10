Data Structure Notes

> ```
> Author : "ebxeax"
> Version : 1.0
> Refresh Date 2020.11.26
> Description : 
> Just record and review some points about Data Structure.
> Have mistakes that please correct it yourself.
> ```

链式存储双链表

> 双链表宏定义
>
> > ```c++
> > typedef struct DNode{
> >  ElemType data;
> >  struct DNode *prior,*next;
> > }DNode,*DLinkList;
> > ```
> >
> > ```mermaid
> > graph LR
> > Node1-->Node2-->Node3-->more-->Noden
> > Noden-->more-->Node3-->Node2-->Node1
> >    ```
>
> 1.插入
>
> > ```c++
> > void insert(DLinkList &L,ElemType e,int i){
> >  	DNode*p,*s;
> > 	p=getElem(L,i-1);
> >  	s.data=e;
> >  	s->next=p->next;
> >  	p->next->prior=s;
> >  	s->prior=p;
> >  	p->next=s;
> > }
> > ```
> >
> > ```mermaid
> > graph LR
> >    Node1-->Node2-->|x|Node3-->Node4-->more-->Noden
> > Noden-->more-->Node4-->Node3-->|x|Node2-->Node1
> >    Node5
> >    s-->Node5
> >    p-->Node2
> >    Node5-->|new|Node2
> >    Node5-->|new|Node3
> > Node2-->|new|Node5
> > Node3-->|new|Node5
> >```
>
> 2.删除
>
> > ```c++
> > void del(DLinkList &L,int i){
> >     	DNode*p,*s;
> > 	s=getElem(L,i-1);
> >     	s->prior->next=s->next;
> >     	p=s->prior;
> >     	s->next->prior=s->prior;
> >     	free(s);
> > }
> > ```
> >
> > ```mermaid
> > graph LR
> > Node1-->Node2-->|x|Node3-->|x|Node4-->more-->Noden
> > Noden-->more-->Node4-->|x|Node3-->|x|Node2-->Node1
> > s-->|point to|Node3
> > Node4-->|new|Node2
> > Node2-->|new|Node4
> > ```
> >
> > 
>
> 

