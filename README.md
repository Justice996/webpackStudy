# webpackStudy
webpack基础学习<br>

## 用到的命令
1. ```` npm init  -y ```` 快速初始化项目
2. ````npm i webpack webpack-cli -D ```` 安装webpack
3. ```` npm run dev ```` 执行打包，可自定义在package.json文件中
4.  ````npm i webpack-dev-server -D ```` 安装webpack自动打包工具
5. ```` webpack-dev-server --open --host 127.0.0.1 --port 8081 ```` 打包完成后自动打开浏览器 后面两个参数可以省略


## 配置打包的入口与出口文件
 在webpack.config.js中新增

 ```` 
 const path = require("path"); //导入nodejs中操作路径的模块
   entry: path.join(__dirname, './src/index.js'),  //入口文件的绝对路径 __dirname代表当前文件所处的目录
  output: {
    path: path.join(__dirname, './dist'), //输出文件的存放路径
    filename: 'bundle.js'   //输出文件的名称
  }
 ````

 ## 配置自动打包功能
 思路：<br>
  1. 安装自动打包工具 **webpack-dev-server**
  2. 在package.json配置命令 ```` "serve": "webpack-dev-serve" ````
  3. 修改引用输出文件路径
  4. 重新打包
  5. 浏览器访问

注意：webpack-dev-server会启动一个实时打包的http服务器，它打包的文件，默认放在了项目的根目录中，是看不见的虚拟的

## 生成预览页面
 使用插件html-webpack-plugin
  1. 安装插件
  2. 添加配置信息
   ```` 
    const HtmlWebpackPlugin = require('html-webpack-plugin'); //导入插件，获得一个构造函数
    const htmlPlugin = new HtmlWebpackPlugin({  //创建实例对象
    template: './src/index.html', //指定要用到的模板文件
    filenameL: 'index.html'   //指定要生成的文件名称，该文件存在于内存中，不显示
   });

   ````
  3. 修改webpack.config.js文件
   ````
     module.exports = {
        plugins: [htmlPlugin] //plugins数组是用到的插件列表
      }

   ````

   ## webpack中的加载器
   为什么要用加载器？<br>

   在实际开发过程中，webpack只能处理 .js后缀名结尾的模块，非js文件处理不，
   需要调用loader加载器才能正常打包，否则会报错<br>
   举个🌰：<br>
   1. url-loader可以处理css中与url路径有关的文件
   2. sass-loader可以处理.scss相关的文件
   loader加载过程：
    图片占个位置<br>

   ## 加载器的基本使用
     1. 处理css文件
        - 运行 ```` npm i style-loader css-loader -D ```` 命令，安装处理css文件的loader
        - 在webpack.config.js的module ->rules数组中，添加loader规则如下
        ````
              module: {
                rules: [{
                 test: /\.css$/, use: ['style-loader', 'css-loader']
                }]
              }
        ````
          其中，test表示你要匹配的文件类型，use表示对应要调用的loader
          tip：
              * use数组指定的loader顺序是固定的
              * 多个loader的调用顺序是: 从后往前调用
     2. 打包less文件
       - 运行 ```` npm i less-loader less -D ```` 命令，安装处理css文件的loader
       - 在webpack.config.js的module ->rules数组中，添加loader规则如下
        ```` 
         test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']
        ````
     3.    打包scss文件 基本与上面一致
        - 安装 sass-loader node-sass
        - 配置
     4. 配置postcss自动添加css的兼容前缀
        - 安装postcss-loader autoprefixer 
        - 初始化：在根目录下创建postcss.config.js
             ````
             const autoprefixer = require('autofixer') //导入自动添加前缀的插件
             module.exports = {
               plugins: [autoprefixer] //挂载插件
             }
              ````
        - 在webpack.config.js的module ->rules数组中，添加loader规则如下
        ````
        test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader']
        ````
     5. 打包图片和字体文件
       - 安装 url-loader file-loader 
       - 配置规则
       ````
        { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff2|woff$/, use: 'url-loader?limit=30287' }
       ````
        use的参数可以为数组或者字符串，其中？之后是loader的参数项。
        limit用来指定图片大小，单位是字节，只有小于limit大小的图片，才会被转为base64的图片
      
      6. 打包js中的高级语法
       - 安装babel转换器相关的包 babel-loader @babel/core @babel/runtime
       - 安装语法插件相关的包 npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties
       - 在项目根目录，新建babel 配置文件 babel.config.js并初始化配置如下：
          ```` 
           module.exports ={
             presets : ['@babel/preset-env'],
             plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
           }
          ````
       - 在webpack配置文件中，添加loader规则
           ````
             //exclude为排除项，表示babel-loader不需要处理node_modules中的js文件
             {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
           ```` 
        




  
