#### 持续更新ing～

- [前端基础github地址](https://github.com/smileyqp/frontend_book)。`README.md`可以下载到`typora`中打开，会有整个大纲目录显示（github中markdown目录快捷生成方式不现实，之后可能会想办法生成贴过来，暂时不做相关处理）
- [前端基础gitbook地址](https://smileyqp.github.io/frontend_book/doc/%E5%89%8D%E7%AB%AFhtml%E5%92%8Ccss%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html)。`README.md`中会实时更新进度内容。[gitbook](https://smileyqp.github.io/frontend_book/)中考虑整个学完整理完成之后，再去统一处理发布，敬请期待！`gitbook`版本可建议后期碎片化时间进行复习使用。
- [前端基础csdn地址](https://blog.csdn.net/qq_34273059/article/details/116933292)。`CSDN`博客专栏[前端自我修养进阶](https://blog.csdn.net/qq_34273059/category_9894803.html)中，也会一篇一篇实时更新相关知识点。
- [前端基础一掘金地址](https://juejin.cn/post/6963439715911467021)、[前端基础二掘金地址](https://juejin.cn/post/6963565458322784293)



#### ⭐️就是最好的鼓励哦wink～💗


[TOC]

## 4.27

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











## 4.28 

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
  -  vue代表MVVM（双向数据绑定）。
    - 数据更改视图变化，视图更改数据变化
  -  React代表MVC。
  -  vue吧给我们把表单绑定事件写好了，React需要自己去绑定
     -  React中需要自己去实现onchange事件
     -  vue中直接v-mode直接帮我们绑定了数据，不用自己写onChange事件
  -  MVC和MVVM区别
     -  MVC默认值实现数据的更改（单向数据改变）
     -  MVVM实现数据更改视图更改，视图更改数据更改（双向数据改变）
     -  MVC这种只是缺少一个onChange事件绑定

- vue中数据的双向绑定2.0和3.0的实现
  - vue2.0中，通过`Object.definedProperty`进行set和get修改；
  - vue3.0中通过`Proxy`进行拦截set和get方法进行相关操作，实现数据的双向绑定。



#### 跨域问题的解决方案和实现原理

1、JSONP

> 利用script标签
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

```shell
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

arr.join('|').split(/(?:,|\|)/g).map((item)=>{
  return parseFloat(item)
})
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
//some循环数组中的每一项，返回的是true那么就是找到了要求中的。
  while(arr.some(item => Array.isArray(item))){		
  	arr = flatten([].concat(...arr))		//[].concat(...arr)这样操作会展开一层。递归继续扁平化处理
	}
	return arr;
}
```

> ###### some
>
> some验证数组中的某一项是否有符合规则的。some返回的结果不是true就是false
>
> some用于检测数组中是否有符合条件的元素，方法会依次执行数组的每个元素
>
> - 如果有一个满足条件的，则返回true，剩余的元素不会再执行检测
> - 没有满足条件的，返回false
>
> every用于检测数组中的元素是否都符合条件
>
> - 如果检测的数组中有一个不满足条件，那么返回false，并且剩余的不再检测
> - 如果都满足条件那么返回true
>
> ```shell
> var A = [3, 4, 5, 5]
> var B = A.some((item)=>{
>   return item >=5;	//只要数组中有大于5的那么B就是true
> })
> ```
>
> ###### find
>
> Find返回的结果如果有就找出这项结果返回，如果没有就返回undefined。并且只查找哦这一项
>
> ```shell
> var A = [3, 4, 5, 5]
> var B = A.find((item)=>{
>   return item >=4;	//有返回这项值，没有返回undefined
> })
> ```
>
> 

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
            continue;			
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

 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如：输入15
 * 结果：[[1,2,3,4,5],[4,5,6],[7,8]]

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

>请实现一个add函数实现以下功能
>add(1)	//1
>add(1)(2)	//3
>add(1)(2)(3)	//6
>add(1)(2)(3)(4)	//10
>add(1)(2,3)	//6
>add(1,2)(3)	//6
>add(1,2,3)	//6
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

1、像普通函数执行一样、形成一个私有的作用域

- 形参赋值
- 变量提升

2、默认创建一个对象，然函数中的this指向这个对象，这个对象就是当前实例
3、代码执行
4、默认把创建对象返回

```shell
function _new(Fn,...arg){
  //Fn当前要new的类;arg是给构造函数传的参数
  
  //let obj = {};
  //Fn.call(obj,...arg)
  let obj = Object.create(Fn.prototype);		//创建原型链为Fn.prototype的对象实例
  obj.__proto__ = Fn.prototype;
  return obj;
}

```

> 注意：`Object.create`是创建一个空对象，并且对象的原型链指向我们传入的那个参数（即：让我们创建的这个空对象作为我们传入的那个参数的实例）

#### 16、数组合并

- 题一：

![](https://img-blog.csdnimg.cn/20210512164135548.png)

```shell
let ary1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
let ary2 = ['A','B','C','D']
//因为使用arr.sort((a,b)=>a.localeCompare(b))，时候没有Z,ABCD这些会在最前面
ary2 = ary2.map(item=>item+'Z')
let arr = ary1.concat(ary2)
arr.sort((a,b)=>a.localeCompare(b)).map(item=>{
  return item.replace('Z','')	//去除Z
})

console.log(arr)	//["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]
```

- 题二：

```shell
let ary1 = ['D1','D2','A1','A2','C1','C2','B1','B2']
let ary2 = ['B','A','D','C']
//要求合并输出的数组为["D1", "D2", "D","A1", "A2", "A","C1", "C2", "C","B1", "B2", "B"]

let n = 0;
for(let i = 0;i<ary2.length;i++){
	let item2 = ary2[i]
  for(let j = 0;j<ary1.length;j++){
    let item1 = ary1[j]
    if(item1.includes(item2)){
    	n = j;	//包含记录索引，后面有包含会更新这个值。保存最后一项匹配的索引
    }
  }
  //把当前的值插入到索引的后面
  ary1.splice(n+1,0,item2)	//从n+1删除0项，将item2插入n+1的前面，也就相当于n后面插入n+1
}
console.log(ary1)	//["D1", "D2", "D", "A1", "A2", "A", "C1", "C2", "C", "B1", "B2", "B"]
```



#### 17、闭包

```shell
for(var i = 0;i<10;i++){
  setTimeut(()=>{
    console.log(i)
  },10000)
}
//输出10次10，因为不是私有变量。setTimeout是异步的
```

```shell
//将var改成let，let定义的局部块的变量，每次循环都会在当前块作用域中形成私有变量i，定时器执行的时候所使用的i是所属作用域的i
for(let i = 0;i<10;i++){
  setTimeut(()=>{
    console.log(i)
  },10000)
}
//输出0,1,2,3,...，因为不是私有变量。setTimeout是异步的
```

```shell
//使用闭包保存i 
for(var i = 0;i<10;i++){
  (function(i){
    setTimeut(()=>{
    	console.log(i)
  	},10000)
  })(i)
}
```

```shell
//使用闭包也可以这样写
for(var i = 0;i<10;i++){
  setTimeut(((i)=>{
   return ()=>{
      console.log(i)
   }
  })(i),10000)
}
```

```shell
//也可以使用bind保存i的值，基于bind预先处理机制。循环的时候就将bind要预先处理的函数传过去
var fn = function(i){
    console.log(i)
}
for(var i = 0;i<10;i++){
  setTimeut(fn.bind(null,i),10000)
}
```



#### 18、匿名函数

- 匿名函数如果设置了函数名，在外面是无法调用的，但是在函数里面可以调用执行
- 并且这个名字相当于一个常量，这个名字存储的值不能修改（非严格模式下不会报错，但是不会有任何的效果，严格模式下直接报错。可以理解为const创建的常量 ）

```shell
let fn = unction AAA(){
  console.log(AAA)	//当前函数
}
```

```shell
var b = 10;
(function b(){
  b = 20
  console.log(b)	//function b;b此时相当于一个常量，不能被改变
})()
console.log(10)		//10 
```

```shell
var b = 10;
(function(){		//去掉匿名函数的名称b之后，里面的b就变成全局的了
  b = 20
  console.log(b)	//20
})()
console.log(10)		//20
```

现在要让上面的匿名函数中的b的值log变成20，并且全局b仍然是10，怎样实现？

- 将b变成私有变量，声明它或者改为形参

```shell
//方法一：改为形参
var b = 10;
(function b(b){	//形式参数
  b = 20
  console.log(b)	//20
})()
console.log(10)		//10 

//方法二：声明它
var b = 10;
(function b(){	
  let b = 20	//或者使用var声明也可以
  console.log(b)	//20
})()
console.log(10)		//10 
```

#### 18、`var a = ?`使得`a==1&&a==2&&a==3`

#####`==`&`===`

- `==`进行比较，如果左右两边的数据类型不相同的话那么先转换成相同的数据类型，然后再进行比较
  - `{}=={}`两个对象进行比较时比较堆内存的地址
  - `null==undefined `相等的，但是三个等号就不相等
  - `NaN == NaN`不相等，NaN和谁都不相等
  - `[12]=="12"`对象和字符串项比较，是把对象toString转换成字符串之后进行比较
  - 剩余所有的情况进行比较的时候都是转化成数字(对象转换成数字都是现toString转换成字符串,再转换成数字)（前提是类型不一样的时候）
    - 对象转化成数字都是现转化成字符串，再转化成数字
    - 字符串转化成数字，只要出现一个非数字字符，结果就是NaN
    - 布尔转数字：true => 1   false=>0
    - `null`转化成数字0
    - `undefined`转化成数字NaN 

```shell
[12]==true 都是转化成数字. => Number([12].toString()) 输出12  ==  1 不相等
[] == false  []=> 0  false => 0 相等
[] == 1  []=>0  不相等
"1" == 1	相等
true == 2		不相等
```

##### `var a = ?`使得`a==1&&a==2&&a==3`

给对象添加一个私有的toString方法，重构私有方法

- 方法一：

```shell
使得a==1&&a==2&&a==3成立

对象要先toString然后进行转化成数字

var a = {
  n:0,
  toString:function(){		//所有的值调用toString都是先看自己私有有没有，没有再原型链上找
    return ++ this.n;		
  }
}
```

- 方法二

```shell
//shift删除数组第一项，返回删除的内容，原有的数组改变
var a = [1,2,3]
a.toString= a.shift
a==1&&a==2&&a==3
```

- 方法三

```shell
let n = 0;
Object.defineProperty(window,'a',{
  get:function(){
    return ++n;
  }
})

//设置成全局变量实际并不好，可以优化
Object.defineProperty(window,'a',{
  get:function(){
  	this.val?this.val++:this.val=1;
  }
})
```

ES6新增方法

- Array
  - from将其他的转化成数组
  - isArray判断是否为数组

- `String.fromCharCode(122)   `  =>  z.    `'z'.charCodeAt()`  => 122

- `Object.create([obj])`创建空对象，原型链指向空对象

- `Object.defineProperty`用于定义某个对象中的参数，三个参数：对象、属性、值

```shell
let obj = {
  name:'Jane'
}
//Object.defineProperty(obj,'name','smileyqp')		//每次获取时候会触发get方法，于是可以从get方法着手
//监听获取和设置
Object.defineProperty(obj,'name',{
	get:function(){
      return 'smileyqp'
	},
	set:function(){
    return 'Mary'
	}
})
```



## 5.13

#### 19、对象调用push方法

```shell
let obj = {
  2:3,
  3:4,
  length:2,
  push:Array.prototype.push
} 

obj.push(1)	//=>  obj[obj.length] = 1  =>  obj[2]=1  length原来基础上加一 obj[length] => 3
obj.push(2)	////=》obj[obj.length] = 2  =>  obj[3]=2 length原来基础上加一 obj[length] => 4
console.log(obj)

//所以obj值如下
let obj = {
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



#### 20、对象转数组

![](https://img-blog.csdnimg.cn/20210513153531948.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

> let obj = {
>   1:2323,
>   4:3492,
>   8:2673
> }
> 要求得到[2323, null, null, 3492, null, null, null, 2673, null, null, null, null]

- 方法一:直接new Array().fill(null)然后map使用index对比

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}

let arr = new Array(12).fill(null).map((item,index)=>{
  return obj[index+1]?obj[index+1]:item
})
```

- 方法二：利用obj.length长度，然后Array.from

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
obj.length = 13	//因为要截取后面的12个
//Array.from(obj) 后的值[undefined, 2323, undefined, undefined, 3492, undefined, undefined, undefined, 2673, undefined, undefined, undefined,undefined]
Array.from(obj).slice(1).map(item=>{		//slice是动某个索引值开始
  return item?item:null
})
```

- 方法三:利用object.keys

```shell
let obj = {
  1:2323,
  4:3492,
  8:2673
}
//Object.keys，是遍历对象中的所有key并且以数组的方式返回

let arr = new Array(12).fill(null)
Object.keys(obj).forEach(item=>{
  arr[parseInt(item)-1] = obj[item]
})

```

###### 基本的数组相关的方法![](https://img-blog.csdnimg.cn/20210513160853638.png)



#### 21、值类型&引用类型（变量类型）

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
  - undefined
  - string
  - number
  - boolean
  - symbol

-  常见引用类型
  - obj
  - array
  - null  特殊引用类型，指向的地址为空地址
  - function  特殊引用类型，不用于存储数据，所以没有'拷贝、赋值函数'这一说法

```shell
const obj1 = {x:100,y:200}
const obj2 =obj1;
let x1 = obj1.x;		//干扰作用，值类型直接赋值过去，之后再没有关系
obj2.x = 101;
x1 = 102;
console.log(obj1)		//{x:101,y:200}
```



#### 22、typeof运算符（变量类型）和深拷贝

- 判断所有值类型
- 判断是否函数
- 判断是否引用类型（不可再细分）

![](https://img-blog.csdnimg.cn/20210513174038244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/2021051317415385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 深拷贝

```shell
function deepClone(obj = {}){
  if(typeof obj !== 'object'||obj === null){
    return obj;
  }
  //初始化返回结果
  let result;
  if(obj.instanceof Array){
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){	//保证是这个对象自己拥有的私有属性，不是原型的属性
    	//调用递归
       result[key] = deepClone(obj[key])
    }
  }
  return result;
}
```



#### 23、变量计算、类型转换

- ##### 字符串拼接

```shell
const a = 100+10;		//110
const b = 100+'10';	//10010
const c = true+'10';	//true10
```

- ##### ==

```shell
100 == '100';		//true
0 == '';		//true
0 == false;	//true
false =='';	//true
null == undefined;	//true
```

> 除了`==null`之外其他的一律用`===`。并且，例如：`a==null`相当于a`===undefined||===null`

- ##### if语句和逻辑运算(if语句判断的就是truely变量和falsely变量)

  - truely变量和falsely变量
    - truely变量：两步非运算得到true。`!!a===true`
    - falsely变量：两步非运算得到false。`!!a===false`

![](https://img-blog.csdnimg.cn/20210513182550663.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/2021051318272935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- ##### 逻辑判断（也是truely变量和falsely变量）

![](https://img-blog.csdnimg.cn/20210513182911197.png)







## 5.14

#### 24、class和继承

```shell
class Student{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    console.log('hi'+this.name+this.age)
  }
}

let stu = new Student('smileyqp',100)
```

##### 继承

- extends
- super
- 扩展或者重写方法

```shell
class Person(){
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(this.name+'eat food')
  }
}

class Student extends Person{
  constructor(name,age,number){
    super(name,age)
    this.number = number;
  }
  sayHi(){		//扩展方法
    console.log('hi'+this.name+this.age)
  }
}

class Teacher extends Person{
  constructor(name,age,major){
    super(name,age)
    this.major = major;
  }
  teach(){
    console.log(this.name+'teach'+this.major)
  }
}

let smileyqp = new Student('smileyqp',20)

//补充
smileyqp.eat()		//smileyqp eat food
smileyqp.__proto__.eat()		//会爆粗，因为它相当于在smileyqp.__proto__即Student的原型上去调用的，没有定义name所以会报错

```

##### instanceof

- instanceof可以去判断引用类型
- Object是所有class的父类

```shell
smileyqp instanceof Student;	//true
smileyqp instanceof Person;	//true
smileyqp instanceof Object;	//true

[] instanceof Array;	//true
{} instanceof Object;		//true
[] instanceof Object;		//true
```



#### 25、原型和原型链

- 每个class都有显示原型`prototype`
- 每个实例都有隐式原型`__proto__`
- 实例的隐式原型`__proto__`都指向对应的class的原型`prototype`

```shell
//隐式原型和显式原型（案例demo接上个题目的案例）
console.log(smileyqp.__proto__)				//隐式原型
console.log(Student.prototype)				//显式原型
console.log(smileyqp.__proto__ === Student.prototype)				//true
```

##### 获取实例的属性或者方法（基于原型的执行规则）

- 先在自身的属性和方法上进行查找
- 如果找不到就到`__proto__`中查找

##### 原型链

![](https://img-blog.csdnimg.cn/20210514111816793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
console.log(Student.prototype.__proto__)
console.log(Person.prototype)	
console.log(Student.prototype.__proto__ === Person.prototype)
```

##### instanceof

- 顺着原型链进行查找，有返回true，没有返回false

##### 原型原型链相关题目解答

- 如何判断一个变量是否是数组（类型判断instanceof，a instanceof Array）
- 手写一个建议的jQuery，考虑插件和扩展性（原型和原型链）

```shell
//jquery做dom查询的
class jquery{
  constructor(selector){
    cons result = documnent.querySelectorAll(selector)
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

//1、插件机制
jQuery.prototype.dialog = function(info){
  alert(info)
}

//2、造轮子
class myJQuery extends jQuery{
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

- class的原型本质怎么理解（class和继承）
  - 原型和原型链的图示
  - 属性和方法的执行规则

#### 26、作用域和闭包

- this的不同应用场景，如何取值
- 手写bind函数
- 实际开发中闭包的应用场景，并举例说明

```shell
//创建10个<a/>标签，点击的时候弹出来对应的序号
let i,a;
for(i = 0;i<=10;i++){
  a = document.createElement('a');
  a.innerHTML = i+"<br/>";
  a.addEventListener('click',function(e){
    e.preventDefault();
    alert(i)		//10
  })
  document.body.appendChild(a)
}


let a;
for(let i = 0;i<=10;i++){	//let i是定义块作用域
  a = document.createElement('a');
  a.innerHTML = i+"<br/>";
  a.addEventListener('click',function(e){
    e.preventDefault();
    alert(i)		//1,2,3,4,5...
  })
  document.body.appendChild(a)
}



```

##### 作用域和自由变量

- 作用域：变量的合法的使用范围

- 作用域分类

  - 全局作用域
  - 函数作用域
  - 块级作用域（ES6新增）

  ```shell
  //ES6新增
  if(true){
    let x = 100;			//这里用乐天声明的变量或者const声明的常量，他们的作用域都是这个块之内
  }
  console.log(x);		//会报错
  ```

![](https://img-blog.csdnimg.cn/20210514144022202.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 自由变量 

- 自由变量：一个变量在当前作用域没有定义但是被使用了
- 向上级作用域一层一层寻找，直到找到为止
- 如果到全局作用域都没有找到的话那么就会报错`xx is undefined`

##### 闭包

```shell
//函数作为返回值，返回之后再执行
function create(){
  let a = 100;
  return function(){
    console.log(a)
  }
}
let fn = create();
let a = 200;
fn();		//100   函数执行是在全局作用域；函数的定义在create函数里面，往上级作用域寻找

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
print(fn);		//100
```

- ##### 闭包：自由变量的查找是在函数定义的地方，向上级作用域进行查找，不实在执行的地方进行查找 

#### 27、this

- 作为普通函数
- 使用call、bind、apply
- 作为对象方法被调用
- 在class方法中调用
- 箭头函数

##### this取什么:值是在函数执行的时候决定的不是在函数定义的时候确定的

```shell
function fn1(){
  console.log(this)
}
fn1();	//window

fn1.call({x:100})		//{x:100}

const fn2 = fn1.bind({x:200})
fn2();	//{x:200}
```

箭头函数没有this，其中this取上级作用域this

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

```shell
function.prototype.mybind = function(){
  //将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  
  //获取this（数组第一项）
  const t = args.shift()
  
  //fn1 bind中的fn1
  const self = this;
  
  return function(){
    return self.apply(self,args)
  }
}

```

##### 闭包的应用

- 隐藏数据
- 做一个简单的cache工具

```shell
function createCache(){
  const data = {}		//闭包中的数据，隐藏不被外界访问
  return {
    set:function(key,val){
      data[key] = val;
    },
    get:(){
      return data[key]
    }
  }
}

//隐藏不被外界访问,是指c只能通过set，get设置获取。只提供api访问，其他方式改不了
const c = createCache();
c.set('a',100);
c.get('a');

```



## 5.16

#### 28、同步和异步

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

- 同步和异步的区别是什么
  - 基于js是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行
- 手写Promise加载一张图片

```shell
const src = '../xxximg.png'

function loadImg(){
  return new Promise((resolve,reject)=>{
    let img = document.createElement('img')
		img.onload = function(){
  		console.log('loaded')
  		resolve(img)
		}
		mg.onrror = function(){
      reject(new Error(`图片加载失败${src}`))
		}
		img.src = src
  })
}

loadImg().then(img=>{
  console.log(img)
  return img
}).catch(err){
  console.log(err)
}
```

- 前端使用的异步的场景有哪些

  - 网络请求，比如：ajax图片加载 

    ```shell
    onsole.log('start')
    let img = document.createElement('img')
    img.onload = function(){
      onsole.log('loaded')
    }
    img.src = './xxx.png'
    console.log('end')
    ```

  - 定时任务，比如：setTimeout

##### 知识点

- 单线程和异步（异步是由单线程这个背景来的）

  - JS是单线程语言，只能同时做一件事
  - 浏览器和nodejs已支持Js启动进程如web worker。但是并不能改变js是单线程的本质
  - Js和dom渲染共用同一个线程，因为js可以修改dom结构
  - 遇到等待（网络请求、定时任务）不能卡住

  

  - 需要异步，解决单线程的问题
  - 回调callback函数形式

## 回顾总结

##### 知识模块

- 变量类型和计算
- 原型和原型链
- 作用域和闭包
- 异步和单线程

##### 题目

- typeof能判断哪些类型
  - 基础类型
  - 引用类型

- 何时使用===何时使用==
- 值类型和引用类型的区别  
- 手写深拷贝

##### 知识点

- 值类型vs引用类型，堆栈模型，深拷贝
- typeof运算符能干嘛
- 类型转换、truely和falsely变量

##### 原型和原型链的题目

- 如何准确判断一个变量是不是数组（instanceof原型链查找）
- 手写一个jquery，考虑插件和扩展性
- class的原型本质怎样理解

##### 原型和原型链知识点

- class和继承，结合手写jquery的示例理解
- instanceof表象和本质
- 原型和原型链：图示&执行规则

##### 闭包和作用域的题目

- this的不同引用场景，如何取值
  - this是在函数执行的时候确定，函数定义的时候不能确定

- 手写bind函数
- 实际开发中遇到的闭包场景，并且举例说明（eg：隐藏数据，只提供api）

```shell
//创建10个a标签，点击依次弹出1，2，3，4，5，6，7，8，9，10
let a;
for(let i = 0;i<=10;i++){
   a = document.createElement('a')
   a.innerHTML = i+'</br>';
   a.addEventListener('click',function(e){
     e.preventDefault()
     alert(i)
   })
   document.body.appendChild(a)
}
```

##### 作用域和闭包知识点

- 作用域和自由变量（自由变量是不是在当前块作用域定义，但是在这使用的）
- 闭包：常见两种形式&自由变量查找规则
- this

##### 异步和单线程题目

- 异步和同步的区别
- 手写Promise加载一张图片 
- 前端使用异步的场景
  - ajax请求
  - setTimeout

##### 异步和单线程知识点

- 单线程和异步、异步和同步的区别 
- 前端异步应用场景（网络请求&定时任务）
- Promise解决callback hell问题





# JS Web API

- JS基础知识，规定语法（ECMA 262标准）
- JS WEB API，网页操作API（W3C标准）
- 前者是后者的基础，两者结合才能真正的在实际中应用

### JS WEB API范围

- DOM操作
- BOM操作（浏览器上的事情：浏览器导航、浏览器url地址、浏览器跳转、浏览器宽高）
- 事件绑定
- ajax
- 存储



前言

- Vue和React框架应用广泛、封装了DOM操作
- 但是DOM操作一直都是前端工程师的基础必备知识
- 只会框架不会dom操作的程序员不会长久

## 5.17

#### 1、DOM操作（Document Object Model文档对象模型的集合）

##### 题目

- DOM属于哪种数据结构
  - 基于树形结构
- DOM操作的常用API
- attr（attribute）和property的区别
  - property：修改对象的属性，不会体现在html结构中（不会对节点有什么影响）
  - attr：直接修改html属性，会改变html的结构（改变标签结构）
  - 两者都可能引起dom重新渲染（尽量用property去进行操作，因为设置property一定会重新渲染，attribute不一定。重新dom渲染是一件比较耗费性能的事情）

- 一次性插入多个dom节点，考虑性能
  - dom节点缓存
  - 创建片段，一次性插入createFragment

##### 知识点

- DOM本质
  - 从html解析出来的树

html实际上也是一种特殊的xml

- DOM节点的操作

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
    - 用js的属性操作的一种形式

  ```shell
  const pList = ducument.querySelectorAll('p')
  const p = pList[0]
  console.log(p.style)
  console.log(p.style.width)
  console.log(p.style.className)
  console.log(p.nodeName)	//nodeName节点的名称
  console.log(p.nodeType)	//nodeType节点的类型
  ```

- DOM结构的操作

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

  - dom查询做缓存（减少dom查询。将dom缓存，dom查询改成变量查询）

  ```shell
  //不缓存dom查询结果
  for(let i = 0;i<document.getElementByTagName('p').length;i++){
    //每次查询都会重新去计算length，频繁进行dom查询
  }
  
  //缓存dom查询的结果
  const plist = document.getElementByTagName('p')
  const plength = plist.length;
  for(let i = 0;i<plength;i++){
  	//缓存dom查询，只需要进行一次dom查询
  }
  ```

  - 将频繁操作改成一次操作
    - 创建文件片段，然后再一次插入（createFragment）

  ```shell
  const listNode = document.getElementById('list')
  
  //创建一个文档片段，此时还没有插入dom
  const frag = document.createDocumentFragent();
  
  //执行插入
  for(let x = 0;<=10;x++){
    const li = document.createElement('li');
    i.innerHTML = 'list item'+x;
    frag.appendChild(li)
  }
  
  //都完成之后再插入dom树中
  listNode.appendChild(frag)
  ```

  

#### 2、BOM操作（Browser Object Model）

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

##### 题目：

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

- 事件绑定（addEventListener）

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

- 事件冒泡：顺着dom结构往上上冒泡
  - 例如：在body上添加事件，如果点击它子元素，那么都会冒泡到body上去
  - `stopPropagation`可以阻止冒泡

![](https://img-blog.csdnimg.cn/20210517152222915.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 事件代理 
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

## 5.18

#### 4、ajax

##### 题目

- 手写一个简易的ajax

```shell
function ajax(url){
  const p = new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data/test.json',true);		//true的意思是异步请求
    xhr.onreadystatechange = function(){
      if(xhr.readystate === 4){
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText))
        }else if(xhr.status === 404){
          reject(new Error('404 not found!'))
        }
      }
    }
  });
  xhr.send(null)
  return p;
}

const url = '/data/test.json'
ajax(url).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```



- 跨域常用的实现方式

##### 知识点

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

- 跨域：同源策略跨域解决方案
  - 什么是跨域（同源策略）
  - JSONP
  - CORS（服务端支持）



##### 同源策略

- ajax请求时，浏览器要求当前网页和server必须同源（安全）
- 同源：协议、域名、端口三者必须一致

- 加载图片、css、js可以无视同源策略
  - `<img src=""/>`（注意：有的图片可能做了防盗链）
  - `<link src=""/>`
  - `<script src=""></script>`
  - `<img src=""/>`可以做统计打点，可使用第三方统计服务
  - `<link src=""/>`和`<script src=""></script>`可以使用CDN，CDN一般都是外域
  - `<script src=""></script>`可以实现JSONP

##### 跨域

- 所有的跨域都必须经过serve端允许和配合
- 未经serve端允许就实现跨域，说明浏览器有漏洞，危险信号

##### JSONP

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

![](https://img-blog.csdnimg.cn/20210518103852238.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- fetch

![](https://img-blog.csdnimg.cn/20210518103945753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210518104023491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210518104058242.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- axios

![](https://img-blog.csdnimg.cn/20210518104209364.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210518104248535.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



#### 5、存储

##### 题目

- 描述cookie、localstorage、sessionStorage的区别
  - 容量
  - API易用性
  -  是否跟随http 请求发出去 

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

##### localstorage和sessionstorage区别

- localstorage数据会永久存储，除非代码或者手动删除
- sessionstorage只会存在于当前会话浏览器关闭则清空
- 一般用localstorage多一些

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

-  公司上线的服务器一般是linux
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

#### 7、页面加载和渲染过程

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
-  将dom树和cssom整合形成render tree（渲染树：像是dom树中挂了css属性）
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

![image-20210518173205903](/Users/yqp/Library/Application Support/typora-user-images/image-20210518173205903.png)

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



## 5.19

#### 9、函数节流&防抖

- 函数节流：函数执行一次后，只有大于执行周期之后才会执行第二次（规定时间内只触发第一次生效）

```shell
//fn:要截流的函数；delay规定的时间
function throttle(fn,delay){
  //记录上一次触发的时间
  var lastTime = 0;
  return function(){
     var curTime = Date.now();
    if(curTime-lastTime>delay){
      fn.call(this);					//修正this指向问题
      lastTime = curTime;			//闭包方式保存上次变量值lastTime
    }
  }
}
```

- 防抖函数：频繁触发的函数，规定时间内，只触发最后一次

```shell
function debounce(fn,delay){
  var timer = null;				//记录延时器
  return function(){
  	if(timer){clearTimeout(timer)}		//清除上一次延时器
    timer = setTimeout(function(){
    	fn.apply(this)
  	},delay)
  } 
}
```

##### 防抖debounce

- 场景：监听一个输入框的文字变化后触发change事件
- 直接用keyup事件会频繁触发change事件
- 防抖：知道用户输入结束或者暂停之后才会触发change事件

```shell
function debounce(fn,delay=500){		//debounce是对函数的封装，最糊返回的是一个函数
  var timer = null;
  return function(){
    if (timer){clearTimeout(timer);}
    timer = setTimeout(function(){
      fn.apply(this,arguments);
      timer = null;
    },delay)
  }
}

//使用
input1.addEventListener('keyup',debounce(function(){
	console.log('使用防抖函数：'+this.value)
}),1000)
```

##### 节流throttle

- 场景：拖拽一个元素时候要随时拿到这个元素的位置
- 如果直接用drag事件那么会频繁触发，十分容易导致卡顿
- 保持一个频率连续触发

```shell
function throttle(fn,delay=500){
  let timer = null;
  return function(){
    if(timer){return;}
    setTimeout(()=>{
    fn.apply(this,arguments);			//apply:绑定this，绑定参数
      timer = null; 
    },delay)
  }
}

//使用
div1.addEventListener(throttle(function(e){
  console.log(e.offsetX)
  console.log(e.offsetY)
},100))
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







# 面试题

#### 1、作用域和值类型引用类型的传递

##### 作用域

```shell
var num1 = 11;
var num2 = 22;
function fn(num,num1){
	//num,num1会计作用域中变量，分别传入时候只为11，22
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
  var arr = str.split('-');
  for(let i = 1;i<arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)
  }
  return arr.join('');		//数组拼接成字符串
}
```

#### 3、冒泡排序

```shell
function bubble(arr){
  for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < arr.length - 1 -i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}

```

#### 4、反转数组

- 示例：比如数组`[1,2,3,4,5,6,7,8]`反转数组之后的结果是`[8,7,6,5,4,3,2,1]`
- 类似于首位交换

```shell
0 len-1
1 len-1 -1
2 lem-1 -2

function fn(arr){
  for(let i = 0;i < arr.length/2;i++){
    [arr[i],arr[arr.length -1 -i]] = [arr[arr.length -1 -i],arr[i]]
  }
  return arr
}
```

#### 5、数组去重

- Set

```shell
function fn(arr){
  return Array.from(new Set(arr))
}
```

- 一项一项去拿，然后和其后面形成的数组进行对比

```shell
function fn(arr){
  for(let i = 0;i < arr.length;i++){
    let val = arr[i],
    		compareArr = arr.slice(i);		//取出i之后的所有项组成的数组
    if(compareArr.indexOf(val)>-1){		//如果后面存在这个值
      arr.split(i,1)
      arr.length--;
      i--;
    }
  }
  return arr
}


function fn(arr){
  for(let i = 0;i < arr.length;i++){
    let val = arr[i],
    		compareArr = arr.slice(i);		//取出i之后的所有项组成的数组
    if(compareArr.indexOf(val)>-1){		//如果后面存在这个值
      arr[i] = null;
    }
  }
  arr = arr.filter((item)=>{return item != null})
}
```

- 先排序再去重

```shell
function fn(arr){
  arr = arr.sort((a,b)=>{return a-b});		//升序
  for(let i = 0;i < arr.length-1;i++){		//倒数第一项不用去跟后面一项进行对比
    if(arr[i] === arr[i+1]){
      arr.split(i,1)
      arr.length--;
      i--;
    }
  }
  return arr;
}
```

#### 6、1px物理像素的实现

```shell



```

































































