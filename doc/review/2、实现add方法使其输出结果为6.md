# 2、实现(5).add(3).minus(2)使其输出结果为6

由于是链式写法，每一个返回都得是Number的实例

```shell
(function(){
  function check(n){				//参数容错性
    n = Number(n)
    return isNaN(n)?0:n;
  }
  
  function add(n){
  	n = check(n)
    return this + n;
  }
  
  function minus(n){
  	n = check(n)
    return this - n
  }
  
	['minus','add'].forEach(item => {
      Number.prototype[item] = eval(item);
	})
	//Number.prototype.add = add;
})()
```

#### 