## 5.30

#### 32、MVC、MVVM、MVP

##### MVC

- M：model代表数据模型，主要任务是操作数据。将新的数据发送到view改变视图
- V：view代表的是视图，主要任务是将数据模型转化成UI视图。传送指令到controller
- C：controller控制器，主要任务是负责处理业务逻辑。完成业务逻辑之后要求model改变状态

![](https://img-blog.csdnimg.cn/20210531103754930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

#### 33、函数防抖与节流

解决性能问题，可降低函数调用频率。事件频繁触发的时候，比如`window.resize`以及`window.onmousemove`等等，触发频率十分高，会造成浏览器性能问题。以及输入框搜索的时候会实时去后台请求数据，对服务器造成不必要的压力。

![](https://img-blog.csdnimg.cn/20210531141025372.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 函数节流（间隔一定时间执行一次）

```shell
function throttle(fn,delay=500){
	let pre = 0;
  return function(event){
  	const cur = Date.now();
    if(cur - pre > delay){					//只有与上次调用的时间差大于delay
      fn.call(this,event)
      pre = cur;
    }
  }
}
```

##### 函数防抖（一定时间内，只触发最后一次）

```shell
function debounce(fn,delay = 500){
  let timer = null;
  return function(e){
    if(timer){clear(timer)}
    timer = setTimeout(()=>{		//这里需要用箭头函数；因为需要改变this指向
      fn.call(this,e)
    },delay)
    timer = null;
  }
}
```

> 补充：高阶函数：1、参数是函数 2、返回值是函数。满足其中之一的就是高阶函数。

























