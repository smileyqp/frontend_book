# 12、React和Vue

##### 相同点

- 都是组件化开发
- 虚拟dom
- 都支持通过属性的方式去进行父子组件之间通信
- 数据驱动：更新状态数据，界面会自动更新，不用直接操作dom
- 支持服务器渲染
- 支持原生应用方案：react native（react）、weex（vue）

##### 不同点

- 数据绑定：vue中是双向数据绑定，也就是界面和内存的数据可以双向交流；而react只支持从内存到界面，不支持从界面到内存
- 组件书写方式不一样：react采用JSX（JSX是js的扩展语法，react提出all in js）而vue使用的是模版（也就是在html中去写js、css再通过webpack的loader去对他们进行打包）
- 状态变化：react中调用`setState`；vue中直接通过`this.xxx`去更新data中的数据
- 虚拟dom的底层实现不是完全一样：vue会去跟踪每一个组件的依赖关系、不需要重新渲染整个组件树；而对于react而言，一旦状态改变，全部组件都会重新去渲染所以react中需要`shouldComponentUpdate`这个生命周期方法去进行控制
- react严格上来说是MVC的view层，而view则是mvvm模式的