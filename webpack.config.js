const path = require("path"); //导入nodejs中操作路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); //导入插件，获得一个构造函数
const htmlPlugin = new HtmlWebpackPlugin({  //创建实例对象
  template: './src/index.html', //指定要用到的模板文件
  filenameL: 'index.html'   //指定要生成的文件名称，该文件存在于内存中，不显示
});
const VueLoaderPlugin = require('vue-loader/lib/plugin') //处理vue的loader
module.exports = {
  //编译模式
  mode: 'development', //decelopment 开发环境 production 生产环境
  entry: path.join(__dirname, './src/index.js'),  //入口文件的绝对路径 __dirname代表当前文件所处的目录
  output: {
    path: path.join(__dirname, './dist'), //输出文件的存放路径
    filename: 'bundle.js'   //输出文件的名称
  },
  plugins: [htmlPlugin, new VueLoaderPlugin()], //plugins数组是用到的插件列表
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff2|woff$/, use: 'url-loader?limit=30287' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  }
}