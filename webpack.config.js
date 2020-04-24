const path = require("path"); //导入nodejs中操作路径的模块
module.exports = {
  //编译模式
  mode: 'development', //decelopment 开发环境 production 生产环境
  entry: path.join(__dirname, './src/index.js'),  //入口文件的绝对路径 __dirname代表当前文件所处的目录
  output: {
    path: path.join(__dirname, './dist'), //输出文件的存放路径
    filename: 'bundle.js'   //输出文件的名称
  }
}