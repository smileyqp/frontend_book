# 12、面向对象new


![](https://img-blog.csdnimg.cn/20210615102220444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210615102632956.png)

- 函数内部创建新对象
- 新对象原型指向传入的类的原型
- 改变新对象的this指向并传入它相关参数
- 返回该创建的心对象

```shell
(function(){
  function _new(){
  	//let obj = Object.create(this.prototype)下面两句的简写
    let obj = new Object();
    obj.__proto__ = this.prototype;
    obj.apply(this,arguments)
    return obj;
  }
  Function.prototype._new = _new;
})()

```
