$(function(){

  var moleTimer = 5;
  var gameTimeout = 180;

  var $outer = $(".outer")
  var $holes =$('.holes')
  var $button =$('button')

  alert('hello')

  $button.on('click',randomMoleAppear)


})

function generateMoleLotsOfMole(){
  

}

//mole appears at random spot
function randomMoleAppear(){
  var score = 0

  var random = Math.floor(Math.random() * 10);
  console.log(random)

  $('.mole').eq(random).addClass("image")


  //click on the mole can get 10 points
  $('.mole').eq(random).on('click',function(){
      score += 10
      $('.mole').eq(random).removeClass("image")
      $('.score').append("Total Score : " +score)

  })

  //mole timeout is set to 5s, mole will disappear
  function removeMole(){
  $('.mole').eq(random).removeClass("image")
  }
  setTimeout(removeMole,4000)

}


//within 5s user click it will score 10 points
