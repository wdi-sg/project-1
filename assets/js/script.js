$(function(){
var recArr = [];
var $box = $('.box')
var $locBtn = $('#loc')
var count = 0;
var score = 0;
var index = 0;

$box.on('click', locGen)
$locBtn.on('click', compareResult)

// setInterval(locGen, 3000);

function locGen() {
  count++;
  if (count == 20) {
    gameOver()//call gameover
  }
  // console.log(count);
  console.log(index)
  $(`[data-value = ${index}]`).css("backgroundColor","")
  index = randomNum();
  console.log(index)
  // $(this).data('value')

  setTimeout(function() {
    $(`[data-value = ${index}]`).css("backgroundColor","#839073")
  }, 1000)

  recArr.push(index);
  // $(this).css('backgroundColor', )
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

function randomNum () {
  var index = Math.floor(Math.random() * 8);
  console.log(index)
  return index;
}

function gameOver () {
  // Show Score.
  count = 0;
  score = 0;
  index = 0;
  recArr = [];
  console.log('Count:', count, "Score:", score, "Index:", index, "recArr:", recArr)
  // reset gameboard
  // off setInterval
}




});
