$(function(){
var $box = $('.box')
var $locBtn = $('#loc')
var $colorBtn = $('#colorBtn')
var $startBtn = $('#startBtn')
var colorArr = ['red', 'blue', 'orange', 'yellow','white', 'green', 'grey', 'purple']
var recArr = [];
var recCol = [];
var count = 0;
var index = 0;
var on = 0;
var refreshIntervalId;
var scoreObj = {
  score: 0,
  scoreBoard: $('#scoreBoard')
}

$box.on('click', locGen)
$locBtn.on('click', compareResult)
$colorBtn.on('click', compareColor)
$startBtn.on('click', () => {
  //TODO reset score
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
  var color = randomColor();
  if (count == 10) {
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
    $(`[data-value = ${index}]`).css("backgroundColor",`${color}`)
    // $(`[data-value = ${index}]`).css("backgroundColor","${colorArr[0]}")
  }, 1000)

  recArr.push(index);
  recCol.push(`${color}`)
  // $(this).css('backgroundColor', )
}

function randomColor () {
  var col = colorArr[randomNum()];
  return col;
}

function compareResult () {
  // console.log('check recArr:', recArr)
  // console.log('check recArr[count]:', recArr[count - 1])
  // console.log('check recArr[count - 1]:', recArr[count - 2])
  if (recArr[count - 1] === recArr[count - 2]) {
    scoreObj.score += 10;
    scoreObj.scoreBoard.text(`Score:${scoreObj.score}`)
  } else if (recArr[count - 1] != recArr[count - 2]) {
    scoreObj.score -= 10;
    scoreObj.scoreBoard.text(`Score:${scoreObj.score}`)
  }
  // TODO: No Click? click = false
}

function compareColor () {
  if (recCol[count - 1] === recCol[count - 2]) {
    scoreObj.score += 10;
    scoreObj.scoreBoard.text(`Score:${scoreObj.score}`)
  } else if (recCol[count - 1] != recCol[count - 2]) {
    scoreObj.score -= 10;
    scoreObj.scoreBoard.text(`Score:${scoreObj.score}`)
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
  scoreObj.scoreBoard.text(`Score:${scoreObj.score}`)
  index = 0;
  recArr = [];
  console.log('Count:', count, "Score:", scoreObj.score, "Index:", index, "recArr:", recArr)
  // console.log(clearInterval, refreshIntervalId);
  clearInterval(refreshIntervalId);
  // console.log(clearInterval, refreshIntervalId);
  // reset gameboard
  // off setInterval
}




});
