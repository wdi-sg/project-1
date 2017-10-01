$(function(){

  var score = 0;
  var moleTimer = 5;
  var gameTimeout = 180;

  var $outer = $(".outer")
  var $holes =$('.holes')
  var $button =$('button')

  alert('hello')

  $button.on('click',randomMoleAppear)


})

//mole disappearance timeout is set to 5s, mole will disappear
function randomMoleAppear(){

  var random = Math.floor(Math.random() * 5);
  console.log(random)

  $('.mole').eq(random).addClass("image")

  function removeMole(){
  $('.mole').eq(random).removeClass("image")
  }
  setTimeout(removeMole,4000)
  console.log("test");

}


//within 5s user click it will score 10 points
function whackMole(){


}
