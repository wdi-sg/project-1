
// to check if function is working
//var grid = [[1,undefined,2,3],[4,5,undefined,6],[7,8,9,undefined],[10,11,12,13]]
var grid =[[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined]]
//var grid = [['straw','straw','straw','s'],['choco','choco','choco','cho'],['melon','melon','melon','mm'],['straw','straw','straw','e']]
var total = 0
var timer = 100
//var elements = ['straw','choco','melon']
var gridNo = 5

var $box = $('.box')
var $scoreBox = $('.scoreTotal')
var $gridbox = $('gridbox')
var toBeDelete = []
var toSwitchTwo = []
var $character = $('.character')

$(function(){

  var gameTimer = 0
  var turn = true
  var gameOver=false
  var gameOverCheck = 0
  $start=$('#start')
  $start.on('click',()=>{
    if (turn){

      $('.overText').remove()
      $('.totalScore').remove()
      $('.characterFinal').remove()
      $character.css('background-image','url("./assets/css/img/yellowteeth.png")')
      gameOver=false
      removeClassBox()
      addClassBox()
      setGrid()
      gameTimer = setInterval(()=>{
        timer-= 1
        $('.timer').text(`${timer}`)

        turn = false
      }, 1000)
    }
    gameOverCheck = setInterval(()=>{
      if (timer <= 0){
        gameOver = true
        clearInterval(gameTimer)
        endGame()
        turn = true
        timer = 100
        clearInterval(gameOverCheck)
      }
    },1000)
  })

  $box.on('click', function(){
    //click = false
    $(this).css({'border':"2px solid red"})
    var idArr = this.id.split('')
    toSwitchTwo.push(idArr)
    if (toSwitchTwo.length ===2){
      setTimeout(function(){
        var iValueOne = Number(toSwitchTwo[0][3])
        var jValueOne = Number(toSwitchTwo[0][4])
        var iValueTwo = Number(toSwitchTwo[1][3])
        var jValueTwo = Number(toSwitchTwo[1][4])
        $(`#box${iValueOne}${jValueOne}`).css({'border':"0"})
        $(`#box${iValueTwo}${jValueTwo}`).css({'border':"0"})
        toSwitchTwo = []
        if (iValueOne === iValueTwo && (jValueTwo === jValueOne +1 || jValueTwo === jValueOne -1)){
          var tempValue = grid[iValueOne][jValueOne]
          grid[iValueOne][jValueOne] = grid[iValueTwo][jValueTwo]
          grid[iValueTwo][jValueTwo] = tempValue
          $(`#box${iValueOne}${jValueOne}`).removeClass()
          $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
          $(`#box${iValueTwo}${jValueTwo}`).removeClass()
          $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)

          //toSwitchTwo = []
          if (checkingMatch()){
            setTimeout(checkGrid(),1000)
          }
          else{
            setTimeout(()=>{
              var tempValueTwo = grid[iValueTwo][jValueTwo]
              grid[iValueTwo][jValueTwo] = grid[iValueOne][jValueOne]
              grid[iValueOne][jValueOne] = tempValueTwo
              $(`#box${iValueOne}${jValueOne}`).removeClass()
              $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
              $(`#box${iValueTwo}${jValueTwo}`).removeClass()
              $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
            },250)
          }
        }
        else if (jValueOne === jValueTwo && (iValueTwo === iValueOne +1 || iValueTwo === iValueOne -1)){
          var tempValue = grid[iValueOne][jValueOne]
          grid[iValueOne][jValueOne] = grid[iValueTwo][jValueTwo]
          grid[iValueTwo][jValueTwo] = tempValue
          $(`#box${iValueOne}${jValueOne}`).removeClass()
          $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
          $(`#box${iValueTwo}${jValueTwo}`).removeClass()
          $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
          if (checkingMatch()){
            setTimeout(checkGrid(),1000)
          }
          else{
            setTimeout(()=>{
              var tempValueTwo = grid[iValueTwo][jValueTwo]
              grid[iValueTwo][jValueTwo] = grid[iValueOne][jValueOne]
              grid[iValueOne][jValueOne] = tempValueTwo
              $(`#box${iValueOne}${jValueOne}`).removeClass()
              $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
              $(`#box${iValueTwo}${jValueTwo}`).removeClass()
              $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
            },250)
          }

        }
        else {
          alert('invalid move')
        }
      },100)
    }
  })
  function endGame(){
    grid =[[undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined]]
    removeClassBox()
    //addClassBox()
    var characterImage = $character.css('background-image')
    $gameOverText = $('<h2 class ="overText">')
    $gameOverText.text("Time's Up")
    $totalScore = $('<h2 class="totalScore">')
    $totalScore.text(`Total Score: ${total}`)
    $characterFinal = $('<div class="characterFinal">')
    //characterImage= characterImage.replace('url("http://127.0.0.1:3000/','') // to test locally
    characterImage= characterImage.replace('url("https://siya-ng.github.io/project-1','.')
    characterImage = characterImage.replace('")','')
    $charImage = $(`<img src=${characterImage} />`)
    // $characterFinal.css("background-image",`"url=('${characterImage}')"`)
    $characterFinal.prepend($charImage)
    $('.gridbox').append($gameOverText)
    $('.gridbox').append($totalScore)
    $('.gridbox').append($characterFinal)
    total = 0
    turn = true
  }

  function setGrid(){

    totalBefore = total
    grid =[[undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined]]
    removeClassBox()
    addClassBox()
    generateElements()
    setTimeout(function(){
      total = totalBefore
      $scoreBox.text(`${total}`)
    },2000) // consider shorter time frame

  }
  // reset grid should happen if noavailablemove is true
/// generate element function
  function generateElements(){
    if(!gameOver){
      /// to generate the elements
      /// run two for loop to check
      for (var i = 0; i< gridNo;i++){
        for(var j = 0; j<gridNo;j++){
          if (grid[i][j] === undefined){
            var elementValue = Math.ceil(Math.random()*5)
            var $oneBox = $(`#box${i}${j}`)
            $oneBox.addClass(`c${elementValue}`)
            grid[i][j] = elementValue
            continue
          }
        }
      }
      setTimeout(checkGrid(),300)
    }
  }
  function checkingMatch (){
    // to check all possible condition
    // try using 2 for loop
    /// checking backend (row by row) visual column by column
    for (var i = 0; i<gridNo; i++){
      for (var j = 0; j< (gridNo/2);j++){
        if(grid[i][j] && grid[i][j+1] && grid[i][j+2]
          && grid[i][j] === grid[i][j+1]&& grid[i][j]===grid[i][j+2]){
            toBeDelete.push(`${i}${j}`)
            toBeDelete.push(`${i}${j+1}`)
            toBeDelete.push(`${i}${j+2}`)
          }
        }
      } // end of first 2 for loop
      // backend column by column visual row by row
      for (var j = 0;j<gridNo;j++){
        for (var i = 0; i<(gridNo/2);i++){
          if(grid[i][j] && grid[i+1][j] && grid[i+2][j] &&
            grid[i][j] === grid[i+1][j]&& grid[i][j] === grid[i+2][j]){
              toBeDelete.push(`${i}${j}`)
              toBeDelete.push(`${i+1}${j}`)
              toBeDelete.push(`${i+2}${j}`)
            }
          }
        }
        if (toBeDelete.length>0){
          return true
        }
      else return false
  }
  function checkGrid(){
    if (checkingMatch()&&!gameOver){
      removeElements()
    }
    else {
      if (!checkAvailableMove()){
        alert('No more moves. Resetting the grid')
        setGrid()
      }
      else return false
    }
  }
  function removeElements(){
    var toBeDeleteTwo =[]
    currentTotal=total
    toBeDelete.forEach(function(gridId) {
      if (!(toBeDeleteTwo.includes(gridId))){
        toBeDeleteTwo.push(gridId)
      }
    })
    for (var h = 0; h < toBeDeleteTwo.length; h++) {
      idValue = toBeDeleteTwo[h].split('')
      iValueHere = Number(idValue[0])
      jValueHere = Number(idValue[1])
      $(`#box${iValueHere}${jValueHere}`).effect("bounce", { times: 3 }, 150 )
    }
    setTimeout(function(){
      for (var k = 0; k < toBeDeleteTwo.length; k++) {
        idValue = toBeDeleteTwo[k].split('')
        iValueHere = Number(idValue[0])
        jValueHere = Number(idValue[1])
        total += 5
        grid[iValueHere][jValueHere] = undefined
        $(`#box${iValueHere}${jValueHere}`).removeClass()
        $(`#box${iValueHere}${jValueHere}`).addClass('box')
      }
      if(total > currentTotal&&!gameOver){
        setTimeout(pushDown,250)
        $scoreBox.text(`${total}`)
        toBeDelete =[]
        toBeDeleteTwo =[]
        if(total>700){
          $character.css("background-image","url('./assets/css/img/toothfairy.png')")
        }
        else if (total>500){
          $character.css("background-image","url('./assets/css/img/pinkteeth.png')")

        }
        else if(total>250){
          $character.css('background-image','url("./assets/css/img/whiteteeth.png")')
        }
        else $character.css('background-image','url("./assets/css/img/yellowteeth.png")')

      }
    },300)
  }
  function pushDown(){
    for (var i = 0; i< gridNo; i++){
      for(var k = gridNo-1; k >= 0 ;k--){
        if (grid[i][k] === undefined){
          $oneBox = $(`#box${i}${k}`)
          if(k > 0){
            if (grid[i][k-1]!== undefined||grid[i][k-1]){
              grid[i][k] = grid[i][k-1]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-1] = undefined
              $(`#box${i}${k-1}`).removeClass().addClass('box')
              continue
            }
            else if(grid[i][k-2]!== undefined||grid[i][k-2]){
              grid[i][k] = grid[i][k-2]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-2] = undefined
              $(`#box${i}${k-2}`).removeClass().addClass('box')
              continue
            }
            else if(grid[i][k-3]!== undefined || grid[i][k-3]){
              grid[i][k] = grid[i][k-3]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-3] = undefined
              $(`#box${i}${k-3}`).removeClass().addClass('box')
              continue
            }
            else if (grid[i][k-4]!== undefined || grid[i][k-4]){
              grid[i][k] = grid[i][k-4]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-4] = undefined
              $(`#box${i}${k-4}`).removeClass().addClass('box')
              continue
            }
            else continue
          }
          continue
        }
        else continue
      }
    }
   setTimeout(generateElements,300)
  }
  function removeClassBox(){
    for (var i = 0; i< gridNo; i++){
      for(var j=0; j<gridNo ;j++){
        if (grid[i][j] === undefined){
          $oneBox = $(`#box${i}${j}`)
          $(`#box${i}${j}`).removeClass()
        }
      }
    }
  }
  function addClassBox (){
    for (var i = 0; i< gridNo; i++){
      for(var j=0; j<gridNo ;j++){
        if (grid[i][j] === undefined){
          $oneBox = $(`#box${i}${j}`)
          $(`#box${i}${j}`).addClass('box')
        }
      }
    }
  }

  function checkAvailableMove(){
    if (checkAvailableMoveOne ()){
      return true
    }
    else if (checkAvailableMoveTwo ()){
      return true
    }
    else if(checkAvailableMoveThree()){
      return true
    }
    else if(checkAvailableMoveFour()){
      return true
    }
    else return false
  }
  /// function to check available move by combi 1 column, combi 1 row
  // combi 2 column combi 2 row
  function checkAvailableMoveOne (){

    for (var i = 0; i < gridNo; i++) {
      for (var j = 0; j < gridNo-1; j++) {
        if(grid[i][j]===grid[i][j+1]){
          if (((j-2)>=0) &&grid[i][j-2]===grid[i][j]){
            return true
          }
          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j]){
            return true
          }
          if((j-1)>=0&& (i+1)<gridNo &&grid[i+1][j-1] === grid[i][j]){
            return true
          }
          if ((i-1)>=0&&(j+2)<gridNo &&grid[i-1][j+2]=== grid[i][j]){
            return true
          }
          if ((i+1)<gridNo && (j+2)<gridNo && grid[i+1][j+2]===grid[i][j]){
            return true
          }
          if ((j+3)<gridNo && grid[i][j+3]===grid[i][j]){
            return true
          }
          else continue
        }
        else continue
      }
    }
  }
  function checkAvailableMoveTwo (){
    for (var j = 0; j < gridNo; j++) {
      for (var i = 0; i < gridNo-1; i++) {
        if(grid[i][j]===grid[i+1][j]){
          if (((i-2)>=0) &&grid[i-2][j]===grid[i][j]){
            return true
          }
          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j]){
            return true
          }
          if((i-1)>=0&& (j+1)<gridNo &&grid[i-1][j+1] === grid[i][j]){
            return true
          }
          if ((i+2)< gridNo &&(j+1)<gridNo &&grid[i+2][j+1]=== grid[i][j]){
            return true
          }
          if ((i+3)<gridNo && grid[i+3][j]===grid[i][j]){
            return true
          }
          if ((i+2)<gridNo&& j-1>=0 && grid[i+2][j-1]===grid[i][j]){
            return true
          }
          else continue
        }
        else continue
      }
    }
  }
  function checkAvailableMoveThree(){
    for (var i = 0; i < gridNo; i++) {
      for (var j = 0; j+2 < gridNo; j++) {
        if(grid[i][j]===grid[i][j+2]){
          if(i-1>=0 && j+1<gridNo && grid[i-1][j+1]===grid[i][j]){
            return true
          }
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]){
            return true
          }
        }
      }
    }
  }
  function checkAvailableMoveFour(){
    for (var j = 0; j < gridNo; j++) {
      for (var i = 0; i+2 < gridNo; i++)  {
        if(grid[i][j]===grid[i+2][j]){
          if(j-1>=0 && i+1<gridNo && grid[i+1][j-1]===grid[i][j]){
            return true
          }
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]){
            return true
          }
        }
      }
    }
  }

})
