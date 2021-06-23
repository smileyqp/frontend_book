# 23、typeof运算符（变量类型）和深拷贝


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

