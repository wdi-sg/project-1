$(function(){
  // variables
  var $box = $('.box')
  var answer
  var submitAnswer = ""

  var country =["vietnam", "china", "italy", "mexico", "india"]
  var image = ["url(./assets/img/vietnam.png)","url(./assets/img/china.png)",
  "url(./assets/img/italy.png)","url(./assets/img/mexico.png)","url(./assets/img/india.png)"]

  var score = 0
  var randomIndex
  var usedIndex = []
  var begin

  //start on click
  $('.start').one('click', start)

  function start() {
    $('.container').css('visibility','visible')
    //clear usedIndex
    usedIndex = []
    //score reset
    score = 0
    //shuffleImg for next play
    shuffleImg()
    //Hides 1 box every 1s
    begin = setInterval(hideBox, 1000)
    // calling timer object method to create timer upon page load
    timerObj.startTimer()
    if (randomIndex === 0) {
      $('<input type="text" class="input" placeholder="* * * * * * *">').insertBefore(".submit");
    } else if (randomIndex === 1) {
      $('<input type="text" class="input" placeholder="* * * * *">').insertBefore(".submit");
    } else if (randomIndex === 2) {
      $('<input type="text" class="input" placeholder="* * * * *">').insertBefore(".submit");
    } else if (randomIndex === 3) {
      $('<input type="text" class="input" placeholder="* * * * * *">').insertBefore(".submit");
    } else if (randomIndex === 4) {
      $('<input type="text" class="input" placeholder="* * * * *">').insertBefore(".submit");
    }
  }

  // timer object (creates timer)
  var timerObj = {
    // object keys
    seconds: 0,
    timerId: 0,
    // embedded object
    els: {
      timer: $('#timer')
    },
    // object method, start timer on page load
    startTimer() {
      this.els.timer.text(`Time elapsed: ${this.seconds}`)
      this.timerId =  setInterval(() => {
        this.seconds++
        this.els.timer.text(`Time elapsed: ${this.seconds}`)
      },1000)
    },
    // object method, updates timer
    updateTime (){
      this.seconds++;
      this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
    },
    //object method, reset timer
    resetTime() {
      clearInterval(this.timerId)
      this.seconds = 0
    }
  }

  //generate random number to hide box in grid
  function hideBox() {
    var random = Math.floor(Math.random()*25)
    $box.eq(random).css('visibility', 'hidden')
  }


 //shuffle image for next question
  function shuffleImg() {
    // console.log(usedIndex)
    randomIndex = Math.floor(Math.random()*5)
    if (usedIndex.length < 5){
    while (usedIndex.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random()*5)
      console.log('inside while loop', usedIndex)
    }
    usedIndex.push(randomIndex)
  }
    answer = country[randomIndex]
    var flagImage = image[randomIndex]
    var $container = $(".container")
    $container.css("background-image",flagImage)
  }

  //skip question
  $('.skip').one('click',shuffleImg)

  //check answer for match on click
  $('.submit').click(function() {
    var $input = $('.input')
    submitAnswer = $input.val()
    checkAnswer()
    //clear previous textbox input
    $input.val('')
  })

    //does submitAnswer match answer
  function checkAnswer() {
    if(submitAnswer === answer && timerObj.seconds < 5) {
      score += 2
      $('span').text(score)
      isGameOver()
      reset()

    } else if (submitAnswer === answer && timerObj.seconds <= 30) {
      score += 1
      $('span').text(score)
      isGameOver()
      reset()

    } else if(submitAnswer !== answer || timerObj.seconds >30) {
      score += 0
      isGameOver()
      reset()

    } else {
      score +=0
      isGameOver()
      reset()
    }
  }

// var end = setInterval(isGameOver,)
  function isGameOver() {
    if (usedIndex.length === 5 && score < 5) {
      alert('try again?')
      $('input').remove()
      start()
    } else if (score >= 5) {
      alert('proceed to level 2')
      $('.container').css('visibility','hidden')
    timerObj.resetTime()
  }
}

  function reset() {
    //reset timer
    timerObj.resetTime()
    timerObj.startTimer()
    //reset grid
    clearInterval(begin)
    $box.css('visibility', 'visible')
    shuffleImg()
    setInterval(hideBox,1000)
  }

})
