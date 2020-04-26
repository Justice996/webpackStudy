import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'


$(function () {
  $('li:odd').css('background-color', 'yellow');
  $('li:even').css('background-color', 'lightblue');
})