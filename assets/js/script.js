$(function(){
  // variables
  var $box = $('.box')
  var answer
  var submitAnswer = ""

  var country =["vietnam", "china", "italy", "mexico", "india"]
  var image = ["url(/assets/img/vietnam.png)","url(/assets/img/china.png)",
  "url(/assets/img/italy.png)","url(/assets/img/mexico.png)","url(/assets/img/india.png)"]

  var score = 0

  //shuffleImg for next play
  shuffleImg()
  //Hides 1 box every 1s
  var start = setInterval(hideBox,1000)
  //generate random number to hide box in grid
  function hideBox() {
    var random = Math.floor(Math.random()*25)
    $box.eq(random).css('visibility', 'hidden')
  }


var randomIndex

 //shuffle image for next question
  function shuffleImg() {
    var getRand = (function() {
    var nums = [0,1,2,3,4,];
    var current = [];
    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(current.length), 1);
    }
}());
    // randomIndex = Math.floor(Math.random()*)
    answer = country[nums]
    var flagImage = image[nums]
    var $container = $(".container")
    $container.css("background-image",flagImage)
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
    }
  }
  // calling timer object method to create timer upon page load
  timerObj.startTimer()


  // on click method to remove boxes
  // $box.on('click', function() {
  //   $(this).css('visibility', 'hidden')
  // })

//append textbox as new tag
  // var $letters = $('.letters')

if (randomIndex === 0) {

  $('<input type="text" class="input" placeholder="*******">').insertBefore(".submit");
} else if (randomIndex === 1) {
  $('<input type="text" class="input" placeholder="*****">').insertBefore(".submit");
} else if (randomIndex === 2) {
  $('<input type="text" class="input" placeholder="*****">').insertBefore(".submit");
} else if (randomIndex === 3) {
  $('<input type="text" class="input" placeholder="******">').insertBefore(".submit");
} else if (randomIndex === 4) {
  $('<input type="text" class="input" placeholder="*****">').insertBefore(".submit");
}

  //check answer for match on click
  $('#submit').click(function(){
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
      reset()
    } else if (submitAnswer === answer && timerObj.seconds <= 30) {
      score += 1
      $('span').text(score)
      reset()
    } else if(submitAnswer !== answer && timerObj.seconds >30) {
      score += 0
      reset()
    }
  }

var end = setInterval(isGameOver,)
  function isGameOver() {
    if (score < 5) {
    reset()
  } else if (score >= 5){
    $(.endPage).css('visibility','visible')
    $(.scoreCounter).css('display','none')
    $container.css('display', 'none')
    $(.letters).css('display','none')
    $(.timer).css('display','none')
  }
}

  function reset() {
    //reset timer
    clearInterval(start)
    //reset grid
    $box.css('visibility', 'visible')
    shuffleImg()
    setInterval(hideBox,1000)
  }
})
