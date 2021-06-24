# 6、js综合面试题

- 变量提升，函数提升。变量提升：变量名提升；函数提升：函数整体提升
- this指向问题
- 变量常用规则，变量沿着作用域链进行查找
- 运算符优先级关系：点运算优先级最高，但是遇到`()`没有办法进行运算，所以会记那个前面整体先进性运算
- 实例对象属性规则，原型原型链

```shell
//涉及变量提升、函数提升；
function Foo(){
  getName = function(){alert(1)}		//修改了全局的
  return this;
}
Foo.getName = function(){alert(2)}
Foo.prototype.getName = function(){alert(3)}
var getName = function(){alert(4)}
function getName(){alert(5)}


//输出如下结果
Foo.getName()		//2
getName()			//4
Foo().getName()		//1   this指向window，window.getName()
getName()			//1
new Foo.getName();		//2
new Foo().getName();		//3
new new Foo().getName();		//3
```
