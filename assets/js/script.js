$(function(){

  var score = 0;
  var gameTimeout = 180;
  var snd = new Audio("assets/sounds/hit.mp3");

  var $holes =$('.holes')
  var $button =$('button')
  var timer;


  $('.holes').addClass("avoid-clicks")
  $('#reset').hide()

  // setInterval(randomMoleAppear,1000)
  $('#start').on('click',function() {
    $('#start').hide()
    $('#reset').show()
    $('.holes').removeClass("avoid-clicks")

    var timeleft = 30
    timer = setInterval(function(){
      randomMoleAppear()
      randomMoleAppear()
      --timeleft
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

function reset(){
  score = 0
  $('.mole').removeClass("image")
  $('.score').html("Score: <span>"+ score +"</span>")
}

//when I click the holes without images
$('.mole').on('click',function(){
  snd.play()
  if($(this).hasClass('image')){
    $(this).removeClass("image")
    calScore()
  }else{
    deductScore()
  }
})

//When hit the hole -20
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


  //mole timeout is set to 5s, mole will disappear
  function removeMole(){
  $('.mole').eq(random).removeClass("image")
  }
  setTimeout(removeMole,900)

}

})
