# 1、call和apply区别是什么，哪个性能更好一些？


call和apply都是function原型上的方法，用于改变this指向的，唯一的区别就是传入参数的形式不一样，call是一个一个传参，而apply把所有参数用数组形式传。bind与他们类似（传参数也是数组形式），都是改变this指向，只是预先处理函数，但是并不会立即执行。 经过测试，call比apply性能要好一些。

```shell
//使用apply场景
let arr = [10,20,30],
		obj = {};
		
function fn(x,y,z){
  
}

fn.apply(obj,arr)		//x,y,z分别为10 20 30
fn.call(obj,...arr)		//基于ES6的展开运算符，可以展开依次传递给函数

```

自己实现性能测试(只供参考，任何代码测试都跟测试环境有关。CPU、内存、GPU等电脑当前性能不会有相同的时间)。`console.time`可以测出一段程序执行的时间。在火狐浏览器中可以安装`firebug`插件取监控更精确的时间

```shell
console.time('A')		//A相当于给时间测试起个名字
for(let i = 0;i<100000;i++){
  
}
console.timeEnd('A')
```