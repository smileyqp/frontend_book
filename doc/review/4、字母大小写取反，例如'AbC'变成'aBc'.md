# 4、字母大小写取反，例如'AbC'变成'aBc'


```shell
function trans(str){
  str = str.replace(/[a-zA-Z]/g,(content)=>{
  //或者用ASC码，例如'A'.charCodeAt，答谢字母范围65-90 
  // content.charCodeAt() >= 65 && content.charCodeAt() <= 90
  	return content.toUpperCase() === content?content.toLowerCase():content.toUpperCase();
  })
  return str
}

```