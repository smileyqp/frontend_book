#### Vue&React

- react和vue区别
  - vue代表MVVM（双向数据绑定）。
    - 数据更改视图变化，视图更改数据变化
  - React代表MVC。
  - vue吧给我们把表单绑定事件写好了，React需要自己去绑定
    - React中需要自己去实现onchange事件
    - vue中直接v-mode直接帮我们绑定了数据，不用自己写onChange事件
  - MVC和MVVM区别
    - MVC默认值实现数据的更改（单向数据改变）
    - MVVM实现数据更改视图更改，视图更改数据更改（双向数据改变）
    - MVC这种只是缺少一个onChange事件绑定

- vue中数据的双向绑定2.0和3.0的实现
  - vue2.0中，通过`Object.definedProperty`进行set和get修改；
  - vue3.0中通过`Proxy`进行拦截set和get方法进行相关操作，实现数据的双向绑定。

