# webpackStudy
webpack基础学习<br>

## 用到的命令
1. ```` npm init  -y ```` 快速初始化项目
2. ````npm i webpack webpack-cli -D ```` 安装webpack
3. ```` npm run dev ```` 执行打包，可自定义在package.json文件中
4.  ````npm i webpack-dev-server -D ```` 安装webpack自动打包工具


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
  
