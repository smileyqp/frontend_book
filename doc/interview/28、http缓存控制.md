# 28、http缓存控制

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