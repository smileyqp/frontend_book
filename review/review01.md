## Review

README中部分复习

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

- 正则处理

```shell
(function(){
  function myIndexOf(T){
  	let reg = new RegExp(T)
    		res = reg.exec(this)
    return res === null ? -1 :res.index;
  }
  
  String.prototype.myIndexOf = myIndexOf;
})()

let S = 'adhskdahskyuasjkdas',
		T = 'yu';
console.log(S.myIndexOf(T))

```

#### 6、输出下面代码运行结果

![](https://img-blog.csdnimg.cn/20210610102244519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

> 三题答案依次是：c		b		c
>
> 属性都会转成字符串。Symbol生成的值都唯一。对象的属性值为对象的时候，都会将对象转化成字符串，调用toString，对象的实例是Object，调用的是Object的原型上的toString。把对象作为属性名，最后存储的都是`"[object Object]"`为属性值的

#### 7、判断输入的是正确的网址

- 协议：`http://` `https://` `ftp://`（可省）
- 域名：www.xxx.xx  xxx.xx  xx.xx.xx.xx
- 请求路径 `index.html` `stu/index.html` ` /stu`（可省）
- 问号传参`?xx=xx`（可省）
- 哈希值 `#xxx`（可省）

```shell
let str = 'http://smileyqp.com/smile'
let reg = /^((http|https|ftp):\/\/)?(([\w-].)+[a-z0-9]+)((\/[^/]*)+)?(\?[^#]+)?(#.+)?$/i;
console.og(reg.exec(str))
```

#### 8、阿里面试函数题

![](https://img-blog.csdnimg.cn/20210610111312842.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
function Foo(){
  Foo.a = function(){
    console.log(1)
  }
  this.a = function(){
    console.log(2)
  }
}
Foo.prototype.a = function(){
  console.log(3)
}
Foo.a = function(){
  console.log(4)
}
Foo.a()											//4
let obj = new Foo();		
obj.a()											//2 私有属性中有a
Foo.a()											//1
```

## 6.11

#### 9、实现图片懒加载

```shell
前面已经有详细解答，具体代码之后补充






```



#### 10、正则

编写一条规则，用来验证6-16位的字符串，必须同时包含有大写字母小写字母字符串和数字

正向预查：要匹配的字符串必须满足这个条件

负向预查：要匹配的字符串必须不符合这个条件

```shell
//要求cainiao8才能匹配过，以下正则只有cainiao8才符合条件，但是设置的条件是不参与捕获结果的
var reg = /cainiao(?=8)/

//指的是 smileyqp后面必须是yyyy才符合条件，但是yyyy不参与捕获的结果
var reg1 = /smileyqp(?=yyyy)/

```

```shell
var reg = /(?=^)d{2}(?=$)/		//正向预查，两位数组d{2}左边必须是开头，右边必须是结尾

var reg1 = /^d{2}$/						//和上面作用一样

```

```shell
var reg = /^[a-zA-Z0-9]{6,16}$/		//当前字符串只能是用数字字母开头6-16位

var reg1 = /^(?!^[a-z]+$)[a-zA-Z0-9]{6,16}$/		//(?!^[a-z]+$)不能都是纯小写字母

var reg2 = /^(?!^[a-z]+$)(?!^[A-Z]+$)(?!^[0-9]+$)[a-zA-Z0-9]{6,16}$/		//(?!^[A-Z]+$)不能都是纯大写字母；(?!^[0-9]+$)不能都是数字

var reg3 = /^(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)[a-zA-Z0-9]{6,16}$/	//由于外面已经有了，那么可以省略

var reg4 = /(?!^[a-zA-Z]+$)(?!^[A-Z0-9]+$)(?!^[a-z0-9]+$)(?!^[0-9]+$)^[a-zA-Z0-9]{6,16}$/

reg3.test('2235jd3')
```

```shell
//写出1-10位数字字母下划线组成的字符串，其中必须有下划线
let reg = /(?!^[a-zA-Z0-9]+$)^\w{1,10}/;			//?=	表示必须;  ?!表示不能只是

//字符串中包含数字字母下划线，并且必须含有下划线。\w表示数字字母下划线
let reg = /^(?!=_)\w$/
```

```shell
//英文字母汉字组成的字符串，给英文单词前后加空格
let str = 'check作业要仔细的check，no说说',
		reg = /\b[a-z]+\b/ig;
str.replace(reg,value=>{
  return ' '+value+' ';
}).trim();		//trim去掉字符串首位空格；trimLeft去除左边空格；trimRight去除右边空格

```



## 6.15

#### 11、数组扁平化

编写一个程序将数组`let arr=[[2,4,1,5],[8,5,2],[23,45,12,[29,3,5,[1,4,67]],10]`扁平化，并去除其中重复部分，最终得到一个升序且不重复的数组

- ES6 ：`flat` 、`Set`、`sort`

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]
arr = arr.flat(Infinity)

arr = Array.from(new Set(arr))

arr = arr.sort((a,b)=>a-b)

//arr = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b)		//一行简写
```

##### 数组扁平化

- `toString`数组toString之后都会变成以逗号分隔的字符串

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]

arr.toString().split(',').map(item=>{		//数组toString之后都会变成以逗号分隔的字符串
  return Number(item)
})

//arr数组toString之后"2,4,1,5,8,5,2,23,45,12,1,45,35,10"
```

- `join`

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]	
arr.join('|').split(/(?:,|\|)/g).map(item=>{			//?:只匹配不捕获
  return Number(item)
})

//arr数组join之后"2,4,1,5|8,5,2|23,45,12,1,45,35|10"
```

- `JSON.stringify`

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]	
JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>{
  return Number(item)
})


//JSON.stringify(arr) 	"[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]"
//JSON.stringify(arr).replace(/(\[|\])/g,'')  	"2,4,1,5,8,5,2,23,45,12,1,45,35,10"
```

- `[].concat(...arr)`基于数组的`some`进行判断检测;some验证数组中有没有一项发一个规则的（some返回的额结果true或者false）；`find`查找，返回的结果如果有就返回第一个的值，如果没有就返回undefined；同理`findIndex`有就返回index，没有就返回-1

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]	

while(arr.some(item=>Array.isArray(item))){		//只要arr数组中有数组
  arr = [].concat(...arr)		//[].concat(...arr)每次只能展开一级
}
```

- 递归

```shell
let arr=[[2,4,1,5],[8,5,2],[23,45,12,[1,45,35]],10]	

(function(){
  function myFlat(){
  	let res = [],
  			_this = this;
  	let fn = (arr) => {
      for(let i = 0;i < arr.length;i++){
      	let item = arr[i];
        if(Array.isArray(item)){
          fn(item)
          continue;
        }
        res.push(item)
      }
  	}
  	fn(_this)
  	return result;
  }
  Array.ptototype.myFlat = myFlat;
})()
```

#### 12、面向对象new

![](https://img-blog.csdnimg.cn/20210615102220444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210615102632956.png)

- 函数内部创建新对象
- 新对象原型指向传入的类的原型
- 改变新对象的this指向并传入它相关参数
- 返回该创建的心对象

```shell
(function(){
  function _new(){
  	//let obj = Object.create(this.prototype)下面两句的简写
    let obj = new Object();
    obj.__proto__ = this.prototype;
    obj.apply(this,arguments)
    return obj;
  }
  Function.prototype._new = _new;
})()

```

## 6.16

#### 13、数组合并

得到`["A", "A1", "A2", "B", "B1", "B2", "C", "C1", "C2", "D", "D1", "D2"]`

```shell
let ary1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
let ary2 = ['A','B','C','D']

let arr = ary1.concat(ary2).sort((a,b)=>{
  return a.localeCompare(b)
})
console.log(arr)		//["A", "A1", "A2", "B", "B1", "B2", "C", "C1", "C2", "D", "D1", "D2"]
```

> localeCompare先比较第一个再比较第二个

更进一步：得到`["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]`

> 思路：加一个大的，然后排序最后去除这个加入的str

```shell
let ary1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
let ary2 = ['A','B','C','D']

ary2 = ary2.map(item=>item+'3')

let arr = ary1.concat(ary2).sort((a,b)=>{
  return a.localeCompare(b)
})
console.log(arr) //["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3", "D1", "D2", "D3"]
arr = arr.map(item=>{
  return item.replace('3','')
})
console.log(arr)	//["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]
```

进一步：如果原有数组顺序不一致，但是排序后必须顺序不变，如下：

> 思路：将ary2中的元素一个一个往ary1中插入，遍历两个数组，ary2中的元素依次在ary1中进行查找，看是否包含，包含的话记录索引，插入最后一个索引值后面

```shell
let ary1 = ['D1','D2','A1','A2','C1','C2','B1','B2']
let ary2 = ['B','A','D','C']
//要求得到 ['D1','D2','D','A1','A2','A','C1','C2','C','B1','B2','B']

 let n = 0;
 for(let i = 0;i < ary2.length;i++){
   for(let j = 0;j < ary1.length;j++){
     if(ary1[j].includes(ary2[i])){
       n = j;
     }
   }
   ary1.splice(n+1,0,ary2[i])
   n = 0;
 }
console.log(ary1)// ["D1", "D2", "D", "A1", "A2", "A", "C1", "C2", "C", "B1", "B2", "B"]
```

#### 14、前端经典输出1-10问题

- let

let存在块作用域，每次循环都会在当前块作用域中形成一个私有变量i，每次定时器使用的都是私有变量

```shell
for(let i = 0;i < 10;i++){		
  setTimeout(()=>{
    console.log(i)
  },1000)
}
```

- 利用闭包

```shell
for(var i = 0;i < 10;i++){		
  setTimeout(((i)=>{
    console.log(i)
  })(i),1000)
}
```

```shell
for(var i = 0;i < 10;i++){		
   (function(i){
     setTimeout(()=>{
     	console.log(i)
   		},1000)
   })(i)
}
```

- bind预先处理

```shell
var fn = function(i){
  console.log(i)
}
for(var i = 0;i < 10;i++){		
  setTimeout(fn.bind(null,i),1000);		//用bind预先处理
}
```

#### 15、函数经典题

##### 1、匿名函数如果设置了函数名 ，在外面是无法调用的，但是在函数里面是可以调用的

##### 2、而且类似于创建常量一样，这个名字存储的值不能再被修改（非严格模式下不会报错，但是不会有任何效果，严格模式下直接报错，可以把AAA理解成为const声明的常量）

```shell
let fn = function AAA(){
  console.log(AAA)			//方法本身；但是这里如果使用严格模式的话也会报错
}
AAA()		//Uncaught ReferenceError: AAA is not defined
```

> 写出下面输出：

```shell
var b = 10;
(function b(){
  b = 20;
  console.log(b)	//非严格模式下不报错，但是存储的值不被修改。因此还是方法b
})()
console.log(b)		//10
```

> 修改方法，使匿名函数中的b输出20，但是外面的还是输出10；

##### 方法的私有变量一般有两个写法：带var的，或者形参赋值

```shell
//分析：里面的b一定是私有的不能是全局的。方法的私有变量一般有两个写法：带var的，或者形参赋值
var b = 10;
(function b(){
  var b = 20;
  console.log(b) //20带名称的匿名函数中如果一旦私有声明，名称变量就跟原函数无关了；这里使用let、const也行
})()
console.log(b)		//10
```

```shell
//上面这种也可以直接给它传入一个形参
var b = 10;
(function b(b){
  b = 20;
  console.log(b)
})()
console.log(b)		//10
```

> 如果把带名称的匿名函数的名称去掉，函数里面的b变成全局的了

```shell
var b = 10;
(function (){
  b = 20;
  console.log(b)		//20
})()
console.log(b)		//20
```

#### 16、a=?使得a==1&&a==2&&a==3成立

##### 1、`==`规则

两个等号进行比较的时候，先转化成同一种数据类型再进行比较

- 对象进行比较，比较的是对应 的内存地址
- `null==undefined`是true
- NaN和谁都不想等， `NaN==NaN`为false
- `[12]=='12'`对象和字符串进行比较是将对象toString转化成字符串后再进行比较
- 剩余所有情况在进行比较的时候都是先转化成数字再进行比较（前提是数据类型不一样）
  - 对象转化成数字：线转化成字符串，再转数字
  - 字符串转数字：只要出现一个非数字，结果都是NaN
  - 布尔转数字：true是1，false是0
  - null转化成数字：0
  - undefined转化成数字：NaN

##### 当左右两边数据类型不一致的情况下，对象和字符串比较是对象转换成字符串，其余的情况`null==undefined`是相等的，NaN和任何都是不想等，包括自身。其余都是转化成数字再进行比较

```shell
12 == true;				//false 12  1
[] == false;			//true 0 0
[] == 1						//false 0 1
"1" == 1					//true 1 1
true == 2					//false 1 2
```

##### 2、a=?使得a==1&&a==2&&a==3成立，具体题目实现（改变私有toString方法，实例私有属性上重构一个方法调私有方法）

- 方法一：加私有的toString方法

```shell
//a==1&&a==2&&a==3
var a = {
  n:0,
  toString:function(){
    return ++this.n;
  }
};
```

- 利用数组的shift方法

shift删除数组第一项，将删除的内容返回，原有数组内容改变

```shell
let a = [1,2,3]
a.toString = a.shift;
```

- 利用definedProperty

```shell
let n = 0;
//window作用域上创建a;获取a的时候走get方法；返回++n
Object.definedProperty(window,'a',{			
  get:function(){
    return ++n;
  }
})

//优化
Object.definedProperty(window,'a',{			
  get:function(){
  	return this.value ? ++this.value:1;
  }
})
```

#### 17、经典题

```shell
let obj = {
  2:3,
  3:4,
  length:2,
  push:Array.prototype.push
}
obj.push(1)			//obj[2] = 1
obj.push(2)			//obj[3] = 2
console.log(obj)



//模拟数组的push方法
Array.prototype.push = function(val){
  this[this.length] = val;			//往数组中push一个val，也就是把val放进index位数组第数组的长度位数处
	//  this.length 在原来的基础上加一，浏览器自动加一
}
//那么就得出如下结果{2: 1, 3: 2, length: 4, push: ƒ}
obj = {
  2:1,
  3:2,
  length:4,
  push:Array.prototype.push
}
```

## 6.17

#### 18、经典函数题

- ##### 请实现一个函数满足以下功能

```shell
add(1)					//1
add(1)(2)				//3
add(1)(2)(3)		//6
add(1)(2,3)		//6
add(1,2)(3)		//6
add(1,2,3)		//6
```

函数柯里化，利用闭包的保存的特性，实现预先处理的方法

```shell
function currying(fn,len){		//可执行多少次
  len = len||fn.length;				//函数的length是获取函数的形参个数
  return function(...args){
    if(arg.length>=len){
      return fn(...args)			//如果执行次数小于等于这个参数个数；直接执行这个方法
    }
    //不直接执行，二十返回一个可以继续执行的函数；args将这次的参数当作参数传入下面执行的方法中
    return currying(fn.bind(null,...args,len-arg.len))
  }
}

let add = currying((...args)=>{
  eval(arg.join('+'))
},4)			//也就是可执行多少次，所有的传入参数的个数

add = currying(add,4)
add(1)(2)(3)(4)		//10
add(1)(2,3)(4)		//10
add(1,2)(3)(4)		//10
add(1,2,3,4)			//10
```

- ##### 函数柯里化：函数预先处理，利用闭包。例如：bind

```shell
let obj = {
  name:'OBJ'
}
function fn(...arg){
  console.log(this,arg)
}
document.body.onclick = fn;		//this 为 BODY
document.body.onclick = function(ev){	
//ev事件对象：给元素的某个事件绑定方法，当事件触发会执行这个方法，并且会把当前事件的信息传递给这个函数的"事件对象"

}

//要求：给fn中的this指向obj并且传入100，200，以及事件对象（预先处理思想）
//1、使用bind
document.body.onclick = fn.bind(obj,100,200);

//2、自己写：执行匿名函数
document.body.onclick = function(ev){
  fn.call(obj,ev,100,200)
}
```

自定义mybind实现

```shell
let obj = {
  name:'OBJ'
}
(function(){
  mybind(context=window,...outerArg){
  	let _this = this;
  	//this 指向fn
    return function(...innerArg){
    	//此时这个匿名函数中的this指向BODY
      _this.call(context,...outer,...innnerArg)
    }
  }
  Function.prototype.mybind = mybind;
})()
fn.mybind(obj,100,200)
```

函数柯里化：返回一个匿名函数，形成闭包，保存第一次执行传入的参数，并返回一个函数。第二次执行的时候直接使用上一次保存的数据，供调用。利用闭包的保存作用。

闭包两大作用：保护、保存



## 6.21

#### 19、求两个数组的交集

```shell
let num1 = [1,4,2,6,9]
let num2 = [3,4,7,2]

//方法一
let arr = []
for(let i = 0;i < num1.length;i++){
  let item1 = num1[i]
  for(let j = 0;j<num2.length;j++){
    let item2 = num2[j]
    if(item1 === item2){
      arr.push(item1)
      num1[i] = null;
      num2[j] = null;
      break;
    }
  }
}

//方法二
let arr = []
num1.forEach((item,index)=>{
	let n = arr2.indexOf(item)
	if(n>=0){
    arr.push(item)
    num1.splice(index,1)
    num2.splice(n,1)
	}
})
```



#### 20、旋转数组

![](https://img-blog.csdnimg.cn/20210621144744814.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 截取拼接

```shell
function rotate(k){
	//参数处理
	if(k<0 || k === 0 || k === this.length){return this;}
	if(k > this.length){k = k%this.length}
	//旋转数组
  //return arr.slice(-k).concat(arr.slice(0,arr.length-k))		//方法一：slice(-k)从后面取k个
  //return [...this.splice(arr.length-k),...this]		//方法二：splice会改变原数组，并返回截取的数组
  //new Array(3).fill('').forEach(()=>{this.unshift(this.pop())})		//方法三变式

  for(let i = 0;i < k;i++){				//方法三：从后面一个一个拿，放到最前面
    this.unshift(this.pop())
  }
  return this;
  
}
Array.prototype.rotate = rotate;
```



#### 21、把公司1-12个月的销售额存在对象中

![](https://img-blog.csdnimg.cn/2021062115085825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 方法一

```shell
let obj = {
  1:222,
  3:444,
  5:345
}
let arr = new Array(12).fill(null).map((item,index)=>{
  return obj[index+1]||null
})
```

- 方法二obj.length

```shell
let obj = {
  1:222,
  3:444,
  5:345
}
obj.length = 13			//将其长度强行赋值到13，那么它有13位并且不对应的会用undefined填充
let arr = Array.from(obj).slice(1).map(item=>{
  return typeof item === "undefined"?null:item;
})
```

- 方法三Object.keys

```shell
let obj = {
  1:222,
  3:444,
  5:345
}
//Object.keys(obj)是将obj中的属性名以数组的方式返回
let arr = new Array(12).fill(null)
Object.keys(obj).forEach(item=>{
  arr[item-1] = obj[item]
})
```



## 6.23

#### 22、冒泡排序

数组当前项跟后一项进行对比，如果当前项比后一项大那么两项交换位置

```shell
let ary = [23,31,4,7,3,9]

function bubble(ary){
  for(let i = 0;i<ary.length-1;i++){	//控制比较轮数
    for(let j = 0;j<ary.length-1-i;j++){		//每一轮比较的次数
      ary[j]>ary[j+1]?[ary[j],ary[j+1]]=[ary[j+1],ary[j]]:null
    }
  }
  return ary
}
```

#### 23、插入排序

类似于抓牌

```shell
let ary = [23,31,4,7,3,9]

function insert(ary){
  let handle = [];
  handle.push(ary[0])
  for(let i = 1;i<ary.length;i++){
    for(let j = handle.length-1;j>=0;j--){
      if(ary[i]>handle[j]){
        handle.splice(j+1,0,ary[i]);			//把ary[i]放到handle[j]的后面；及放到handle[j+1]前面
        break;
      }
      if(j===0){
        handle.unshift(ary[i]);		//已经比较到最前面就插入数组首部
      }
    }
  }
  return handle;
}

```

#### 24、快速排序

找到数组中的中间项，然后将其从原来数组中移除，并且获取这个中间项值。依次拿数组中的每项跟中间项进行对比，小的放左边大的放右边

```shell
 let ary = [23,31,4,7,3,9]

function quick(ary){
  if(ary.length<=1){return ary}
  let middleIndex = Math.floor(ary.length/2)
  let middleVal = ary.splice(middleIndex,1)[0]
  let leftary = [],
  		rightary = []
  for(let i = 0;i<ary.length;i++){
  	ary[i]<middleVal?leftary.push(ary[i]):rightary.push(ary[i])
    
  }
  return (quick(leftary)).concat(middleVal,quick(rightary))
}
```





































































































































































