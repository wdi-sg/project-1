$(function(){
var $box = $('.box')
var $locBtn = $('#loc')
var $colorBtn = $('#colorBtn')
var $startBtn = $('#startBtn')
var $stopBtn = $('#stopBtn')
var $resetBtn = $('#resetBtn')
var textbox = $('#textbox')
var colorArr = ['red', 'blue', 'orange', 'yellow','white', 'green', 'grey', 'purple'];
var recArr = [];
var recCol = [];
var count = 0;
var index = 0;
var on = 0;
var refreshIntervalId;
var n = 2;
var $turn = $('#turn')
var scoreObj = {
  score: 0,
  scoreBoard: $('#scoreBoard')
}
var gameOverDiv = $('.gameOver')
var $restartBtn = $('.restartBtn')

$restartBtn.on('click', () => {
  gameOverDiv.css('display', 'none')
})

$resetBtn.on('click', reset)
$stopBtn.on('click', stop)
$locBtn.on('click', compareResult)
$(document).on('keydown', function(e){
  if(e.keyCode===37){
    compareResult();
  }
});

$colorBtn.on('click', compareColor)
$(document).on('keydown', function(e){
  if(e.keyCode === 39) {
    compareColor()
  }
});

$startBtn.on('click', () => {
  scoreObj.scoreBoard.text('Score : 0')
  if (on == 0) {
  refreshIntervalId = setInterval(locGen, 2500);
  on = 1;
} else if (on == 1) {
  clearInterval(refreshIntervalId);
  on = 0;
}

});

function locGen() {
  count++;
  $turn.text(`Turn : ${count}`)
  var color = randomColor();
  if (count == 20) {
    $('.box').css("backgroundColor","")
    return gameOver()//call gameover
  }
  $(`[data-value = ${index}]`).css("backgroundColor","")
  index = randomNum();

  setTimeout(function() {
    $(`[data-value = ${index}]`).css("backgroundColor",`${color}`)
    textbox.text(`${color}`)
    textbox.css('color', `${color}`)
    recArr.push(index); //
    recCol.push(`${color}`) //
  }, 1000)
}

function randomColor () {
  var col = colorArr[randomNum()];
  return col;
}

function compareResult () {

  if (recArr[count - 1] === recArr[count - n]) {
    audioCorrect();
    scoreObj.score += 10;
    scoreObj.scoreBoard.text(`Score : ${scoreObj.score}`)
    // TODO: No Click? click = false
  } else if (recArr[count - 1] != recArr[count - n]) {
    audioWrong();
    scoreObj.score -= 10;
    scoreObj.scoreBoard.text(`Score : ${scoreObj.score}`)
  }
}

function compareColor () {
  if (recCol[count - 1] === recCol[count - n]) {
    audioCorrect();
    scoreObj.score += 10;
    scoreObj.scoreBoard.text(`Score : ${scoreObj.score}`)
  } else if (recCol[count - 1] != recCol[count - n]) {
    audioWrong();
    scoreObj.score -= 10;
    scoreObj.scoreBoard.text(`Score : ${scoreObj.score}`)
  }
}

function randomNum () {
  var index = Math.floor(Math.random() * 8);
  return index;
}

function gameOver () {
  // Show Score.
  count = 0;
  index = 0;
  on = 0;
  recArr = [];
  recCol = [];
  scoreObj.scoreBoard.text(`Score : ${scoreObj.score}`)
  clearInterval(refreshIntervalId);
  gameOverDiv.css('display', 'block')
}

function stop (){
  clearInterval(refreshIntervalId);
}

function reset(){
  count = 0;
  index = 0;
  on = 0;
  recArr = [];
  recCol = [];
  scoreObj.scoreBoard.text('Score : 0')
  textbox.text('')
  $('.box').css("backgroundColor","")
}

function audioCorrect() {
  return document.getElementById("audioCorrect").play();
}

function audioWrong() {
  return document.getElementById("audioWrong").play();
}


});
