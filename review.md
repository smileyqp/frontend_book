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











































































