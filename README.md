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

## 5.20

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
  return arr;
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
Foo.getName()		//2
getName()			//4
Foo().getName()		//1   this指向window，window.getName()
getName()			//1
new Foo.getName();		//2
new Foo().getName();		//3
new new Foo().getName();		//3
```

#### 7、nodejs事件轮询

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
  -  遇见style/link，浏览器调用css解析起解析并且构建成cssom树
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
  console.log(o)		//执行var a = fun(0)时候o没有定义，undefined
  return {
    fun:function(m){
      return fun(m, n);			//这个fun是window的fun也就是全局的fun
    }
  }
}

//a中存的是同一个返回方法，是同一个fun(m,n)，此时存的n都是第一次的0，后面也只是改m所以n都是0，o打印都为0
var a = fun(0)			//结果给a赋值返回一个对象{fun:function(){...}}
a.fun(1)				//0
a.fun(2)				//0
a.fun(3)				//0

//注意这里区别于上面，这里每次执行完之后保存的n都是上一次返回的n
var b = fun(0).fun(1).fun(2).fun(3)		//undefined 0 1 2

//同理：
var d = fun(0).fun(1).fun(2).fun(3).fun(67).fun(45)  //undefined 0 1 2 3 67


var c = fun(0).fun(1) //undefined 0 此后c上的n保存变成了1

c.fun(2)		//1
c.fun(3)		//1 
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

> js是单线程的，所以我们可以称之为主线程，也就是我们的js代码都是在主线程上完成的。祝不过我们区分任务是同步还是异步，如果是异步的话，那么它会有一个回调函数。 回调函数：定时器的回调、ajax请求的回调、对应事件的回调（比如点击事件）。不同的任务又会交给不同的模块去处理，比如：定时器模块、网络请求模块、事件处理模块。

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
  for(var i = 0;i<=5;i++){
    console.log(i)
    resolve()
  }
}).then(()=>{
  console.log('promise实例成功回调')
})

console.log('end')

//输出：
// start 1 2 3 4 5 end promise实例成功回调  setTimeout
```

#### 12、React和Vue

##### 相同点

- 都是组件化开发
- 虚拟dom
- 都支持通过属性的方式去进行父子组件之间通信
- 数据驱动：更新状态数据，界面会自动更新，不用直接操作dom
- 支持服务器渲染
- 支持原生应用方案：react native（react）、weex（vue）

##### 不同点

- 数据绑定：vue中是双向数据绑定，也就是界面和内存的数据可以双向交流；而react只支持从内存到界面，不支持从界面到内存
-  组件书写方式不一样：react采用JSX（JSX是js的扩展语法，react提出all in js）而vue使用的是模版（也就是在html中去写js、css再通过webpack的loader去对他们进行打包）

- 状态变化：react中调用`setState`；vue中直接通过`this.xxx`去更新data中的数据
- 虚拟dom的底层实现不是完全一样：vue会去跟踪每一个组件的依赖关系、不需要重新渲染整个组件树；而对于react而言，一旦状态改变，全部组件都会重新去渲染所以react中需要`shouldComponentUpdate`这个生命周期方法去进行控制
- react严格上来说是MVC的view层，而view则是mvvm模式的

#### 13、Redux状态管理机制

##### 基本理解：

- redux是一个独立的状态管理js库，不是react的插件库
- 可以用在react、vue、angular等项目中，但是大多情况与react配合使用
- 作用：集中管理react组件中共享数据的状态

##### Redux 使用扩展 

- react-redux简化编码
-  redux-thunk实现redux的一步编程。以及redux-saga
- redux-devtools实现chrome中redux的调试

## 5.21

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
  - 绑定监听（子胥见在父组件中调用的时候绑定监听）`<My-component @eveName="callback"/>`
  - 触发(分发)事件`this.$emit('eveName',data )`
  - 只适合子组件向父组件通信 
- 消息订阅与发布（例如：pubsub-js ）
  - 订阅消息
  - 发布消息
  - 适用于任意关系的组件通信
- Vuex（vue的状态管理的插件库）
- slot：专门用来父向子传递带数据的标签

#### 15、vuex状态管理机制

![](https://img-blog.csdnimg.cn/20210521143448327.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 16、Vue的MVVM的实现

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

- 页面渲染初始化
- 添加删除可见dom元素
- 元素位置改变或者使用动画
- 元素尺寸的改变——大小、外边距、边框
- 浏览器窗口尺寸的变化（resize事件发生时）
- 填充内容的改变，比如文本的改变导致的计算值的宽高改变
- 读取某些元素属性（读取宽高offsetTop/Top/Height/width等）

##### 重绘或者重排的代价：耗时、导致浏览器卡顿

##### 重绘重排优化

- 浏览器自己的优化：浏览器会维护一个队列，把所有会引起重绘或者重排的操作放入这个队列，等队列中的操作到了一定的哦时间间隔或者一定数量的时候，浏览器就会flush队列进行一个个处理，这样就会让多次回流和重绘便车个一次
- 我们也可以合并多次对dom的操作以及对样式的修改为一次，并且减少对style的样式请求
  - 直接改变元素的className
  - 先设置元素的`display:none`然后进行页面布局等操作，设置完成之后再将`display:block`这样的话就之后出现两次重绘和重排
  - 使用cloneNode（ture or false）和replace技术只引发一次重绘和重排
  - 将需要毒刺重排的元素的`position`设置成absolte或者fixed,使其脱离文档流，那么它的变化不会影响到其他元素
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

## 5.22

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
- 示例：`msg!:string`msg是非空字符串；`msg?:string`msg有可能有欲呕可能没有

#### 21、ES6装饰器的使用

- 装饰器：是一种与类相关的语法，用来注释和修改类和类相关的方法和属性。许多面向对象的语言都有这个功能。一般和类class 相关，普通的方法不要去使用
- 装饰器是一种函数，写法是`@函数名`，它可以放在类和类的方法定义前。装饰器就是执行函数，给类或者类下面的属性方法加一些控制条件
- 装饰器
  - 给类或者类属性驾驶一些其他代码
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

## 5.23

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
})

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


//1 5 11 6 2 3 4 7 8 10 9
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

 ## 5.24

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

#####![](https://img-blog.csdnimg.cn/20210524143326471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



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

## 5.25

#### 29、Promise

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
    -  二次调用resolve不会产生影响

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

## 5.26

#### 30、React

##### redux

- ##### Redux帮我们用一个变量存储所有的state，并且提供发布的功能来修改我们的数据，以及提供订阅的功能来触发回调

-  redux是一个独立的数据状态管理库，在angular、vue也都可以使用redux，只不过常与react一起使用

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

>  拓展：`函数柯里化`：函数返回函数；`高阶组件`：组件返回组件

![](https://img-blog.csdnimg.cn/20210526152902453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### react题目

- ##### redux是如何将State注入到React组件中去

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
  - 可以通过创建自定义的hooks来抽离可服用量的业务组件

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



## 5.27

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

    - #####  2、首页请求过多

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

            ![](https://img-blog.csdnimg.cn/20210527114825660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

            ![](https://img-blog.csdnimg.cn/20210527115051890.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        - Q：为什么React lazy可以进行路由懒加载？

          - 首先react lazy是使用了动态加载（dynamic import）的一个标准，webpack只要遇到了动态加载就会把import的内容单独打一个包
          - 由于动态加载返回的是一个promise，所以可以利用promise的流程来做渲染流程的控制
          - 如果当前promise是pending状态，那么就渲染loading组件，如果是resolve状态那么就渲染动态导入的组件

        ![](https://img-blog.csdnimg.cn/20210527154924142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        动态导入：代码执行到import这一行的时候才开始去下载组件。并且webpack会将其单独打包成一个文件 

        ![](https://img-blog.csdnimg.cn/20210527155047496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

        lazy懒加载

        ![](https://img-blog.csdnimg.cn/20210527160626742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

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

      - 熊猫站（https://tinypng.com/）：无损压缩。熊猫站是通过相似颜色的量化技术来减少颜色的数量，并且可以将24位的png文件转化成8位的彩色图片，同时可以将不必要的元素进行剥离。并且它提供了npm包tinify，可以进行批量压缩

    - Q：还有什么其他方式吗

      - 将图片转码为base64，会增大图片体积，因此不建议把大图片转成base64格式，但是建议把小图片转成base64格式，因为它直接写在代码中，可以减少一个图片的请求
      - 使用webp格式

      ![](https://img-blog.csdnimg.cn/20210527171756779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

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

      ![image-20210528022556530](/Users/yqp/Library/Application Support/typora-user-images/image-20210528022556530.png)



打包策略

![](https://img-blog.csdnimg.cn/20210528022405544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210528022006976.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 实现CDN加速

##### 运行阶段（渲染优化）

- 







> 拓展：服务器类别
>
> - 应用服务器：弹性计算，存放运行后端代码等
> - 存储服务器：存储文件
> - CDN服务器：处理静态资源，做资源文件的合并。做静态资源分发
> - 数据库服务器

























