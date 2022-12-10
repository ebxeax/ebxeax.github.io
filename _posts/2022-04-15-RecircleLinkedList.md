Data Structure Notes

> ```c++
> Author : "ebxeax"
> Version : 1.0
> Refresh Date 2020.11.26
> Description : 
> Just record and review some points about Data Structure.
> Have mistakes that please correct it yourself.
> ```

链式存储循环单链表

> 区别：循环链表最后一个结点的指针不是NULL，而是指向头结点，从而形成一个闭环
>
> 单链表：
>
> ```mermaid
> graph LR
> Head-->a1-->a2-->a3-->a....->an-->NULL
> ```
>
> 循环链表：
>
> ```mermaid
> graph LR
> Head-->a1-->a2-->a3-->a....->an
> an-->Head
> ```
>
> > 判空条件：
> >
> > > 循环单链表的判空条件不是头结点的后继指针是否为空，而是它是否等于头指针

链式存储循环单链表

> 循环双链表：类比循环单链表，循环双链表链表区别于双链表就是首尾结点构成环
>
> ```mermaid
> graph LR
> Head-->a1-->a2-->a3-->a....->an-->Head
> an-->a....->a3-->a2-->a1-->Head-->an
> 
> ```
>
> > 判空条件：
> >
> > > 当循环双链表为空表时，其头结点的prior域和next域都等于Head

