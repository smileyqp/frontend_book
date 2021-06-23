# 20、对象调用push方法


```shell
let obj = {
  2:3,
  3:4,
  length:2,
  push:Array.prototype.push
} 

obj.push(1)	//=>  obj[obj.length] = 1  =>  obj[2]=1  length原来基础上加一 obj[length] => 3
obj.push(2)	////=》obj[obj.length] = 2  =>  obj[3]=2 length原来基础上加一 obj[length] => 4
console.log(obj)

//所以obj值如下
let obj = {
  2:1,
  3:2,
  length:4,
  push:Array.prototype.push
}

//数组push方法原理
Array.prototype.push = function(val){
   this[this.length] = val;
   return this.length;	//现在这个长度是数组增加1之后了的长度
}

//push往数组末尾新增一个元素，返回的是数组的长度
```


