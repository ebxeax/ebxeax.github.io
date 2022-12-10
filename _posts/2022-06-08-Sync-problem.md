**经典同步问题**

*1.生产者消费者问题*

- 一组生产者进程(Producer)

- 一组消费者进程(Consumer)

- 共享初始为空 大小为n的缓冲区(Buffer)

```
semaphore mutex = 1;  //mutex
semaphore empty = n;  //buffer
semaphore full = 0;   //full

Producer(){
	while(1){
		Produce();
		P(mutex);
		add2Buffer();
		V(mutex);
		V(full);
	}
}

Consumer(){
	while(1){
		P(full);
		P(mutex);
		getFromBuffer();
		V(mutex);
		Consume();
	}
}
```

*2.读者写者问题*

- 读者进程(Reader)
- 写者进程(Writer)
- 共享一个文档(Document)
- 多进程读，不可多进程写
- 写进程写，不可读
- 写进程检查是否有读进程读

**读进程优先**

```  
int count = 0;
semaphore mutex = 1;
semaphore rw = 1;
Reader(){
	while(1){
		P(mutex);
		if(count == 0)
			P(rw);
		count++;
		V(mutex);
		Read();
		P(mutex);
		count--;
		if(count == 0)
			V(rw);
		V(mutex);
	}
}
Writer(){
	while(1){
		P(rw);
		write();
		v(rw);
	}
}
```

**写进程优先**

``` 
int count = 0;
semaphore mutex = 1;
semaphore rw = 1;
semaphore w = 1;
Writer(){
	while(1){
		P(w);
		P(rw);
		Write();
		V(rw);
		V(w);
	}
}
Reader(){
	while(1){
		P(w);
		P(mutex);
		if(count == 0)
			P(rw);
		count++;
		V(mutex);
		V(w);
		Read();
		P(mutex);
		count--;
		if(count == 0)
			V(rw);
		V(mutex);
	}
}
```

*3.哲学家进餐问题*

- 5名哲学家(Philosopher)
- 每两名之间有一根筷子(Chopstick)
- 每名有一碗饭
- 吃完饭思考

``` 
semaphore Chopsticks[5] = {1, 1, 1, 1, 1};
semaphore mutex = 1;
Philosopher(){
	do{
		P(mutex);
		P(Chopsticks[i]);
		P(Chopsticks[(i+1)%5]);
		V(mutex);
		eat();
		V(Chopsticks[i]);
		V(Chopsticks[(i+1)%5]);
		think();
	}
}
```

**4.吸烟者问题**

- 3个吸烟者进程(Smoker)
- 1个提供者进程(Offer)
- Smoker1(paper, glue)
- Smoker2(tobacco, glue)
- Smoker3(paper, tobacco)
- Offer(offer1) return paper, glue
- Offer(offer2) return tobacco, glue
- Offer(offer3) return paper, tobacco

```
int num = 0;	//store random num
semaphore offer1 = 0;
semaphore offer2 = 0;
semaphore offer3 = 0;
semaphore end = 0;
Offer(){
	whlie(1){
		num++;
		num = num % 3;
		if(num == 0)
			V(offer1);
		else if(num == 1)
			V(offer2);
		else
			V(offer3);
		P(end);
	}
}
Smoker1(){
	while(1){
		P(offer3);
		smoke();
		V(end);
	}
}
Smoker2(){
	while(1){
		P(offer2);
		smoke();
		V(end);
	}
}
Smoker3(){
	while(1){
		P(offer1);
		smoke();
		V(end);
	}
}
```

*eg1*

- 3个进程P1 P2 P3
- 互斥使用N个单元的缓冲区(Buffer)
- P1 produce() return (int num) put() @Buffer
- P2 