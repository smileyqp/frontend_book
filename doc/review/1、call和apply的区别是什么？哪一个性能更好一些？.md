# 1、call和apply的区别是什么？哪一个性能更好一些？

call和apply都是function原型上的方法，每一个函数作为function的实例都可以调用这两个方法， 这两个方法的目的都是改变函数的this指向并且让函数执行的。唯一的区别就是call时需要一个个传参数，而apply时将参数以数组的形式进行传递。跟call和apply相似的还有一个bind，只不过bind是预先把函数进行预处理，改变函数的this窒指向，并没有将函数立即执行。指定this指向，三个参数左右性能差不多。call的性能要比apply好一些，尤其是传入参数超过三个以上的时候。所以开发中，可以多使用call。但是在传入参数是数组的时候，可以使用apply更加方便。

- 找到类和实例的概念：都是function原型上的方法，所有的函数都是function的实例所以都可以调用
- 指出call、apply的共同作用改变this指向
- 指出call和apply的唯一区别：传参的形式不一样
- 引出类似的bind方法，并说明bind方法和这两种的相同点和不同点

```shell
fn.call(obj,10,20,30)

fn.apply(obj,[10,20,30])

fn.bind(obj,10,20,30)
```

所以开发中，可以多使用call。但是在传入参数是数组的时候，可以使用apply更加方便。但是可以使用ES6的展开运算符call也可以实现将数组中的每一项依次传给函数。

```shell
let arr = [10,20,30],
		obj = {};

function fn(x,y,z){}

fn.call(obj,...arr);		//基于ES6的展开运算符，可以将数组中的每一项依次传给函数

fn.apply(obj,arr)
```

性能测试

`console.time`可以测出一段代码执行的时间。性能测试使用这个较多。

`console.profile`在火狐浏览器中安装`FireBug`可以更加精准的获取程序每个步骤所消耗的时间

```shell
let t1 = new Date()
for(let i = 0;i < 10000;i++){
  
}
console.log(new Date() - t1)
```

```shell
console.time('A')
for(let i = 0;i < 10000;i++){
  
}
console.timeEnd('A')
```
