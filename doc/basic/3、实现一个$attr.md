# 3、实现一个$attr(name, value)遍历，属性名为name，值为value的的元素合集


- 相当于写一个属性选择器。
  - 获得所有标签，循环所有标签。得到每一个标签，传入什么属性就按照这个属性去获取属性值。特殊情况，class这些只要包含这个属性值就可以

```shell
let ary = $attr('id','AAA')


function $attr(property,value){
  let elements = document.getElementByTagName('*'),		//获取当前页面的所有标签
  		arr = [];
  //方式一：可以借用数组循环
  // [].forEach.call(elements,item=>{})
  
  //方式二：利用Array.from将类数组非数组转化成为数组
  elements = Array.from(elements)
  elements.forEach((item)=>{
    let itemValue = item.getAttribute(property)	//在这个标签中获取property
    
    if(property === 'class'){	//class样式类属性名要做特殊处理，因为class中可能有多个属性值
    	
    	//判断当前字符串中是否包含着哦个单词
    	new RegExp(/\b+value+\b/).test(itemValue)?arr.push(item):null		
      return;
    }
     
    if(itemValue === value){	//获取的值和传递的值相等校验成功就是我们需要的
      arr.push(item)
    }
  })
  return arr;
}
```
