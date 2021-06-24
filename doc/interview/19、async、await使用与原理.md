# 19、async、await使用与原理

- 异步情况：定时器、ajax、事件处理、nodejs、读取文件也有异步

```shell
let p = new Promise((resolve,reject)=>{
  resolve(1);
})
//这里的function就是promise中调用的resolve。那么上面掉哟哦那个resolve(1),data参数就是1 
p.then(function(data){		
  console.log('success',data)		//success 1
})

```

- Promise减少嵌套关系，是一个链式编程的结果
- axios就是把ajax用promise封装了一下
- async、await最简单的使用就是省去then的步骤，改成类似同步的过程，等待成功才会执行下面。方便、可读性强、异步改成类似同步写法
- **async和await其实是generator和yield的语法糖。async、await使得代码清晰。**
- Generator里面的代码是分段执行。看到yield就分段暂停。

```shell
function *helloGenerator(){
  yield 'hello';
  yield 'world';
  yield 'ending';
}

var hw = helloGenerator();
console.log(hw);		//这个函数的结果并不是摁钉，因为代码是暂停的。是一个暂停标记，标记指向'hello'等结果
console.log(hw.next())	//hello
console.log(hw.next().next())		//world
console.log(hw.next().next().next())		//ending
console.log(hw.next().next().next().next())		//undefined
```

- 拓展`Promise.all`和`Promise.race`
  - `Promise.all`必须数组里面的所有promise执行完毕，才成功。用在要很多结果都执行成功的情况。
  - `Promise.race`只要数组里面的一个成功，整个race就成功执行

```shell
Promise.all([p1,p2,p3...],function)

Promise.race([p1,p2,p3...],function)
```

#### 