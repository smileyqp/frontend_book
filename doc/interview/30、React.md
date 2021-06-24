# 30、React

##### redux

- ##### Redux帮我们用一个变量存储所有的state，并且提供发布的功能来修改我们的数据，以及提供订阅的功能来触发回调

- redux是一个独立的数据状态管理库，在angular、vue也都可以使用redux，只不过常与react一起使用

- redux解决数据状态管理，跨层级问题。

- redux就是一个经典的发布订阅器。事件绑定的过程其实也是一个发布订阅的过程。

- redux使用方法

  - 调用ctreateStore创建store对象
  - 用Provide包裹根组件
  - 使用connect获取链接

##### react-redux

- 提供两个api

  - `Provider`传递store到每个组件中去。Provider实际上是一个组件。getChildContext创建store。Provider就是通过React的context API把数据往下传。

  ![](https://img-blog.csdnimg.cn/20210526153235760.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

  - `connect`通过store传递进来的provider，将state绑定到当前组件。connect有两个参数mapstatetoProps订阅更新，mapdispatchtoprops 调用dispatch改变当前数据

    - ##### connnect方法本质上是一个高阶组件，接收Provider传递过来的store并订阅store中的数据，如果store中的数据改变，就调用setState方法触发组件更新

  ![](https://img-blog.csdnimg.cn/20210526153812547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210526154758549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210526154818274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

> 拓展：`函数柯里化`：函数返回函数；`高阶组件`：组件返回组件

![](https://img-blog.csdnimg.cn/20210526152902453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### react题目

- ##### redux是如何将State注入到React组件中去

  - 明确react与redux的联系是react-redux这个库（Provider、connect）
  - redux的原理其实就是一个发布订阅器，帮我们用一个变量存储所有state，并且提供了发布来修改数据，提供了订阅功能来触发回调
  - react-redux的功能是订阅store中的数据更新，它包含两个重要的元素Provider和connect
  - Provider的作用是通过context api把store对象注入到react组件中去
  - connect方法就是一个高阶组件，在高阶组件中通过订阅store的更新，调用setState方法来触发组件更新

- ##### redux在实际项目中的使用问题

  - redux痛点是什么？

    - 增加代码的复杂性。需要经过dispatch、调用reducer、触发回调、更新数据。redux在使用中最大的弊端就是样板代码（action、reducer）太多，修改数据链路较长

  - 为什么还是要使用redux？

    - redux可以解决跨组件间数据传递问题并且修改数据十分清晰。在复杂的大型项目中，状态数据较多，redux的映入可以较好对数据进行管理，使得数据流向组件状态变更更为清晰

  - redux在使用时候，有哪些比较好的实践方式呢？（可以使用一些手段减少模板代码从而简化redux api）

    - 使用redux-action，在初始化reducer和action构造器时候减少样板代码
      - 减少创建action时候创建的一堆固定的写法
      - 减少创建reducer时候写的一堆固定的switch（封装）
    - 使用cli工具，帮我们生成模板代码。比如yeoman工具

    > 总结：redux最大的弊端是样板代码太多，修改数据链路太长
    >
    > 解决方式：可以借助一些工具来减少创建样板代码的过程
    >
    > - 使用redux-action减少书写固定不变的代码使得我们代码更加清晰
    > - 使用cli工具自动生成模板文件和代码

  - redux的异步问题怎样处理（为什么redux处理不了异步问题？）

    - dispatch默认只能接受一个object类型的action，因为reducer中要接收action.type来处理不同的数据
    - 那怎样解决redux不能处理异步的问题呢？
      - redux异步问题可以用中间件来解决
        - redux-saga：让异步成为中架构中独立的一层
        - redux-thunk

> redux总结：
>
> - redux会增加代码的复杂性，使用前需要考虑当前项目的规模和要求
> - 可以使用redux-action或者cli工具来帮我们减少模板代码的书写
> - redux无法处理异步action是因为dispatch只能接收一个object类型的action，但是可以通过中间件的方式来解决异步问题

- ##### React中的hooks

  - React Hooks是一个新的API，可以用函数来写所有组件
  - 可以让函数也拥有自己的状态管理（包括state和生命周期）
  - 可以通过创建自定义的hooks来抽离可服用量的业务组件

- React组件类型

  - 函数组件
    - 一个函数就是一个组件
    - 一个函数必须有return
    - return的是一个react元素
  - 类组件
    - 一个Class声明就是一个类组件
    - 所有的类组件都是继承于React.Component
    - React.Component类有自带属性和方法，比如render、componentDidMount等等

![](https://img-blog.csdnimg.cn/20210527093422780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- React Hooks的作用以及有哪些特性
  - react hooks是v16.8版本才引入的全新API，它算是一个颠覆性的变革
  - 所有的React组件都可以是一个函数组件，再也不需要写类组件了
  - 再也不需要记住react有哪些生命周期了

![](https://img-blog.csdnimg.cn/20210527094522853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210527094636771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

创建使用自定义hooks

![](https://img-blog.csdnimg.cn/20210527095744394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210527095956508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

