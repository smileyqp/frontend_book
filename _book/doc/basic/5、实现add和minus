# 5、实现(5).add(3).minus(2)使其输出结果为6


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
