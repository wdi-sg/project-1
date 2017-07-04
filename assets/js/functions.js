var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var weight = [84966, 20720, 45388, 33844, 111607, 18121, 24705, 30034, 75448, 1965, 11016, 54893, 30129, 66544, 71635, 31671, 1962, 75809, 57351, 69509, 36308, 10074, 12899, 2902, 17779, 2722]

var storedArr = []
var randomStr = []



function alphabetLogic() {


  function randomLoop (weight, arr) {
    var n = Math.random() * 1000000, amt = 0
    for (var i = 0; i < weight.length; i++) {
      amt += weight[i]
      if (n < amt) {
        // if(n<weight[i]){
        return arr[i]
      }
    }
  }

  function randStr () {
    if (randomStr.length === 0) {
      for (var i = 0; i < 8; i++) {
        var letter = randomLoop(weight, alphabet)
        randomStr.push(letter)
      }
      return randomStr
    }
  }

  // Function checks whether user input is contained in string
  function checkInputStr (arrSup, arrSub) {
    arrSup.sort()
    arrSub.sort()
    var i, j
    for (i = 0, j = 0; i < arrSup.length && j < arrSub.length;) {
      if (arrSup[i] < arrSub[j]) {
        ++i
      } else if (arrSup[i] == arrSub[j]) {
        ++i; ++j
      } else {
        // sub[j] not in sup, so sub not subbag
        return false
      }
    }
    // make sure there are no elements left in sub
    return j == arrSub.length
  }

  // Function checks if word is contained in stored array
  function checkStoredArr (input) {
    return storedArr.includes(input)
  }

  // Function checks if word is in dictionary
  function dictCheck (input) {
    return (Word_List.isInList(input))
  }

  // Function accepts word and stores in array
  function store (input) {
    if (checkInputStr(input) && !checkStoredArr(input) && dictCheck(input)) {
      storedArr.push(input)
    }
    console.log(storedArr)
    return storedArr
  }

  return {
    randomLoop: randomLoop,
    randStr: randStr,
    checkInputStr: checkInputStr,
    checkStoredArr: checkStoredArr,
    dictCheck: dictCheck,
    store: store,
  }
}


// Function timer

// Function score

// function anagram

// 1 Understand code wordList.
// 2 timer
// 3 Layout wireframing.
// 4 test gameplay.
// 5 study and improve word gen algorithm.

// Additional: combo scoring system, colorchange combo, music, multilevels
