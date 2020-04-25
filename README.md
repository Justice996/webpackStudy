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

## 生存预览页面
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
   举个🌰<br>
     1. url-loader可以处理css中与url路径有关的文件
     2. sass-loader可以处理.scss相关的文件
 loader加载过程
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVvlsIbopoHooqt3ZWJwYWNr5omT5YyF5aSE55CG55qE5paH5Lu25qih5Z2XXSAtLT4gQnvmmK_lkKbkuLpqc-aooeWdl31cblx0QiAtLT4gfOaYr3xDe-aYr-WQpuWMheWQq-mrmOe6p2pz6K-t5rOVfVxuICAgIEIgLS0-IHzlkKZ8Z3vmmK_lkKbphY3nva7kuoblr7nlupRsb2FkZXJ9XG5cdEMgLS0-fOaYr3wgRHvmmK_lkKbphY3nva7kuoZiYWJlbH1cblx0QyAtLT585ZCmfCBFW3dlYnBhY2vlpITnkIZdXG4gICAgRCAtLT4gfOaYr3xmW-iwg-eUqGxvYWRlcuWkhOeQhl1cbiAgICBEIC0tPiB85ZCmfOaKpemUmVxuICAgIGcgLS0-IHzmmK986LCD55SobG9hZGVy5aSE55CGXG4gICAgZyAtLT4gfOWQpnxIW-aKpemUmV1cblx0XHRcdFx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVvlsIbopoHooqt3ZWJwYWNr5omT5YyF5aSE55CG55qE5paH5Lu25qih5Z2XXSAtLT4gQnvmmK_lkKbkuLpqc-aooeWdl31cblx0QiAtLT4gfOaYr3xDe-aYr-WQpuWMheWQq-mrmOe6p2pz6K-t5rOVfVxuICAgIEIgLS0-IHzlkKZ8Z3vmmK_lkKbphY3nva7kuoblr7nlupRsb2FkZXJ9XG5cdEMgLS0-fOaYr3wgRHvmmK_lkKbphY3nva7kuoZiYWJlbH1cblx0QyAtLT585ZCmfCBFW3dlYnBhY2vlpITnkIZdXG4gICAgRCAtLT4gfOaYr3xmW-iwg-eUqGxvYWRlcuWkhOeQhl1cbiAgICBEIC0tPiB85ZCmfOaKpemUmVxuICAgIGcgLS0-IHzmmK986LCD55SobG9hZGVy5aSE55CGXG4gICAgZyAtLT4gfOWQpnxIW-aKpemUmV1cblx0XHRcdFx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)




  
