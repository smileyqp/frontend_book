

#### 基本类型

- 如果变量的声明和赋值是同事进行，ts可以自动给变量进行类型检测

- 也可以直接使用字面量进行类型声明（但是字面量赋值之后就不能再修改了）

```shell
//也可以直接使用字面量进行类型声明,但是字面量赋值之后就不能再修改了
let a:10;
let b:'fa'|'ma';       //枚举：这样的话b就可以赋值为fa或者ma
b = 'fa'
b = 'ma'
```

- 可以使用｜连接多个类型。联合类型(限制变量在某几个值之间)

```shell
//可以使用｜连接多个类型。联合类型
let a1:boolean|number;
a1 = true;
```

- `any`表示任意类型。一个变量类型设置为any相当于关闭了对该变量的类型检测

```shell
//any表示任意类型
let a2:any;
a2 = 10;
a2 = true;
```

- 隐式`any`：设置变量的时候没有设置类型并且没有赋值那么就默认为any（注意：一般尽量避免使用any）
- `unknown`未知类型的值，并且不可以像any那样，将未知类型的变量赋值给已知类型的变量
  - `unknown`实际上就是一个类型安全的any
  - `unknown`类型的变量不能直接赋值给其他类型的变量
  - 如果一定需要赋值的话，那么在赋值之前要先做一个类型检查

```shell
let c1:unknown
c1 = 'smileyqp'
c1 = 2
c1 = true


let e1:string = '111'
// e1 = c1      会报错

if(typeof c1 === 'string'){
    e1 = c1;
}

//类型断言:可以用来告诉解析器，变量的实际类型
e1 = c1 as 'string'
e1 = <string>c1;
```

- `any`类型的值可以赋值给人以变量不会报错(这也是尽量避免使用any类型的原因之一)

```shell
let d1;
let d2:string = 'smileyqp';
d2 = d1;
```

- 类型断言:可以用来告诉解析器，变量的实际类型
  - 语法：
    - 变量 as 类型
    - <类型>变量

```shell
//具体demo见上上条中demo，有两种写法
e1 = c1 as 'string'
e1 = <string>c1;
```

- void用来表示空，表示无返回值的函数

```shell
//void表示无返回值的函数,function的返回值如果不写就默认为any
function fn():void{
	
}
```

- never表示永远不会返回结果

















