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
var weight = [84966, 20720, 45388, 33844, 111607, 18121, 24705, 30034, 75448, 1965, 11016, 54893, 30129, 66544, 71635, 31671, 1962, 75809, 57351, 69509, 36308, 10074, 12899, 2902, 17779, 2722]
var storedArr = []
var randomStr = []
//console.log(weight.length);

function randomLoop(weight,arr){
  var n=Math.random()*1000000,amt=0;
  for(var i=0;i<weight.length;i++){
    amt+=weight[i]; 
    if(n<amt){
    // if(n<weight[i]){
      return arr[i];
    }
  }
}


//Function random number generator
function randNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(randNum (1,26))

function randStr(){
  if (randomStr.length===0){
  for(var i=0; i<10; i++){
    var letter= randomLoop(weight,alphabet)
    randomStr.push(letter)
  }
  return randomStr
}
}


//Function generates random strings
// function randStr(){
//   if (randomStr.length===0){
//   for(var i=0; i<20; i++){
//     var letter= alphabet[randNum(0, 25)]
//     randomStr.push(letter)
//   }
//   return randomStr
// }
// }

//Function checks whether user input is contained in string
function checkInputStr(arrSup, arrSub){
  arrSup.sort();
  arrSub.sort();
    var i, j;
    for (i=0,j=0; i<arrSup.length && j<arrSub.length;) {
        if (arrSup[i] < arrSub[j]) {
            ++i;
        } else if (arrSup[i] == arrSub[j]) {
            ++i; ++j;
        } else {
            // sub[j] not in sup, so sub not subbag
            return false;
        }
    }
    // make sure there are no elements left in sub
    return j == arrSub.length;
  }


//Function checks if word is contained in stored array
function checkStoredArr(input){
  return storedArr.includes(input)
  }


//Function checks if word is in dictionary
function dictCheck(input){
  return(Word_List.isInList(input))
}

//Function accepts word and stores in array
function store(input){
  if(checkInputStr(input) && !checkStoredArr(input) && dictCheck(input)){
    storedArr.push(input)
  }
  console.log(storedArr)
  return storedArr
}

//Function timer


//Function score


//function anagram
// function anagram(input){
//   if()
//   }
// }
// }


//1 Understand code wordList.
//2 Layout wireframing.
//3 test gameplay.
//4 weighted ave
//5 timer
//4 study and improve word gen algorithm.

//Additional: combo scoring system, colorchange combo, music, multilevels
