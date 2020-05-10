import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'


$(function () {
  $('li:odd').css('background-color', 'yellow');
  $('li:even').css('background-color', 'lightblue');
});

class Person {
  static names = "张三";
}
// console.log(Person.names);


//---------------------

import Vue from 'vue'
//导入单文件组件
import App from './components/app.vue'

const vm = new Vue({
  el: "#app",
  render: h => h(App)
})