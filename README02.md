## Review

## 6.9

#### 1、call和apply的区别是什么？哪一个性能更好一些？

call和apply都是function原型上的方法，每一个函数作为function的实例都可以调用这两个方法， 这两个方法的目的都是改变函数的this指向并且让函数执行的。唯一的区别就是call时需要一个个传参数，而apply时将参数以数组的形式进行传递。跟call和apply相似的还有一个bind，只不过bind是预先把函数进行预处理，改变函数的this窒指向，并没有将函数立即执行。指定this指向，三个参数左右性能差不多。call的性能要比apply好一些，尤其是传入参数超过三个以上的时候。所以开发中，可以多使用call。但是在传入参数是数组的时候，可以使用apply更加方便。

- 找到类和实例的概念：都是function原型上的方法，所有的函数都是function的实例所以都可以调用
- 指出call、apply的共同作用改变this指向
- 指出call和apply的唯一区别：传参的形式不一样
- 引出类似的bind方法，并说明bind方法和这两种的相同点和不同点

```shell
fn.call(obj,10,20,30)

fn.apply(obj,[10,20,30])

fn.bind(obj,10,20,30)
```

所以开发中，可以多使用call。但是在传入参数是数组的时候，可以使用apply更加方便。但是可以使用ES6的展开运算符call也可以实现将数组中的每一项依次传给函数。

```shell
let arr = [10,20,30],
		obj = {};

function fn(x,y,z){}

fn.call(obj,...arr);		//基于ES6的展开运算符，可以将数组中的每一项依次传给函数

fn.apply(obj,arr)
```

性能测试

`console.time`可以测出一段代码执行的时间。性能测试使用这个较多。

`console.profile`在火狐浏览器中安装`FireBug`可以更加精准的获取程序每个步骤所消耗的时间

```shell
let t1 = new Date()
for(let i = 0;i < 10000;i++){
  
}
console.log(new Date() - t1)
```

```shell
console.time('A')
for(let i = 0;i < 10000;i++){
  
}
console.timeEnd('A')
```

#### 2、实现`(5).add(3).minus(2)`使其输出结果为6

由于是链式写法，每一个返回都得是Number的实例

```shell
(function(){
  function check(n){				//参数容错性
    n = Number(n)
    return isNaN(n)?0:n;
  }
  
  function add(n){
  	n = check(n)
    return this + n;
  }
  
  function minus(n){
  	n = check(n)
    return this - n
  }
  
	['minus','add'].forEach(item => {
      Number.prototype[item] = eval(item);
	})
	//Number.prototype.add = add;
})()
```

#### 3、箭头函数与普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？为什么？

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



## 6.10

#### 4、字母大小写取反，例如'AbC'变成'aBc'

```shell
function trans(str){
  str = str.replace(/[a-zA-Z]/g,(content)=>{
  //或者用ASC码，例如'A'.charCodeAt，答谢字母范围65-90 
  // content.charCodeAt() >= 65 && content.charCodeAt() <= 90
  	return content.toUpperCase() === content?content.toLowerCase():content.toUpperCase();
  })
  return str
}

```

#### 5、字符串匹配算法

从字符串S中查找是否存在字符串T，若存在返回所在位置，不存在返回-1（不能基于indexOf/includes等内置方法）

- 循环当前字符中的每一项，让每一项从后面截取`T.length`个字符，然后和T进行比较，不一样继续循环，应用返回当前索引

```shell
(function(){
  function myIndexOf(T){
    //this => S
    let lenS = this.length,
    		lenT = T.length,
    		res = -1;
    if(lenS < lenT){return -1;}
    for(let i = 0;i <= lenS - lenT;i++){
      if(T === this.substr(i,lenT)){
        res = i;
        break;
      }
    }
    return res
  }
  
  String.prototype.myIndexOf = myIndexOf;
})()

let S = 'adhskdahskyuasjkdas',
		T = 'yu';
console.log(S.myIndexOf(T))



```





























































