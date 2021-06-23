# 28、this


- 作为普通函数
- 使用call、bind、apply
- 作为对象方法被调用
- 在class方法中调用
- 箭头函数

##### this取什么:值是在函数执行的时候决定的不是在函数定义的时候确定的

```shell
function fn1(){
  console.log(this)
}
fn1();	//window

fn1.call({x:100})		//{x:100}

const fn2 = fn1.bind({x:200})
fn2();	//{x:200}
```

箭头函数没有this，其中this取上级作用域this

```shell
//demo1
const zhansan = {
  name:'zhangsan',
  sayHi(){
    console.log(this)		//this当前对象
  },
  wait(){
    setTimeout(function(){
      console.log(this)		//this window
    })
  }
}

//demo1
const zhangsan = {
  name:'zhangsan',
  sayHi(){
    console.log(this)		//当前对象
  },
  waitAgain(){
    setTimeout(()=>{
      console.log(this)		//当前对象
    })
  }
}
```

##### 手写bind函数

```shell
function.prototype.mybind = function(){
  //将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  
  //获取this（数组第一项）
  const t = args.shift()
  
  //fn1 bind中的fn1
  const self = this;
  
  return function(){
    return self.apply(self,args)
  }
}

```

##### 闭包的应用

- 隐藏数据
- 做一个简单的cache工具

```shell
function createCache(){
  const data = {}		//闭包中的数据，隐藏不被外界访问
  return {
    set:function(key,val){
      data[key] = val;
    },
    get:(){
      return data[key]
    }
  }
}

//隐藏不被外界访问,是指c只能通过set，get设置获取。只提供api访问，其他方式改不了
const c = createCache();
c.set('a',100);
c.get('a');

```


