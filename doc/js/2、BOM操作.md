# 2、BOM操作（Browser Object Model）


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
