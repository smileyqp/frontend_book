

## 5.30

#### 32、MVC、MVVM、MVP

##### MVC

- M：model代表数据模型，主要任务是操作数据。将新的数据发送到view改变视图
- V：view代表的是视图，主要任务是将数据模型转化成UI视图。传送指令到controller
- C：controller控制器，主要任务是负责处理业务逻辑。完成业务逻辑之后要求model改变状态

![](https://img-blog.csdnimg.cn/20210531103754930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 33、函数防抖与节流

解决性能问题，可降低函数调用频率。事件频繁触发的时候，比如`window.resize`以及`window.onmousemove`等等，触发频率十分高，会造成浏览器性能问题。以及输入框搜索的时候会实时去后台请求数据，对服务器造成不必要的压力。

![](https://img-blog.csdnimg.cn/20210531141025372.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 函数节流（间隔一定时间执行一次）

```shell
function throttle(fn,delay=500){
	let pre = 0;
  return function(event){
  	const cur = Date.now();
    if(cur - pre > delay){					//只有与上次调用的时间差大于delay
      fn.call(this,event)
      pre = cur;
    }
  }
}
```

##### 函数防抖（一定时间内，只触发最后一次）

```shell
function debounce(fn,delay = 500){
  let timer = null;
  return function(e){
    if(timer){clear(timer)}
    timer = setTimeout(()=>{		//这里需要用箭头函数；因为需要改变this指向
      fn.call(this,e)
    },delay)
    timer = null;
  }
}
```

> 补充：高阶函数：1、参数是函数 2、返回值是函数。满足其中之一的就是高阶函数。

## 6.1

#### 34、数组声明式系列方法的使用

##### (1)产生一个每个元素都比原来大10的新数组map

```shell
function addTen(arr){
  return arr.map((item,index)=>{
    return item+10;
  })
}
```

##### (2)得到数组中所有奇数的和reduce

```shell
function getAdd(arr){
  arr.reduce((pretotal,item,index)=>{
    return item%2 === 1 ? pretotal+item:pretotal;
  },0)
}
```

##### (3)得到值大于8且为偶数的filter

```shell
function filterArr(arr){
  return arr.filter((item,index)=>{
    return item>8&&item%2===0;
  })
}
```

##### (4)找出一个值大于8且下标是偶数的元素find

```shell
function getArr(arr){
  return arr.find((item,index)=>{
    return item>8&&index%2===0;
  })
}
```

##### (5)找出一个值大于8且下标是偶数的元素的下标findIndex

```shell
function getArrindex(arr){
  return arr.findIndex((item,index)=>{
    return item>8&&index%2===0;
  })
}
```

##### (6)判断下标为偶数的元素是否都是奇数every

```shell
funcrion getConfirm(arr){
  return arr.every((item,index)=>{
    //下标为奇数或者下标为偶数值都是奇数的元素
    return index%2 === 1 || (index%2 === 0 && item % 2 === 1)	
  })
}
```

##### (7)是否有下标为偶数的元素值为奇数some

```shell
funcrion getConfirm(arr){
  return arr.some((item,index)=>{
    //下标为奇数或者下标为偶数值都是奇数的元素
    return index%2 === 1 || (index%2 === 0 && item % 2 === 1)	
  })
}
```

##### 自定义数组声明式方法

- map

```shell
Array.prototype.map = function(callback){
  const arr = [];
  //遍历当前数组，调用callback得到一个结果数据，添加到arr
  for(let i = 0;i < this.length;i++){			//this就是原数组
    const element = this[i];
    arr.push(callback(element,i))
  }
  return arr;
}
```

- reduce

```shell
Array.prototype.redece = function(callback,initialVal){
	 let result = initialVal;
   for(let i = 0;i < this.length;i++){
   		//recude三个参数，上一次的累加结果，value，index;上一次累加结果由callback决定
			result = callback(result,this[i],i)	
   }
   return result;
}
```

- filter

```shell
//调用callback得到一个boolean值，如果为true那么就将值push到结果中去
Array.prototype.filter = function(callback){
   const result = [];
   for(let i = 0;i < this.length;i++){
      if(callback(this[i],i)){
        result.push(this[i]);
      }
   }
   return result;
}
```

- find

```shell
//遍历当前数组，调用callback，返回boolean值，如果为true那么就返回这个值
Array.prototype.find = function(callback){
  for(let i = 0;i < this.length;i++){
  	const element = callback(this[i],i)
  	const result = this[i];
    if(element){
      return result;
    }
  }
  return undefined;	//没有匹配的返回undefined
}
```

- findIndex

```shell
//遍历当前数组，调用callback，返回boolean值，如果为true那么就返回这个值
Array.prototype.findIndex = function(callback){
  for(let i = 0;i < this.length;i++){
    if(callback(this[i],i)){
      return i;
    }
  }
  return -1;	//没有匹配的返回undefined
}
```

- every

```shell
//遍历，一点callback返回false，那么返回false，都不为false，返回true
Array.prototype.every = function(){
	let result = true;
  for(let i = 0;i < this.length;i++){
    if(!callback(this[i],i)){
      result = false
    }
  }
  return result;
}
```

- some

```shell
//一旦callback为true返回true否则返回false
Array.prototype.some = function(){
  let result = false;
  for(let i = 0;i < this.length;i++){
    if(callback(this[i],i)){
      result = true
    }
  }
  return result;
}
```

#### 35、算法基础

![](https://img-blog.csdnimg.cn/20210601145630299.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210601145716171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210601151310919.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



##### 数组

![](https://img-blog.csdnimg.cn/20210601163819826.png)

数组相关声明式方法都是高阶函数，都没有改变原数组

- 数组静态方法
  - from
  - of
  - isArray

```shell
//from	从一个类数组，或者可迭代对象创建一个新的，浅拷贝的数组实例
const set = new Set(['foo','smile','yqp'])
console.log(Array.from(set))		//['foo','smile','yqp']

//of	创建一个可变数量参数的数组实例，所有参数列表作为元素，创建一个新数组
console.log(Array.of(3))		//[3]
console.log(Array.of(3,5,7,8))		//[3,5,7,8]

//isArray	判断是否是数组
console.log(Array.isArray([1,2,3]))	//true
console.log(Array.isArray({1,2,3,4}))		//false
```

- 数组更新的方法
  - push
  - pop
  - unshift
  - shift
  - sort
  - reverse
  - splice

```shell
const arr = [1,2,4,7,9,3]

//push	
//1、数组最后添加6
arr.push(6)		//[1,2,4,7,9,3,6]
//2、数组最后一次添加8和9
arr.push(8,8)		// [1,2,4,7,9,3,8,9]
//2、数组最后添加包含8和9的数组
arr.push([8,9])		// [1,2,4,7,9,3,[8,9]]

//pop	删除数组最后一个元素
arr.pop()		//9 pop方法返回的是删除的最后一个元素的值  原数组变成[1,2,4,7,9]

//unshift  
//1、在数组最前面添加2
arr.unshift(2)		//[2,1,2,4,7,9,3]
//2、在数组最前面添加4和3
arr.unshift(4,3)		//[4,3,1,2,4,7,9,3]

//shift 删除数组的第一个元素
arr.shift()		//1 返回被删元素值	原数组变成[2,4,7,9,3]

//sort 数组降序排列;sort的回调函数返回值为数值，分为dayu0，等于0，小于0；大于0item2放在左边
arr.sort((item1,item2)=>{return item2 -item1})	//sort改变原数组；返回值也是改变之后排序的数组

//splice	
//1、删除第三个元素;两个参数，第一个index第二个是个数 
arr.splice(2,1)
//2、删除第将第三个元素替换为10
arr.splice(2,1，10)
//3、将11插入为数组的第三个元素
arr.splice(2,0,11)
```

- 数组遍历相关的声明式方法
  - forEach
  - map
  - reduce
  - filter
  - find
  - findIndex
  - some
  - every
  - slice返回一个新的数组，包含从 start 到 end。不会修改数组，而是返回一个子数组。`arrayObject.slice(start,end)`
- 数组的其他方法
  - length
  - join
  - contact被合并的可以是数组也可以是元素。`arr.concat([1,3],4)`，如果是数组就把数组中的元素取出来
  - indexOf，找到元素下标
  - lastIndexOf

## 6.2

##### 自定义栈Stack

![](https://img-blog.csdnimg.cn/20210602012622363.png)

![](https://img-blog.csdnimg.cn/20210602012740566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 栈的几个功能方法
  - 进栈（压栈）push
  - 出栈pop
  - 产看栈顶peek
  - 栈中元素个数size
  - 是否空栈isEmpty

```shell
function Stack(){
  //用于保存元素数据的数组
  const arr = [];
  
  this.push = function(element){
    arr.push(element)
  }
  
  this.pop = function(){
    arr.pop()
  }
  
  this.peek = function(){
    return arr[arr.length-1]
  }
  
  this.size = function(){
    return arr.length
  }
  
  this.isEmpty = function(){
    return arr.length === 0 ?true:false
  }  
}

export default Stack;
```

- 栈应用（栈十进制转二进制：除2取余，倒序排列，高位补0）。数组实现十进制转二进制。

![](https://img-blog.csdnimg.cn/20210602144334190.png)

```shell
function edc2bin(decNum){
  //创建一个用于保存二进制的array。Array改为Stack就是栈应用
  const arr = new Array();	
  while(decNum>0){
    const remainder = decNum % 2;		//取余
    arr.push(remainder);		
    decNum = Math.floor(decNum / 2); 	//向下取整数
  }
  //依次
  let result = ''
  while(arr.length !== 0){
    result = result + arr.pop() 
  }
  return result;
}
```

![](https://img-blog.csdnimg.cn/20210602145041669.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 队列Queue

![](https://img-blog.csdnimg.cn/20210602145210372.png)

![](https://img-blog.csdnimg.cn/20210602145314760.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210602145346949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



```shell
function Queue(){
  const arr = [];
  
  this.enqueue = function(element){
    arr.push(element)
  }
  
  this.dequeue = function(){
    arr.shift()		//删除数组的第一个元素并且返回
  }
  
  this.front = function(){		//查看队列第一个
    return arr[0]
  }
   this.size = function(){
    return arr.length
  }
  
  this.isEmpty = function(){
    return arr.length === 0 ?true:false
  }  
}

export default Queue;
```

- 队列击鼓传花（队列头依次放到后面去；并且删除指定的第几个 ）
  - 创建一个空queue
  - 将数组中的所有元素依次放入queue
  - 将队列中num-1元素依次转移到队列最后，将队头部元素删除（只要队列的size>1就不断做，直到剩下最后一个，就是目标元素 ）

```shell
function passGame(names,num){
  //创建一个空queue
  const queue = new Queue();
  
  //将数组中的所有元素(name和index)依次放入queue
  names.forEach((name,index)=>{
  console.log(name,index)
    queue.enqueue({name,index})
  })
  
  while(queue.size() > 1){
    for(let i = 0;i < num;i++){
      queue.enqueue(queue.dequeue())
    }
    //删除头部元素
    queue.dequeue(queue.front())
  }
  const {name,index} = queue.front()
  return `${name}是最后一个，它的index是第${index}个`
}

var names = ['a','b','c','d','e']
passGame(names,3)
```

- 优先级队列
  - 传入值优先级。标记优先级，优先级高的先出

##### 链表(单项链表->只有next、双向链表->有front和next)

![](https://img-blog.csdnimg.cn/20210602153344160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210602153753876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210602153652920.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 树（dom树）

![](https://img-blog.csdnimg.cn/2021060215430024.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

二叉树BT：一个节点有最多两个子节点

二叉搜索树BST：满足二叉树的基础上，值左边小，右边大

##### 集合

元素唯一不能重复。ES6中集合的实现是用数组实现的。当然集合也可以用Object实现

#####  字典

##### 哈希列表/散列表

##### 图









