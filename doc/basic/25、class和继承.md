# 25、class和继承

#### 

```shell
class Student{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    console.log('hi'+this.name+this.age)
  }
}

let stu = new Student('smileyqp',100)
```

##### 继承

- extends
- super
- 扩展或者重写方法

```shell
class Person(){
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(this.name+'eat food')
  }
}

class Student extends Person{
  constructor(name,age,number){
    super(name,age)
    this.number = number;
  }
  sayHi(){		//扩展方法
    console.log('hi'+this.name+this.age)
  }
}

class Teacher extends Person{
  constructor(name,age,major){
    super(name,age)
    this.major = major;
  }
  teach(){
    console.log(this.name+'teach'+this.major)
  }
}

let smileyqp = new Student('smileyqp',20)

//补充
smileyqp.eat()		//smileyqp eat food
smileyqp.__proto__.eat()		//会爆粗，因为它相当于在smileyqp.__proto__即Student的原型上去调用的，没有定义name所以会报错

```

##### instanceof

- instanceof可以去判断引用类型
- Object是所有class的父类

```shell
smileyqp instanceof Student;	//true
smileyqp instanceof Person;	//true
smileyqp instanceof Object;	//true

[] instanceof Array;	//true
{} instanceof Object;		//true
[] instanceof Object;		//true
```

