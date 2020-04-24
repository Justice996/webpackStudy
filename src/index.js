import $ from 'jquery'


$(function () {
  $('li:odd').css('background-color', 'yellow');
  $('li:even').css('background-color', 'lightblue');
})