import $ from 'jquery'
import './css/index.css'
import './css/index.less'


$(function () {
  $('li:odd').css('background-color', 'yellow');
  $('li:even').css('background-color', 'lightblue');
})