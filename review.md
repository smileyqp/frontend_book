# Basic：

### 第一遍复习（内容同README）

## 6.28

#### 1、基础BASIC

##### 1、html5

- 语义化标签：header、footer、section….
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

#### 24、数组合并

- 题一：

```shell
let ary1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
let ary2 = ['A','B','C','D']
//合并后数组为["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]

ary2 = ary2.map(item=>{return item+'Z'})
let result = ary1.concat(ary2).sort((a,b)=>a.localeCompare(b)).map((item)=>{
  return item.replace('Z','')
})
console.log(result)		//["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]
```

- 题二：

```shell
let ary1 = ['D1','D2','A1','A2','C1','C2','B1','B2']
let ary2 = ['B','A','D','C']
//要求合并输出的数组为["D1", "D2", "D","A1", "A2", "A","C1", "C2", "C","B1", "B2", "B"]

//遍历ary2中的值往ary1中插入，找到最大的index，插入其后
let key = 0;
for(let i = 0;i < ary2.length;i++){
  for(let j = 0;j<ary1.length;j++){
    if(ary1[j].includes(ary2[i])){
      key = i;
    }
  }
  ary1.splice(key+1,0,ary2[i])
}
```

## 7.7

#### 25、闭包

```shell
for(var i = 0;i<=10;i++){
  setTimeout(()=>{
    console.log(i)
  },10000)
}
//输出10次10，因为不是私有变量。setTimeout是异步的
```

```shell
//let
for(let i = 0;i<=10;i++){		//let定义的变量是块级作用域变量
  setTimeout(()=>{
    console.log(i)
  },10000)
}
```

```shell
//闭包
for(var i = 0;i<=10;i++){
  setTimeout(((i)=>{
    console.log(i)
  })(i),10000)
}
```

```shell
//闭包
for(var i = 0;i<=10;i++){		
  (function(i){
    setTimeout(()=>{
      console.log(i)
    },10000)
  })(i)
}
```

```shell
//使用bind
function (i){
  console.log(i)
}
for(var i = 0;i<=10;i++){		
  setTimeout(fn.bind(null,i),10000)
}
```

#### 26、匿名函数

- 匿名函数如果设置了函数名，在其外部是不能用这个函数名调用的
- 在这个匿名函数内部可以调用，也就是当前函数本身。但是这个匿名函数名称在这个函数内部就类似于一个const声明的常量，不能进行修改赋值。（严格模式下会报错，非严格模式下不会报错）

```shell
let fn = function AAA(){
  console.log(AAA)		//非严格模式下返回函数本身
}
```

```shell
var b = 10
(function b(){
  b = 20
  console.log(b)		//此时b相当于一个常量不能被改变；
})()
console.log(b)
```

```shell
va b = 10;
(function(){		//去掉匿名函数的名称b之后，里面的b就变成全局的了
  b = 20
  console.log(b)	//20
})()
console.log(10)		//20
```

现在要让上面的匿名函数中的b的值log变成20，并且全局b仍然是10，怎样实现？将其变成函数自己内部变量，传入的参数(形参)或者内部声明

```shell
va b = 10;
(function(){		
  let b = 20			//用var也可以
  console.log(b)	//20
})()
console.log(10)		//10
```

```shell
va b = 10;
(function(b){		
  b = 20		
  console.log(b)	//20
})()
console.log(10)		//10
```

#### 27、var a = ?`使得`a==1&&a==2&&a==3`

##### 拓展==

==比较如果左右两边数据类型不一样，那么久先转化成一样的再进行比较

- `{}=={}`两个对象比内存地址
- `null==undefined`为true
- `NaN==NaN`为false。NaN与任何都不想等，包括自身
- `[12]==12`为true。对象和字符串进行比较，先将对象toString转化成字符串再进行比较
- 其他都转换成数字再比较
  - 对象转化成数字都是先toString再转化成数字
  - 字符串转化成数字只要有一个非字符串就是NaN
  - 布尔转数字：true =>1   false=>0
  - null转化成0,，但是null==0为false
  - undefined转化成NaN

##### var a = ?`使得`a==1&&a==2&&a==3`

- a为object：toString

```shell
var a = {
	n:0,
  toString(){
    return ++this.n;
  }
}
console.log(a==1&&a==2&&a==3)
```

- a为数组：toString = shift

```shell
var a = [1,2,3]
a.toString = a.shift
console.log(a==1&&a==2&&a==3)
```

- get和set方法劫持

```shell
let n = 0;
Object.defineProperty(window,'a',{
  get:function(){
    return ++n;
  }
})
console.log(a==1&&a==2&&a==3)
```

```shell
Object.defineProperty(window,'a',{
  get:function(){
  	//this =>window.a
  	return this.val?++this.val:this.val=1;
  }
})
console.log(a==1&&a==2&&a==3)
```

#### 28、对象调用push方法

```shell
let obj = {
  2:3,
  3:4,
  length:2,
  push:Array.prototype.push
} 

obj.push(1)			//obj[obj.length] = 1 即 obj[2] = 1 并且obj.length++ length 3
obj.push(2)			//obj[obj.length] = 2 即 obj[3] = 2	并且obj.length++ length 4
console.log(obj)

//所以obj的值
obj =  {
  2:1,
  3:2,
  length:4,
  push:Array.prototype.push
}

//数组push方法原理
Array.prototype.push = function(val){
   this[this.length] = val;
   return this.length;	//现在这个长度是数组增加1之后了的长度
}

//push往数组末尾新增一个元素，返回的是数组的长度
```

#### 29、对象转数组

![](https://img-blog.csdnimg.cn/20210513153531948.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
//要求得到[2323, null, null, 3492, null, null, null, 2673, null, null, null, null]
```

- 方法一：`new Array(23).fill(null)`

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
let arr = new Array(12).fill(null)
arr = arr.map((item,index)=>{
  return obj[index+1] ? obj[index+1] : null;
})
```

- 方法二：设置obj的长度，截取后面12个

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
//Array.from(obj) 后的值[undefined, 2323, undefined, undefined, 3492, undefined, undefined, undefined, 2673, undefined, undefined, undefined,undefined]
obj.length = 13;
Array.from(obj).slice(1).map((item)=>{
  return item ? item :null;
})
```

- 方法三：Object.keys遍历object的key

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
//Object.keys(obj)获取obj中的所有属性名，以数组的方式返回
let arr = new Array(12).fill(null)
Object.keys(obj).forEach((key)=>{
  arr[parseInt(key)-1] = obj[key]
})
```

#### 30、值类型和引用类型

深拷贝

- 值类型

```shell
let a = 100;
let b = 1;
a = 200;
console.log(b) //100
```

- 引用类型

```shell
let a = {age:10};
let b = a;
b.age = 20;
console.log(a.age)	//20
```

- 常见值类型
  - Number
  - String
  - Boolean
  - undefined
  - Symbol

- 常见引用类型
  - Object
  - Array
  - Function特殊引用类型，不用域存储数据。所以没有拷贝、赋值函数一类说法
  - null特殊的引用类型，指向的地址为空地址

```shell
const obj1 = {x:100,y:200}
const obj2 =obj1;
let x1 = obj1.x;		//100 	x1值类型
obj2.x = 101;				//改了引用地址的x的值
x1 = 102;
console.log(obj1)	 {x:101,y:200}
```

#### 31、typeof运算符（变量类型）和深拷贝

##### typeof运算符

- 判断所有值类型
- 判断是否函数
- 判断引用类型（不可细分，null也是特殊的Object）

```shell
let a;						 						//'undefined'
const str = 'smileyqp'				//'string'
const n = 100									//'number'
const b = true								//'boolean'
const s = Symbol('s')					//'symbol'

typeof console.log						//'function'
typeof function(){}						//'function'

typeof null										//'object'
typeof {a:1,b:0}							//'object'
typeof [1,2,3,4]							//'object'
```

##### 深克隆

```shell
function deepClone(obj = {}){
  if(typeof obj !== 'object'||obj === null){
    return obj;
  }
  let result;
  if(obj instanceof Array){			//根据传入参数的类型初始化返回的是对象还是数组
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result;
}
```



#### 32、变量计算类型转换

##### 字符串拼接

```shell
const a = 100+10;		//110
const b = 100+'10';	//10010
const c = true+'10';	//true10
```

##### ==

```shell
null == undefined 							//true
NaN == NaN 											//false
Symbol('1') == Symbol('1')			//false
{} == {}												//比较内存地址
```

其他都转化成数字进行比较。字符串转化成数字比较的时候，只要含有非数字的字符都是NaN

##### truely变量和falsely变量

- truely变量：两次非运算得到true
- falsely变量：两次非运算得到false

![](https://img-blog.csdnimg.cn/20210513182550663.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

## 7.8

#### 33、class和继承

```shell
class Person{
  constructor(name,age){
    this.name = name
    this.age = age;
  }
  eat(){
    console.log(this.name+'eat food')
  }
}

class Girl extends Person(){
  constructor(name,age){
    super(name,age)
  }
  dance(){
    console.log(name+'dance')
  }
}

let smileyqp = new Girl('smileyqp',20)

smileyqp.eat()			//smileyqp eat food
smileyqp.__proto__.eat()			//报错，相当于在Person上去调用eat而name没有定义
```

##### instanceof

- instanceof可以去判断引用类型
- Object是所有class的父类

```shell
smileyqp instsnceof Girl;
smileyqp instanceof Person;
smileyqp instanceof Object;

[] instanceof Array;	//true
{} instanceof Object;		//true
[] instanceof Object;		//true
```

#### 35、原型和原型链

- 每个class都有显式原型`prototype`
- 每个实例都有隐式原型`__proto__`
- 实例的`__proto__`都指向class的`prototype`

```shell
//隐式原型和显式原型（案例demo接上个题目的案例）
console.log(smileyqp.__proto__)
console.log(Girls.prototype)
console.log(smileyqp.__proto__ === Girl.prototype)		//true
```

##### 获取实例的属性和方法

- 自身的属性和方法上着
- 如果找不到就在`__proto__`上查找

##### 原型链

![](https://img-blog.csdnimg.cn/20210514111816793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
smileyqp.__proto__ === Girl.prototype;
Girl.__proto__ === Person.prototype;
Person.__Proto__ === Object.prototype;
```

##### instanceof

顺着原型链进行查找，有返回true没有返回false

##### 原型和原型链相关问题回答

- 如何判断一个变量是否是数组（instaceof）
- 手写一个jQuery，考虑插件性和扩展性

##### 【re】手写jQuery

```shell
class jquery{
  constructor(selector){
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for(let i = 0;i < length;i++){
      this[i] = result[i]
    }
    this.length = length;
    this.selector = selector;
  }
  get(index){
    return this[index]
  }
  each(fn){
    for(let i =0;i<this.length;i++){
      const elem  = this[i];
      fn(elem)
    }
  }
 	on(type,fn){
    return this.each(elem=>{
      elem.addEventListener(type,fn,false)
    })
  }
}

const $p = new jQuery('p')
$p.get(1)
$p.each(elem=>console.log(elem.nodeName))
$p.on('click',()=>{alert('click')})
```

```shell
//插件机制
jquery.prototype.dialog = function(info){
  alert(info)
}

//造轮子
class myJquery extends jquery{
  constructor(selector){
    super(selector)
  }
   //扩展自己的方法
  addClass(className){
    
  }
  style(data){
    
  }
}
```

#### 36、作用域和闭包

##### 作用域和自由变量

- 作用域：变量的合法使用范围

- 作用域分类：

  - 全局作用域
  - 函数作用域
  - 块级作用域（ES6新增）

  ```shell
  if(true){
    let x = 100;		//这里使用let声明的变量或者const声明的常量，作用域都是这个块之中
  }
  console.log(x)			//这里会报错
  ```

##### 自由变量

- 自由变量：一个变量在当前的作用域没有声明但是被使用了
- 向上级作用域一层层寻找，直到找到为止
- 如果全局作用域都没找到的话就会报错

![](https://img-blog.csdnimg.cn/20210514144022202.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 闭包

```shell
//函数作为返回值，返回之后再执行
function create(){
  let a = 100;
  return function(){
    console.log(a)
  }
}
let fn = create()
let a = 200;
fn()			//100
```

```shell
//函数作为参数，通过参数传入之后再执行
function print(fn){
  let a = 200;
  fn()
}
let a = 100;
function fn(){
  console.log(a)
}
print(fn);	//100
```

自由变量值是在函数定义的地方一层层向上查找，并非在执行时候进行查找

#### 37、this

##### this出现的场景

- 当作普通函数被调用：返回window
- apply、bind、call：传入什么就绑定什么
- 作为对象方法被调用：对象本身
- 在class方法中调用：当前实例本身
- 箭头函数：找上级作用域的this

this的取值是函数调用的时候决定的不是函数定义的时候决定的

```shell
function fn1(){
  console.log(this)
}
fn1();	//window

fn1.call({x:100})		 	//{x:100}
	
const fn2 = fn1.bind({x:200})
fn2();			//{x:200}
```

箭头函数中没有this，this指向它上级函数用于的this

```shell
//demo1
const zhansan = {
  name:'zhangsan',
  sayHi(){
    console.log(this)		//this当前对象
  },
  wait(){
    setTimeout(function(){
      console.log(this)		//this window
    })
  }
}

//demo1
const zhangsan = {
  name:'zhangsan',
  sayHi(){
    console.log(this)		//当前对象
  },
  waitAgain(){
    setTimeout(()=>{
      console.log(this)		//当前对象
    })
  }
}
```

##### 手写bind函数

- 改变this指向
- 返回方法：方法中调用fn并传入参数

```shell
(function(){
  function mybind(){
  	//argujments将参数拆解为数组。arguments不是数组只是类数组
    const args = Array.prototype.slice.call(arguments)
    
    const t = arguments.shift();		//获取第一项this
    
    const self = this;		//fn1.bind()zh哦你给的fn1，即调用这个方法的方法
    
    return function(){
      self.apply(t,args)
    }
  }
  Fuction.mybind = mybind;
})()
```

##### 闭包的应用

- 保存
- 保护

缓存小插件:简单的cache工具，只能通过get和set堆数据进行读取和写入操作

```shell
function createCahe(){
  const data = {};
  return {
    set:function(key,val){
      data[key] = val;
    },
    get:function(key){
      return data[key]
    }
  }
}

//隐藏不被外界访问,是指c只能通过set，get设置获取。只提供api访问，其他方式改不了
const c = createCache();
c.set('name','smileyqp')
c.get('name')		//smileyqp
```

#### 38、同步和异步

```shell
//异步
console.log(1)
setTimeout(()=>{
  console.log(2)
},1000)
console.log(3)

//同步
console.log(1)
alert(2)
console.log(3)
```

##### 同步和异步的区别

- 长生同步异步的原因：基于js的单线程的语言（同时只能做一件事）
- 同步会阻塞代码执行
- 异步不会阻塞代码执行

##### 手写用Promise加载一张图片

```shell
function loadImg(src){
  return new Promise((resolve,reject)=>{
    let img = document.createElement('img')
    img.onload = function(){
      console.log('loaded')
      resolve(img)
    }
    img.onerror = function(){
      console.log('error')
      reject(new Error(`图片加载失败${src}`))
    }
    img.src = src
  })
}
loadImg(url="http://....").then(img=>{
  console.log(img.width)
  return img
}).then(img=>{
  console.log(img.height)
}).cach(error => {
  console.log(error)
})

//return可以返回两种情况：Promise实例；普通对象
```

##### 异步的使用场景

- 网络请求（图片加载也是异步的、点击事件等也是异步的）
- 定时任务

##### Promise主要是串行方式解决回调地狱嵌套的问题

```shell
function getData(){
  return new Promise((resolve,reject)=>{
    $.ajax({
      url,
      success(data){
        resolve(data)
      },
      error(err){
        reject(err)
      }
    })
  })
}
```



### 回顾总结

- 内容回顾
- 题目回顾
- 知识点回顾

##### 内容回顾

- 变量类型和计算
- 原型和原型链
- 作用域和闭包
- 异步和单线程

##### 题目回顾

- typeof能判断哪些类型
- 何时使用===何时使用==
- 值类型和引用类型的区别
- 手写深拷贝

##### 知识点回顾

- 值类型vs引用类型、堆栈模型、深拷贝
- typeof运算符
- 类型转换，truely和falsely变量

##### 原型和原型链

- 题目
  - 如何准确判断一个变量是否是数组instanceof
  - 手写一个jquery插件，考虑插件和扩展性
  - class的原型本质怎样理解（原型和原型链）

- 知识点
  - class和继承，结合手写jquery的示例来理解
  - intanceof表现和本质
  - 原型和原型链：图示和执行规则

##### 闭包和作用域

- 题目
  - this不同的应用场景如何取值？this在函数执行的时候确定，函数定义的时候不能确定
  - 手写bind函数
  - 实际开发中遇到的场景：比如说cache、隐藏数据只提供api进行操作和访问

- 知识点
  - 作用域和自由变量
  - 闭包两种常见的方式&自由变量的查找规则
  - this

##### 异步和单线程

- 题目
  - 异步和同步的区别是什么
  - 手写Promise加载一张图片
  - 前端使用异步的场景（ajax请求、setTimeout、事件）

- 知识点
  - 单线程和异步本质、异步和同步的区别
  - 前端异步使用的场景（网络请求&定时任务）
  - Promise解决callback hell问题

## 7.9

### JS Web API

- DOM
- BOM
- 事件绑定
- ajax
- 存储

#### 1、DOM操作（Document oBject Model）

##### 题目

- DOM属于哪种数据结构
- DOM操作常见的API
- attr和property的区别
- 一次性插入多个DOM节点考虑性能

##### 知识点

- DOM的本质是什么

  - html语言解析出来的一棵树。基于树形结构。

- DOM节点操作

  - 获取节点
    - getElementById
    - getElementByClassName
    - getElementByTagName
    - document.querySelectorAll
  - attribute：直接修改dom结构，直接对标签有影响

  ```shell
  const pList = ducument.querySelectorAll('p')
  const p = pList[0]
  
  p.getAttribute('data-name')
  p.setAttribute('data-name','smileyqp')
  p.getAttribute('style')
  p.setAttribute('style','font-size:30px')
  ```

  - property：修改js变量的属性，设置不会对标签有什么影响

- DOM结构操作

  - 新增/插入操作
  - 获取子元素列表，获取父元素
  - 删除子节点

```shell
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

//新建节点
const newP = document.createElement('newP')
newP.innerHTML = 'this is newP'

//插入节点
div1.appendChild(newP)

//移动节点
div2.appendChild(p1)	//将一个已经存在于dom中的元素append到另外一个中去，那么就是将节点移动过去的

//获取父元素
console.log(p1.parentNode)

//获取子元素列表;类似乎组转化成数组Array.prototype.slice.call，然后过滤类型为1，即p的元素节点
div1.childNodes();		
const div1childNodesP = Array.prototype.slice.call(div1.childNodes()).filter((child)=>{
  if(child.nodeType === 1){
    return true;
  }
})

//删除子节点
div1.removeChild(div1childNodesP[0])
```

- DOM性能

  - 缓存dom查询

  ```shell
  //不做缓存
  for(let i = 0;i < document.getElementN=ByTagName('p').length;i++){
    
  }
  //缓存
  const plist = document.getElemnetBtTagName('p')
  const plen = pliost.length;
  for(let i = 0;i<plen;i++){
    
  }
  ```

  - 将频繁的操作改成一次操作(创建为难片段一次性插入)

  ```shell
  const listNode = document.getElementByTagName('list')
  
  //创建文档片段createFragment
  const frag = document.createFragment();
  
  for(let i = 0;i <10 ;i++){
    const li = document.createElement('li')
    li.innerHTML = 'list item'+i;
    frag.appendChild(li)
  }
  
  listNode.appendChild(frag)
  
  ```

  

## 7.10

#### 2、BOM

- 如何识别浏览器类型
- 分析拆解url的各个部分

##### 知识点

- navigator：浏览器信息
- screen：屏幕信息
- location：地址信息
- history：前行后退信息

##### navigator和screen

```shell
//navigator
const ua = navigator.userAgent;		//获取当前浏览器的信息
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

//screen
onsole.log(screen.width)
cobsole.log(screen.height)
```

##### location和history

```shell
//location
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)		//获取url传的参数
console.log(location.hash)		//获取哈希，也就是#后面的内容

//history
history.back();
history.forward()
```

#### 3、事件

##### 知识点

- 事件绑定
- 事件冒泡
- 事件代理

##### 题目

- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
  - 基于dom树形结构
  - 事件会顺着触发元素往上冒泡
  - 应用场景：事件代理
- 无限下拉图片列表，如何监听每个图片的点击
  - 事件代理
  - 通过`e.target`来获取触发元素
  - 用matches来判断是否触发元素

##### 知识点

- 事件绑定

```shell
const btn = document.getElementById('btn1')
btn.addEventListener('click',event=>{
  console.log('click')
})
```

```shell
//普通绑定：简易通用的事件绑定函数；详细通用事件绑定函数在下面将会提到
function bindEvent(elem,type,fn){
  elem.addEventListener(type,fn)
}

const a = document.getElementById('link1')
bindEvent(a,'click',e=>{
  e.preventDefault();		//阻止默认行为；比如组织链接的点击跳转
  console.log(e.target);	//获取点击的元素
  alert('this is aaa')
})
```

- 事件冒泡
  - 例如：在body上添加事件，如果点击它子元素，那么都会冒泡到body上去
  - `stopPropagation`可以阻止冒泡

![](https://img-blog.csdnimg.cn/20210517152222915.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 事件代理（基于事件冒泡）
  - 事件代理： 不好挨个去绑定事件，就绑定事件到它父标签上。
  - 事件代理是基于事件冒泡来做的，有了事件冒泡的机制才能在这个机制上去实现代理。
  - 事件代理的场景：一般是通过某种形式，比如图片列表的无限下拉加载。可能并不能知道容器里面到底有多少个图片标签，也没法一个个去绑定事件。这个时候我们就可以通过冒泡去获取事件，我们就可以通过一些方式去拿到这个点击的图片 

![](https://img-blog.csdnimg.cn/20210517153922677.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



##### 事件绑定函数（考虑代理）

![](https://img-blog.csdnimg.cn/20210517162455366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 综合以上两种（加上冒泡的情况）

```shell
//代理绑定
function bindEvent(elem,type,selector,fn){		//selector要筛选的触发元素选择器
  if(fn == null){		//说明传的是三个参数；也就是知识普通绑定，第三个参数就是fn
    fn = selector;
    selector = null;
  }
  elem.addEventListener(type,event=>{
    //event.preventDefault();
    const target = event.target;
    if(selector){		//有selector也就是代理绑定（存在冒泡情况）
      if(target.matches(selector)){		//判断当前元素是否符合我们传入的这个选择器
        fn.call(target,event)
      }
    }else{		//没有selector，普通绑定情况
      fn.call(target,event)		//因为需要fn的this指向这个元素，所以要call绑定一下当前触发的元素
    }
  })
}


//代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3,'click','a',function(event){		//注意：这里不能用箭头函数，因为里面this指向
  event.preventDefault();
  alert(this.innerHTML)
})
```

#### 4、ajax

- XMLHttpRequest

```shell
//手写简易的ajax
//get请求；post请求差不多
const xhr = new XMLHttpRequest();
xhr.open('GET','data/test.json',true);		//true的意思是异步请求
xhr.onreadystatechange = function(){
  if(xhr.readystate === 4){
    if(xhr.status === 200){
      alert(xhr.responseText)
    }else if(xhr.status === 404){
      console.log('404 not found ')
    }
  }
}
xhr.send(null)
```

- 状态码

![](https://img-blog.csdnimg.cn/2021051717113417.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210518093144992.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

301永久重定向；302临时重定向；304资源未改变

404资源找不到；403客户端没有权限

##### 同源策略

- ajax浏览器要求当前网页和server端必须同源
- 同源：协议 域名 端口 必须一致
- 加载 图片、css、js可以无视同源策略
  - `<img src=""/>`可以做统计打点，可使用第三方统计服务
  - `<link src=""/>`和`<script src=""></script>`可以使用CDN，CDN一般都是外域
  - `<script src=""></script>`可以实现JSONP

##### 跨域

- `<script></script>`可以绕过跨域限制
- 服务器可以任意动态拼接数据返回
- 所以，`<script></script>`可以获得跨域数据，只要服务端愿意返回

![](https://img-blog.csdnimg.cn/20210518100723124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/2021051810101435.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### CORS 服务器设置http header

- 服务器允许跨域

![](https://img-blog.csdnimg.cn/20210518101438223.png)

##### ajax的常用插件

- jquery
- fetch
- Axis

#### 5、存储

##### 题目

- 描述cookie、localstorage、sessionStorage的区别
  - 容量
  - API易用性
  - 是否跟随http 请求发出去 

##### 知识点

- cookie
- localstorage和sessionstorage

##### cookie

- 本身用于浏览器和server通信
- 被"借用"来本地存储
- 可用`document.cookie=... `来修改
- 存储大小，最大4kb
- http请求时候需要发送到服务端，增加请求数据量
- 只能用`document.cookie=… `来修改，太过简陋

 ##### localstorage和sessionstorage

- html5专门为存储而设计，最大可以存储5M
- API简洁易用，用setItem和getItem
- 不会随着http请求被发出去

#### 6、开发环境

- git
- 调试工具
- 抓包
- webpack babel
- linux常用命令

##### git

- 最常用的代码版本管理工具
- 大型项目多人协作，必须使用git

##### chrome调试工具

- elements
- console
- debugger
- network
- application



##### 抓包

- 移动端h5页，查看网络请求
- win一般用fiddler
- mac一般用charles
- 抓包过程：
  - 手机电脑连同一个局域网
  - 手机代理到电脑上
  - 手机浏览网页即可抓包
- 查看网址请求
- 网址代理 
- https

##### webpack和babel

- ES6模块化，浏览器暂不支持
- ES6语法，浏览器不完全支持
- 压缩代码、整合代码，让网页加载更快

##### linux

- 公司上线的服务器一般是linux
- 测试机也一致，linux
- linux基础命令

##### 运行环境介绍

- 运行环境即浏览器（server 端有nodejs）
- 下载网页代码，渲染出页面，期间执行若干js
- 要保证在浏览器中：稳定且高效

##### 运行环境涉及前端内容

- 网页加载过程
- 性能优化（体验优化）
- 安全 

#### 7、页面加载和渲染的过程

##### 题目

- 从输入url到渲染出页面的整个过程（见下：资源形式、加载过程、渲染过程）
  - 下载资源：各个资源类型、下载过程
  - 渲染页面：结合html、css、js图片等
- `window.onload`和`DOMContentLoad`的区别
  - window.onload页面全部加载完成包括图片
  - DOMContentLoaded是dom渲染完成即可，此时图片视频可能还没有加载完 

```shell
document.addEventListener('load',()=>{
  console.log('window loaded')
})

document.addEventListener('DOMContentLoaded',()=>{
  console.log('dom loaded')
})
```

##### 知识点

- 加载资源的形式
- 加载资源的过程
- 渲染页面的过程

##### 资源形式

- html代码
- 媒体文件，如图片视频等
- js、css代码

##### 加载过程

- DNS解析：域名=>IP地址
- 浏览器更具IP地址向服务器发起http请求
- 服务器处理http请求，并返回给浏览器 

##### 渲染过程

- 根据html生成dom树
- 根据css生成cssom（css对象模型）
- 将dom树和cssom整合形成render tree（渲染树：像是dom树中挂了css属性）
- 根据render tree渲染页面
- 遇到`<script>`则暂停渲染，优先加载并执行js代码完成再继续（js进程和渲染进程共一个线程。script中可能有代码改了之前执行的结果，所以遇到script先暂停渲染）

##### 为何建议把css放head中？

- 防止重复渲染（本来按照没有css的默认样式渲染，完成之后，又发现有样式又重新结合这个cssom进行重新生成render tree重新渲染。并且网速慢的时候对用户可能会出现两种样式切换）

##### 为何建议把script放到最后？

- js没有放到最后就会导致页面渲染的过程比较长。因为js会暂停渲染。我们是期望先渲染完成再修改

##### 图片渲染

- 图片渲染并不会阻塞dom渲染，只不过可能先空着等图片加载完成之后显示

#### 8、性能优化

##### 性能优化原则

- 多使用内存、缓存或者其他方法
- 减少CPU计算量、减少网络加载耗时
- （适用于所有编程性能优化、空间换时间）

##### 从哪些方面入手

- 加载更快
  - 减少资源体积：压缩代码
  - 减少访问次数：合并代码（js、css、雪碧图）、ssr服务端渲染（数据一起给前端）、缓存
  - 使用更快的网络：CDN（根据地域做静态文件访问服务）
- 渲染更快
  - css放进head中，js放到body最下面
  - 尽早执行js，用DOMContentLoad去触发
  - 懒加载(图片懒加载、上滑加载更多)
  - 对dom查询进行缓存
  - 频繁dom操作合并到一起插入都没结构
  - 节流throttle和防抖debounce （渲染更加流畅）

##### 示例

- 资源合并

![](https://img-blog.csdnimg.cn/20210518173127797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



- 缓存
  - 静态资源加hash后缀，根据文件内容计算哈希
  - 文件内容不变、则哈希不变，那么url不变
  - url和文件不变，则会自动触发http缓存机制返回304（减少了资源请求）

![image-20210518173205903](/Users/yqp/Library/Application%20Support/typora-user-images/image-20210518173205903.png)

- SSR（server side render）
  - 服务端渲染：将网页和数据一起加载一起渲染
  - 非SSR（前后端分离）：先加载网页、再加载数据、再渲染数据
  - 早先的JSP、PHP、APS都属于ssr，现在的react  vue ssr
- 懒加载

![](https://img-blog.csdnimg.cn/20210518174016768.png)

- 缓存dom查询

![](https://img-blog.csdnimg.cn/20210518174058216.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 多个dom操作合并一起插入dom结构

![](https://img-blog.csdnimg.cn/20210518174153235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 尽早开始js执行
  - 在dom渲染结束之后就可以开始js执行没必要等到图片、视频等多媒体资源都加载完成之后再去执行

![](https://img-blog.csdnimg.cn/20210518174320303.png)



#### 9、函数节流&防抖

- 函数节流（上次与下次的函数出发的像个时间是一定的）

一个函数执行完成一次之后，只有大于哦这个函数的执行中期，才会执行第二次。有些会频繁出发的函数，比如说：拖拽场景

```shell
function throttle(fn,delay){
	var lastTime = 0;
  return function(){
    var curTime = Date.now()
    if(curTime = lastTime > delay){
      fn()
      lastTime = curTime;
    }
  }
}
```

- 函数防抖

频繁触发的函数，规定时间之内，只能触发最后一次（每次出发回重置计时器）

```shell
function debounce(fn,delay){
  var timer = null;
  return function(){
    if(timer){timer = null;}
    timer = setTimeout(function(){
      fn.call(this)
    },delay)
  }
}
```

#### 10、安全

##### 问题：常见的web前端攻击方式有哪些

- XSS跨站请求攻击
- XSRF跨站请求伪造

##### XSS跨站请求攻击

- 博客前端界面嵌入script脚本
- 脚本内容：获取cookie发送到服务器（服务器配合跨域）
- 发布博客，有人查看，可以轻松获取查看人的cookie信息

##### XSS预防

- 替换特殊字符。例如：`<`变成`&It`；`>`变成`&gt`，那么script就不会作为脚本执行
- 可以使用`https://www.npmjs.com/package/xss`的xss工具

##### XSRF跨站请求伪造（类似于钓鱼链接）

- 比如：攻击者想要购买一件商品，知道了购买的请求url等
- 然后用发邮件形式，发送一个图片隐藏的链接`<img src='xxx.com/pay?id=100'/>`。图片可以跨域。
- 如果收到的人已经登陆过这个购物网站，收到的人点击打开链接，此时就会将用户信息带过去，就会发送用点击链接的那个人的用户信息去购买

##### XSRF预防

- 使用POST接口，因为使用POST接口跨域是需要serve端进行支持的
- 增加验证，比如：密码验证码、指纹等

## 7.11



#### 1、作用域和值类型引用类型的传递

##### 作用域

```shell
var num1 = 11;
var num2 = 22;
function fn(num,num1){
	//num,num1块级作用域中变量，分别传入时候只为11，22
  num = 100;
  num1 = 100;
  num2 = 100;		//没有用var声明，不是块作用域中变量，那么修改的就是全局的num2
  console.log(num)		//100
  console.log(num1)		//100
  console.log(num2)		//100
}
	fn(num1,num2)
  console.log(num1)		//11
  console.log(num2)		//100
  console.log(num)		//undefined报错
```

##### 值类型、引用类型的传递

```shell
function Person(name,age,salary){
  this.name = name;
  this.age = age;
  this.salary = salary;
}

function f1(person){
//执行f1(p)的时候person的地址和p的地址指向同一个内存地址，因此修改person.name会修改p.name
  person.name = "ls"		
  person = new Person('aa',18,10)		//此时重新将person指向另外一个引用地址，所以跟p无关，不修改p值
}

var p = new Person('zs',18,10000)
console.log(p.name)		//zs
f1(p)
console.log(p.name) //ls
```

#### 2、封装函数进行字符串驼峰命名

- 已知有字符串类似`get-element-by-id`格式，写一个function将其转化成驼峰命名表示法`getElementById`

```shell
function fn(str){
  var arr = str.split('-')
  for(let i = 0;i < arr.length;i++){
    arr[i] = i === 0?arr[i]:arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)
  }
  return arr.join('')
}
```

#### 3、冒泡排序

```shell
function bubble(arr){
  for(let i = 0;i < arr.length;i++){		//控制循环次数；比如四个球要比三次，五个球比四次
    for(let j = 0;j < arr.length-1-i;j++){
      arr[j]>arr[j+1]?[arr[j],arr[j+1]]=[arr[j+1],arr[j]]:null
    }
  }
  return arr
}
```

#### 4、反转数组

- 示例：比如数组`[1,2,3,4,5,6,7,8]`反转数组之后的结果是`[8,7,6,5,4,3,2,1]`
- 类似于首位交换

```shell
function fn(arr){
  for(let i = 0;i < arr.length/2;i++){
    [arr[i],arr[arr.length-1-i]] =  [arr[arr.length-1-i],arr[i]]
  }
  return arr
}
```

#### 5、数组去重

##### ES6 Set

```shell
function fn(arr){
  return Array.from(new Set(arr))
  //return [...new Set(arr)]
}
```

##### 一项一项跟后面进行对比

```shell
function fn(arr){
 for(let i = 0;i < arr.length-1;i++){
   let val = arr[i],
   		compareArr = arr.slice(i);
   	if(compareArr.indexOf(val)>-1){
      arr.splice(i,1)
      i--;
      arr.length--;
   	}
 } 
 return arr
}

function fn(arr){
  for(let i = 0;i< arr.length-1;i++){
    let val = arr[i],
   		compareArr = arr.slice(i);
   	if(compareArr.indexOf(val)>-1){
    	arr[i] = null;
   	}
  }
  arr = arr.filter(item => item != null)
  return arr
}
```

##### 先排序 再去重

```shell
function fn(arr){
  arr = arr.sort((a,b)=>{return a-b})
  for(let i = 0;i < arr.length-1;i++){
    if(arr[i] === arr[i+1]){
      arr[i] = null
    }
  }
  arr = arr.filter((item)=>{return item != null})
  return arr;
}
```

#### 6、js综合面试题

- 变量提升，函数提升。变量提升：变量名提升；函数提升：函数整体提升
- this指向问题
- 变量常用规则，变量沿着作用域链进行查找
- 运算符优先级关系：点运算优先级最高，但是遇到`()`没有办法进行运算，所以会记那个前面整体先进性运算
- 实例对象属性规则，原型原型链

```shell
//涉及变量提升、函数提升；
function Foo(){
  getName = function(){alert(1)}		//修改了全局的
  return this;
}
Foo.getName = function(){alert(2)}
Foo.prototype.getName = function(){alert(3)}
var getName = function(){alert(4)}
function getName(){alert(5)}


//输出如下结果
Foo.getName()				//2	 
getName()						//4	 
Foo().getName()				//1	 
getName()							//1
new Foo.getName();		//2
new Foo().getName();			//3
new new Foo().getName();		//3
```

#### 【re】7、nodejs事件轮询

- 借助`libuv`库实现
- 事件轮询机制，六个阶段：
  - timers阶段。定时器阶段：计时到点的计时器
  - pending callbacks：做系统操作，tcp错误等
  - idle、prepare准备工作
  - 轮询阶段：轮询队列
    - 轮询队列不为空：一次去除回调函数中的第一个函数，先进先出。知道轮询队列为空或者达到最大限制（轮询队列为空：设置过SetImmidiate函数直接进入下一个check阶段；没有设置过，那么就在当前poll等待，直到轮询队列添加进来新的函数，就会去第一个情况执行。如果定时器到点，那么也会去执行下一个阶段）
  - check查阶段：执行setImmediate设置的回调函数
  - close callback：关闭阶段。close事件的回调函数在这个阶段进行。
- `process.nextTick`能在任意阶段优先执行

```shell
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

#### 8、从url输入

- DNS解析。域名解析成IP。先读取浏览器DNS缓存，读取系统DNS缓存，读取路由器DNS缓存，网络运营商缓存，递归搜索
- TCP三次握手：
  - 浏览器告诉服务器要发送请求
  - 服务器告诉浏览器准备接收
  - 浏览器告诉服务器马上就发送请求
- 发送请求：请求报文
- 接受响应：响应报文
- 渲染页面
  - 遇见HTML标记，浏览器调用HTML解析器解析解析并且构建成dom树
  - 遇见style/link，浏览器调用css解析起解析并且构建成cssom树
  - 遇到script会调用js解析器，处理script代码（绑定事件，修改dom树/cssom树）
  - 合并dom树和cssom树成渲染树
  - 根据渲染树进行计算布局，计算每个节点的几何信息（布局）
  - 将各个节点颜色绘制到屏幕上（渲染 ）
  - 注意：这五个不一定按照顺序执行，如果dom树或者cssom树被修改了，可能会执行多次布局和渲染。
- 断开链接：四次挥手。
  - 浏览器发送给服务器：我请求报文完了，关闭
  - 服务器告诉浏览器：我准备关闭
  - 服务器告诉浏览器：响应报文发送完了，准备关闭
  - 浏览器告诉服务器：客户端准备关闭

#### 9、闭包

- 函数嵌套
- 内部函数使用外部函数的局部变量
- 优点：延长外部函数局部变量的生命周期；缺点：内存泄漏
- 合理使用闭包，及时销毁

```shell
function fun(n,o){
  console.log(o)		 
  return {
    fun:function(m){
      return fun(m, n);			 
    }
  }
}

var a = fun(0)			 
a.fun(1)			 // 0
a.fun(2)			 // 0
a.fun(3)			 // 0

var b = fun(0).fun(1).fun(2).fun(3)	 //undefined 0 1 2 

//同理：
var d = fun(0).fun(1).fun(2).fun(3).fun(67).fun(45)  //undefined 0 1 2 3 67


var c = fun(0).fun(1) //undefined 0

c.fun(2)		 //1
c.fun(3)		 //1
```

#### 10、变量提升&上下文

##### 变量提升

- js引擎在代码执行之前会做预处理工作
  - 收集变量：var声明的变量定义，但是不赋值
  - 收集函数：function声明的函数就提前定义函数

```shell
console.log(username)		//undefined
var username = 'smileyqp'

fun();			//正常执行函数
function fun(){
	console.log('inner func')
}
```

##### 执行上下文（excute context）

- 理解：代码执行的环境
- 时机：代码正式执行之前会进入到执行环境
  - 创建变量对象（变量提升）
    - 变量
    - 函数及函数的参数
    - 全局：window
    - 局部变量对象
  - 确认this指向
    - 全局window
    - 局部：调用其的对象
  - 创建作用域链
    - 父级作用域链+当前的变量对象
  - 扩展：执行上下文可以认为是一个大的对象，这个对象中主要包含 
    - 变量对象：变量、函数、函数的形参
    - 作用域链Scopechain：父级作用链+当前作用域对象
    - this：window||调用其的对象

#### 11、宏任务和微任务

> js是单线程的，所以我们可以称之为主线程，也就是我们的js代码都是在主线程上完成的。只不过我们区分任务是同步还是异步，如果是异步的话，那么它会有一个回调函数。 回调函数：定时器的回调、ajax请求的回调、对应事件的回调（比如点击事件）。不同的任务又会交给不同的模块去处理，比如：定时器模块、网络请求模块、事件处理模块。

js事件轮询机制，js是单线程的

- 宏任务：setTimeout 、setInterval、requestAnimationFrame
  - 宏任务所处的队列就是宏任务队列 
  - 第一个宏任务队列中只有一个任务、执主线程的js代码
  - 宏任务队列可以哟欧多个
- 微任务：New Promise().then(两个回调函数 )、process.nextTick
  - 微任务所处的队列就是微任务队列
  - 只有一个微任务队列
  - 上一个宏任务执行完成之后如果有微任务就会执行微任务队列中所有任务
  - 当宏任务重的任务执行完成之后会此案去查看微任务队列中是否有任务，如果有就先执行微任务队列中的任务，如果没有的话就继续执行下一个宏任务

```shell
//主线程宏任务执行打印1-5  微任务队列执行打印then中console   setTimeout宏任务执行

console.log('start')

setTimeout(()=>{
  console.log('setTimeout')
},0)

new Promise((resolve,reject)=>{
  for(let i = 0;i<=5;i++){
    console.log(i)
    resolve()
  }
}).then(()=>{
  console.log('promise实例成功回调')
})

console.log('end')


//start 1 2 3 4 5 end promise实例成功回调 setTimeout
```

## 7.12

#### 12、React和Vue

##### 相同点

- 组件化开发
- 属性的方式父向子传参
- 采用虚拟dom的方式
- 数据驱动：更新状态数据会自动更新界面，不直接操作dom
- 支持服务器srr渲染
- 支持原生应用方案：react native、weex

##### 不同点

- 数据绑定：vue中是双向数据绑定的、react只支持从数据到界面
- 书写方式不一样，react采用JSX语法，vue中采用的是模板语法
- 状态变化：react中使用this.setState;vue直接用this.data更改
- react采用的MVC，vue采用的是MVVM

#### 13、Redux状态管理机制

##### 基本理解：

- redux是一个独立的状态管理js库，不是react的插件库
- 可以用在react、vue、angular等项目中，但是大多情况与react配合使用
- 作用：集中管理react组件中共享数据的状态

##### Redux 使用扩展 

- react-redux简化编码
- redux-thunk实现redux的异步编程。以及redux-saga
- redux-devtools实现chrome中redux的调试

#### 14、vue组件间通信的方式

- 父向子通信
- 子向父通信
- 兄弟组件通信
- 隔代组件通信

##### 实现通信方式

- props
  - 标一般属性（父向子）、函数属性（子向父）
  - 隔代通信比比较麻烦：需要逐级传递；兄弟组件通信需要通过父组件传递 
- Vue自定义事件：
  - 绑定监听（子组件在父组件中调用的时候绑定监听）`<My-component @eveName="callback"/>`
  - 触发(分发)事件`this.$emit('eveName',data )`
  - 只适合子组件向父组件通信 
- 消息订阅与发布（例如：pubsub-js ）
  - 订阅消息
  - 发布消息
  - 适用于任意关系的组件通信
- Vuex（vue的状态管理的插件库）
- slot：专门用来父向子传递带数据的标签

#### 15、vuex状态管理机制

![16、Vue的MVVM的实现

- 模板解析
  - 解析大括号表达式
  - 解析指令
- 数据绑定
  - 更新显示实现：数据劫持

![](https://img-blog.csdnimg.cn/2021052114463857.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 17、重绘、重排（回流）

- 先把dom节点生成dom树（解析dom）
- 生成cssom（解析css）
- 布局：构成渲染树render tree（从根节点递归，布局）
- 绘制：绘制div等到页面上

重绘（repaint）：一个元素外观的改变所触发的浏览器的行为，浏览器会根据元素的新属性重新绘制，使元素呈现新外观

回流（重排、重构reflow）：当渲染树的一部分因为元素的尺寸、布局、隐藏等改变而需要重新构建称之为重排

重绘和重排的关系：在重排的过程中，浏览器会使渲染树中收到影响的部分失效，并且重新去构造这部分渲染树，完成重排之后，浏览器会重新绘制受影响的部分到屏幕中，该部分称为重绘。

重排（回流）一定会重绘，但是重绘不一定会重排。（重排=>布局 重绘=>样式）

##### 触发重排的条件

- 页面初始化
- dom节点的插入删除等操作
- 元素位置改变或者动画
- 元素尺寸改变（大小、外边距、边框）
- 浏览器窗口大小改变
- 填充内容改变
- 读取某些属性值（比如：offsetWidth、offsetHeight、top、height、width等）

##### 重绘或者重排的代价：耗时、导致浏览器卡顿

- 浏览器自己的优化策略：浏览器维护一个队列，会将所有引起重排或者重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间，那么队列就会flush一次，这样就会把多次重排或者重绘转化成为一次

- 我们也可以将多次dom操作等转化成为一次，并且减少样式请求
  - 直接改变元素的className
  - 先设置元素的`display:none`然后进行页面布局等操作，设置完成之后再将`display:block`这样的话就之后出现两次重绘和重排
  - 使用cloneNode（ture or false）和replace技术只引发一次重绘和重排
  - 将需要多次重排的元素的`position`设置成absolte或者fixed,使其脱离文档流，那么它的变化不会影响到其他元素
  - 如果要插入多个dom节点可以创建一个documentFragment创建完成之后一次性加入document

```shell
var fragment = document.createDocumentFragment()
for(let i = 0;i<=1000;i++){
  var li = document.createElement('i')
  li.innerHTML = i + '</br>'
  fragment.append(li)
}
document.getElementById('container').appendChild(fragment)
```

#### 18、ES6的class

```shell
//class就是构造函数的一种新写法，可以视作语法糖
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  say(){
    console.log(`${this.name}${this.age}岁`)
  }
}

let p = new Person('smileyqp',18);
p.say()
console.log(p.name)


class Teacher extends Person{
  constructor(){
    super()
  }
  hello(){
    console.log('say hi')
  }
}
```

#### 19、async、await使用与原理

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

#### 20、ts在项目中的使用

- ts是js的一个超集，支持ES6标准
- ts比js有更严格的类型要求。有类型的约束，减少大型项目中的bug
- 示例：`msg!:string`msg是非空字符串；`msg?:string`msg有可能有可能没有

#### 21、ES6装饰器的使用

- 装饰器：是一种与类相关的语法，用来注释和修改类和类相关的方法和属性。许多面向对象的语言都有这个功能。一般和类class 相关，普通的方法不要去使用
- 装饰器是一种函数，写法是`@函数名`，它可以放在类和类的方法定义前。装饰器就是执行函数，给类或者类下面的属性方法加一些控制条件
- 装饰器
  - 给类或者类属性加上一些其他代码
  - 可以代码复用

```shell
@decorator
class A(){
  
}

//等同于
class A(){
	//decorator是一个函数，相当于调用它给A类可以加上一些其他代码,加上属性等
  A = decorator(A)
}




//实例.在类或者类属性方法上写上@函数名，就相当于调用这个函数
function testfunc(target){
  target.isok = true;   			//相当于Myclass.isok = true 
  console.log('i am test func',target)
}

@testfunc
class Myclass{
  
}



function readonly(target,name,descriptor){
  console.log(target)		//当前的class，即Person
  console.log(name)			//装饰的属性或方法名
  //configuerable修改、enumerable枚举是否可for in循环、writeable、value对象属性默认值
  console.log(descriptor)			
  return descriptor;
}

class Person{
  
  @readonly
  abc(){
    console.log('add func ')
  }
}
```

![](https://img-blog.csdnimg.cn/20210523041948698.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 22、事件循环

异步：定时器、ajax、onclick、promise（new Promise立刻执行，then异步）

- 宏任务：定时器（setTimeout、setInterval）、requestAnimationFrame、I/O
- 微任务：process.nextTick、Promise、Object.observe、MutationObserver
- 宏任务队列和微任务队列，执行主线程任务，宏任务放到宏任务队列，微任务放到微任务队列。只有在微任务队列中的微任务全部执行完成之后才会去执行下一个宏任务。注意：执行宏任务的时候，也会产生微任务，继续执行上面过程

```shell
console.log('1')

setTimeout(function(){
  console.log('2')
  new Promise(function(resolve){
    console.log('3')
    resolve()
  }).then(function(){
    console.log('4')
  })
},0)

new Promise(function(resolve){
  console.log('5')
  resolve()
}).then(function(){
  console.log('6')
})

setTimeout(function(){
  console.log('7')
  new Promise(function(resolve){
    console.log('8')
    resolve()
  }).then(function(){
    console.log('9')
  })
  console.log('10')
},0)

console.log('11')


//1 5  11 6 2 3 4 7 8 10 9 
```

#### 23、浏览器缓存原理

- 浏览器本身有缓存，浏览器可能会把上次代码缓存起来，再去访问不是去拿新代码，而是直接使用缓存
- 浏览器的缓存分成两种，强制缓存和协商缓存
  - 强缓存：不会向服务器发送请求，直接从缓存中读取资源，每次访问本地资源直接验证看是否过期。强缓存可以通过设置两种http header实现：expire过期时间和cache-control缓存控制。
  - 协商缓存（Last-Modified/If-Modefied-Since和E-tag/If-None-Match）：发请求到服务器，服务器会告诉浏览器去拿缓存还是新的代码

拓展：

- 网站优化
  - 雪碧图
  - 懒加载
  - 减少http请求（缓存:浏览器有缓存，现在h5的manifest也可以进行自定义缓存，优化网站）

#### 24、h5离线存储manifest

Html5提出的一个新特性：离线存储。通过离线存储，我们可以吧需要离线存储在本地的文件夹列举在manifest配置文件中，这样即使在离线的情况下，用户也可以正常的看见网页

- 在需要离线缓存的页面的html标签上加上`manifest='cache.manifest'`

```shell
<html lang='en' manifest='cache.manifest'>
...
</html>
```

- 在根目录创建新文件名称为`cache.manifest`的文件，并写上代码

![](https://img-blog.csdnimg.cn/20210524024015163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524024122985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 25、移动端兼容问题

![](https://img-blog.csdnimg.cn/20210524100605968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210524101343287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524101643460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524101720213.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 26、混合开发

混合开发

- 一部分原生一部分js
- 内嵌浏览器壳
- web手机端网页：手机操作比较困难，一般没有手机操作权限

![](https://img-blog.csdnimg.cn/20210524102918108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524103318890.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 混合开发框架

- weex：采用vue框架，可打包成app
- react-native：采用react框架
  - react语法加上自己特定的标签`<Text></Text>` `<View></View>`等
- uniapp：采用vue框架

> 补充：如何将vue项目打包成app？1、vue项目build 2、将build文件夹下面文件复制到新的hbuild创建的心项目中，覆盖原文件 3、直接打包

#### 27、一次完整的http请求过程

##### 题目

当web浏览器输入`www.baidu.com`具体发生了什么？

- DNS域名解析，得到对应的IP
- 根据这个IP，找到对应的服务器，发起TCP三次握手
- 建立TCP链接之后发起HTTP请求
- 服务器响应HTTP请求，浏览器获取html代码
- 浏览器解析html代码，并且请求html代码中的资源（css、js、图片、视频等。得到html后才能去湖区这些资源）
- 浏览器对页面进行渲染并且呈现给用户
- 服务器关闭TCP链接（四次挥手）

##### 详细解析

- 怎样进行域名解析，DNS怎样找到域名的？
  - DNS域名解析是采用递归查询的方式，过程是：先去找DNS缓存=〉缓存找不到就去找根域名服务器=〉根域名又会去找下一级，这样递归查找之后，找到了就给我们的浏览器
    - 浏览器自身DNS缓存
    - 操作系统DNS缓存
    - 路由器DNS缓存（host文件中查找）
    - 递归去各个域名服务器查找
- 为什么HTTP要基于TCP来实现？
  - TCP是一个端到端的可靠的面相连接的协议，HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误的时候会重传）
- 浏览器对页面是如何进行渲染的？
  - 解析html获得dom树
  - 解析css生成cssom树
  - dom树和cssom合成渲染树
  - 边解析边渲染（布局：计算位置和尺寸；渲染：渲染样式）
  - JS单线程运行的，js困难修改dom的结构

> 拓展：重排（回流）：修改布局；重绘：修改样式。重排一定会重绘，重绘不一定重排。

#### 28、http缓存控制

##### 强缓存

- expire：绝对时间
- cache-control：相对时间

##### 协商缓存：

- last-modified：上次修改的时间
- e-tag：标注文件是否修改

#### 

- 缓存作用范围
  - 第一次响应后到第二次请求
- 缓存分类
  - 缓存命中率：从缓存中获取数据的请求与所有请求的比率。理想状态是越高越好
  - 过期内容：超过设置的过期时间，被标记为陈旧的内容，必须重新向服务器请求新的内容或者验证缓存的内容是否仍然准备
  - 验证：验证缓存中的内容是否仍然有效，验证通过的话就刷新过期时间 
  - 失效：把内容从缓存中清除，内容发生改变时就必须清除失效内容
- http缓存实现技术

![](https://img-blog.csdnimg.cn/20210524141627419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 浏览器缓存分类

- 强缓存：不用发请求到服务器就能拿到缓存（减少服务器压力）
  - expire和cache-control两个请求头设置。两个字端都有以`cache-control`为主，因为expire绝对时间，服务器和浏览器可能有差异
  - expire：定义过期时间，绝对时间，由服务器发给浏览器的绝对时间
  - cache-control：定义过期时间，相对时间，一个时间段

![](https://img-blog.csdnimg.cn/20210524142112463.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524142745672.png)![](https://img-blog.csdnimg.cn/20210524142824578.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210524142654807.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 协商缓存：请求到服务器，询问服务器缓存是否过期，没有就直接从缓存加载资源。返回304状态码。
  - Last-Modified/If-Modefied-Since
  - E-tag/If-None-Match

##### ![](https://img-blog.csdnimg.cn/20210524143326471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



##### 拓展

- 一台服务器，提高并发？可以使用浏览器缓存，直接使用浏览器缓存减少请求，提高并发。
  - http缓存，能够帮助服务器提高并发，资源不需要重复请求，能够直接从浏览器中获取
  - http缓存分类分为轻缓存和协商缓存。
  - 强缓存通过cache和cache-control来进行控制。协商缓存通过last-modefied以及etag来进行控制
- 为什么有expire需要cache-control ？
  - 因为expire是绝对时间，有可能存在浏览器和服务器的时间不同步的问题
  - cache-control 是相对时间，一定程度上弥补了expire导致的时间不同步问题
- last-modify和etag
  - last-modify存在精度问题，到秒
  - e-tag没有精度问题，只要文件改变，e-tag值就会改变

#### 【re】29、Promise

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
  
 //  3  7  4  1 2 5
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
let State = {
  pending:'pending',
  resolve:'resolved',
  reject:'rejected'
}

class myPromise{
   constructor(exclutor){			//传入回调函数exclutor
			exclutor(this._resolve().bind(this),this._reject.bind(this))
   }
   
   _state = State.pending;
   _value;
   _resArray = [];
     
   _resolve(val){
     this._state = State.resolve;
     this._value = val;
     while(_resArray.length>0){
       const item = _resArray.shift();
        item(this._value);
     }
   }
   
   _reject(){
     this.state = State.reject;
   }
   
   then(onRes){
     	const newPromise = new MyPromise(()=>{})
      this._resArray.push(onRes);		//存储then中回调方法
      return newPromise;
   }
}

export default myPromise;
```

#### 30、React

##### redux

- ##### Redux帮我们用一个变量存储所有的state，并且提供发布的功能来修改我们的数据，以及提供订阅的功能来触发回调

- redux是一个独立的数据状态管理库，在angular、vue也都可以使用redux，只不过常与react一起使用

- redux解决数据状态管理，跨层级问题。

- redux就是一个经典的发布订阅器。事件绑定的过程其实也是一个发布订阅的过程。

- redux使用方法

  - 调用ctreateStore创建store对象
  - 用Provide包裹根组件
  - 使用connect获取链接

##### react-redux

- 提供两个api

  - `Provider`传递store到每个组件中去。Provider实际上是一个组件。getChildContext创建store。Provider就是通过React的context API把数据往下传。

  ![](https://img-blog.csdnimg.cn/20210526153235760.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

  - `connect`通过store传递进来的provider，将state绑定到当前组件。connect有两个参数mapstatetoProps订阅更新，mapdispatchtoprops 调用dispatch改变当前数据

    - ##### connnect方法本质上是一个高阶组件，接收Provider传递过来的store并订阅store中的数据，如果store中的数据改变，就调用setState方法触发组件更新

  ![](https://img-blog.csdnimg.cn/20210526153812547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210526154758549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210526154818274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

> 拓展：`函数柯里化`：函数返回函数；`高阶组件`：组件返回组件

![](https://img-blog.csdnimg.cn/20210526152902453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### redux是如何将State注入到React组件中去

- 明确react与redux的联系是react-redux这个库（Provider、connect）
- redux的原理其实就是一个发布订阅器，帮我们用一个变量存储所有state，并且提供了发布来修改数据，提供了订阅功能来触发回调
- react-redux的功能是订阅store中的数据更新，它包含两个重要的元素Provider和connect
- Provider的作用是通过context api把store对象注入到react组件中去
- connect方法就是一个高阶组件，在高阶组件中通过订阅store的更新，调用setState方法来触发组件更新

- ##### redux在实际项目中的使用问题

  - redux痛点是什么？

    - 增加代码的复杂性。需要经过dispatch、调用reducer、触发回调、更新数据。redux在使用中最大的弊端就是样板代码（action、reducer）太多，修改数据链路较长

  - 为什么还是要使用redux？

    - redux可以解决跨组件间数据传递问题并且修改数据十分清晰。在复杂的大型项目中，状态数据较多，redux的映入可以较好对数据进行管理，使得数据流向组件状态变更更为清晰

  - redux在使用时候，有哪些比较好的实践方式呢？（可以使用一些手段减少模板代码从而简化redux api）

    - 使用redux-action，在初始化reducer和action构造器时候减少样板代码
      - 减少创建action时候创建的一堆固定的写法
      - 减少创建reducer时候写的一堆固定的switch（封装）
    - 使用cli工具，帮我们生成模板代码。比如yeoman工具

    > 总结：redux最大的弊端是样板代码太多，修改数据链路太长
    >
    > 解决方式：可以借助一些工具来减少创建样板代码的过程
    >
    > - 使用redux-action减少书写固定不变的代码使得我们代码更加清晰
    > - 使用cli工具自动生成模板文件和代码

  - redux的异步问题怎样处理（为什么redux处理不了异步问题？）

    - dispatch默认只能接受一个object类型的action，因为reducer中要接收action.type来处理不同的数据
    - 那怎样解决redux不能处理异步的问题呢？
      - redux异步问题可以用中间件来解决
        - redux-saga：让异步成为中架构中独立的一层
        - redux-thunk

> redux总结：
>
> - redux会增加代码的复杂性，使用前需要考虑当前项目的规模和要求
> - 可以使用redux-action或者cli工具来帮我们减少模板代码的书写
> - redux无法处理异步action是因为dispatch只能接收一个object类型的action，但是可以通过中间件的方式来解决异步问题



- ##### React中的hooks

  - React Hooks是一个新的API，可以用函数来写所有组件
  - 可以让函数也拥有自己的状态管理（包括state和生命周期）
  - 可以通过创建自定义的hooks来抽离可复用的业务组件

- React组件类型

  - 函数组件
    - 一个函数就是一个组件
    - 一个函数必须有return
    - return的是一个react元素
  - 类组件
    - 一个Class声明就是一个类组件
    - 所有的类组件都是继承于React.Component
    - React.Component类有自带属性和方法，比如render、componentDidMount等等

![](https://img-blog.csdnimg.cn/20210527093422780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- React Hooks的作用以及有哪些特性
  - react hooks是v16.8版本才引入的全新API，它算是一个颠覆性的变革
  - 所有的React组件都可以是一个函数组件，再也不需要写类组件了
  - 再也不需要记住react有哪些生命周期了

![](https://img-blog.csdnimg.cn/20210527094522853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210527094636771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

创建使用自定义hooks

![](https://img-blog.csdnimg.cn/20210527095744394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210527095956508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 31、性能优化

##### 初始阶段（加载优化）

- ##### 首页加载优化

  - 解答

    - 对于首页加载过慢的问题，一般是由于首页加载资源过多并且资源过大导致，所以应对的策略一般是减少资源的数量以及减少资源的大小
    - 对于图片可以进行懒加载，减少首屏图片加载量，以及对于小图标和小图片分别可以使用Iconfont和雪碧图来解决，最大程度的减少首屏图片渲染量，提高首屏加载速度
    - 对于其他资源可以通过打包（nginx combo资源合并或者webpack打包）来合并资源，或者通过路由懒加载的方式来减少首页js加载的数量
    - 同时可以在服务器配置nginx开启gzip打包来最大化压缩静态资源体积，达到优化首页加载的目的

  - 问题分析（资源多、大）

    - ##### 1、首页加载图片过多

      - ##### 1、总结：

        - 通过懒加载的方式处理非首屏图片
        - 对于小图标可以使用Iconfont的方式来解决
        - 对于小图片可以使用雪碧图的方式来解决

      - Q&A

        - Q：首页加载图片过多怎样处理
          - 懒加载：监听滚动条事件，如果滚动条的高度距离浏览器顶部的高度等于或者接近于图片到浏览器顶部的高度，那么就将data-src的属性赋值到src上
        - Q：首页设置的小图标很多，比如有很多的小icon怎么办
          - 对于纯色小图标可以用Iconfont来解决（减少资源请求）
            - 设置font-famliy的css属性
          - 对于一些彩色的小图标可以使用雪碧图
            - 把所有小图标拼接到一张大图片上（减少资源请求）
            - 并使用background-position的css属性来修改图片坐标

    - ##### 2、首页请求过多

      - ##### 2、总结（首页请求量过多，可以通过一些手段来减少资源的请求量）

        - 通过nginx服务器来做静态资源的合并或者通过webpack等打包工具进行物理的打包
        - 在代码层面，对于u 一些需要引入大型的第三方库进行按需加载，比如可以按照babel来进行
        - 还可以通过react lazy等动态导入方案进行前端路由层面的动态加载，从而减少首页的js和css加载的大小

      - 可以通过减少资源请求量

        - 通过nginx服务器（可用来做CDN，处理静态资源）用来做文件合并combo—将多个js、css合并成一个。逻辑上打包，通过拼接请求链接，将多个资源链接合并到一起
        - 通过打包工具（webpack）来做资源文件的物理打包。没有第一种灵活。

      - Q&A

        - Q：只有合并资源的方式才能减少资源请求吗？

          - 对于引用一些大型的第三方库，比如antd、elementui等，可以使用按需加载的方式进行解决。一般都是使用babel插件来实现

          - 针对SPA单页应用，在路由层面，可以使用前端路由懒加载的方式，从而减小首页js和css的大小

            - 使用React.lazy进行路由的加载(react16.6以上才可以使用，16.6以下版本可以使用react-loadable)

            ![img](https://img-blog.csdnimg.cn/20210527114825660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

            ![img](https://img-blog.csdnimg.cn/20210527115051890.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        - Q：为什么React lazy可以进行路由懒加载？

          - 首先react lazy是使用了动态加载（dynamic import）的一个标准，webpack只要遇到了动态加载就会把import的内容单独打一个包
          - 由于动态加载返回的是一个promise，所以可以利用promise的流程来做渲染流程的控制
          - 如果当前promise是pending状态，那么就渲染loading组件，如果是resolve状态那么就渲染动态导入的组件

        ![img](https://img-blog.csdnimg.cn/20210527154924142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        动态导入：代码执行到import这一行的时候才开始去下载组件。并且webpack会将其单独打包成一个文件 

        ![img](https://img-blog.csdnimg.cn/20210527155047496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        lazy懒加载

        ![img](https://img-blog.csdnimg.cn/20210527160626742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        - 结论：
          - import('xxx')返回的是一个promise
          - webpack只要遇到了import('xxx')就会把括号里引入的内容单独打一个包

    - ##### 3、首页请求的静态资源（html、css、js）过大

      - 分析
        - 要分资源文件、js、css等分开处理
        - css和js可以通过webpack进行混淆和压缩
          - 混淆：将js代码进行字符串加密（最大程度减少代码，比如将变量名称程度单个字母等）
          - 压缩：去除注释空行以及console.log等调试代码
        - 图片的压缩
          - 自动化工具来压缩图片
          - 图片进行转码，转成base64格式
          - 使用webP格式
        - 通过开启gzip进行全部资源的压缩
          - gzip是一种压缩文件资源的格式，可以对任何文件进行压缩（类比于文件压缩），通过nginx服务器配置开启

    

- ##### 优化图片的做法

  - 解答：图片优化业主要是从两个方面来进行，太多和太大

    - 通过懒加载减少加载图片请求，或者通过雪碧图来合并图片，以及将小图转化成base64格式减少图片请求
    - 图片过大问题可以通过图片自动化压缩工具或者使用webp格式的图片

  - 问题分析：

    - 减少图片加载请求
    - 减少图片大小

  - Q&A

    - Q：用什么自动化工具对图片进行压缩？

      - 熊猫站（<https://tinypng.com/>）：无损压缩。熊猫站是通过相似颜色的量化技术来减少颜色的数量，并且可以将24位的png文件转化成8位的彩色图片，同时可以将不必要的元素进行剥离。并且它提供了npm包tinify，可以进行批量压缩

    - Q：还有什么其他方式吗

      - 将图片转码为base64，会增大图片体积，因此不建议把大图片转成base64格式，但是建议把小图片转成base64格式，因为它直接写在代码中，可以减少一个图片的请求
      - 使用webp格式

      ![img](https://img-blog.csdnimg.cn/20210527171756779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 实现webpack打包优化

  - 解答：多&大

    - 可以设置mode=production来默认实现webpack对代码的混淆和压缩，从而最大程度减少代码体积
    - 使用webpack+dynamic import（动态加载）并结合路由的入口文件动态加载做拆包处理
    - 并且可以设置一定的打包策略（分包压缩，node_modules、常改动、不常改动公共组件），配合网络缓存（cache-control等）进行加载性能优化

  - 问题分析

    - 少：使用webpack进行物理打包
    - 小：使用webpack进行混淆和压缩，所有与webpack相关的配置都在optimization这个配置项进行管理

  - Q&A

    - Q：打包怎样小怎样少？

      - A：使用webpack对代码进行混淆和压缩，并且可以使用react lazy进行拆包，结合路由进行按需加载

    - Q：对文件进行拆包处理，那么文件肯定会增多，会不会跟减少资源请求数量矛盾呢？

      - A：并不矛盾，因为我们按需加载之后，拆包的文件不可能同时加载，所以不会造成同一时间请求过多的问题

      ![img](file:///Users/yqp/Library/Application%20Support/typora-user-images/image-20210528022556530.png?lastModify=1625795226)



打包策略

![img](https://img-blog.csdnimg.cn/20210528022405544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210528022006976.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 实现CDN加速

  - 解答：

    - CDN服务器主要是用来做静态资源的服务器，可以用来加速静态资源的下载
    - CDN之所以能够加速是因为在很多地方都部署了CDN服务器，如果用户需要下载静态资源，会自动选择最近的资源节点进行下载
    - 同时由于CDN的服务器地址一般都跟主服务器不同，所以可以破除http1.0中对同一个域名同时发送的请求的限制问题

  - 问题分析

    - 什么叫做CDN（内容分发网站）

      - 放静态资源服务器（JS、CSS、图片、字体..）。

    - 为什么CDN可以实现加速？

      - 因为里我们近。CDN服务器就是在里用户较近的地方放置一台服务器，把所有的静态资源放到这台服务器上，以后访问优先从这个网站上访问。CDN是一种解决方案，一般是用nginx实现。

    - 为什么要进行CDN呢？

      - HTTP1.1。因为对于同一个协议、同一个域名、同一个端口，浏览器允许最多同时打开六个TCP连接（最多同时发送六个请求）。通过CDN可以绕过浏览器对这个请求的限制

      ![img](https://img-blog.csdnimg.cn/20210528155614408.png)

      - http2：引入了多路复用的机制，可最大化发送请求数量。（没有了http1的六个TCP请求限制）

##### 运行阶段（渲染优化）

- 思路：
  - 导致卡顿的远影一般都是dom操作太多太频繁
  - 如果想要渲染很多数据又不造成浏览器卡顿，那么肯定是要减少dom的操作。比如react创建虚拟dom，本质上是用js来模拟真实的dom，从而减少dom的操作
  - 还有在插入多个dom节点时候，可以使用`document.createDocumentFragment`先创建虚拟节点，再一次性插入
  - 也可以采取分段式渲染的方式`requestAnimation`来进行逐帧渲染
- 渲染十万条数据不造成卡顿？
  - 结论：
    - 可以使用`document.createDocumentFragment`创建虚拟节点来避免不必要的渲染
    - 当所有的li都创建完成之后，再一次吧虚拟节点中的li全部渲染出来
    - 可以采用分段渲染的方式，比如一次只渲染一屏的数据
    - 最后使用 

![img](https://img-blog.csdnimg.cn/20210528160433283.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



普通方式：

![img](https://img-blog.csdnimg.cn/20210528160747567.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

优化渲染（分段渲染 ）

![img](https://img-blog.csdnimg.cn/20210528161129401.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70) ![img](https://img-blog.csdnimg.cn/20210528161156127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/2021052816124314.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

> 补充：`requestAnimation`逐帧渲染。1000/60=16,也就是16ms渲染一次。requestAnimation要保证浏览器是60帧，所以默认是16ms一次渲染。

> 拓展：服务器类别
>
> - 应用服务器：弹性计算，存放运行后端代码等
> - 存储服务器：存储文件
> - CDN服务器：处理静态资源，做资源文件的合并。做静态资源分发
> - 数据库服务器



















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



























