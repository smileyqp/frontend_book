# 7、nodejs事件轮询

- `libuv`
- 事件轮询机制
  - 定时器阶段：计时到点的计时器
  - pending callback：做系统操作，tcp错误等
  - idle、prepare准备工作
  - 轮询阶段：轮询队列
    - 轮询队列不为空：一次去除回调函数中的第一个函数，先进先出。知道轮询队列为空或者达到最大限制（轮询队列为空：设置过SetImmidiate函数直接进入下一个check阶段；没有设置过，那么就在当前poll等待，直到轮询队列添加进来新的函数，就会去第一个情况执行。如果定时器到点，那么也会去执行下一个阶段）
  - check查阶段：执行setImmediate设置的回调函数
  - close callback：关闭阶段。close事件的回调函数在这个阶段进行。
- `process.nextTick`能在任意阶段优先执行

```
setTimeout(function(){
  console.log(1)
},0)

setImmediate(function(){ 
  console.log(2)
})

process.nextTick(function(){
  console.log(3)
})

//nextTick timeout immediate
```

#### 