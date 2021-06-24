# 4、ajax


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

