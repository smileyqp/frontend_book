# 29、Promise

##### 题目类型

- Promise概念
  - 解决ajax回调地狱问题，使得代码更加简洁易懂
- 说Promise题目输出

```shell
const first = () =>(new Promise((resolve,reject)=>{
    console.log(3)
    let p = new Promise((resolve,reject)=>{
      console.log(7)
      setTimeout(()=>{
        console.log(5)
        resolve(6)		//一个promise值能执行一个resolve；这个在定时器中，比下面后执行，因此是执行下面的
      },0)
      resolve(1)
    })
    resolve(2)
    p.then((arg)=>{
      console.log(arg)
    })
  }))
  
  first().then((arg)=>{
    console.log(arg)
  })
  console.log(4)
  
  
  //3 7 4 1  2 5
```

- 如何实现链式调用

```shell
//每次then的时候返回一个promise
b.then().then().then()的链式调用如何实现的？

//方法一：返回this
class Test{
  then(){
  	console.log('then')
    return this;
  }
}
var t = new Test();
t.then().then().then()


//方法二：返回改对象实例
class Test1{
  then(){
  	console.log('then')
    return new Test1();
  }
}
var t1 = new Test1();
t1.then().then().then()
```

- 手写实现简易Promise
  - 分析promise特点
    - Promise参数函数会立即执行
    - promise在then的回调函数中可以拿到resolve参数
    - promise可以有多个then并且可以依次执行
    - promise可以嵌套多个then，then回调中可以返回promise
    - promise可以嵌套多个then，then的回调中可以返回普通值
    - resolved状态的promise，调用then方法会立即执行的
    - 二次调用resolve不会产生影响
  - 实现思路
    - promise是一个对象，一般是通过`new Promise`来实例化的
    - promise的then是可以链式调用的，所以需要有链式调用的实现
    - 逐个根据列出的promise的特点来实现
    - 主要实现promise的构造方法和then方法

```shell
//不完整，之后补充
let State = {		
  pending:'pending',
  resolve:'resolved',
  reject:'rejected'
}
const noop = () => {}

class MyPromise{
  constructor(exclutor){		//回调函数，promise传入的回调函数exclutor
    exclutor(this._resolve.bind(this),_this.reject.bind(this));		//回调函数立即执行
  }
  
  _state = State.pending;
  _value;
  
  _resolve(val){
  	this._value = val;
    this._state = State.resolved;
    //执行then传入进来的onRes;执行then传入进来的回调函数
    while(_resArray.length>0){
    	const item = _resArray.shift();
    	item(this._value);
    }
  };
  _reject(){
    this.state = State.rejected;
  };
  
  _resArray = [];
  
  then(onRes,onRej = noop){
  	const newPromise = new MyPromise(()=>{})
    this._resArray.push(onRes);		//存储then中回调方法
    return newPromise;
  }
}


export default MyPromise;


```

## 