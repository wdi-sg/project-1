$(function(){

  var score = 0;
  var moleTimeout = 5;

  var $outter = $(".outter")
  var $holes =$('.holes')

  alert('hello')
  randomMoleAppear()

})

function randomMoleAppear(){

  var random = Math.floor(Math.random() * 10);
  console.log(random)
  $('.outer').eq(random).addClass("image")
  $('.holes').eq(random).removeClass()

}
