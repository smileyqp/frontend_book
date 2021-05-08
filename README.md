# Introduction

[前端CSDN Blog地址](https://blog.csdn.net/qq_34273059/category_9894803.html?spm=1001.2014.3001.5482)



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

- call和apply区别是什么，哪个性能更好一些？

call和apply都是function原型上的方法，用于改变this指向的，唯一的区别就是传入参数的形式不一样，call是一个一个传参，而apply把所有参数用数组形式传。bind与他们类似（传参数也是数组形式），都是改变this指向，只是预先处理函数，但是并不会立即执行。 经过测试，call比apply性能要好一些。

```shell
//使用apply场景
let arr = [10,20,30],
		obj = {};

```
















































































