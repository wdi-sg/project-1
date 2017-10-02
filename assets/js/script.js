$(function(){

  var score = 0;
  var gameTimeout = 180;

  var $holes =$('.holes')
  var $button =$('button')

  alert('hello')

  // setInterval(randomMoleAppear,1000)
  $button.on('click',function() {
    if ($button.value=="Start")
      $button.value = "Start";
    else
    $button.value = "Reset";
    var timeleft = 30
    var timer = setInterval(function(){
      randomMoleAppear()
      --timeleft
      //console.log(timeleft);
      if(timeleft <=0){
        clearInterval(timer);
      }
    },700)
  })


function reset(){
  score = 0;
  //randomMoleAppear()
}

//when I click the holes without images
//   $('.holes').on('click',function(){
//     deductScore()
//     $('.score').text("Total Score : " + score)
//   })
//
// function deductScore() {
//   console.log(score);
//   score = score - 20
// }

//click on the mole can get 10 points
function calScore(){
  score = score + 10
  $('.score').text("Total Score : " + score)
}


//target only when I click the mole with images
$('.holes').on('click', '.image' ,function(){
  $(this).removeClass("image")
  calScore()
})


//mole appears at random spot
function randomMoleAppear(){


  var random = Math.floor(Math.random() * 10);

  $('.mole').eq(random).addClass("image")


  //mole timeout is set to 5s, mole will disappear
  function removeMole(){
  $('.mole').eq(random).removeClass("image")
  }
  setTimeout(removeMole,2000)

}

})
