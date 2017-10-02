$(function(){
var recArr = [];
var $box = $('.box')
var $locBtn = $('#loc')
var n = 0;


$box.on('click', locGen)
$locBtn.on('click', compareResult)


function locGen() {
  var index = randomNum();
  // $(`${index}`).css("backgroundColor","blue")
  recArr.push(index);
  $(this).css('backgroundColor', '#839073')
  n++;
}

function randomNum () {
  var index = Math.floor(Math.random() * 8);
  return index;
}

function compareResult () {
  
}







});
