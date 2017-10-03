$(function(){
var $box = $('.box')
var $locBtn = $('#loc')
var $startBtn = $('#startBtn')
var $score = $('#scoreBoard');
var recArr = [];
var count = 0;
var index = 0;
var on = 0;
var refreshIntervalId;


$box.on('click', locGen)
$locBtn.on('click', compareResult)
$startBtn.on('click', () => {
  if (on == 0) {
  refreshIntervalId = setInterval(locGen, 3000);
  on = 1;
} else if (on == 1) {
  clearInterval(refreshIntervalId);
  on = 0;
}

});

function locGen() {
  count++;
  if (count == 5) {
    $('.box').css("backgroundColor","")
    return gameOver()//call gameover
  }
  // console.log(count);
  // console.log(index)
  $(`[data-value = ${index}]`).css("backgroundColor","")
  index = randomNum();
  // console.log(index)
  // $(this).data('value')

  setTimeout(function() {
    $(`[data-value = ${index}]`).css("backgroundColor","#839073")
  }, 1000)

  recArr.push(index);
  // $(this).css('backgroundColor', )
}


function compareResult () {
  // console.log('check recArr:', recArr)
  // console.log('check recArr[count]:', recArr[count - 1])
  // console.log('check recArr[count - 1]:', recArr[count - 2])
  if (recArr[count - 1] === recArr[count - 2]) {
    // console.log('entered!')
    $score+= 10;
  }
}

function randomNum () {
  var index = Math.floor(Math.random() * 8);
  // console.log(index)
  return index;
}

function gameOver () {
  // Show Score.
  count = 0;
  $score = 0;
  index = 0;
  recArr = [];
  console.log('Count:', count, "Score:", $score, "Index:", index, "recArr:", recArr)
  // console.log(clearInterval, refreshIntervalId);
  clearInterval(refreshIntervalId);
  // console.log(clearInterval, refreshIntervalId);
  // reset gameboard
  // off setInterval
}




});
