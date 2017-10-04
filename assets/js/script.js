$(function(){

  var score = 0;

  var $holes =$('.holes')
  var $button =$('button')
  var timer;
  var $hammer =$('#hammer')
  var $body =$('body')

  //once start it will hide reset and
  //add avoid click until user press start
  $('.holes').addClass("avoid-clicks")
  $('#reset').hide()


  //add a hammer to the mouse cursor
  $body.on('mousemove', hammer)
  function hammer(e) {
    // clientX => left rule
    // clientY => top rule
    var clientX = e.clientX
    var clientY = e.clientY
    var hammerWidth = $hammer.width()
    var hammerHeight = $hammer.height()

    var hammerPoint = midPoint(clientX, clientY, hammerWidth, hammerHeight)
    var bodyWidth = $body.width()

    $hammer.css(hammerPoint)
  }

  function midPoint(hammerX, hammerY, objWidth, objHeight) {
    return {
      top: `${hammerY - 20- (objHeight/2)}px`,
      left: `${hammerX +50 - (objWidth/2)}px`,
      // transform: (mouseX > bodyWidth/2) ? 'scaleX(-1)' : 'scaleX(1)'
    }
  }


  //when user tigger start button ,
  //it setInterval for Mole to appear every 1s
  $('#start').on('click',function() {
    $('#start').hide()
    $('#reset').show()
    $('.holes').removeClass("avoid-clicks")

    var timeleft = 30
    timer = setInterval(function(){
      randomMoleAppear()
      randomMoleAppear()
      timeleft--
      $('.timer').html("Timeleft: <span>"+ timeleft +"</span>")
      if(timeleft <=0){
        clearInterval(timer);
        $('.holes').addClass("avoid-clicks")
      }
    },1000)
  })

  //reset score to 0,clearInterval,hide reset button
  $('#reset').on('click',function(){
    clearInterval(timer);
    reset()
    $('#start').show()
    $('#reset').hide()
    $('.score').html("")
    $('.timer').html("")
    $('.holes').addClass("avoid-clicks")
  })
//reset my score and clear interval
//remove any mole if the timeout for the mole hasn't end
function reset(){
  score = 0
  $('.mole').removeClass("image")
  $('.score').html("Score: <span>"+ score +"</span>")
}
//sound if mole is being whack
function sound(){
  var snd = document.createElement('audio')
  snd.src= "assets/sounds/hit.mp3"
  snd.play()
}

//when I click the holes without images
//if you only hit the mole, it will generate a sound
$('.mole').on('click',function(){
  if($(this).hasClass('image')){
    sound()
    $(this).removeClass("image")
    calScore()
  }else{
    deductScore()
  }
})

//When hit the hole without a mole -5
function deductScore() {
  score = score - 5
  $('.score').html("Score: <span>"+ score +"</span>")
    // "Total Score : " + "<span>score</span>")
}

  //click on the mole can get 10 points
  function calScore(){
    score = score + 10
    $('.score').html("Score: <span>"+ score +"</span>")
  }


//mole appears at random spot
  function randomMoleAppear(){

    var random = Math.floor(Math.random() * 10);

    $('.mole').eq(random).addClass("image")


  //mole timeout is set to 9ms, mole will disappear
    function removeMole(){
      $('.mole').eq(random).removeClass("image")
    }
    setTimeout(removeMole,900)
    }

})
