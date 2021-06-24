# 3、箭头函数与普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？为什么？


- 箭头函数语法上比普通函数更加简洁（ES6中每一种函数都可以使用形参赋默认值以及使用…扩展操作符）
- 箭头函数中没有自己的this，它里面的this从属于函数所属上下文，使用call、apply等任何方式都无法改变其this指向

- 箭头函数中没有`arguments`这个类数组，只能使用`...args`来获取传递的参数集合（数组）
- 普通函数可以使用new来生成它的实例，但是箭头函数不可以new生成它的实例，因为箭头函数没有`prototype`也没有this

##### 1、箭头函数中没有自己的this

```shell
//1
document.body.onclick = ()=>{
  //this指向window不是当前对象body了
}

//2
document.body.onclick = function(){
	//this指向body
  arr.sort(function(a,b){
    return a-b;				//回调函数中的this一般指向的是window
  })
}

//3 将上面2中的this指向改成body;方式一：直接改成箭头函数
document.body.onclick = function(){
	//this指向body
  arr.sort((a,b)=>{
    return a-b;				//回调函数中的this一般指向的是window
  })
}
```

回调函数的this指向,each回调函数的应用

```shell
//回调函数，把一个函数B作为实参传递给另外一个函数A作为形参。函数A在执行的时候可以调用只从传递进来的B（可执行N次、可传值）
function each(arr,callBack){
  for(let i = 0;i < arr.length;i++ ){
    let flag = callBack.call(arr,arr[i],i)		//可以通过call修改this;flag接收回调函数返回的结果
    if(flag === false){			//结果返回false结束循环
      break;
    }
  }
}

//调用each
each([10,20,30,40],function(item，index){
	//由于上面进行call改变了this指向，那么这里的this指向的是原始的数组arr
  console.log(item,index)
  if(index > 1){
      return false;
  }
})
```

##### 2、箭头函数中没有`arguments`，只能使用`...args`获取传递过来的参数集合

```shell
let fn = (...arg) => {
  console.log(arg)
}

fn(10,20,30)
```

##### 3、普通函数可以使用new来生成它的实例，但是箭头函数不可以用new生成它的实例

```shell
function Fn(){
  this.x = 100;
}

Fn.prototype.getX = function(){}

let f = new Fn;
```


