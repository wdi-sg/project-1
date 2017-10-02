$(function(){
var recArr = [];
var $box = $('.box')
var $locBtn = $('#loc')
var count = 0;
var score = 0;



$box.on('click', locGen)
$locBtn.on('click', compareResult)


function locGen() {
  count++;
  console.log(count);
  var index = randomNum();
  // $(`${index}`).css("backgroundColor","blue")
  recArr.push(index);
  $(this).css('backgroundColor', '#839073')

  // console.log(count)
}

function randomNum () {
  var index = Math.floor(Math.random() * 2);
  console.log(index)
  return index;
}

function compareResult () {
  console.log('check recArr:', recArr)
  console.log('check recArr[count]:', recArr[count - 1])
  console.log('check recArr[count - 1]:', recArr[count - 2])
  if ( recArr[count - 1] === recArr[count - 2]) {
    console.log('entered!')
    score+= 10;
  }
}







});
