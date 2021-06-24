# 1、DOM操作（（Document Object Model文档对象模型的集合））


##### 题目

- DOM属于哪种数据结构
  - 基于树形结构
- DOM操作的常用API
- attr（attribute）和property的区别
  - property：修改对象的属性，不会体现在html结构中（不会对节点有什么影响）
  - attr：直接修改html属性，会改变html的结构（改变标签结构）
  - 两者都可能引起dom重新渲染（尽量用property去进行操作，因为设置property一定会重新渲染，attribute不一定。重新dom渲染是一件比较耗费性能的事情）
- 一次性插入多个dom节点，考虑性能
  - dom节点缓存
  - 创建片段，一次性插入createFragment

##### 知识点

- DOM本质
  - 从html解析出来的树

html实际上也是一种特殊的xml

- DOM节点的操作

  - 获取节点
    - getElementById
    - getElementByClassName
    - getElementByTagName
    - document.querySelectorAll
  - attribute：直接修改dom结构，直接对标签有影响

  ```shell
  const pList = ducument.querySelectorAll('p')
  const p = pList[0]
  
  p.getAttribute('data-name')
  p.setAttribute('data-name','smileyqp')
  p.getAttribute('style')
  p.setAttribute('style','font-size:30px')
  ```

  - property：修改js变量的属性，设置不会对标签有什么影响
    - 用js的属性操作的一种形式

  ```shell
  const pList = ducument.querySelectorAll('p')
  const p = pList[0]
  console.log(p.style)
  console.log(p.style.width)
  console.log(p.style.className)
  console.log(p.nodeName)	//nodeName节点的名称
  console.log(p.nodeType)	//nodeType节点的类型
  ```

- DOM结构的操作

  - 新增/插入操作
  - 获取子元素列表，获取父元素
  - 删除子节点

```shell
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

//新建节点
const newP = document.createElement('newP')
newP.innerHTML = 'this is newP'

//插入节点
div1.appendChild(newP)

//移动节点
div2.appendChild(p1)	//将一个已经存在于dom中的元素append到另外一个中去，那么就是将节点移动过去的

//获取父元素
console.log(p1.parentNode)

//获取子元素列表;类似乎组转化成数组Array.prototype.slice.call，然后过滤类型为1，即p的元素节点
div1.childNodes();		
const div1childNodesP = Array.prototype.slice.call(div1.childNodes()).filter((child)=>{
  if(child.nodeType === 1){
    return true;
  }
})

//删除子节点
div1.removeChild(div1childNodesP[0])
```

- DOM性能

  - dom查询做缓存（减少dom查询。将dom缓存，dom查询改成变量查询）

  ```shell
  //不缓存dom查询结果
  for(let i = 0;i<document.getElementByTagName('p').length;i++){
    //每次查询都会重新去计算length，频繁进行dom查询
  }
  
  //缓存dom查询的结果
  const plist = document.getElementByTagName('p')
  const plength = plist.length;
  for(let i = 0;i<plength;i++){
  	//缓存dom查询，只需要进行一次dom查询
  }
  ```

  - 将频繁操作改成一次操作
    - 创建文件片段，然后再一次插入（createFragment）

  ```shell
  const listNode = document.getElementById('list')
  
  //创建一个文档片段，此时还没有插入dom
  const frag = document.createDocumentFragent();
  
  //执行插入
  for(let x = 0;<=10;x++){
    const li = document.createElement('li');
    i.innerHTML = 'list item'+x;
    frag.appendChild(li)
  }
  
  //都完成之后再插入dom树中
  listNode.appendChild(frag)
  ```

  