// var cWord = "xylol";
// 		  if (Word_List.isInList(cWord)) {
// 		      document.write("<br>" + cWord + " was there!");
// 		  } else {
// 		      document.write("<br>" + cWord + " was NOT there...");
// 		  }
//
// 		  //Test that a word is NOT in the list
// 		  var cWord = "ab234ol";
// 		  if (Word_List.isInList(cWord)) {
// 		      document.write("<br>" + cWord + " was there!");
// 		  } else {
// 		      document.write("<br>" + cWord + " was NOT there...");
// 		  }
//
// 		  //Test the random word generator with random letter counts
// 		  for (var x = 0; x < 5; x++) {
// 		      document.write("<br>Random word: " + Word_List.getRandomWord());
// 		  }

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var storedArr = []
var randomStr = []

//Function random number generator
function randNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(randNum (1,26))

//Function generates random strings
function randStr(){
  for(var i=0; i<10; i++){
    var letter= alphabet[randNum(1, 26)]
    randomStr.push(letter)
  }
  return randomStr.join('')
}
//console.log(randStr())

//Function checks whether user input is contained in string
function checkInputStr(input){
  var inputSort = input.split('').sort().join('')
  var randStrSort = randomStr.sort().join('')
  if (randStrSort().includes(inputSort)){
    return true
  } return false
  }

//Function checks if word is contained in stored array
function checkStoredArr(input){
  return storedArr.includes(input)
  }


//Function checks if word is in dictionary
function dictCheck(input){
  if(Word_List.isInList(input)){
    return true
  }return false
}

//Function accepts word and stores in array
function store(input){
  if(checkInputStr(input) && !checkStoredArr(input) && dictCheck(input)){
    storedArr.push(input)
  }
}

//Function timer


//Function score


//gameplay on click
function clickStart(){
  randStr()//on click start button
}

function enterWord(){
  store(input)//on press enter
}

//Function restart
function restart(){
  storedArr = []
  randStr = []
  randStr()
}


//1 Understand code wordList.
//2 Layout wireframing.
//3 test gameplay.
//4 study and improve word gen algorithm.

//Additional: combo scoring system, colorchange combo, music, multilevels
