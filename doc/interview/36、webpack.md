# 36、webpack

[webpack基础配置demo github](https://github.com/smileyqp/webpack_basic)

##### webpack基础知识

- webpack：静态模块打包工具。webpack中的一切资源都是文件。
- webpack是通过从入口进行递归查询的方式直接或者间接相互依赖的文件，最后生成打包文件。
- webpack-cli处理打包命令，解析webpack命令。webpack包做文件打包工作
- webpack不用全局下载，只用局部下载即可。因为不同项目可能使用的webpack版本不一样
- webpack本身能解析打包各种模块规范的js代码

![](https://img-blog.csdnimg.cn/20210603102643782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
yarn init -y

yarn add -D webpack webpack-cli

//创建src/index.js因为webpack打包默认会找src目录下面的index.js文件
//此时执行webpack命令，可以看到webpack将其打了个基础包，在dist目录下

//package.json中配置打包命令，之后使用npm run build进行webpack打包
  "scripts": {
    "build":"webpack"
  },
```

- 创建`webpack.config.js`文件，写入相关配置
- `clean-webpack-plugin@1.0.1 `上一次打包的文件清除
- `html-webpack-plugin`解决手动引入
- `webpack-dev-server`解决自动打包不需要手动打包

```shell
yarn add -D webpack-dev-server	html-webpack-plugin		clean-webpack-plugin@1.0.1 

cnpm install @babel/core @babel/plugin-transform-runtime @babel/polyfill @babel/preset-env @babel/runtime autoprefixer babel-eslint babel-loader copy-webpack-plugin css-loader eslint eslint-friendly-formatter eslint-loader file-loader html-webpack-plugin --save-dev
```

##### webpack核心概念，常用10个配置

- mode：none、development、production。声明一些模式就是内部为我们预先加上一些配置
- 入口entry：一个或者多个（单页打包多页打包）
- 出口output：指定打包的文件夹
- modules模块加载器，用来指定loader：webpack本身只能打包js，不能处理css、图片等资源。因此就需要模块加载器。将css打包到js，引用地址
- 插件plugins：需要打包js之外做的事情，比如说压缩、拷贝、清除、引入页面等操作。插件名称一般是`xx-webpack-plugin`形式
  - clear-webpack-plugin清除插件
  - html-webpack-plugin
- devtools开发工具，用来制定sourcemap
- devServer开发服务器。比如说配置代理、以及不带#路由（Broswer路由）404问题
- resolve解析别名和路径
- optimization指定优化处理的。由模式确定。生产环境和开发环境指定的优化方式不一样。
- externals外部某个包。配置了某个包，比如说用了lodash，不用npm下载也可以，在这里配置也是可以的

![](https://img-blog.csdnimg.cn/20210603105703101.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### webpack常用包

- webpack-dev-server开发服务器的包
- webpack-merge合并包
- cross-env
- css-loader
- style-loader
- postcss-loader
  - autoprefixer自动浏览器适配。适配浏览器
  - postcss-px2em写的px实际上自动转为rem，适配移动端
- less-loader
- styles-loader
- sass-loader
- file-loader
- url-loader
- image-webpack-loader压缩图片，不影响显示效果
- babel-loader
  - @babel/core
  - @babel/preset-env
  - @babel/preset-react
  - @babel/polyfill
  - @babel/plugin-transform-runtime
  - @babel/runtime
- vue-loader
- eslint-loader语法检查
- MiniCssExtractPlugin.loader单独提取打包css。
- thread-loader多线程打包
- html-webpack-plugin把打包的css或者js自动引入到界面中去
- clean-webpack-plugin删除文件
- mini-css-extract-plugin单独提取打包css
- optimize-css-assets-webpack-plugin压缩css
- copy-webpack-plugin拷贝文件
- terser-webpack-plugin压缩js
- add-asset-html-webpack-plugin
- webpack-bundle-analyzer分析打包文件的
- webpack.ProgressPlugin显示打包进度的
- webpack.HotModuleReplacementPlugin热模块低缓
- webpack.HashedModulesPlugin模块id哈希值
- webpack.DllPlugin多进程打包
- webpack.DllReferencePlugin多进程打包
- new webpack.ProvidePlugin

![](https://img-blog.csdnimg.cn/202106031419350.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210603142029332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 处理
  - loader处理：js资源以外的资源、包括jsES6转ES5
  - plugin插件处理
  - devTool开发工具：
  - devServer开发服务器：

##### 版本号

![](https://img-blog.csdnimg.cn/20210603142825568.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### babel打包处理

![](https://img-blog.csdnimg.cn/20210603164101841.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70) 



![](https://img-blog.csdnimg.cn/20210603165350721.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

babel本身是不能进行ES6编译到ES5的，它是提供了一个平台`babel-core`,靠`babel-core`去组织，每一个语法都有对应的插件去解析。

`@babel/preset-env`预设包，是很多插件包的集合包，这里指的是很多js的ES6到ES5语法转换的插件包的集合包。并且不是插件能解决所有的语法转化问题，因为有些新语法是提供函数方法API，有些新语法是提供操作符。

`@babel/polyfill`补丁包，处理一些浏览器不兼容的语法。

`@babel/plugin-transform-runtime`处理

![](https://img-blog.csdnimg.cn/2021060317122180.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210603172306712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



##### 打包图片

- `file-loader`
- `url-loader`：处理图片主要是用这个，但是它是需要`file-loader`做基础。并且不仅图片、音视频、字体文件、打包样式、格式处理都可以使用这个文件

![](https://img-blog.csdnimg.cn/20210604110508964.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70) 



![](https://img-blog.csdnimg.cn/20210604144819517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210604144934475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

##### 配置样式打包加载模块

- 基本css
- css预编译器
  - less
  - sass
  - stylus

![](https://img-blog.csdnimg.cn/20210604145914713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



![](https://img-blog.csdnimg.cn/20210604170938817.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- postcss

![](https://img-blog.csdnimg.cn/20210604174330707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

- 抽取/单独打包css
- 压缩css

##### css预编译器

```shell
cnpm install style-loader css css-loader less less-loader node-sass sass-loader stylus stylus-loader  --save
```

##### PostCss

[postcss官网](https://www.postcss.com.cn/)

- postcss.config.js

```shell
module.exports = {
    plugins: [
    //   require('precss'),
      require('autoprefixer')()
    ]
 }
```

- config.webpack.js中postcss配置

```shell
    //模块加载器
    module:{
        rules:[
            //处理css
            {
                test: /\.css$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',                //css-loader将css内容打包到js中去
                    'postcss-loader',           //预处理css的，要在css前进行，因此由于loader加载顺序，放在css-loader的下面或者右边

                ]                                                
                
            },
            
            
            //处理less
            {
                test: /\.less$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',               //css-loader将css内容打包到js中去
                    'postcss-loader',
                    'less-loader',
                ]                                                
                
            },
            
            
            //处理stylus
            {
                test: /\.(styl|stylus)$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',               //css-loader将css内容打包到js中去
                    'postcss-loader',
                    'stylus-loader'
                ]                                                
                
            }
        ]
    },
```

##### 样式单独打包

- mini-css-extract-plugin

```shell
npm install --save-dev mini-css-extract-plugin
```

webpack中配置

```shell
const MiniCssExtracPlugin = require('mini-css-extract-plugin')


//webpack中配置
plugins:[
    //从js中抽取css单独打包;一旦抽取了css就不需要cssloader了，需要换成这个插件里面的loader。单独打包css
    new MiniCssExtracPlugin({
        filename:'css/[name].css'
    })
]
  

//webpack中loader配置。使用MiniCssExtracPlugin.loader代替style-loader即可
{
    test: /\.css$/,                                    //指定对哪些文件进行处理，正则
    exclude: /(node_modules|bower_components)/,         //不包括哪些文件
    include:resolve('src'),                                         //包括哪些文件
    use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
        MiniCssExtracPlugin.loader,         //代替style-loader
        // 'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
        'css-loader',                //css-loader将css内容打包到js中去
        'postcss-loader',           //预处理css的，要在css前进行，因此由于loader加载顺序，放在css-loader的下面或者右边

    ]                                                

}
```

##### css样式压缩

```shell
npm install --save-dev optimize-css-assets-webpack-plugin

```

- webpack配置

```shell
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//优化配置
  optimization:{
      minimizer:[new OptimizeCssAssetsPlugin()]
  }
```

##### eslint

![](https://img-blog.csdnimg.cn/20210607115534472.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)



```shell
//webpack中配置
module:{
    rules:[
        {
            enforce:'pre',          //前置loader最先执行;pre:最先执行；post:最后执行
            test: /\.m?js$/,        
            include:resolve('src'), 
            loader:'eslint-loader',  
            options:{
                formatter:'eslint-friendly-formatter'       //友好格式化
            }
        },
    ]
}

//配置好之后，初始化配置文件，执行下面方法生成配置文件.eslintrc.js
npx eslint --init 


//.eslintrc.js中进行相关配置
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    // "extends": "eslint:rall",        开启所有的规则检查
    "extends": "eslint:recommended",        //只开启推荐的规则检查
    "globals":{         //定义全局变量；也就是这个变量及时不进行定义，全局也可以使用
        "SharedArrayBuffer":"readonly"
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars":"off"          //不去检查未定义变量使用的情况
    }
};

```

##### webpack基础配置

```shell
/**
 * webpack配置要向外暴露一个对象，用commonjs的规范进行，因为webpack内部是基于node来进行的处理
 */

const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtracPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const { optimize } = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');




function resolve(dir){          //传入一个目录名称，就返回当前目录名称所在的绝对路径

    return path.resolve(__dirname,dir)
}

module.exports = {
    //模式
    mode:'production',
    //入口:入口可以是字符串、对象、数组，都是可以的 
    entry:{
        main:resolve('src/index.js')
    },
    //出口
    output:{
        path:resolve('dist'),
        filename:'bundle.js',
        publicPath:'/'          //解决图片路径问题；所有生成的URL链接左侧用/开头；即相对路径
    },
    //模块加载器；按照顺序从下往上执行。enfore可以改变这个顺序
    module:{
        rules:[
            {
                enforce:'pre',          //前置loader最先执行;pre:最先执行；post:最后执行
                test: /\.m?js$/,        
                include:resolve('src'), 
                loader:'eslint-loader',  
                options:{
                    formatter:'eslint-friendly-formatter'       //友好格式化
                }
            },
            //处理ES6到ES5
            {
                test: /\.m?js$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    {                                              
                        loader: 'babel-loader',                     //babel也可以专门用配置文件babel.config.js或者.babelrc进行配置，也可以这两个配置文件都不屑直接在wbpack的这个地方进行配置即可
                        // options: {
                        //     presets: ['@babel/preset-env']       //这边的配置也可以在babel.config.js中写
                        // }
                    }
                ]                                                
                
            },{
                //处理图片
                test: /\.(jpe?g|png|webp|gif)$/,                                    //指定对哪些文件进行处理，正则
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    {                                              
                        loader: 'url-loader',                     //babel也可以专门用配置文件babel.config.js或者.babelrc进行配置，也可以这两个配置文件都不屑直接在wbpack的这个地方进行配置即可。处理图片、字体、音视频等
                        options: {
                            limit: 1024*15,                         //把小于15kb的进行base64处理
                            name:'img/[name].[ext]'                 //文件路径；相对于所有文件下面的；[name]文件名[ext]后缀扩展名
                        }
                    }
                ]      
            }, 
            //处理css
            {
                test: /\.css$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    MiniCssExtracPlugin.loader,         //代替style-loader
                    // 'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',                //css-loader将css内容打包到js中去
                    'postcss-loader',           //预处理css的，要在css前进行，因此由于loader加载顺序，放在css-loader的下面或者右边

                ]                                                
                
            },
            //处理less
            {
                test: /\.less$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    MiniCssExtracPlugin.loader,         //代替style-loader
                    // 'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',               //css-loader将css内容打包到js中去
                    'postcss-loader',
                    'less-loader',
                ]                                                
                
            },
            //处理stylus
            {
                test: /\.(styl|stylus)$/,                                    //指定对哪些文件进行处理，正则
                exclude: /(node_modules|bower_components)/,         //不包括哪些文件
                include:resolve('src'),                                         //包括哪些文件
                use:[                                               //使用；可以使用对象、数组；写对象只有 一个loader，并且loader还有配置以及指定一些额外信息；对象是数组的简写，数组中可以有任意多的loader，但是数组这种方式不可以写配置
                    MiniCssExtracPlugin.loader,
                    // 'style-loader',             //style-loader将js中的css放到style标签中去      配置多个loader整体的顺序是从下往上，从右往左。所以应该是css-loader放在style-loader的下面
                    'css-loader',               //css-loader将css内容打包到js中去
                    'postcss-loader',
                    'stylus-loader'
                ]                                                
                
            }
        ]
    },
    //插件
    plugins:[
        //向页面中引入打包的js或者css代码
        new HtmlWebpackPlugin({
            template:'public/index.html'           //指定以哪个为模板
        }),

        //清除打包文件夹
        new CleanWebpackPlugin(['dist']),
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",           //配置jquery
        //     $: "jquery" 
        // }) 

        
        //从js中抽取css单独打包;一旦抽取了css就不需要cssloader了，需要换成这个插件里面的loader。单独打包css
        new MiniCssExtracPlugin({
            filename:'css/[name].css'
        }),

        
    ],

    //开发服务器
    devServer:{
        open:true   //自动打开浏览器访问
    },


    //优化配置
    optimization:{
        minimizer:[new OptimizeCssAssetsPlugin()]
    }

}
```


