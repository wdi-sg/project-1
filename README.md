<!---
Read Me Contents
-->

# <img src="/assets/images/game.png" height ="50"> Project #1: Follow the pattern

### Brief summary of the game :

A simple game which goal is for player to repeat the pattern showed by the ‘instructor’.
With each round a new step is added to the pattern making, the game much more difficult with every round. Player with the fastest correct sequence and points will win.

## Game logic

![](/assets/images/flowchart2.png)

Updated the game logic from having two players to take turns to follow the sequence and having timer as the win condition to two players representing different keys competing on who finishes the sequence first. The faster player scores a point and the player with the higher points after 5 rounds will win.
## Finished product

![](/assets/images/finishedproduct.png)

### How to win / How to play?

1. 5 seconds timer will start upon player clicking the start button

2. Player 1 will use the '1,2,3,4' keys to follow the pattern '1,2,3,4' whereas Player 2 will use the 'left,up,right,down' keys for the '1,2,3,4' pattern for extra challenge.

3. Follow the pattern from the numbers below or the dance instructor's move. Key input starts as soon as the timer is up.

4. Starting with 4 moves and doubling the number of moves every round(Up to round 5)

5. Player who finishes the pattern first will get 1 point.

6. Player with the most points  after round 5 wins!


## Stage of the game development

### Setting up the divs
![](/assets/images/divsofgame.png)
Creating many different divs for different purposes.
### The key code of keys
Keys chosen

Player 1 | Player 2 | *keycode for Player 1* | *keycode for Player 2*
--- | --- | --- | ---
`Number Keys` | `Arrow Keys` | `keycode` | `keycode`
1,2,3,4 | left,up,right,down | 49,50,51,52 | 37,38,39,40

Credit http://keycode.info/
### Matching array with the keys
Setting the number of moves in an array for the dance instructor

`var instructorMoves = [37,38,39,40]`

By doing it this way, I can directly compare it with Player 2's **keycode** combinations(the arrow keys) using ..

`var strOfKeys1 = e.which` and `if(strOfKeys === randSequence)`

As for Player 1, I can subtract the given array of numbers to match with my number keys' **keycode**.

`var strOfKeys = e.which - 12`

### Checking for match & iterating position

```javascript
if(strOfKeys === randSequence[counter1]) {
  counter1++
  if(counter1 === 4 && rounds === 1) {
    $(".playerOneAlert2").html("O").show().delay(2000).fadeOut(1000)
    $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
    counter1 = 0
    rounds++
    scoreP1++
    $playerOne.text(`Score: ${scoreP1}`)
    new Audio('./assets/audio/cheer.mp3').play()
    timerWithAddRounds()
  }
```

```javascript
else if (strOfKeys !== randSequence[counter1] && whichPlayer === 1) {
   $(".playerOneAlert2").html("X").show().delay(400).fadeOut(400)
   $(".playerOneAlert2").css({"color" : "red", "font-size" : "50px"})
   new Audio('./assets/audio/boo.mp3').play()
   counter1 = 0
}
```

### Randomising and adding new rounds
Using a function with an argument of `arr` and a for loop inside the function to jumble up the position.

```javascript
function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--){
    var shuffle = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[shuffle]] = [arr[shuffle], arr[i]]
  }
  return arr
}
```

Adding new rounds.

```javascript
function addTurn(){
    instructorMoves = instructorMoves.concat(instructorMoves)
    randSequence = shuffleArray(instructorMoves)
    return randSequence;
  }
```

## Challenges


* Making the music instructor move together with the number sequence.
 <img src="/assets/images/instructor_1.png" height ="50"><img src="/assets/images/instructor_2.png" height ="50"><img src="/assets/images/instructor_3.png" height ="50"><img src="/assets/images/instructor_4.png" height ="50">    

* Matching with the randomised array and comparing which player finishes the pattern first.

* Making the image of instructor's moves appear together with the pattern on the screen.

## Possible future improvements


1. Adding more rounds

2. Increase the difficulty by hiding the number patterns in some rounds to let the players just follow the dance pattern.

3. More keys to control on more dance moves other than '1,2,3,4'

## Credit

TA - Alex & Shumin

Google

Stackoverflow

MDN
