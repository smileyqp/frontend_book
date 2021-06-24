# 24、h5离线存储manifest

Html5提出的一个新特性：离线存储。通过离线存储，我们可以吧需要离线存储在本地的文件夹列举在manifest配置文件中，这样即使在离线的情况下，用户也可以正常的看见网页

- 在需要离线缓存的页面的html标签上加上`manifest='cache.manifest'`

```shell
<html lang='en' manifest='cache.manifest'>
...
</html>
```

- 在根目录创建新文件名称为`cache.manifest`的文件，并写上代码

![](https://img-blog.csdnimg.cn/20210524024015163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210524024122985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
