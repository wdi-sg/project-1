
<!---
Read Me Contents
-->
# <img src="/assets/images/readme/whackthatmole.png" height="80"> Project #1: Whack a Mole

### Introduction
![](/assets/images/readme/Preview.png)

What is **Whack A Mole**?

Whack a mole is a **fast-action** mole whacking game. The mole **pop out** at random position. Each mole timeout is set to 9ms, WHACK it fast!

https://pehhuishi.github.io/project-1/

### Instructions
![](/assets/images/readme/gameStarts.png)
How to **WHACK** ?

<br/>Click on the mole before it returns to the ground!
Every whack gives you 10 points while every wrong hit to an empty hole reduces 5 points.
There's a time limit of 30s so start whacking!

---

### Overview

 ![](/assets/images/readme/flow.png)

### How it works

```JavaScript
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
```

```JavaScript
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
```

```JavaScript
//if you hit the mole, it a sound will be played
//add the score
$('.mole').on('click',function(){
  if($(this).hasClass('image')){
    sound()
    $(this).removeClass("image")
    calScore()
  }else{
    //when I click the holes without mole
    //it will deduct score
    deductScore()
  }
})
```

```JavaScript
//play this sound if mole is being click
function sound(){
  var snd = document.createElement('audio')
  snd.src= "assets/sounds/hit.mp3"
  snd.play()
}
```

```JavaScript
//each successful click on the mole can get 10 score
function calScore(){
  score = score + 10
  $('.score').html("Score: <span>"+ score +"</span>")
}
```

```JavaScript
//When click on the hole without a mole -5 from score
function deductScore() {
  score = score - 5
  $('.score').html("Score: <span>"+ score +"</span>")
    // "Total Score : " + "<span>score</span>")
}
```

```JavaScript
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
```

```JavaScript
//reset score and clear interval
//remove any mole if the timeout for the mole hasn't end
function reset(){
  score = 0
  $('.mole').removeClass("image")
  $('.score').html("Score: <span>"+ score +"</span>")
}
```

```JavaScript
//add a hammer image to the mouse cursor
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
```

```JavaScript
//once start it will hide reset button and
//add avoid click until user press start
$('.holes').addClass("avoid-clicks")
$('#reset').hide()
```

---

### Challenges

- Adding the mole into the specific hole.
  Previously, I generate a random number and use a for loop to loop through the div(mole) length. To add mole images by using their #ID. But when it comes to removing the mole I cannot identify which mole I added initially.

- Calculation of the score
  I used 2 onclick function therefore there were two listener. Further improvising by combining two listeners with just 1 onclick. With that, it will either check on if there is mole added, score will be added accordingly or else, it will deduct the score.

- A timer for my game to end
  I used the setInterval but my game will be looping forever.
  As I am not sure how to use it. Went to google how to use the setInterval.

  Would like to thanks to my peers Gabriel, Shu Min, JieYing, Alex, for guiding throughout the project.

---
### Potential Improvements

- Animation for the moles
- Add different difficulty levels Eg. Easy, Intermediate  and Hard
- Add same character with a different color scheme, so if hit the wrong mole, points will be deducted
- Add same character with an unique feature, it hit time will be extended.
- Add a pause button
- Save highscore
- Last 10s left, will turn red and blink interval increases
