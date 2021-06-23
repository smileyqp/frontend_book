# 15、手写new


```shell
function Dog(name){
  this.name = name;
}
Dog.prototype.bark = function(){
  console.log('bark')
}
Dog.prototype.sayName = function(){
  console.log('my name is'+this.name)
}


要实现一个_new方法实现以下：
let dog = _new(Dog,'dooooog')
dog.sayName()
dog.bark()
```

1、像普通函数执行一样、形成一个私有的作用域

- 形参赋值
- 变量提升

2、默认创建一个对象，然函数中的this指向这个对象，这个对象就是当前实例
3、代码执行
4、默认把创建对象返回

```shell
function _new(Fn,...arg){
  //Fn当前要new的类;arg是给构造函数传的参数
  
  //let obj = {};
  //Fn.call(obj,...arg)
  let obj = Object.create(Fn.prototype);		//创建原型链为Fn.prototype的对象实例
  obj.__proto__ = Fn.prototype;
  return obj;
}

```

> 注意：`Object.create`是创建一个空对象，并且对象的原型链指向我们传入的那个参数（即：让我们创建的这个空对象作为我们传入的那个参数的实例）