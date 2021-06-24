# 18、ES6的class

#### 

```shell
//class就是构造函数的一种新写法，可以视作语法糖
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  say(){
    console.log(`${this.name}${this.age}岁`)
  }
}

let p = new Person('smileyqp',18);
p.say()
console.log(p.name)


class Teacher extends Person{
  constructor(){
    super()
  }
  hello(){
    console.log('say hi')
  }
}
```

#### 