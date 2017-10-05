var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')
var goalLevel = 1 // to assign goal Id's for each play field
var gravity = 50 // gravity multiplier
var platformNo = 1 // to assign platform Id's
var gLock = false // toggle for gravity
var allowance = 1 // to accomodate for gravity stopping distance, i.e. hover value
var jumpLimit = true // switch for jump
var start1 = [] // indicates ball1 starting position, index position increases with level
var start2 = []
var currentLevel
var lose = new Audio('/assets/sounds/lose.wav')
lose.loop = false
var loseCheck = false
var jumpSound = new Audio('/assets/sounds/jump.wav')
jumpSound.loop = false
var mute = true

$(function () {
  $('body').on('keydown', startClick)
  function startClick (e) { if (e.keyCode === 32) $('.start').click() }

  $('.start').on('click', () => {
    $('.start').remove()
    $('h2').remove()
    $('.half').removeClass('fade') // .fade greys out background when play (.play) is off
    $('.half').addClass('play')
    $body.on('keydown', ballMove)
    function ballMove (e) {
      var unit = 20 // 20
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        if (ball1Goal() === false && (borderCheck1Right()) && (wallCheck1Right()) && (!$('.fade').length)) ball1Hori(unit) // if ball1 doesn't exceed right border
        if (ball2Goal() === false && (borderCheck2Left()) && (wallCheck2Left()) && (!$('.fade').length)) ball2Hori(unit) // opposite side for ball2
      }
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        if (ball1Goal() === false && (borderCheck1Left()) && (wallCheck1Left()) && (!$('.fade').length)) ball1Hori(-unit)
        if (ball2Goal() === false && (borderCheck2Right()) && (wallCheck2Right()) && (!$('.fade').length)) ball2Hori(-unit)
      }
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        if (jumpLimit) {
          if (!ball1Goal()) ball1Jump()
          if (!ball2Goal()) ball2Jump()
          console.log(mute)
        }
      }
      if (e.key === 'r' || e.key === 'R') {
        resetLevel()
      }
      if (e.key === 'n' || e.key === 'N') {
        $('.nextLevel').click()
      }
      if (e.key === 'm' || e.key === 'M') {
        $('.mute').click()
      }
    }
    level1()
    setInterval(ballSnap, 500) // checking if border exceeds
    setInterval(gravity1, 30)
    setInterval(gravity2, 30)
    $('.reset').on('click', resetLevel)
    $('.skip').on('click', skipLevel)
    $('.mute').on('click', toggleSound)
    checkClear = setInterval(levelClear, 500)
  })
})

// this controls horizontal ball movement
function ball1Hori (a) {
  document.getElementById('ball1').style.left = (Number($ball1.css('left').replace('px', '')) + a).toString() + 'px'
}
function ball2Hori (a) {
  document.getElementById('ball2').style.left = (Number($ball2.css('left').replace('px', '')) - a).toString() + 'px'
}

// these are checks on the game border to see if hori movement can proceed
function borderCheck1Right () {
  if (Number($ball1.css('left').replace('px', '')) < $('.half').width() - $ball1.width()) {
    return true // condition to keep ball1 within right border
  } else return false
}
function borderCheck2Right () {
  if (Number($ball2.css('left').replace('px', '')) < $('.half').width() - $ball2.width()) {
    return true
  } else return false
}
function borderCheck1Left () {
  if (Number($ball1.css('left').replace('px', '')) > 0) {
    return true
  } else return false
}
function borderCheck2Left () {
  if (Number($ball2.css('left').replace('px', '')) > 0) {
    return true
  } else return false
}

// to check for collision against wall-type obstacles
function wallCheck1Left () {
  if (($ball1.position().left <= $('.wall1').eq(0).position().left + $('.wall1').eq(0).width()) &&
           ($ball1.position().left > $('.wall1').eq(0).position().left) &&
           ($ball1.position().top >= $('.wall1').eq(0).position().top) &&
           ($ball1.position().top + $ball1.height() <= $('.wall1').eq(0).position().top + $('.wall1').eq(0).height())) {
    $ball1.css('left', ($('.wall1').eq(0).position().left + $('.wall1').eq(0).width()).toString() + 'px')
    return false
  } else {
    return true
  }
}
function wallCheck1Right () {
  if (($ball1.position().left + $ball1.width() >= $('.wall1').eq(0).position().left) &&
         ($ball1.position().left < $('.wall1').eq(0).position().left) &&
         ($ball1.position().top >= $('.wall1').eq(0).position().top) &&
         ($ball1.position().top + $ball1.height() <= $('.wall1').eq(0).position().top + $('.wall1').eq(0).height())) {
    $ball1.css('left', ($('.wall1').eq(0).position().left - $ball1.width()).toString() + 'px')
    return false
  } else {
    return true
  }
}
function wallCheck2Left () {
  if (($ball2.position().left <= $('.wall2').eq(0).position().left + $('.wall2').eq(0).width()) &&
           ($ball2.position().left > $('.wall2').eq(0).position().left) &&
           ($ball2.position().top >= $('.wall2').eq(0).position().top) &&
           ($ball2.position().top + $ball2.height() <= $('.wall2').eq(0).position().top + $('.wall2').eq(0).height())) {
    $ball2.css('left', ($('.wall2').eq(0).position().left + $('.wall2').eq(0).width()).toString() + 'px')
    return false
  } else {
    return true
  }
}
function wallCheck2Right () {
  if (($ball2.position().left + $ball2.width() >= $('.wall2').eq(0).position().left) &&
         ($ball2.position().left < $('.wall2').eq(0).position().left) &&
         ($ball2.position().top >= $('.wall2').eq(0).position().top) &&
         ($ball2.position().top + $ball2.height() <= $('.wall2').eq(0).position().top + $('.wall2').eq(0).height())) {
    $ball2.css('left', ($('.wall2').eq(0).position().left - $ball2.width()).toString() + 'px')
    return false
  } else {
    return true
  }
}

function ball1Jump () {
  gravityTimeout(100)
  if (mute === false) jumpSound.play()
  jumpLimit = false
  $ball1.css('top', (Number($ball1.css('top').replace('px', '')) - 8.5 * $ball1.height()).toString() + 'px')
  setTimeout(() => { jumpLimit = true }, 1000)
}

function ball2Jump () {
  gravityTimeout(100)
  if (mute === false) jumpSound.play()
  jumpLimit = false
  $ball2.css('top', (Number($ball2.css('top').replace('px', '')) - 8.5 * $ball2.height()).toString() + 'px')
  setTimeout(() => { jumpLimit = true }, 1000)
}

// these cause the balls to fall downward
var seconds1 = 0
function gravity1 () {
  if (!gLock) {
    var $ball1Height = $ball1.css('top')
    for (i = 0; i < $('#game1').find('.platform').length; i++) {
      if (($ball1.position().left < $('#game1').find('.platform').eq(i).position().left + $('#game1').find('.platform').eq(i).width()) &&
      ($ball1.position().left + $ball1.width() >= $('#game1').find('.platform').eq(i).position().left) &&
      ($ball1.position().top + $ball1.height() >= $('#game1').find('.platform').eq(i).position().top - allowance) &&
      ($ball1.position().top + $ball1.height() <= $('#game1').find('.platform').eq(i).position().top + $('#game1').find('.platform').eq(i).height())) {
        $ball1.css('top', $ball1.css('top'))
        seconds1 = 0
        return
      } else {
        seconds1 += 0.02
        // to tally against the gravity setInterval
        $ball1.css('top', (Number($ball1Height.replace('px', '')) + (0.5 * gravity * seconds1 ^ 2)).toString() + 'px')
        if ($ball1.position().top + $ball1.height() > $('.half').height()) {
          if (loseCheck === false && mute === false) {
            lose.play()
            loseCheck = true
          }
          $ball1.css('top', ($('.half').height() + 20).toString() + 'px')
          $ball1.css('left', '245px')
          $('#game1').removeClass('play')
          $('#game1').addClass('fade')
          return
        }
      }
    }
  }
}

var seconds2 = 0
function gravity2 () {
  if (!gLock) {
    var $ball2Height = $ball2.css('top')
    for (i = 0; i < $('#game2').find('.platform').length; i++) {
      if (($ball2.position().left < $('#game2').find('.platform').eq(i).position().left + $('#game2').find('.platform').eq(i).width()) &&
      ($ball2.position().left + $ball2.width() >= $('#game2').find('.platform').eq(i).position().left) &&
      ($ball2.position().top + $ball2.height() >= $('#game2').find('.platform').eq(i).position().top - allowance) &&
      ($ball2.position().top + $ball2.height() <= $('#game2').find('.platform').eq(i).position().top + $('#game2').find('.platform').eq(i).height())) {
        $ball2.css('top', $ball2.css('top'))
        seconds2 = 0
        return
      } else {
        seconds2 += 0.02 // independent gravity timer counter so that their vertical acceleration is independent
        $ball2.css('top', (Number($ball2Height.replace('px', '')) + (0.5 * gravity * seconds2 ^ 2)).toString() + 'px')
        if ($ball2.position().top + $ball2.height() > $('.half').height()) {
          if (loseCheck === false && mute == false) {
            lose.play()
            loseCheck = true
          }
          $ball2.css('top', ($('.half').height() + 20).toString() + 'px')
          $ball2.css('left', '40px')
          $('#game2').removeClass('play')
          $('#game2').addClass('fade')
          return
        }
      }
    }
  }
}

// turn off gravity momentarily
function gravityTimeout (x) {
  gLock = true
  setTimeout(() => { gLock = false }, x)
}

// snap ball back to edge of frame if it is out of play field
function ballSnap () {
  if (borderCheck1Right() !== true) {
    $ball1.css('left', ($('.half').width() - $ball1.width()).toString() + 'px')
  }
  if (borderCheck2Right() !== true) {
    $ball2.css('left', ($('.half').width() - $ball2.width()).toString() + 'px')
  }
  if (borderCheck1Left() !== true) {
    $ball1.css('left', '0px')
  }
  if (borderCheck2Left() !== true) {
    $ball2.css('left', '0px')
  }
}

// goal creation constructor to customize goals in different levels
class goal {
  constructor (color = 'black', width = '23px', height = '23px', top, left, id) {
    this.color = color
    this.width = width
    this.height = height
    this.top = top
    this.left = left
  }
}
function createGoal (topPixels, leftPixels, half) {
  var goalCreate = new goal()

  var $goalCreate = $('<div class = goal>')
  $goalCreate.css({
    backgroundColor: goalCreate.color,
    width: goalCreate.width,
    height: goalCreate.height,
    top: topPixels,
    left: leftPixels,
    position: 'absolute',
    display: 'inline-block',
    opacity: 0.5
      // float: 'left'
  })
  $goalCreate.attr('id', goalLevel.toString())
  $goalCreate.addClass('goalBorder')
  goalLevel++
  half.append($goalCreate)
}

// platform creation constructor to customize layout in different levels
class platform {
  constructor (color = 'black', width = '100px', height = '5px', top, left, id) {
    this.color = color
    this.width = width
    this.height = height
    this.top = top
    this.left = left
  }
}
function createPlatform (topPixels, leftPixels, half, width, height, type) {
  var platformCreate = new platform()

  var $platformCreate = $('<div class = platform>')
  $platformCreate.css({
    backgroundColor: platformCreate.color,
    width: width,
    height: height,
    top: topPixels,
    left: leftPixels,
    position: 'absolute',
    display: 'inline-block'
  })
  $platformCreate.addClass(type)
  $platformCreate.addClass('platformBorder')

  $platformCreate.attr('id', 'p' + platformNo.toString())
  platformNo++
  half.append($platformCreate)
}

// to check if respective balls have reached their target
function ball1Goal () {
  if (($ball1.position().left < $('.goal:first').position().left + $('.goal:first').width()) &&
      ($ball1.position().top < $('.goal:first').position().top + $('.goal:first').height()) &&
      ($ball1.position().left + $ball1.width() > $('.goal:first').position().left) &&
      ($ball1.position().top + $ball1.height() > $('.goal:first').position().top)) {
    $('.goal:first').css('backgroundColor', 'white')
    return true
  } else return false
}

function ball2Goal () {
  if (($ball2.position().left < $('.goal:last').position().left + $('.goal:last').width()) &&
      ($ball2.position().top < $('.goal:last').position().top + $('.goal:last').height()) &&
      ($ball2.position().left + $ball2.width() > $('.goal:last').position().left) &&
      ($ball2.position().top + $ball2.height() > $('.goal:last').position().top)) {
    $('.goal:last').css('backgroundColor', 'white')
    return true
  } else return false
}

// skip, alert, reset button functionality
function skipLevel () {
    // switch(currentLevel) {
    //   case 1:
  seconds2 = 0
  seconds1 = 0
  gravityTimeout(500)
  $ball1.css('top', $('.goal:first').position().top.toString() + 'px')
  $ball1.css('left', $('.goal:first').position().left.toString() + 'px')
  $ball2.css('top', $('.goal:last').position().top.toString() + 'px')
  $ball2.css('left', $('.goal:last').position().left.toString() + 'px')
}
function toggleSound () {
  if (mute === true){
    mute = false
    $('.mute').html('I regret doing that (M)')
  }
  else if (mute === false){
    mute = true
    $('.mute').html("Lonely without sound (M)")
  }
}
function alert1 () {
  alert('Game over')
}
function resetLevel () {
  loseCheck = false
  seconds2 = 0
  seconds1 = 0
  gravityTimeout(500)
  $('.goal').css('backgroundColor', 'black')
  if ($('.half').length) {
    $('.half').removeClass('fade')
    $('.half').addClass('play')
  }
  if ($('.nextLevel').length) { // Check if winning condition has already been triggered, and resets if so
    $('.nextLevel').remove()
    checkClear = setInterval(levelClear, 500)
  }
  switch (currentLevel) {
    case 1:
      $ball1.css('top', '30px')
      $ball1.css('left', '255px')
      $ball2.css('top', '30px')
      $ball2.css('left', '30px')
      break
    case 2:
      $ball1.css('top', (start1[0].top).toString() + 'px')
      $ball1.css('left', (start1[0].left + $('.goal').width() / 2).toString() + 'px')
      $ball2.css('top', (start2[0].top).toString() + 'px')
      $ball2.css('left', (start2[0].left + $('.goal').width() / 2 - $ball2.width()).toString() + 'px')
      break
    case 3:
      $ball1.css('top', (start1[1].top).toString() + 'px')
      $ball1.css('left', (start1[1].left + $('.goal').width() / 2).toString() + 'px')
      $ball2.css('top', (start2[1].top).toString() + 'px')
      $ball2.css('left', (start2[1].left + $('.goal').width() / 2 - $ball2.width()).toString() + 'px')
      break
    case 4:
      $ball1.css('top', (start1[2].top).toString() + 'px')
      $ball1.css('left', (start1[2].left + $('.goal').width() / 2).toString() + 'px')
      $ball2.css('top', (start2[2].top).toString() + 'px')
      $ball2.css('left', (start2[2].left + $('.goal').width() / 2 - $ball2.width()).toString() + 'px')
      break
    case 5:
      $ball1.css('top', (start1[3].top).toString() + 'px')
      $ball1.css('left', (start1[3].left + $('.goal').width() / 2).toString() + 'px')
      $ball2.css('top', (start2[3].top).toString() + 'px')
      $ball2.css('left', (start2[3].left + $('.goal').width() / 2 - $ball2.width()).toString() + 'px')
      break

  }
}

// level set up
function level1 () {
  createGoal('125px', '30px', $('#game1'))
  createGoal('125px', '247px', $('#game2'))
  start1.push($('.goal:first').position())
  start2.push($('.goal:last').position())
  currentLevel = $('.goal').last().attr('id') / 2
  createPlatform('150px', '0', $('#game1'), '300px', '5px', 'floor1')
  createPlatform('120px', '190px', $('#game1'), '50px', '50px', 'wall1')
  createPlatform('150px', '0', $('#game2'), '300px', '5px', 'floor2')
  createPlatform('120px', '60px', $('#game2'), '50px', '50px', 'wall2')
}

function level2 () {
  $('.goal').remove()
  $('.platform').remove()

  createGoal('60px', '227px', $('#game1'))
  createGoal('60px', '50px', $('#game2'))
  start1.push($('.goal:first').position())
  start2.push($('.goal:last').position())
  currentLevel = $('.goal').last().attr('id') / 2
  createPlatform('155px', '0', $('#game1'), '250px', '5px', 'floor1')
  createPlatform('83px', '238px', $('#game1'), '20px', '5px', 'floor1')
  createPlatform('110px', '250px', $('#game1'), '50px', '5px', 'wall1')

  createPlatform('155px', '50px', $('#game2'), '130px', '5px', 'floor2')
  createPlatform('155px', '210px', $('#game2'), '90px', '5px', 'floor2')
  createPlatform('83px', '40px', $('#game2'), '20px', '5px', 'floor2')
  createPlatform('110px', '0', $('#game2'), '30px', '5px', 'wall2')
  checkClear = setInterval(levelClear, 500)
  return $('.nextLevel').remove()
}

function level3 () {
  $('.goal').remove()
  $('.platform').remove()

  createGoal('10px', '10px', $('#game1'))
  createGoal('10px', '90px', $('#game2'))
  start1.push($('.goal:first').position())
  start2.push($('.goal:last').position())
  currentLevel = $('.goal').last().attr('id') / 2
  createPlatform('83px', '225px', $('#game1'), '35px', '5px', 'floor1')
  createPlatform('0px', '210px', $('#game1'), '15px', '100px', 'wall1')
  createPlatform('120px', '280px', $('#game1'), '15px', '5px', 'floor1')
  createPlatform('170px', '190px', $('#game1'), '70px', '5px', 'floor1')
  createPlatform('150px', '100px', $('#game1'), '70px', '5px', 'floor1')
  createPlatform('120px', '30px', $('#game1'), '70px', '5px', 'floor1')
  createPlatform('95px', '5', $('#game1'), '50px', '5px', 'floor1')
  createPlatform('70px', '10px', $('#game1'), '20px', '5px', 'floor1')
  createPlatform('40px', '15px', $('#game1'), '10px', '5px', 'floor1')

  createPlatform('83px', '40px', $('#game2'), '30px', '5px', 'floor2')
  createPlatform('0', '70px', $('#game2'), '15px', '100px', 'wall2')
  createPlatform('130px', '0', $('#game2'), '95px', '5px', 'floor2')
  createPlatform('100px', '120px', $('#game2'), '20px', '5px', 'floor2')
  createPlatform('70px', '150px', $('#game2'), '20px', '5px', 'floor2')
  createPlatform('40px', '95px', $('#game2'), '60px', '5px', 'floor2')
  checkClear = setInterval(levelClear, 500)
  return $('.nextLevel').remove()
}

function level4 () {
  $('.goal').remove()
  $('.platform').remove()

  createGoal('120px', '180px', $('#game1'))
  createGoal('30px', '210px', $('#game2'))
  start1.push($('.goal:first').position())
  start2.push($('.goal:last').position())
  currentLevel = $('.goal').last().attr('id') / 2
  createPlatform('75px', '8px', $('#game1'), '30px', '7px', 'floor1')
  createPlatform('55px', '150px', $('#game1'), '25px', '100px', 'wall1')
  createPlatform('75px', '56px', $('#game1'), '30px', '7px', 'floor1')
  createPlatform('75px', '106px', $('#game1'), '29px', '7px', 'floor1')
  createPlatform('75px', '175px', $('#game1'), '30px', '7px', 'floor1')
  createPlatform('95px', '235px', $('#game1'), '25px', '7px', 'floor1')
  createPlatform('143px', '176px', $('#game1'), '27px', '7px', 'floor1')

  createPlatform('85px', '80px', $('#game2'), '25px', '7px', 'floor2')
  createPlatform('0', '63px', $('#game2'), '16px', '100px', 'wall2')
  createPlatform('95px', '150px', $('#game2'), '20px', '7px', 'floor2')
  createPlatform('70px', '163px', $('#game2'), '20px', '7px', 'floor2')
  createPlatform('55px', '195px', $('#game2'), '30px', '7px', 'floor2')
  checkClear = setInterval(levelClear, 500)
  return $('.nextLevel').remove()
}

function level5 () {
  $('.goal').remove()
  $('.platform').remove()

  createGoal('0', '274px', $('#game1'))
  createGoal('0', '0', $('#game2'))
  start1.push($('.goal:first').position())
  start2.push($('.goal:last').position())
  currentLevel = $('.goal').last().attr('id') / 2
  createPlatform('163px', '130px', $('#game1'), '70px', '7px', 'floor1')
  createPlatform('50px', '150px', $('#game1'), '40px', '30px', 'wall1')
  createPlatform('143px', '220px', $('#game1'), '30px', '7px', 'floor1')
  createPlatform('100px', '130px', $('#game1'), '70px', '7px', 'floor1')
  createPlatform('23px', '210px', $('#game1'), '80px', '7px', 'floor2')

  createPlatform('95px', '195px', $('#game2'), '28px', '7px', 'floor2')
  createPlatform('95px', '260px', $('#game2'), '40px', '7px', 'floor2')
  createPlatform('0', '179px', $('#game2'), '16px', '100px', 'wall2')
  createPlatform('135px', '250px', $('#game2'), '28px', '7px', 'floor2')
  createPlatform('145px', '100px', $('#game2'), '130px', '7px', 'floor2')
  createPlatform('99px', '0', $('#game2'), '70px', '7px', 'floor2')
  createPlatform('49px', '60px', $('#game2'), '20px', '7px', 'floor2')
  createPlatform('30px', '10px', $('#game2'), '30px', '7px', 'floor2')

  checkClear = setInterval(levelClear, 500)
  return $('.nextLevel').remove()
}

// to check if winning conditions have been met
function levelClear () {
  if (ball1Goal() === true && ball2Goal() === true) {
    switch (currentLevel) {
      case 1:
        clearInterval(checkClear)
        $('.container').append('<button class ="nextLevel" onclick="level2()">Next Level (N)</button>')
        break
      case 2:
        clearInterval(checkClear)
        $('.container').append('<button class ="nextLevel" onclick="level3()">Next Level (N)</button>')
        break
      case 3:
        clearInterval(checkClear)
        $('.container').append('<button class ="nextLevel" onclick="level4()">Next Level (N)</button>')
        break
      case 4:
        clearInterval(checkClear)
        $('.container').append('<button class ="nextLevel" onclick="level5()">Next Level (N)</button>')
        break
      case 5:
        clearInterval(checkClear)
        $('.container').append('<button class ="nextLevel" onclick="alert1()">Thank you for playing!</button>')
        break
    }
  }
}
