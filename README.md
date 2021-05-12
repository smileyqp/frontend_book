# Introduction

[前端CSDN Blog地址](https://blog.csdn.net/qq_34273059/category_9894803.html?spm=1001.2014.3001.5482)


[TOC]

## 4.27复盘

#### html5

- 标签语义化
  - 合适的标签做合适的事情
  - 标签分类：
    - 块状标签
      - 独占一行
      - example：div，h1-h6，hr，table，form，p，li，dl，dt
    - 行内标签
      - example：span、a、img
    - 行内块状标签
      - example：input
- 音视频
  - 改变了传统的flash播放，采用video和audio等
- webGL/canvas等动画渲染
- websocket：
  - 改变了传统的长轮询方式

#### css3

- 盒子模型

  - 标准盒模型	
    - width和height只是指内容content部分，不包括padding、border、margin部分
  - IE盒模型（怪异盒模型）
    - width和height包括margin、border、padding的盒子
  - 通常我们使用的都是标准盒模型，但是我们有些情况下需要使用IE盒模型的话可以设置`box-sizing:border-box`

- 水平居中的实现方式

  - 使用定位

  ```shell
  .container{
    position:relative;
  }
  .box{
  	width:200px;
  	height:200px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-right:-100px;
  }
  //或者
  .box{
    position:absolute;
    left:50%;
    top:50%;
    transformX:-50%;
    transformY:-50%;
  }
  ```

  - 使用flex

  ```shell
  .container{
    display:flex;
    justify-content:center;
    align-item:center;
  }
  ```

  - 使用table

  ```she
  .container{
    display:table-ceil;
    text-align:center;
    vertical-align:middle;
    width:500px;
    height:500px;
  }
  .box{
    display:inline-block;
  }
  ```

  

  - 使用JS控制

- 响应式布局

  - 圣杯布局
    - 利用position定位以及浮动还有负margin进行实现
  - 双飞翼布局
  - flex实现圣杯布局

```shell
.container{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}
.left{
	height:200px;
  flex:0 0 200px;	//缩放比0 0，宽度200px
}
.center{
  flex:1;		//或者使用flex-grow
}
.right{
	height:200px;
  flex:0 0 200px;
}
```

#### 布局方案

- media媒体查询
  - 适用于一套代码多端适配
- rem适用于移动端
- vm/vh百分比布局
- flex

#### z-index原理

- 使元素脱离文档流
- 使元素脱离文档流的其他的方式：
  - 浮动
  - 定位
  - transform
  - Css3动画

#### 不考虑其他因素下面哪种渲染性能比较高

```shell
//方式一
.box a{
  
}
//方式二
a{
  
}
```

> 方式二：因为浏览器的渲染机制使从右到左进行查找的

#### js的数据类型

- 基本类型：
  - number
  - string
  - boolean
  - null
  - undefined
- 引用类型
  - object
  - function
- 特殊类型
  - Symbol

#### 判断数据类型的几种方式

- typeof
- instanceof
- constructor
- Object.prototype.toString.call











## 4.28 Study

#### 堆栈内存、闭包作用域

```shell
let a = {},b = '0',c = 0;
a[b] = '张三'
a[c] = '李四'

console.log(a[b])		//李四
```

> 对象中，数字属性名和字符串属性名都是一样的，数组是特殊的字符串

> 拓展：对象和数组的区别

```shell
let a={}, b=Symbol('1'), c=Symbol('1');  
a[b]='张三';	
a[c]='李四';  
console.log(a[b]);	//张三
```

> Symbol创建的是唯一的值，不相等。对象的属性名不一定是字符串，如果是数字和字符串则是同一个值，因为索引是字符串。对象的属性名可以是不二null，Symbol、undefined等等。引用类型值都是变成字符串逆行存储。

> 拓展：自己实现一个Symbol

```shell
let a={}, b={n:'1'}, c={m:'2'};  
a[b]='张三';
a[c]='李四';  
console.log(a[b]);	//李四
```

> b、c作为引用的时候会被转化成为字符串，对象转化toString那么即`[Object Object]`,两个都是`[Object Object]`,所以结果是李四

> 拓展：Object.prototype.toString项目中应用，跟valueOf跟toString区别（编译顺序）



> 基本类型直接存储，引用类型要放进堆里面，最终是把地址复制给这个值。



> 浏览一加载页面，就形成一个栈内存。每个函数执行，叫做把一个执行上下文压缩到栈中执行。



> null和undefined



```shell
//立即执行函数，执行完被销毁，回收机制。但是由于i被占用因此不销毁。test表示的不是一个函数，而是一个函数返回的执行结果
var test = (function(i){
    return function(){
        alert(i*=2);	//没有i，那么在它上级作用域中找。在哪创建的上级作用域就是谁
    }
})(2);
test(5);		//字符串4。test中没有形参。
```

> alert输出的结果都是会转化成字符串的。

![](https://img-blog.csdnimg.cn/20210428150033375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



```shell
var a=0,
    b=0;
function A(a){
    A=function(b){
        alert(a+b++);
    };
    alert(a++);
}
A(1);		//"1"
A(2);		//"4"
```

> 注意： a++先跟别人运算，再自身累加1；++a先自身累加1，再跟别人运算。
>
> 过程解释：
>
> 1、GO全局：初始化 a = 0，b = 0, A一个方法，引用地址，此处暂时记为AAAFFF000
>
> 2、A(1)执行，传入形参，此时在执行中a= 1，往下中性，A = function…，此处相当于重新定义了全局的方法A，改变了原来的方法A的指向，此处引用地址从AAAFFF000改变到另外一个记为BBBFFF000，继续执行alert（a++），由于a=1，并且由于下面demo可以看出，a是在执行之后再自身加1的，那么此时alert的是没有叠加之前的1
>
> 3、继续执行A(2),那么此时A指向的function是改变之后的BBBFFF000，此时传入的形参b=2，而a在其上一级作用域中，由步骤2可知，叠加之后为2，那么此时alert出来的应该是2+2，为字符串4（alert出来的会自动同toString转化）

```shell
let a = 1;
console.log(5+a++);	//6
console.log(a)	//2

let b = 1;
console.log(5+(++a));	//7
console.loog(a)		//2
```

> 闭包的作用：保存、保护



#### 对象和数组的深浅拷贝

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

//=>深克隆
function deepClone(obj) {
    if (typeof obj !== "object") return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    let cloneObj = new obj.constructor;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}
```

- 浅拷贝：只拷贝第一层,操作第二级仍然可以改第一级。只是浅拷贝，只拷贝引用

```shell
let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};

let obj2 = {}
for(let key in obj){
//obj.hasOwnProperty(key)，true是私有的，false不是私有的。不是私有的不遍历，只遍历私有的
  if(!obj.hasOwnProperty(key))break;	
  obj2[key] = obj[key]
}


//ES6实现浅克隆
let obj3 = {...obj}
```

- 深拷贝：(递归/字符串转化)

```shell
// JSON.stringify&JSON.parse 
let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};
let obj2 = JSON.stringify(obj);		//"{"a":100,"b":[10,20,30],"c":{"x":10},"d":{}}"
obj2 = JSON.parse(obj2)			
```

> `JSON.parse`这种方式弊端:正则、函数、日期、symbol等,会有问题 

```shell
//递归实现深克隆
function deepClone(obj){
//或者let newobj = new obj.constructor;或者{};一般obj.constructor为Object，防止传入的是实例
//不直接创建控对象的目的，克隆的结果和之前保持相同的所属类
//过滤特殊情况，object才递归
	if(typeof obj === null)return null;
	if(typeof obj !== "object")return obj;
	if(obj instanceOf RegExp){
  	return new RegExp(obj)
	}
	if(obj instanceOf Date){
  	return new Date(obj)
	}
  let newobj = new Object();		
  for(let key in obj){
    if(obj.hasOwnProperty(key)){		//判断是私有属性
      newobj[key] = deepclone(obj[key ])
    }
  }
  return newobj;
}
```

> 排除：null，Date，正则RegExp，以及不是object



#### 面向对象

```shell
function Foo() {
    getName = function () {
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
    console.log(4);
};
function  getName() {
    console.log(5);
}

Foo.getName();		//2
getName();		//4
Foo().getName();		//Foo()普通函数执行；Foo执行过程中，内部函数有个getName赋值，但是getName并不是私有的，于是此时重新定义全局的getName = -> 1,并且返回this，这里的this的指向就是window，那么应该是window.getName  1
getName();		//1
new Foo.getName();	//无参数new，点的方式叫做成员访问。优先级问题，先执行成员访问，new一个输出2的函数，那么输出也是2
new Foo().getName();	//有参数new，执行方式先new Foo，再getName。创建实例，实例的getName，那么应该找prototype上的，因此结果是3
new new Foo().getName();	//优先级new (new Foo()).getName().getName,先new Foo()创建一个实例foo，变成 new foo.getName(),此时变成了先成员访问，原型上的方法，输出3的方法，变成了new 3，即3

注意：由参数的new先执行new，无参数的new和成员访问两个同级别，谁先救先执行谁

答案为：2 4 1 1 2 3 3


//function声明加赋值，var先声明先不赋值
Foo AAAFFF0000
getName = func -> 5

//代码执行

Foo是一个堆，里面存了方法代码字符串，Foo仍然是一个对象，有prototype（也是一个引用类型即也是一个堆）、length、然后我们给他加了一个getName属性；

getName = func -> 4	//之前赋值输出5，之后重新赋值输出4的

```

> 变量提升：在var function，所有代码执行之前，带var和function提前定义和赋值

#### 同步异步EventLoop

```shell
async function async1() {
    console.log('async1 start');
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

> 浏览器多线程，js单线程。时间队列EventQueue。微任务队列，宏任务队列。主线程代码先执行。

> 定时器、事件绑定、ajax都是宏任务，async、await、promise等是微任务



## 4.29

- 题一：

```shell
function A(){
    alert(1);
}
function Func() {
    A=function(){
       alert(2);
    };
    return this;
}
Func.A=A;
Func.prototype={
    A:()=>{
       alert(3);
    }
};
A();
Fn.A();
Fn().A();
new Fn.A();
new Fn().A();
new new Fn().A();

//注意最后一个，箭头函数是不可以被new的，因为箭头函数没有原型链，也就没有constructor构造器
```



- 题三：

```liashell
var a = ?;
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
} 
```

> 两个等于号转化数据类型值相等，三个等于好要绝对相等

> 双等
>
> - 对象==字符串  对象toString变成字符串,再变成数字，对比；[10] == 10
> - null == undefined但是和其他比较不想等
> - NaN和任何东西都不想等
> - 剩下的都转化成数字。eg.  `'1'==true`

1、利用toString

> 由于两个等号对比，一方为数字，我们假设a为object（例如：[1],[2],[3]这样的，数组是特殊的object），那么他们执行的对比方式一定是要先toString再转化成数字进行对比的。因此我们可以在toString上做文章，去修改它的toString

```shell
var a = {
  i:0,
  toString(){
    return ++this.i;
  }
}
//因此三次对比，执行三次toString，依次返回1，2，3。valueOf也可以代替toString



var a= [1,2,3]
a.toString = a.shift;	//shift方法删除数组第一个值，并且返回第一个数值。因此每次对比要调用a的toString的时候，依次获得的数值就是i，2，3
```

2、利用数据劫持get:

> 由于a是全局的，那么再全局上去劫持获取a的set方法去修改

```shell
var i = 0;
Object.definedProperty(window,'a',{
  set(){
    return ++i;
  }
})
```

3、或者用true也行

#### Vue&React

- react和vue区别
  - vue代表MVVM（双向数据绑定）。
    - 数据更改视图变化，视图更改数据变化
  - React代表MVC。
  - vue吧给我们把表单绑定事件写好了，React需要自己去绑定
    - React中需要自己去实现onchange事件
    - vue中直接v-mode直接帮我们绑定了数据，不用自己写onChange事件
  - MVC和MVVM区别
    - MVC默认值实现数据的更改（单向数据改变）
    - MVVM实现数据更改视图更改，视图更改数据更改（双向数据改变）
    - MVC这种只是缺少一个onChange事件绑定

- vue中数据的双向绑定2.0和3.0的实现
  - vue2.0中，通过`Object.definedProperty`进行set和get修改；
  - vue3.0中通过`Proxy`进行拦截set和get方法进行相关操作，实现数据的双向绑定。



#### 跨域问题的解决方案和实现原理

1、JSONP

> 利用script标签
>
> - 只有get请求
>   - 不安全
>   - 有缓存
>   - 传递的数据大小有限制
>   - 需要服务器单独的支持

- 客户端

```shell
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script>
    $.ajax({
        url: 'http://127.0.0.1:8001/list',
        method: 'get',
        dataType: 'jsonp',
        success: res => {
            console.log(res);
        }
    });
</script>
```

- 后台

```shell
let express = require('express'),
    app = express();
app.listen(8001, _ => {
    console.log('OK!');
});
app.get('/list', (req, res) => {
    let {
        callback = Function.prototype
    } = req.query;
    let data = {
        code: 0,
        message: '测试数据'
    };
    res.send(`${callback}(${JSON.stringify(data)})`);
});
```



2、基于iframe的跨域解决方案

主域相同，子域不一样

- window.name
- document.domin
- location.hash
- post message

3、CORS跨域资源共享

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

4、基于http proxy实现跨域请求

开发时候用proxy，部署用nginx反向代理



#### Vue/React框架中关于组件信息通信引发的面试题

**vue**

- 属性传递
- 发布订阅（EventBus）：$on / $emit
- Provide / inject
- slot插槽
- $parent / $children
- vuex

**react**

- 属性
- 发布订阅
- React.createContext
- redux / react-redux / mobix / dva



组件通信有哪些方案

- 属性方案：父传子

- vue发布订阅（子传父）
  - 属性加发布订阅
- React传回调函数（子传父）
  - 属性加回调函数

祖先和后代进行通信：后代元素中的所有元素都放到祖先中，叫做上下文

- 任何之间的通信使用本地存储方案
  - localstorage（cookie有大小限制，不是一个量级的）
  - redux/vuex（一刷新没有；公共状态管理、本地存储、优化）



session和cookie的区别

- 服务器设置session，服务器返回给客户端的信息会带set-cookies，客户端会把信息设置到cookie中，只能看不能改。客户端再次请求的时候，会带上cookie。

#### 算法

##### 数组去重

- set

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
//转化成Set

//转化成Array方式一
let arr = [...new Set(ary)];

//转化成Array方式二
let arr = Array.from(new Set(ary))

```

- 遍历对比

  - 遍历，重新开辟一个新数组，没有相等的push进去

  ```shell
  let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
  let arr = [];
  for(var i;i<ary.length;i++){
  	let item = ary[i]
  	let args = ary.slice(i+1)		//后面的值一一对比
    if(args.indexOf(item)>-1){
  
  	}else{
      arr.push(item)
    }
  }
  ```

  - 遍历，与后面一一对比，设置为null，最后把值为null的全部筛出

  ```shell
  let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
  let arr = [];
  for(var i;i<ary.length-1;i++){		//最后一个不用对比，肯定与前面都不想等
  	let item = ary[i]
  	let args = ary.slice(i+1)		//后面的值一一对比
    if(args.indexOf(item)>-1){
  		arr[i] = null;		//每一个与后面的进行对比，如果是有相同的就设置成null
  	}
  }
  ary = ary.filter(item=>item!==null)		//筛去等于null的
  ```

  

- 拿数组中的每一项，往新容器中存储，如果没有就存，有就不存

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
let obj = {}
for(var i;i<ary.length;i++){
  let item = ary[i];
  //如果对象没有这个属性就是undefined；也可以用in或者Object.keys。不是
  if(typeof obj[item] !== 'undefined'){		//一定有了这个属性
  	
  	//把最后一项拿过来替换。长度减1，i减1
  	ary[i] = ary[ary.length - 1]
  	ary.length--;
  	i--;
  	
    continue;
  }
  obj[item] = item 
}
obj = {}
```

- 先排序，再相邻比较

```shell
ary.sort();	//升序

```



## 5.7

#### 算法复习

##### 数组去重

- ES6 : Set

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

let arr = [...new Set(ary)]		//使用展开运算符

let arr = Array.from(new Set(ary))		//使用Array.from
```

- 拿所有项和其后面的每一项进行对比，如果有重复的话就删除（最后一项不拿，因为其后面没有东西进行比较了）

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

for(let i = 0; i < ary.length - 1;i++){
  let item = ary[i],
  		args = ary.slice(i+1);	//取出除当前项之后的所有项为一个数组
  		if(args.indexOf(item)>-1){		//判断当前项是否在其后面数组项中存在;或者此处可以使用includes
  			//此处有两个思路：1、包含，将当前项删除 2、定义一个新数组将当前的不包含的放到新数组中,这样的话要遍历所有的包括最后一项
  			
  			//删除方式一：splice(i,1);i--;		//i--是为了解决删除后导致的数组塌陷问题
  			//使用splice删除会造成问题 1、原来数组改变，如果继续i++会造成数组塌陷问题 2、性能不好，一旦当前项删除，后面每一项的索引都要改变
  			
  			//删除方式二：原来数组克隆一份一模一样的，之后在克隆数组中去删除 
  			
  			//删除方式三：赋值为null，之后过滤掉ary.filter(item=>item !== null)
        // ary[i] = null;
        
        //删除方式四：用最后一项替换,替换之后整个数组长度要减少1，并且替换过来后当前的替换项需要重新对比所以i--
        ary[i] = ary[ary.length - 1]
        ary.length--;
        i--;
  		}
}
```

- 对象键值对方式(数组)
  - 拿出一项放入空容器，如果已经存储过，删除当前项

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

let obj = {};
for(let i = 0;i<ary.length;i++){
  let item = ary[i];
  if(typeof obj[item] !== 'undefined'){		//对象中有这个属性，不存储
  
  	//此处对数组的操作跟上面的方式对数组的操作一样，都是讲最后一项替换到当前项
  	ary[i] = ary[ary.length - 1]
  	ary.length--;
  	i--;
  	
    continue;
  }
  obj[item] = item;
}
obj=null;		//obj使用完之后，销毁掉当前使用的堆

```

- 先排序，再相邻比较
  - 相邻项处理方案

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

ary.sort((a,b)=>a-b)		//升序排序
//方式一：每一项和后一项进行比较，如果相同就删除当前项。最后一项没有后一项，所以不用
for(let i = 0;i<ary.length-1;i++){
  if(ary[i] === ary[i+1]){
    ary.splice(i,1);
    ary.length--;
    i--;
  }
}

//方式二：可以使用正则
ary = ary.join('@')+'@'			//"12@12@14@15@16@23@23@25@25@"
let reg = /\d+@\1*/g			// \d拿到数字。  \d+@ 拿到数字加上@符号
let arr = []
ary.replace(reg,(val,group1)=>{
		arr.push(Number(group1.slice(0,group1.length-1) ))
})
conole.log(arr)
```

> 数组去重经典的四大方案：
>
> - 使用ES6的Set方案
>
> - 前一项跟后面每一项进行比较
> - 使用空容器存储验证是否存过
> - 相邻项方案



> sort方法，用于排序，并且是在原来数组基础上进行排序，不生成新数组



##### 排序算法

- 冒泡排序
  - 拿当前项和后一项进行比较,每一轮比较后，最大的放到末尾
  - 下一轮就只比较前部分，不用比较已经放到末尾的最大的

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

function bubble(ary){
  for(let i = 0;i < ary.length - 1;i++){	//外面一层控制循环几轮
    for(let j = 0;j < ary.length-1-i;j++){	//里面一层控制循环到哪个数值
      if(ary[j] > ary[j+1]){
        [ary[j],ary[j+1]] = [ary[j+1],ary[j]]		//ES6解构赋值
      }
    }
  }
}
```

- 插入排序
  - 类似于扑克牌。新抓的牌比手里某张大，那么放到这张后面，小那么放到前面。
  - 先取第一个数据放入一个新数组中，然后依次从第二个数值开始取，一次在新数组中从最大的往最小的进行比较。如果比新数组中某项值大就放在它后面，如果比到第一项还没有找到的话，那么插入新数组最前面

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

function insert(ary){
  let handle = [];
  handle.push(ary[0])
  
  for(let i = 1;i<ary.length;i++){
    let A = ary[i]
    for(let j = handle.length-1;j>=0;j--){
      let B = handle[j]
      if(A>B){
        handle.slice(j,0,A);		//将A插在B后面
        break;		
      }
      if(j===0){
        handle.unshift(A);		//如果是比较到第1个还没有大于第1个，那么直接放到数组的最前面
      }
    }
  }
}
```

> unshift方法是在数组头部插入一个元素，并且是在原数组上进行操作不生成新数组

- 快速排序
  - 取出中间项，比中间项小的放左边，比中间项大的放右边，没有的不再处理

```shell
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

function quick(ary){
  if(ary.length <= 1){
    return ary
  }
  
  let middleIndex = Math.floor(ary.length/2)		//获取中间项index
  let middleValue = ary.splice(middleIndex,1)[0]		//将中间项哦从原数组中删除，并且获得删除的中间项的值
  
  let aryLeft = [];
  let aryRight = [];
  
  for(let i = 0;i < ary.length;i++){
    ary[i]>middleValue?aryRight.push(ary[i]):aryLeft.push(ary[i])
  }
  //递归方式让左右持续这样处理，一直到左右两边都排好为止。并且左+中+右 就是最后的结果
  return quick(aryLeft).concat(middleValue,quick(aryRight))
}
```

##### 数组扁平化

- ES6 : flat方法

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

arr = arr.flat(Infinity)		//后面传入的参数是扁平化的级数；Infinity表示扁平化无限级
```

- toString

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

arr = arr.toString().split(',').map((item)=>{
  return parseFloat(item)
})

//toString后  "1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10"
//split(',')后  ["1", "2", "2", "3", "4", "5", "5", "6", "7", "8", "9", "11", "12", "12", "13", "14", "10"]
//然后再把每一项转化成数字
```

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

arr = JSON.stringify(arr).replace(/\[|\]/g,'').split(', ').map((item)=>{
  return parseFloat(item)
})
// JSON.stringify(arr)后  "[[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]"
```

- 循环验证数组
  - 循环验证是否为数组，是的话继续循环，不是的话直接存入

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

function flatten(arr){
  while(arr.some(item => Array.isArray(item))){
  	arr = flatten([].concat(...arr))		//[].concat(...arr)这样操作会展开一层。递归继续扁平化处理
	}
	return arr;
}
```

> some用于检测数组中是否有符合条件的元素，方法会依次执行数组的每个元素
>
> - 如果有一个满足条件的，则返回true，剩余的元素不会再执行检测
> - 没有满足条件的，返回false
>
> every用于检测数组中的元素是否都符合条件
>
> - 如果检测的数组中有一个不满足条件，那么返回false，并且剩余的不再检测
> - 如果都满足条件那么返回true



```shell
//循环递归，判断当前项是否是数组，如果不是数组那么存进新数组中，如果是数组那么继续校验
(function(){
  function myFlat(){
  		let result = [],
  				_this = this;
			let fn = (arr) => {
        for(let i = 0;i<arr.length;i++){
          let item = arr[i]
          if(Array.isArray(item)){		//如果是数组那么自己递归继续展开，不是的话直接push到result中
            fn(item);
            break;
          }
          result.push(item)
        }
			}
			fn(_this)
      return result;
	}
	Array.prototype.myFlat = myFlat;
})()

arr = arr.myFlat();
```



##### 斐波那契数列

![](https://img-blog.csdnimg.cn/20210507233617893.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 方式一：递归

```shell
//构造前两项，判断n是否从第三项即值为2开始。是的话，等于前两项之和，采用递归方式
function fabonacci(n){
  	if(n<=1) return 1;		//斐波那契数列前两项，1
    let arr = [1,1];
    return fabonacci(n-2)+fabonacci(n-1)
}

```

- 方式二：

```shell
function fabonacci(n){
  	if(n<=1) return 1;		//斐波那契数列前两项，1
    let arr = [1,1];
    let i = n +1 - 2;		//之后需要构造的项的数量
    while(i>0){
      arr.push(arr[arr.length-1]+arr[arr.length-2])		//依次构造后一项
      i--; 
    }
    return arr[arr.length-1]
}
```

- 方式三：递归

```shell
function fabonacci(count){
  	fn(count,curr=1,next=1){
      if(count=0){
        return 1;
      }else{
        return fn(count-1,next,curr+next)		//把当前项作为下一项
      }
  	}
  	return fn(count);
}
```

##### 字节跳动经典算法题

- 输入一个正数N，输出所有和为N的连续正数序列
- 例如：输入15
- 结果：[[1,2,3,4,5],[4,5,6],[7,8]]

```shell
//从N开始，连续M个正数序列的和
function fn(count){
  let result = [];
  let middle = Math.ceil(count/2)
	for(let i = 1;i<=middle;i++){
    for(let j = 2;;j++){	//j累加次数
      let total = (i+(i+j-1))*j/2   //连续数只之和公式，首项➕尾项  乘以项数  除以2
      if(total>count){
        break;
      }else if(total === count){
        result.push(createArr(i,j))
        break;
      }
    }
	}
	return result;
}

function createArr(n,len){
  let arr = new Array(len).fill(null);
  arr[0] = n;
  arr = arr.map((item,index)=>{
    return n+index
  })
  return arr;
}
```


## 5.8

#### 1、call和apply区别是什么，哪个性能更好一些？

call和apply都是function原型上的方法，用于改变this指向的，唯一的区别就是传入参数的形式不一样，call是一个一个传参，而apply把所有参数用数组形式传。bind与他们类似（传参数也是数组形式），都是改变this指向，只是预先处理函数，但是并不会立即执行。 经过测试，call比apply性能要好一些。

```shell
//使用apply场景
let arr = [10,20,30],
		obj = {};
		
function fn(x,y,z){
  
}

fn.apply(obj,arr)		//x,y,z分别为10 20 30
fn.call(obj,...arr)		//基于ES6的展开运算符，可以展开依次传递给函数

```

自己实现性能测试(只供参考，任何代码测试都跟测试环境有关。CPU、内存、GPU等电脑当前性能不会有相同的时间)。`console.time`可以测出一段程序执行的时间。在火狐浏览器中可以安装`firebug`插件取监控更精确的时间

```shell
console.time('A')		//A相当于给时间测试起个名字
for(let i = 0;i<100000;i++){
  
}
console.timeEnd('A')
```

#### 2、编写一条正则，用来验证此规则：一个6～16位的字符串，必须同时包含有大小写字母和数字

- 正向预查：要匹配的字符串必须满足pattern这个条件
- 负向预查：要匹配的字符串必须不满足pattern这个条件
- 括号中的内容只是参与条件，并不参与真正的条件

```shell
let reg = /^(?!^[a-zA-Z]+$)(?!^[A-Z0-9]+$)(?!^[0-9a-z]+$)(?![0-9]+$)[a-zA-Z0-9]{6,16}$/

```



#### 3、实现一个$attr(name, value)遍历，属性名为name，值为value的的元素合集

- 相当于写一个属性选择器。
  - 获得所有标签，循环所有标签。得到每一个标签，传入什么属性就按照这个属性去获取属性值。特殊情况，class这些只要包含这个属性值就可以

```shell
let ary = $attr('id','AAA')


function $attr(property,value){
  let elements = document.getElementByTagName('*'),		//获取当前页面的所有标签
  		arr = [];
  //方式一：可以借用数组循环
  // [].forEach.call(elements,item=>{})
  
  //方式二：利用Array.from将类数组非数组转化成为数组
  elements = Array.from(elements)
  elements.forEach((item)=>{
    let itemValue = item.getAttribute(property)	//在这个标签中获取property
    
    if(property === 'class'){	//class样式类属性名要做特殊处理，因为class中可能有多个属性值
    	
    	//判断当前字符串中是否包含着哦个单词
    	new RegExp(/\b+value+\b/).test(itemValue)?arr.push(item):null		
      return;
    }
     
    if(itemValue === value){	//获取的值和传递的值相等校验成功就是我们需要的
      arr.push(item)
    }
  })
  return arr;
}
```

#### 4、英文字母汉字组成的字符串，用正则给英文单词前后加上空格

```shell
let str = "test一个测试，just测试一下下smileyqp",
		reg = /\b[a-z]+\b/ig;		//后面的g是全局匹配，i是忽略大小写
str.replace(reg,value=>{  //value正则捕获的内容
	return ' '+value+' '
}).trim();							//trim()去除开头和结尾的空格；trimLeft()去除开头空格；trimRight()去结尾空格

//str  "test 一个测试， just 测试一下下 smileyqp"
```

#### 5、实现`(5).add(3).minus(2)`使其输出结果为6

- 对象的实例可以调用对象圆形上的方法。由于数字5可以调用add那么说明，add一定是数字5原型上的方法。数字5属于Number类，那么Number类上一定要有add方法
- 并且由于是链式调用（链式写法），那么执行完add之后，返回的一定是可以继续调用minus的，那么，每一次执行add返回一定是一个数字 ，即返回Number类的实例

```shell
(function(){
	function check(n){
    n = Number(n);		//进行检测
    return isNaN(n)?0:n		//判断是否为有效数字，有效数字返回n，非有效数字返回0 
	}
	function add(n){
		 n = check(n);		//进行有效性检测处理
     return this+n;		//这里的this是操作的实例，即5，那么this+n即5+3 =》 8
	}
	function minus(n){
		 n = check(n);
     return this-n;		
	}
	
	//Number.prototype.add = add;
	//Number.prototype.minus = minus;
	//也可以如下写，JQ源码走红经常下面这种写法
	['add','minus'].forEach((item)=>{
    Number.prototype[item] = eval(item);		//eval将字符串转化成表达式
	})
	
	
})()

(5).add(3).minus(2)
```

#### 6、箭头函数和普通函数的区别

- 箭头函数语法上比普通函数更简洁(ES6中每种函数都可以形参赋默认值和使用…剩余运算符)

```shell
function fn(x){
  return function(y){
    return x+y
  }
}

let fn = x => y=>x+y
```

- 箭头函数中没有this,它里面出现的this从属于所属上下文 （使用call、apply等任何方式都无法改变this指向）

```shell
let obj = {
  name:'smileyqp'
}
function fn1(){
  console.log(this)
}
fn1.call(obj)		//this =>  obj

let fn2 = ()=>{
  console.log(this)
}
fn2.call(obj)  //this  => window
```

- 箭头函数中没有Arguments类数组，只有基于`…arg`传递的参数集合（数组）

```shell
let fn = (...arg ) =>{
  console.log(arg)		// [10, 20, 30]
}
fn(10,20,30)
```

- 箭头函数不能被new执行，因为箭头函数没有this也没有prototype

```shell
function Fn (){
  this.X = 100;
}
fn.prototype.getX = function(){}
let f = new Fn;
```

思考题拓展：

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
```



```shell
题目二：重写replace，replace([REG正则],callback)
let str = 'smileyqp2019smile2020'
str = str.replace(/smile/g,function(...arg){
  //arg中存储了每一次大正则匹配的信息和小正则匹配的信息
  
  return ; //返回把正则匹配的替换后的字符串
})
```



## 5.10

#### 7、字符串中字母大写转小写，小写转大写

```shell
let str = 'smileyqpTestItSMILEYQP@沛沛$3434'
str = str.replace(/a-zA-Z/g,(content)=>{		//每一次正则匹配到的结果
  //验证是否为大写：1、转化成大写之后是否和原来一样，一样那原来的为大写，反之之前为小写2、ASCII表中找大写字母的取值范围（65-90）
  //1、content.toUpperCase() === content
  //2、content.charCodeAt() >=65 || content.charCodeAt <=90
  return content.toUpperCase() === content?content.toLowerCase:content.toUpperCase;
})
```

#### 8、实现字符串查找

实现一个字符串匹配算法，从字符串S中查找是否存在字符串T，若存在则返回第一次所在位置，不存在返回-1（不能基于indexOf以及includes等内置方法）

- 思路一：循环原始字符串中的每一项，让每一项从当前位置街区T.length个字符和T比较，一样返回索引，一共循环S.length-T.length+1次

```shell
(function(){
  function myIndexOf(T){
    //this 原始的字符串，即S
    let lenT = T.length,
    		lenS = S.length,
    		result = -1;
    if(lenT>lenTS){
      return -1;
    }
    for(let i = 0;i<lenS-lenT+1;i++){
    	let substr = S.substr(i,lenT)
      if(substr === T){
        result = i;
        break;
      }
    }
    return result;
  }
  String.prototype.myIndexOf = myIndexOf;
})()

let S = 'yqp27982348张三smile&&&smile',
		T = 'smile'
console.log(S.myIndexOf(T))
```

- 思路二：正则处理
  - 直接正则匹配这个字符串，如果结果为null返回-1，部位null直接可以在正则匹配的 结果中找到index就是索引

```shell
(function(){
  function myIndexOf(T){
    //this 原始的字符串，即S
    let reg = new RegExp(T),
    		res = reg.exect(this);
    return  res === null ? -1:res .index
  }
  String.prototype.myIndexOf = myIndexOf;
})()

let S = 'yqp27982348张三smile&&&smile',
		T = 'smile'
console.log(S.myIndexOf(T))

```



#### 9、验证输入的是否是一个正确的网址

```shell
1、协议：http https ftp
2、域名 www.smileyqp.com  smileyp.cn  smile.yqp.smileyqp.com.cn
3、请求路径 index.html /stu. stu/index.html
4、问号传参   ?name=smileyqp&age=18
5、哈希值 

协议、请求路径、问号传参、哈希可以省略

let str = 'http://www.smileyqp.com/index.html'
leg reg = /^((http|https|ftp):\/\/)?(([\w-]+\.)+[a-z0-9]+)((\/[^/]*)+)?(?:\?[^# ]+)?(#.+)?$/i;

```

## 5.11

#### 10、 原型链

```
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

Foo.a();	//4
let obj = new Foo();		//new Foo()的时候也会吧Foo当作一个函数执行;此时Foo上的属性a  =>1，其中this指obj，obj.a =>2
obj.a();	//2
Foo.a(); //1
```



#### 11、图片懒加载

- 前端性能优化的重要方案，通过图片或者数据的延迟加载，可以加快页面加载速度，第一次加载的速度变快，并且只有滑动到图片部分才会进行加载
- 处理方案
  - 将所有需要延迟加载的图片用一个盒子包起来，设置宽高和默认的占位图
  - 开始让所有的image的src为空，将图片真实地址放到image的自定义属性上，让img隐藏
  - 等到所有的其他资源加载完成之后我们才开始去加载图片
  - 对于有很多图片，当页面滚动的时候，当前图片完全显示出来后，再加载图片

![](https://img-blog.csdnimg.cn/20210511104945485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 单张图片懒加载

```shell
//html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片懒加载</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .imgBox{
            margin: 1000px auto;
            width: 300px;
            height: 200px;
            overflow: hidden;
            background: pink;
        }
        .imgBox img{
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="imgBox">
        <img src="" alt="懒加载" data-img="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3ac79f3df8dcd100bbd10c8e738b4710b8122fcb.jpg"/>
    </div>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./delayImg.js"></script>
</body>
</html>

```

```shell
//delayImg.js
let $imgBox  = $(".imgBox"),
    $img = $imgBox.children('img'),
    $window = $(window)
/**
 * 加载的时机:
 * 1、当页面其他的所有资源都加载完成的时候
 * 2、当页面滚动到其位置的时候，图片完全出现在视野之中
 */
 
// $(document).ready();//dom结构加载完成
$(window).on('load scroll',function(){      //在load和scroll两个事件的时候都会触发;JQuery中事件绑定支持多事件绑定,两个事件触发的时候执行相同的事件;
    if($img.attr('isLoad')==='true'){
        return; //加载过之后不会重新加载
    }
    console.log('ok')
    let $A = $imgBox.outerHeight() + $imgBox.offset().top;
    let $B = $window.outerHeight() + $window.scrollTop()
    if($A<=$B){
        //加载真实图片
        $img.attr('src',$img.attr('data-img'))
        $img.on('load',()=>{
            //加载成功
            // $img.css('display','block')
            console.log('图片加载成功！')
            $img.stop().fadeIn()    //fadeIn是jq中的渐现
        })
        $img.attr('isLoad',true)        //attr存储的自定义属性值都是字符串格式'true'
    }
});
```

![](https://img-blog.csdnimg.cn/20210511110612942.gif)



- 多图片懒加载

```shell
//html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多图片懒加载</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .container{
           width: 800px;
           margin: 0 auto;
        }
        .imgBox{
            margin: 0px auto;
            width: 300px;
            height: 200px;
            overflow: hidden;
            background: pink;
            margin-bottom: 20px;
        }
        .imgBox img{
            width: 100%;

        }
    </style>
</head>
<body>
    <div class="container">
        <div class="imgBox">
            <img src="" alt="懒加载" data-img="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3ac79f3df8dcd100bbd10c8e738b4710b8122fcb.jpg"/>
        </div>
    </div>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./moredelayImg.js"></script>
</body>
</html>
```

```shell
//moredelayImg.js
let $container = $('.container'),
    str = ``,
    $imgBoxs = null,
    $window = $(window)
 
new Array(20).fill().forEach((item)=>{      //new Array(20).fill() 创造长度为20的数组每一项用null填充
    str+='<div class="imgBox"><img src="" alt="懒加载" data-img="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3ac79f3df8dcd100bbd10c8e738b4710b8122fcb.jpg"/></div>'
})
console.log(str)
$container.html(str);
$imgBoxs = $container.children('.imgBox');

//多张图片延迟加载
$window.on('load scroll',()=>{
    //获取浏览器距离body的距离
    let $B = $window.outerHeight() + $window.scrollTop() 
    console.log($imgBoxs)
    //循环获取每一张图片区域，根据自己距离body的距离计算出里面的图片是否进行加载
    $imgBoxs.each((index,item)=>{
        console.log(index,item)
        let $item = $(item),
            $itemA = $item.outerHeight() + $item.offset().top,
            isLoad = $item.attr('isLoad')
        if($itemA <= $B && isLoad !== 'true'){  //如果这个盒子已经懒加载过依次那么就不再次进行懒加载处理
            $item.attr('isLoad',true);
            $img = $item.children('img')
            $img.attr('src',$img.attr('data-img'))
            $img.on('load',()=>{
                //加载成功
                // $img.css('display','block')
                console.log('图片加载成功！')
                $img.stop().fadeIn()    //fadeIn是jq中的渐现
            })
        }
    });         
})
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20210511120033321.gif)



#### 12、数组交集

```shell
let nums1 = [1,2,3,2]
let nums2 = [2,2,2]

let arr = [];
for(let i = 0;i<nums1.length;i++){
  let item1 = nums1[i]
  for(let j=0;j<nums2.length;j++){
    let item2 = nums2[j]
    if(item1===item2){
    	nums1[i] = null;
    	nums2[j] = null;
      arr.push(item1)
      break;
    }
  }
}

console.log(arr)	//[2,2]
```

```shell
let nums1 = [1,2,3,2]
let nums2 = [2,2,2]

let arr = [];
nums1.forEach((item,index)=>{
	let n = nums.indexOf();
	if(n>0){
    nums1.splice(index,1)
    nums2.splice(n,1)
    arr.push(item)
	}
})
```



#### 13、旋转数组

给定一个数组，将数组中的元素向右移k个位置，其中k是非负数，例如：

输入：[1,2,3,4,5,6]和k=3

输出：[5,6,1,2,3,4]

- slice

```shell
输入：[1,-100,78,90]  k = 2
输出：[90,1,-100,78]

function rotate(key){
  //参数处理，key>0
  if(key<0||key === 0||key === this.length)return this;
  if(key>this.length){key = key%this.length}
  //slice支持负数索引，直接就是数组的后几位
   return this.slice(-key).concat(this.slice(0,this.length-key))
}
Array.prototype.rotate = rotate;



let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		// [5, 6, 7, 1, 2, 3, 4]
```

> `slice`参数：开始点，结束点，返回：切割的数组
>
> `splice`参数：开始点、长度，返回：删除的这部分返回

- splice

```shell
输入：[1,-100,78,90]  k = 2
输出：[90,1,-100,78]

function rotate(key){
  //参数处理，key>0
  if(key<0||key === 0||key === this.length)return this;
  if(key>this.length){key = key%this.length}
  
   return this.splice(this.length-key,key).concat(this)
}
Array.prototype.rotate = rotate;



let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		// [5, 6, 7, 1, 2, 3, 4]
```

- 最后一项删除放到最开头，执行k次

```shell
输入：[1,-100,78,90]  k = 2
输出：[90,1,-100,78]

//写法一：
function rotate(key){
  //参数处理，key>0
  if(key<0||key === 0||key === this.length)return this;
  if(key>this.length){key = key%this.length}
  
   for(let i = 0;i<=key;i++){
     this.unshift(this.pop());		//this.pop()最后一项；unshift首部插入
   }
   return this;
}
Array.prototype.rotate = rotate;

//写法二：
function rotate(key){
  //参数处理，key>0
  if(key<0||key === 0||key === this.length)return this;
  if(key>this.length){key = key%this.length}
  
  new Array(k).fill('').forEach((item)=>{
    this.unshift(this.pop());		//this.pop()最后一项；unshift首部插入
  })
   return this;
}
Array.prototype.rotate = rotate;

let arr = [1,2,3,4,5,6,7],
		k = 3;
arr.rotate(3);		// [5, 6, 7, 1, 2, 3, 4]
```



## 5.12

#### 14、函数科里化思想

- 函数科里化：预先处理的思想（利用闭包的机制）

```shell
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
```

> 实现：
>
> - 点击时候，this指向修改成obj，并传入事件对象以及两个参数100，200

```shell
//bind就是一个最经典的柯里化
(function(){
//context就是传入的obj用来改变this指向的，如果没有就默认写的是window
  function myBind(context=window,...outerArgs){	
  	let _this = this;
    return function(...innerArgs){
      _this.call(context,...innerArgs.concat(outerArgs))
    }
  }
  Function.prototype.myBind = myBind;
})()

let obj = {
  name:'OBJ'
}
document.body.onclick = fn.myBind(obj,100,200)

```

> 函数的科里化：是利用闭包的保存思想，也就是函数执行形成一个闭包，存储一些变量值，当要使用的时候再使用 

- 闭包的两大作用：
  - 保护
  - 保存

- 最简单科里化函数编程思想示例。科里化=》闭包。形成闭包，里面的参数供子集使用。

```shell
function fn(x){
	//相当于预先在闭包中把值存储起来 
  return function(y){
    return x+y
  }
}

fn(100)(200)
//第一次执行fn(100)，执行完成之后当前作用域销毁，但是形成闭包值保留，进行第二个方法执行
```

- ##### 经典案例

> 请实现一个add函数实现以下功能
> add(1)	//1
> add(1)(2)	//3
> add(1)(2)(3)	//6
> add(1)(2)(3)(4)	//10
> add(1)(2,3)	//6
> add(1,2)(3)	//6
> add(1,2,3)	//6

```shell
function currying(fn,length){	//函数的length是获取它有多少个形参
  length = length || fn.length;
  return function(...args){
    if(args.length >= length){
      return fn(...args)
    }
    return curring(fn.bind(null,...args),length-args.length)
  }
}

let add = currying((...args)=>{
  return eval(args.join('+'))	//求args里面值相加的和
},5)	//这个后面的5是总共要求几个字数的和，比如这里求五个的。这里是不管几次调用函数，只是参数的数量
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512141055564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- `add(1)(2)(3)(4)`步骤分析
  ![](https://img-blog.csdnimg.cn/20210512150501945.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
- `add(1,2)(3，4)`步骤分析
  ![](https://img-blog.csdnimg.cn/20210512151524743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



#### 15、手写new





















































































































