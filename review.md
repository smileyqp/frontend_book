# Basic

## 6.28

#### 1、基础BASIC

##### 1、html5

- 语义化标签
- 音视频处理audio/video：新媒体解决方案代替传统flash解决方案
- canvas/webGL：js绘制图形方式
- history API：Browser路由底层实现就是这个API
- requestAnimationFrame：动画方案
- 地理位置：h5中还提供相关API提供相关API横竖屏、相关的传感器比如摇一摇等
- websocket：socket.io之前都是长轮询或者长链接
- …...

##### 2、css3

- 常规：新增的样式选择器、类
- 动画：
- 盒子模型
- 响应式布局

##### 3、JS

- ES3/5/6/7/8/9
- DOM
  - 事件处理方案
- BOM
  - 浏览器的操作
- 设计模式
- 底层原理
  - 堆栈内存
  - 闭包作用域 AO/VO/GO/EC/ECSTACK
  - 面向对象OOP
  - this
  - EventLoop
  - 浏览器渲染原理
  - 回流重绘
  - … ...

##### 4、网络通信层

- Ajax/Fetch/axios
- Http1.0/http2.0
- TCP
- 跨域解决方案
- 性能优化
- …….

##### 5、Hybrid App或者小程序

- Hybrid
- uniapp
- React Native
- 小程序MPVUE
- Weex
- PWA
- …...

##### 6、工程化方面

- webpack
- git
- linux/nginx
- …...

##### 7、全栈方面

- node
- express
- koa2
- mongodb
- nuxt.js/next.js
- ….

##### 8、框架方面

- Angular
- Vue
  - 基础知识
  - 核心原理
  - vue-router
  - vue-cli
  - vuex
  - Element-ui
  - vant
  - cube
  - ssr
  - 优化
- React
  - 基础知识
  - 核心原理
  - react-router-dom
  - redux
  - react-redux
  - dva
  - umi
  - mobix
  - antd
  - antd pro
  - SSR
  - 优化
  - …….

##### 9、可视化方向

##### 10、AI方向

#### 2、标签

- 什么叫标签语义化
  - 合适的标签干合适的事情。

- 都有哪些标签，都是啥意思
  - 块标签div、p、h1-6、ul li、ol li、tr、td、header、footer、nav、section、article
  - 行内标签 a、span、small、strong、i
  - 行内块标签  image、input 

- 块级标签和杭内标签有哪些区别
  - 块状标签可以独占一行、块状标签可以设置宽高
  - 行内标签不能独占一行、默认在同一行排列
  - 行内块状标签继承行内标签的特点默认同一行排列、继承块状标签的特点可以设置宽高

- 三类标签怎样转化
  - display：inline-block、inline、block

- display还有哪些值
  - none
  - table
  - flex

- 除了display为none可以隐藏还有哪些可以隐藏
  - visibility等于hidden
- `display=none`和`visibility:hidden`的区别
  - `display=none`不占位置、`visibility:hidden`占位置

- opacity的兼容处理：filter
- filter还能做哪些事情
  - 滤镜
  - 模糊度
  - …...

- display:flex
  - 项目中什么时候用到了flex
  - 除了flex居中还有其他的什么方式居中显示吗
  - 响应式布局还可以怎么做
  - 都有哪些盒子模型

#### 3、盒子水平居中的五大方案

> 这种需求在我之前的项目中十分常见，最开始的时候十分常见，最开始使用定位的方式，之后flex，看到blog用table也可以实现

- 定位：三种
- flex
- table

##### 基于定位

```shell
<body>
	<div class="box"></div>
</body>


<style>
body{
  heigth:100%;
  overflow:hidden;
}
.box{
  box-sizing:border-box;
  width:100px;
  height:50px;
  background:pink;
}

/*定位一：一定得知道宽高*/
body{
  position:relative
}
.box{
  position:absolute;
  top:50%;
  left:50%;
  margin-left: -50px;
  margin-top:-25px;
}

/*定位二：替代方案:有宽高但是不知道具体宽高*/
body{
  position:relative
}
.box{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
}


/*定位三：transform translate,也是不需要具体宽高的；但是这种兼容不是很好*/
body{
  position:relative
}
.box{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
</style>
```

##### flex

```shell
<body>
	<div class="box"></div>
</body>


<style>
body{
  heigth:100%;
  overflow:hidden;
}
.box{
  box-sizing:border-box;
  width:100px;
  height:50px;
  background:pink;
}


body{
  display:flex;
  justify-content:center;
  align-item:center;
}
</style>
```

##### 基于JS

```shell
<body>
	<div class="box"></div>
</body>


<style>
body{
  heigth:100%;
  overflow:hidden;
  position:relative;
}
.box{
  box-sizing:border-box;
  width:100px;
  height:50px;
  background:pink;
  position:absolute;
}

<script>

let html = document.documentElement,
		box = document.getElementById('box'),
		winW = html.clientWidth,
		winH = html.clientHeight,
		boxH = box.offsetHeight,
		boxW = box.offsetWidth;
		box.style.left = (winW - boxW)/2
		box.style.top = (winH-boxH)/2
</script>

```

##### table

本身是用于控制文本的水平和垂直居中，我们这里可以将元素设置成文本格式来进行控制其水平垂直居中。要求盒子父级固定宽高。

```shell

<body>
	<div class="box"></div>
</body>


<style>
body{
  heigth:100%;
  overflow:hidden;
  
  display:table-cell;
  text-align:center;
  vertical-align:middle;
  width:500px;
  height:500px;
  background:blue;
}
.box{
  display:inline-block;
  width:100px;
  height:50px;
  background:pink;
}
```



#### 4、css盒模型

> 通过分析思考觉得哪种方式会更好。因为IE盒模型它是宽高包括border和padding的，改变其border盒padding，它会自己通过去缩放内容区域去调节，不用奇迹来回去调节大小，因此我目前所做的项目中大部分是使用IE盒模型。以及我看了一些大一点的框架，很多里面的box-sizing也是用的border-box。所以我认为这是大部分的一种规范。

##### 标准盒模型（content-box）

宽高仅指内容区域（content）

![](https://img-blog.csdnimg.cn/20210629103112411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### IE盒模型：怪异盒模型(border-box)

宽高包括content、padding、border的盒模型。element-ui、bootstrap中也是用的IE盒模型

##### flex弹性盒模型

![](https://img-blog.csdnimg.cn/20210629103442860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### columns多列布局（栅格化布局）

一般是使用pad上的布局的，bootstrap中

![](https://img-blog.csdnimg.cn/20210629103511668.png)

#### 5、经典布局方案

左定右定中间自适应（基础布局能力）

##### 圣杯布局

结构是整体的

```shell
<div class="container clearfix">
	<div class="center"></div>
	<div class="left"></div>
	<div class="right"></div>
</div>


<style>
html,
body{
  height:100%;
  overflow:hidden;
}

.container{
  height:100%;
  padding:200px;
}

.left,
.right{
	height:200px;
	min-height:200px;
	background:pink;
}
.center{
  width:100%;
  height:400px;
  background:blue;
}
.center,
.left,
.right{
  float:left;
}

.left{
  margin-left:-100%;		//往上往左移动
  position:relative;
  left:-200px;		//相对于自己之前的定位往左移动200px
}
.right{
  margin-right:-200px;	
}
</style>
```

##### 双飞翼布局

结构是左右中分开的

```shell
<div class="clearfix">
  <div class="container clearfix">
  		<div class="center"></div>
  </div>
	<div class="left"></div>
	<div class="right"></div>
</div>


<style>
html,
body{
  height:100%;
  overflow:hidden;
}

.container{
  height:100%;
  padding:200px;
}

.left,
.right{
	height:200px;
	min-height:200px;
	background:pink;
}
.center{
  width:100%;
  height:400px;
  background:blue;
}

.left{
  margin-left:-100%;		//往上往左移动
}
.right{
  margin-right:-200px;	
}
</style>
```

##### 使用calc

也就是要中间固定宽度，中间center的宽度要是一屏幕宽度减去左右的宽度200px。那么让左、中、右一行赴东，中间宽度设置成`calc(100%,-400px)`即可

```shell
.center{
  width:calc(100%,-400px)		//兼容到IE9;css表达式渲染的时候十分慢，所以不建议
}

```

##### flex

```shell
<div class="container clearfix">
	<div class="left"></div>
	<div class="center"></div>
	<div class="right"></div>
</div>

<style>
html,
body{
  height:100%;
  overflow:hidden;
}

.container{
  height:100%;
  padding:200px;
  display:flex;
  justify-content:space-between;
}

.left,
.right{
  flex:0 0 200px;			//缩小比例0 放大比例0 大小占200px
	height:200px;
	min-height:200px;
	background:pink;
}
.center{
  flex:1;
  height:400px;
  background:blue;
}
</style>

```

##### 定位

```shell
<div class="container clearfix">
	<div class="left"></div>
	<div class="center"></div>
	<div class="right"></div>
</div>


<style>
html,
body{
  height:100%;
  overflow:hidden;
}

.container{
  height:100%;
  position:relative;
}

.left,
.right{
	position:absolute;
	top:0;
	width:200px;
	height:200px;
	min-height:200px;
	background:pink;
}
.left{
  left:0;
}
.right{
  right:0;
}
.center{
  margin:0 200px;
  height:400px;
  background:blue;
}
</style>

```

#### 6、响应式布局

##### media媒体查询

##### rem

##### flex

##### vh/vm



#### 7、拓展

##### 1、使用css让一个div消失在视野中

##### 2、请说明z-index工作原理，使用范围

- 文档流
  - 浮动
  - 定位
  - transform变形
  - animation动画
- 定位

##### 3、谈谈对html5的理解

##### 4、如何使一个div中的文字垂直居中，且该文字大小根据屏幕大小自适应

##### 5、不考虑其他因素，下面哪种的渲染性能较高

css浏览器的渲染机制选择器从右向左进行，先找a，再找.box a

```shell
.box a{
  
}
a{
  
}
```



## 6.30

### JS

堆栈内存闭包以及作用域

- JS数据类型以及区别
  - 基本类型：Number、String、Boolean、null、undefined
  - 引用类型：Object、function
  - 特殊类型：Symbol

- JS堆栈内存的运行机制
- 变量提升机制
- 作用域和作用域链
- 闭包的两大作用：保存、保护
- JS编译机制：VO/AO/GO 
- JS高阶编程技巧：惰性函数、柯里化函数、高阶函数

面向对象（OOP）和this的处理

- 单例模式
- 类和实例
- 原型和原型链
- new运算符的实现机制
- call、apply、bind
- constructor构造函数模式
- JS中this的五种情况综合处理
- JS中四大类型检测方案
  - typeof
  - instanceof
  - constructor
  - Object.prototype.toString().call()
- JS中四大继承方案（含深浅拷贝）
  - 原生继承
  - …….
  - 继承组合继承
  - 混合继承
  - class类中继承

BOM/DOM及事件处理机制

- BOM/DOM的核心操作
- 事件对象
  - 鼠标事件对象
  - 键盘事件对象
  - 其他类型的事件对象
- 拖拽及拖拽插件的封装
- 发布订阅设计模式
- 深度剖析Jquery源码
- 事件传播机制和事件代理
- DOM2级事件的核心运行机制
- 移动touch/guesture的事件及封装处理
- 浏览器底层渲染机制和DOM的回流重绘
- DIALOG模态框组件的封装

### ES6/ES7

ES6/ES7核心知识

- let const var的区别
- 箭头函数 
- 解构赋值和拓展运算符
- Set、Map数据结构
- Promise设计模式
- asynce/await及实现原理
- Generator生成器函数
- Promise A+规范（手写Promise源码）
- JS运行机制（单线程和同步异步编程）
- JS底层运行机制：宏任务、微任务和事件循环机制
- Interator迭代器和for of循环

ajax、http前后端交互

- ajax的核心四步操作
- get、post的核心机制与区别
- TCP三次握手与四次挥手
- axios库和源码剖析
- fetch基础和实战
- 前端开发中的九种跨域解决方案
- http状态码和实际开发中的处理方案
- 前端性能优化汇总（包括强缓存、弱缓存）

#### 1、堆栈内存、闭包作用域

```shell
let a = {},b = '0',c = 0;
a[b] = '张三'
a[c] = '李四'

console.log(a[b])		//李四
```

> 对象和数组的区别

```shell
let a={}, b=Symbol('1'), c=Symbol('1');  
a[b]='张三';	
a[c]='李四';  
console.log(a[b]);			//张三
```

> 自己实现Symbol 

```shell
let a={}, b={n:'1'}, c={m:'2'};  
a[b]='张三';
a[c]='李四';  
console.log(a[b]);		//李四
```

> Object.prototype.toString的应用，怎样检查数据类型的，valueOf

基本类型直接存储，引用类型都存入堆中，最终使吧堆的地址给这个变量

作为函数，在堆中存储代码（字符串），所以函数既是函数也是对象

```shell
var test = (function(i){
    return function(){
        alert(i*=2);	//"4" 
    }
})(2);
test(5);	
```

浏览器一加载页面就形成一个栈内存， 每次函数执行的时候都会形成一个全新的执行上下文（ECSTACK）。

```shell
var a=0,
    b=0;
function A(a){
    A=function(b){					//重写全局下的A
        alert(a+b++);				//形成闭包
    };
    alert(a++);
}
A(1);			//"1"	
A(2);			//"4"
```

#### 2、深克隆、浅克隆

```shell
let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};

let arr = [10, [100, 200], {
    x: 10,
    y: 20
}];

```

浅拷贝：只克隆第一级

```shell
//方法一
let obj2 = {...obj}

//方法二
let obj3 = {}
for(let key in obj){
  if(obj.hasOwnProperty(key)){
    obj2[key] = obj[key]
  }
}
```

深拷贝

```shell
//方法一：函数、日期格式的数据以及正则在JSON.stringify的时候都会出现问题
let obj4 = JSON.parse(JSON.stringify(obj))			

//方法二
function deepClone(obj){
  //过滤特殊情况
  if(typeof obj !== "object"){return obj;}
  if(obj === null){return null}			//null的typeof的值也是object
  if(obj instanceof RegExp){return new RegExp(obj)}		//typeof检测不出来是正则；
  if(obj instanceof Date){return new Date(obj )}
  let newobj = {};//new Object()或者new obj.constructor(new obj.constructor这样可以克隆类的实例)  
	for(let key in obj){
     if(obj.hasOwnProperty(key)){
       obj2[key] = deepclone(obj[key])
     }
	}
	return obj
}
```

> 注意：函数、日期格式的数据以及正则在JSON.stringify的时候都会出现问题。函数会直接去掉，正则会变成`{}`，日期格式会变成标准日期格式字符串



 #### 3、面向对象、同步异步

##### 面向对象

```shell
function Foo() {
    getName = function () {	//改了全局的getName
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);			//变量提升时候仅定义
};
function  getName() {
    console.log(5);		//变量提升时候赋值，但是被后面执行时候吧被输出4的赋值覆盖掉
}

Foo.getName()				//2
getName()						//4
Foo().getName()			//1  先Foo()当作普通函数执行，普通函数执行返回this，this指的是window
getName()						//1

//JS运算符的优先级问题；一个是有参数new一个是无参数new；点叫做成员访问；成员访问比无参数的new的优先级更高，所以new Foo.getName()是先Foo.getName()再new
new Foo.getName()		//2		JS运算符的优先级问题；一个是有参数new一个是无参数new；点叫做成员访问
new Foo().getName()	//3		先new创建实例，找实例原型上的
new new Foo().getName();		//3	先new Foo(),生成新实例foo，所以原型上去找getName方法
```

变量提升：在js代码执行分之前会在所有代码执行之前，带var的提前声明，带function的提前声明并定义。

##### 同步异步、事件循环（EventLoop）、事件队列（EventQueue）

```shell
async function async1() {
    console.log('async1 start');
		//⚠️注意：await async2()这里是去执行async2，也就是会立即打印async2，但是要等待它返回结果，只是会影响其后面代码执行，对其console顺序并不影响
    await async2();		
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

先执行主栈，查找看是否有微任务先执行微任务，然后去宏任务中依次执行宏任务。宏任务中如果继续有微任务产生，那么继续放进微任务队列，执行下一个宏任务之前先要执行完所有的微任务。

宏任务：定时器、事件绑定、ajax

微任务：promise、async/await

## 7.2

- 题一

```shell
function A(){
    alert(1);
}
function Fn() {
    A=function(){
       alert(2);
    };
    return this;
}
Fn.A=A;
Fn.prototype={
    A:()=>{
       alert(3);
    }
};
A();											 
Fn.A();										 
Fn().A();									 
new Fn.A();								 
new Fn().A();							 
new new Fn().A();					//报错；因为箭头函数不能被new，因为箭头函数没有原型链，没有constructor
```

- 题二

```shell
var x = 2;
var y = {
  x:3,
  z:(function(x){
    this.x*=x;		//y.x = 9
    x+=2;					//y.x = 11
    return function(n){
      this.x*=n;		//y.x = 44
      x+=3;					//y.x = 47
      console.log(x)		//47
    }
  })(x)
}
var m = y.z
m(4)
y.z(5)		//47*5+3
console.log(x,y,z)
```

- ##### 题三 a=?使得a==1&&a==2&&a==3成立？

见下4

- 题四

```shell
var x = 0,
		y = 1;
function fn(){
  x += 2;
  fn=function(y){
    console.log(y+(--x))
  }
  console.log(x,y)
}
fn(3)    
fn(4)			 
console.log(x,y)			
```

- 题五

```shell
setTimeout(()=>{
  console.log(1)
},20)
console.log(2)
setTimeout(()=>{
  console.log(3)
},10)
console.log(4)
console.time('AA')
for(let i = 0;i<90000000;i++){
  //do sth
}
console.timeEnd('AA')
console.log(5)
setTimeout(()=>{
  console.log(6)
},8)
console.log(7)
setTimeout(()=>{
  console.log(8)
},15)
console.log(9)

```



## 7.5

#### 4、a=?使得a==1&&a==2&&a==3成立？

- 对象和字符串比较，对象toString转化成字符串之后进行比较的
- null==undefined想等，但是和其他值比较不想等
- NaN和任何东西包括自己都不想等
- 剩下都是转化成数字
  - 对象转化数字都是先toString



##### 方法一：对象toString

对象和数字进行比较，对象要先toString转化成数字之后再和数字进行比较。那么可以将a堪称对象，给a一个自己的toString方法

```shell
var a = {
	i:0,
  toString(){						//使用valueOf也可以；所有的先都是调用valueOf
    return ++this.i;
  }
}

if(a==1&&a==2&&a==3){
  console.log('success!')
}
```

##### 方法二：defineProperty数据劫持

对象有一个definedProperty方法，里面有两个方法set和get，可以进行监听对象的属性，有set和get方法对这个属性进行设置和获取。

```shell
var a = 0;
Object.defineProperty(window,'a',{
  get(){
  	//get拦截器中不能再次获取当前的属性，即不可a=a+1;因为获取值再次会触发get，造成死循环，栈内存溢出
    return ++a;
  },
  set(){}
})
if(a==1&&a==2&&a==3){
  console.log('success!')
}
```

##### 方法三：使用shift+数组

shift删除第一项，返回删除的项

```shell
var a = [1,2,3]

a.toString = a.shift()

if(a==1&&a==2&&a==3){
  console.log('success!')
}
```

#### 5、react和vue

##### Vue2.0和Vue3.0双向数据绑定实现原理

- vue2.0中使用的是defineProperty
  - 需要对原始数据进行克隆的（因为defineProperty中get或者set是不能对原数据进行获取或者设置操作的，不然会造成死循环栈溢出）
  - 分别需要给对象中的每一个属性设置监听
  - 并且，一开始vue中data中没有设置，是监听不到的

```shell
var obj = {
  name:''
}
var newObj = JSON.parse(JSON.stringify(obj))
Object.defined=Property(obj,'name',{
  get(){
    return newObj.name;
  },
  set(val){
   	if(val = newObj.name)return;
   	newObj.name = val;
   	observer();					//观察者
  }
})
function observer(){
  
}
```

- vue3.0中使用的是proxy

```shell
let obj = {}
obj = new Proxy(obj,{
  get(target,prop){
    console.log('a')
    return target[prop]
  },
  set(target,prop,val){
    consol.log('b')
    target[prop] = val;
    observer()
  }
})
function observer(){
  
} 
```

##### MVC和MVVM区别

MVC单项数据绑定

MVVM双向数据绑定，数据更改视图变化，视图更改数据变化。

![](https://img-blog.csdnimg.cn/20210705095731550.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 6、跨域问题的产生和解决方案

浏览器的同源策略

##### JSONP

动态创建script标签，把我们要想服务器发送请求的地址赋值给src，通过callback获取服务器返回的数据。只能是get请求。缺陷：

- 不安全
- 有缓存
- 传递的信息大小有限制
- 服务器单独支持

##### iframe跨域解决方案

- window.name
- document.domin
- location.hash
- post message

##### cors跨域资源共享

服务器端配置，客户端正常请求

客户端

```shell
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/*
 * 设置请求传递数据的格式（看服务器要求什么格式）
 * x-www-form-urlencoded
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);

/*
 * 设置请求拦截器 
 * TOKEN校验（JWT）：接收服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
 */
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return config;
}, error => {
    return Promise.reject(error);
});

/*
 * 响应拦截器 
 */
axios.interceptors.response.use(response => {
    return response.data;
}, error => {});

export default axios;
```

服务器

```shell
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "";
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "PUT,POST,GET,DELETE,OPTIONS,HEAD");
    res.header("Access-Control-Allow-Methods", "Content-Type,Content-Length,Authorization, Accept,X-Requested-With");
    req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});
```

##### Proxy跨域

开发使用Proxy，部署用nginx反响代理

#### 7、Vue/React框架中关于组件信息通信

##### Vue

父子通信：属性+发布订阅

- 属性传递
- 发布订阅`$on`、`$emit`
- Provider/Inject上下文，实现祖先跟后代通信
- slot
- `$parent`、`$children`
- Vex（本地存储方案，一刷新没有）
- localStorage（持久化存储）

##### React

父子通信：属性+回调函数

- 属性
- 发布订阅
- React.createContext上下文，实现祖先跟后代通信
- redux、react-redux、mobix、dva（本地存储方案）
- localStorage（持久化存储）

##### session和cookie的区别

服务器设置session，服务器返回给客户端的信息会在响应头中带上set-cookie=sid，客户端拿到之后会将值保存到本地的cookie中，客户端向服务端发送请求的时候，会默认在请求头中带上cookie

#### 8、入门算法（去重&排序）

##### 数组去重

- Set

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

let arr = [...new Set(ary)]

let arr1 = Array.from(new Set(ary))
```

- 遍历

双层遍历

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

for(let i = 0;i<ary.length-1;i++){
  for(let j = i;j<ary.length;j++){
    if(ary[i]===ary[j]){
      ary.splice(i,1)
      i--;
      break;
    }
  }
}

```

indexOf

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

for(let i = 0;i<ary.length-1;i++){
  let item = ary[i],
  		args = ary.slice(i);		
  if(args.indexOf(item)>-1){
  	//方法一：
    args.slice(i,i);
    i--;
    break;
    //方法二：args[i] = null;最后args.filter(item=>{return item !== null})
    //方法三：用最后一项替换，数组长度减一，对比i减一 arg[i]=args[arg.length-1];i--;arg.length--;
    //方法四：另外创建数组操作
  }
}
```

- 键值对方式

遍历，将其一一放入对象，判断对象中是否存在，不存在放入，存在删除数组中值

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
 
let obj = [];
for(let i = 0;i<ary.length;i++){
  obj[i] = i;
  if(typeof obj[item]!=='undefined'){
    ary[i] = ary[ary.length-1]
    i--;
    ary.length--;
  }
  obj[item] = item;
}
obj = null;
```

- 先排序，再去重

sort排序然后和后一项对比去重

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

ary.sort((a,b)=>a-b)
for(let i = 0;i<ary.length-1;i++){
  if(ary[i]===ary[i+1]){
    ary.splice(i,1)
    i--;
    ary.length--;
  }
}

```

sort排序使用正则

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

ary.sort((a,b)=>a-b)
ary = ary.join('@')
let reg = /\d+@\1*/g
let arr = []
ary.replace(reg,(val,group)=>{
  arr.push(Number(group.slice(0,group.length-1)))
})
console.log(arr)
```

> 去重
>
> - ES6的Set
> - 前一项跟后一项比较
> - 新容器
> - 先排序后去重

##### 数组排序

- 冒泡排序

前一项后一项比较，大的放后边

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

for(let i = 0;i<ary.length-1;i++){		//直到倒数第二项
  for(let j = 0;j <ary.length-1-i){
    ary[i]>ary[i+1]?[ary[i],ary[i+1]]=[ary[i+1],ary[i]]:null
  }
}
```

- 插入排序

创建新数组，从后到前遍历，大的插入到这个后面

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
let arr = [];
arr.push(ary[0])

for(let i = 1;i<ary.length;i++){
  for(let j = arr.length-1;j>=0;j--){
    if(ary[i]>arr[j]){
      arr.slice(j,0,ary[i])
      break;
    }
    if(j===0){
      arr.unshift(ary[i])
    }
  }
}

```

- 快速排序

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

function quick(ary){
	if(ary.length<=1){return ary}
  let middleIndex = Math.floor(ary.length/2),
  		middleItem = ary.splice(middleIndex,1)[0];
 let leftArr = [];
 let rightArr = [];
 for(let i = 1;i<ary.length;i++){
   ary[i]<middleItem?leftArr.push(ary[i]):rightArr.push(ary[i])
 }
 return quick(leftArr).concat(middleItem,quick(rightArr))
}

```

#####数组扁平化

- ES6的flat

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

arr = arr.flat(Infinity)
```

- 转化成字符串

  - toString

  ```shell
  let arr = [
      [1, 2, 2],
      [3, 4, 5, 5],
      [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
  ];
  
  arr.toString().split(',').map(item=>{
    return parseFloat(item)
  })
  ```

  - JSON.stringify

  ```shell
  let arr = [
      [1, 2, 2],
      [3, 4, 5, 5],
      [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
  ];
  arr = JSON.stringify(arr).replace(/\[|\]/g,'').split(',').map(item=>{
    return parseFloat(item)
  })
  ```

  - join

  ```shell
  let arr = [
      [1, 2, 2],
      [3, 4, 5, 5],
      [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
  ];
  
  arr = arr.join('|').replace(/\|/g,',').split(',').map(item=>{
    return parseFloat(item)
  })
  
  //或者
  arr = arr.join('').splite(/?:,|\|/g).map(item=>{
    return parseFloat(item)
  })
  ```

- 递归循环验证

`[].concat(...arr)`可以展开一层，但是我们不知道总共有多少层，因此做while判断，如果数组arr中存在数组就去执行这个展开操作，并且递归里面继续有的话一层层进行递归

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

function flatten(arr){
  while(arr.some(item=>Array.isArray())){
    arr = flatten([].concat(...arr))
  }
  return arr;
}
```

##### 斐波那契数列

![](https://img-blog.csdnimg.cn/20210507233617893.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 递归

```shell
function fabonacci(n){
  if(n === 0 || n === 1)return 1;
  if(n>1){
    return fabonacci(n-1)+fabonacci(n-2)
  }
}
```

- 构造斐波那契数列

构造n+1-2个数值，一次push到数组中，直到n。最后返回数组最后一项值

```shell
function fabonacci(n){
	if(n<=1){return 1;}
  let arr = [1,1];
  let i = n+1 - 2;
  while(i>0){
    arr.push(arr[arr.length-2]+arr[arr.length-1]);
    i--;
  }
  return arr[arr.length-1]
}

```

- 递归

```shell
function fabonacci(count){
  fn(count,cur=1,next=1){
    if(count === 0){
    	return 1;
    }else{
      return fn(count-1,next,cur+next)
    }
  }
  return fn(count)
}
```

##### 字节算法

- 输入一个正数N，输出所有和为N的连续正数序列
- 例如：输入15
- 结果：[[1,2,3,4,5],[4,5,6],[7,8]]输入一个正数N，输出所有和为N的连续正数序列例如：输入15结果：[[1,2,3,4,5],[4,5,6],[7,8]]

```shell
function fn(n){
  let middleIndex = Math.ceil(n/2)
  let res = [];
  for(let i = 1;i<=middleIndex;i++){
    for(let j = 2;;j++){				//连续累加次数
      let total = (i+i+j-1)*j/2			//首项加尾项乘以项数除以2
      if(total>n){
        break;
      }else if(total === n){
        res.push(createArr(i,j))
        break;
      }
    }
  }
  return res
}

function createArr(i,j){					//以i 为第一位，长度为j一次递增1的数组
	let arr = new Array(j).fill(null)
	arr[0] = i;
	arr = arr.map((item,index)=>{
    return i+index
	})
	return arr
}
```

## 7.6

#### 9、call和apply

call和apply都是Function原型上的方法，Function的实例都可以调用这两个方法，这两个方法都是用来改变this指向的。区别是，call一个个传参，apply是用数组形式传参。跟他们类似的还有一个方法bind，用于改变this指向，但是bind并没有将函数立即执行，只是预先处理了。只有apply传入的参数用数组形式传递。经过测试，call比apply性能好一些，尤其是参数数据量大的时候

#### 10、编写正则6-16位，包含大小写字母加上数字

- 正向预查：必须满足什么条件。
- 负向预查：必须不满足什么条件。

1、正负向预查都是在正则表达式中设置条件使用的。

```shell
//包含cainiao
var reg1 = /cainiao/
var str1 = 'cainiao8'

//cainiao并且后面必须是8;
var reg1 = /cainiao?=8/
var str2 = 'cainiao8'
var str3 = 'cainiao9'

console.log(reg1.exec(str2))
console.log(reg1.exec(str3))
```

`?=`设置的条件并不参与捕获，只是检查一下后面的字符是否符合要求而已,比如上面`cainiao?=8`返回的是菜鸟而不是`cainiao8`

2、`var reg1 = /(?=^)\d{2}(?=$)/`：两位数字的左边必须是开头，两位数字的右边必须是结尾

`var reg2 = /^\d{2}$/`：以两位数字开头结尾。`?=`表示必须是,`?!`表示不能是。

3、编写正则6-16位，包含大小写字母加上数字

```shell
let reg = /(?!^[a-zA-Z]+$)(?!^[0-9]+$)(?!^[a-z0-9]+$)(?!^[0-9A-Z]+$)^[a-zA-Z0-9]{6-16}$/

//^[a-zA-Z0-9]{6-16}$  6-16位数字 大小写字母
//(?!^[0-9]+$)   	不能全是数字
//(?!^[a-zA-Z]+$)		不能全是大小写字母
```

4、1-10位数字字母下划线组成的字符串，必须有下划线

方式一：正向预查

```shell
let reg = /^\w{1,10}$(?=_+)/

//^\w{1,10}$ 1-10位数字 字母			\w数字字母下划线			\d数字
//(?=_+)  必须有下划线
```

方式二：负向预查

```shell
let reg = /(!?^[a-zA-Z0-9]+$)^\w{1,10}$(?=_+)/

//(!?^[a-zA-Z0-9]+$) 	从开头到结尾不能纯是数字字母
```

5、字符串中包含数字字母，但是必须有下划线

```shell
let reg = /(?=_)\w+/
```

#### 11、实现一个属性选择器$attr

实现一个`$attr(name,value)`遍历

属性位name

值为value的元素集合

```shell
let ary = $attr('class','box')		//找出属性名为class位box的元素的集合
let ary1 = $attr('id','content')		//找出id位content的元素集合

function $attr(property,value){
	let elements = document.getElementByTagName('*'),				//获取页面中所有的标签元素
			arr = [];
	
	elements = Array.from(elements);			//类数组转换成数组
	elements.forEach((item)=>{
    let itemValue = item.getAttribute(property)		//标签中获取属性位property的值
    
    if(property === 'class'){			//class需要特殊处理，因为class中包含多个属性值
    	//验证class值是否前后都是两个空格的包含有值为value的属性，是的话push进去
      new RegExp(/\b+value+\b/).test(itemValue)?arr.push(item):null;
      return;
    }
    
    if(itemValue === value){
      arr.push(item);				//将属性名称为property并且属性值为value的放进结果数组中
    }
	})
	
	return arr;
}
```

#### 12、给英文单词前后加上空格

英文字母汉字组成的字符串，用正则给英文单词前后加上空格

```shell
let str = "test一个测试，just测试一下下smileyqp",
		reg = /\b[a-z]+\b/ig;													// 	\b指单词
str = str.replace(reg,value=>{
  return ' '+value+' ';
}).trim();			//trim()删除首位空格；trimLeft去首；trimRight去尾
console.log(str)
```

#### 13、实现`(5).add(3).minus(2)`使其输出结果为6

- 对象的实例可以调用原型上的方法，可以看出一定是Number实例上的方法。

- 链式调用，说明返回的也一定是Number的实例

实例直接调取的方法，就将方法直接挂在当前实例所处的原型上

```shell
(function(){
	function check(n){
    n = Number(n)
    return isNaN(n)?0:n;			//判断是否是有效数字;isNaN判断是否是非有效数字
	}
  function add(n){
  	n = check(n);		//进行有效性检测处理
    return this+n;
  }
  function minus(n){
    n = check(n);		//进行有效性检测处理
    return this-n;
  }


  ['add','minus'].forEach(item=>{
    Number.prototye[item] = eval(item)
  })
})()
```

#### 14、箭头函数&普通函数

- 语法上箭头函数更加简洁
- 箭头函数内没有this，它里面的this从属于其上下文。使用call和apply都无法改变其this指向
- 箭头函数中没有`arguments`类数组，只有基于`...args`传入的参数集合

```shell
let fn = (...args)=>{
  console.log(args)			//[10,20,30]
}
fn(10,20,30)
```

- 箭头函数不能被new执行因为它没有构造函数也没有原型链（没有this也没有prototype）

```shell
function fn(){
  this.X = 100;
}
fn.prototype.getX = function (){}
let f = new fn;
```

拓展

```shell
题目一：数组上实现一个each方法，实现下面的三个要求

let arr = [10,20,30,'AA'],
		obj = {};
arr = arr.each(function(item,index){
  // this => obj  1、第二个参数不传，this指向window
  if(!isNaN(item)){
    return false; 	//2、如果不是数字，那么返回的是false
  }
  return item*10;		//3、返回结果是啥就把数组中当前项替换掉
}，obj)

//这个方法最后实现的结果是 [100,200,300,false]

//解答
(function(){
	function each(fn,obj){
    this.bind(obj);
    for(let i = 0;i<this.length;i++){
      this[i] = fn(i)
    }
    return this;
	}
  
  Array.prototype.each = each;
})()
```

#### 15、字符串中字母大写转小写、小写转大写

```shell
let str = 'smileyqpTestItSMILEYQP@沛沛$3434'
str.replace(/a-zA-Z/ig,(content)=>{
  return content.toUppperCase() === content?content.toLowerCase():content.toUpperCase()
})
```

或者使用`content.charCodeAt()`，ASCII表中找大写字母的取值范围（65-90）

#### 16、实现字符串查找

实现一个字符串匹配算法，从字符串S中查找是否存在字符串T，若存在则返回第一次所在位置，不存在返回-1（不能基于indexOf以及includes等内置方法）

##### 方法一：遍历查找

```shell
(function(){
  function myIndexOf(T){
    let tlen = T.length,
    		slen = this.length,
    		res = -1;
    if(tlen>slen){return res;}
    for(let i = 0;i <= slen - tlen;i++){
      if(this.slice(i,t.length)){
      	res = i;
      	break;
      }
    }
    return res;
    
  }
  String.prototype.myIndexOf = myIndexOf;
})()
let S = 'yqp27982348张三smile&&&smile',
		T = 'smile'
console.log(S.myIndexOf(T))
```

##### 方法二：正则

```shell
(function(){
  function myIndexOf(T){
  	let reg = new RegExp(T),
  			res = reg.exec(this)		//exec执行一个搜索匹配没有返回null；存在返回结果数组
  	return res===null?-1:res.index
  }
  String.prototype.myIndexOf = myIndexOf;
})()
let S = 'yqp27982348张三smile&&&smile',
		T = 'smile'
console.log(S.myIndexOf(T))
```

#### 【re】17、验证输入的是否是一个正确的网址

协议

域名

路径

问号传参

哈希

```shell
let reg = /^((http|https|ftp):\/\/)$/ig
```



#### 18、原型链

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
  cosnole.log(4)
}

Foo.a();	 			//4
let obj = new Foo();			//改变了Foo对象上的a以及里面的this.a指向obj,挂载私有方法		
obj.a();					//2
Foo.a(); 		//1
```

#### 【re】19、图片懒加载



#### 20、数组交集

##### 两层遍历

```shell
let nums1 = [1,2,3,2]
let nums2 = [2,2,2]

function fn(nums1,nums2){
	let res = [];
  for(let i = 0;i<nums1.length;i++){
    for(let j = 0;j<nums2.length;j++){
      if(nums1[i]===nums2[j]){
        res.push(nums[i])
        nums2[j] = null;
        break;
      }
    }
  }
  return res;
}

```

##### 一层遍历indexOf

```shell
let nums1 = [1,2,3,2]
let nums2 = [2,2,2]

function fn(nums1,nums2){
	let res = [];
  nums1.forEach((item)=>{
    let n = nums2.indexOf(item)
		if(n>-1){
      nums2.splice(n,1)
      res.push(item)
		}
  })
  return res;
}
```

#### 21、旋转数组

给定一个数组，将数组中的元素向右移k个位置，其中k是非负数，例如：

输入：[1,2,3,4,5,6,7]和k=3

输出：[5,6,7,1,2,3,4]

##### 1、splice 直接截取后面key位数，拼接到前面

```shell
(function(){
  function rotate(key){
  	if(key <=0 || this.length%key===0){return this}
  	if(key > this.length){key = this.length%key}
  	return this.splice(this.length-key,key).concat(this)
  }
  Array.prototype.rotate = rotate;
})()
let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		
```

##### 2、slice

```shell
(function(){
  function rotate(key){
  	if(key <=0 || this.length%key===0){return this}
  	if(key > this.length){key = this.length%key}
  	return this.slice(-key).concat(this.slice(0,this.length-key))
  }
  Array.prototype.rotate = rotate;
})()
let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		
```

##### 3、最后一项放到开头执行key次。pop和unshift

```shell
(function(){
  function rotate(key){
  		if(key <=0 || this.length%key===0){return this}
      if(key > this.length){key = this.length%key}
      for(let i = 0;i < key;i++){
        this.unshift(this.pop());		//pop删除最后一项，unshift从头部插入第一项
      }
  }
  Array.prototype.rotate = rotate;
})()
let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		
```

#### 22、函数柯里化思想

##### 函数柯里化：就是预先处理的思想（利用闭包机制。闭包的量大作用：保存与保护）。利用闭包的保护作用，存储一些变量值，当要使用的时候再使用。

实现：点击时候，this指向修改成obj，并传入事件对象以及两个参数100，200

```shell
//题目部分：
let obj = {
  name:'OBJ'
}

function fn(...arg){
  console.log(this,arg)
}

document.body.onclick = fn;		//this=>BODY
document.body.onclick = function(ev){
//=>ev 事件对象：给元素的某个事件绑定方法，当事件触发会绑定这个方法，并且把当前事件的相关信息传递给这个函数事件对象
}

//解答部分：
(function(){
  function mybind(context=window,...outargs){
		const _this = this;
		return function(...innerArgs){
      _this.call(context,...outargs,...innerargs)
		}
	}
  Function.prototype.mybind = mybind;
})()

//调用
let obj = {
  name:'OBJ'
}
document.body.onclick = fn.myBind(obj,100,200)
```

##### 最简单的函数柯里化demo

```shell
function fn(a){
	//第一次调用，形成闭包，将a存储起来
  return function(b){
    return a+b
  }
}

fn(100)(200);		//第一次执行完成之后，作用域销毁，但是由于形成闭包，变量值a被存储了起来
```

##### 【clould review】经典案例

```shell
请实现一个add函数实现以下功能
add(1)	//1
add(1)(2)	//3
add(1)(2)(3)	//6
add(1)(2)(3)(4)	//10
add(1)(2,3)	//6
add(1,2)(3)	//6
add(1,2,3)	//6

//解答：
function currying(fn,length){
	length === fn.length||length;
  return function(...args){
    if(args.length>=length){
      return fn(...args)
    }else{
      return curring(fn.bind(null,...args),length = length - fn.length)
    }
  }
}

let add = currying((...args)=>{
  return eval(args.join('+'))
},5)   //这个后面的5是总共要求几个字数的和，比如这里求五个的。这里是不管几次调用函数，只是参数的数量
```

#### 23、手写new

```shell
function Dog(name){
  this.name = name;
}
Dog.prototype.bark = function(){
  console.log('bark')
}
Dog.prototype.sayName = function(){
  console.log('my name is'+this.name)
}


要实现一个_new方法实现以下：
let dog = _new(Dog,'dooooog')
dog.sayName()
dog.bark()
```

- 创建空对象
- 对象原型链指向传入对象的原型链
- 代码执行
- 返回新对象

```shell
function _new(Fn,...args){			//Fn当前要new的类，args给构造函数传递的参数
  let obj = Object.create(Fn.prototype)	//创建原型链指向Fn.prototype的空对象
  //let obj = {};
  //obj.__proto__ = Fn.prototype;
  Fn.call(obj,...args)
  return obj
}
```













































































