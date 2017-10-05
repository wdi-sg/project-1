var grid =[[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined,undefined]]
var total = 0
var timer = 100
var gridNo = 5
var $box = $('.box')
var $scoreBox = $('.scoreTotal')
var $gridbox = $('gridbox')
var toBeDelete = []
var toSwitchTwo = []
var $character = $('.character')
var $start = $('#start')
var toBeDeleteFinal =[]
$(function(){
  var gameTimer = 0
  var settingMode = true
  var gameOver=false
  var gameOverCheck = 0

  $start.on('click',()=>{
    if (settingMode){
      $('.overText').remove()
      $('.totalScore').remove()
      $('.characterFinal').remove()
      $character.css('background-image','url("./assets/css/img/yellowteeth.png")')
      gameOver = false
      removeClassBox()
      addClassBox()
      setGrid()
      gameTimer = setInterval(()=>{
        timer-= 1
        $('.timer').text(`${timer}`)
        settingMode = false
      }, 1000)
    }
    gameOverCheck = setInterval(()=>{
      if (timer <= 0){
        gameOver = true
        clearInterval(gameTimer)
        endGame()
        settingMode = true
        timer = 100
        clearInterval(gameOverCheck)
      }
    },1000)
  })

  $box.on('click', function(){
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
          if (checkingMatch()){
            setTimeout(checkGrid(),1000)
          }
          else{
            setTimeout(()=>{
              tempValue = grid[iValueTwo][jValueTwo]
              grid[iValueTwo][jValueTwo] = grid[iValueOne][jValueOne]
              grid[iValueOne][jValueOne] = tempValue
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
              tempValue = grid[iValueTwo][jValueTwo]
              grid[iValueTwo][jValueTwo] = grid[iValueOne][jValueOne]
              grid[iValueOne][jValueOne] = tempValue
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

    var characterImage = $character.css('background-image')
    $gameOverText = $('<h2 class ="overText">')
    $gameOverText.text("Time's Up")
    $totalScore = $('<h2 class="totalScore">')
    $totalScore.text(`Total Score : ${total}`)
    $characterFinal = $('<div class="characterFinal">')
    //characterImage= characterImage.replace('url("http://127.0.0.1:3000/','') // to test locally
    characterImage= characterImage.replace('url("https://siya-ng.github.io/project-1','.')
    characterImage = characterImage.replace('")','')
    var $endGameImage = $(`<img src=${characterImage} />`)
    $characterFinal.prepend($endGameImage)
    $('.gridbox').append($gameOverText)
    $('.gridbox').append($totalScore)
    $('.gridbox').append($characterFinal)
    total = 0
    settingMode = true
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
    settingMode = false
    setTimeout(function(){
      total = totalBefore
      $scoreBox.text(`${total}`)
    },50)
  }
  function generateElements(){
    if(!gameOver){
      for (var i = 0; i< gridNo;i++){
        for(var j = 0; j<gridNo;j++){
          if (grid[i][j] === undefined){
            var elementValue = Math.ceil(Math.random()*5)
            var $oneBox = $(`#box${i}${j}`)
            $oneBox.addClass(`c${elementValue}`)
            grid[i][j] = elementValue
          }
        }
      }
      if(settingMode) checkGrid()
      else setTimeout(checkGrid,300)
    }
  }
  function checkingMatch (){
    /// checking data (row by row) visual column by column
    for (var i = 0; i<gridNo; i++){
      for (var j = 0; j< (gridNo/2);j++){
        if(grid[i][j] && grid[i][j+1] && grid[i][j+2]
          && grid[i][j] === grid[i][j+1]&& grid[i][j]===grid[i][j+2]){
            toBeDelete.push(`${i}${j}`)
            toBeDelete.push(`${i}${j+1}`)
            toBeDelete.push(`${i}${j+2}`)
          }
        }
      }
      // data column by column visual row by row
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
      finaliseRemoveList()
    }
    else {
      if (!checkAvailableMove()){
        alert('No more moves. Resetting the grid')
        settingMode = true
        setGrid()
      }
      else return false
    }
  }
  function finaliseRemoveList(){
    currentTotal=total
    toBeDelete.forEach(function(gridId) {
      if (!(toBeDeleteFinal.includes(gridId))){
        toBeDeleteFinal.push(gridId)
      }
    })
    for (var h = 0; h < toBeDeleteFinal.length; h++) {
      idValue = toBeDeleteFinal[h].split('')
      iValueHere = Number(idValue[0])
      jValueHere = Number(idValue[1])
      if (!settingMode) $(`#box${iValueHere}${jValueHere}`).effect("bounce", { times: 3 }, 150 )
    }
    if(settingMode) removeElements()
    else setTimeout(removeElements,300)
  }
  function removeElements(){
    for (var k = 0; k < toBeDeleteFinal.length; k++) {
      idValue = toBeDeleteFinal[k].split('')
      iValueHere = Number(idValue[0])
      jValueHere = Number(idValue[1])
      total += 5
      grid[iValueHere][jValueHere] = undefined
      $(`#box${iValueHere}${jValueHere}`).removeClass()
      $(`#box${iValueHere}${jValueHere}`).addClass('box')
    }
    if(total > currentTotal&& !gameOver){
      $scoreBox.text(`${total}`)
      toBeDelete =[]
      toBeDeleteFinal =[]
      if(total>700) $character.css("background-image","url('./assets/css/img/toothfairy.png')")
      else if (total>500) $character.css("background-image","url('./assets/css/img/pinkteeth.png')")
      else if(total>250) $character.css('background-image','url("./assets/css/img/whiteteeth.png")')
      else $character.css('background-image','url("./assets/css/img/yellowteeth.png")')
      if (settingMode) pushDown()
      else setTimeout(pushDown,200)
    }
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
            }
            else if(grid[i][k-2]!== undefined||grid[i][k-2]){
              grid[i][k] = grid[i][k-2]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-2] = undefined
              $(`#box${i}${k-2}`).removeClass().addClass('box')
            }
            else if(grid[i][k-3]!== undefined || grid[i][k-3]){
              grid[i][k] = grid[i][k-3]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-3] = undefined
              $(`#box${i}${k-3}`).removeClass().addClass('box')
            }
            else if (grid[i][k-4]!== undefined || grid[i][k-4]){
              grid[i][k] = grid[i][k-4]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-4] = undefined
              $(`#box${i}${k-4}`).removeClass().addClass('box')
            }
          }
        }
      }
    }
    if(settingMode) generateElements()
    else setTimeout(generateElements,300)
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
    if (checkAvailableMoveOne ()) return true
    else if (checkAvailableMoveTwo ()) return true
    else if(checkAvailableMoveThree()) return true
    else if(checkAvailableMoveFour()) return true
    else return false
  }
  function checkAvailableMoveOne (){
    for (var i = 0; i < gridNo; i++) {
      for (var j = 0; j < gridNo-1; j++) {
        if(grid[i][j]===grid[i][j+1]){
          if (((j-2)>=0) &&grid[i][j-2]===grid[i][j]) return true
          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j])return true
          if((j-1)>=0&& (i+1)<gridNo &&grid[i+1][j-1] === grid[i][j]) return true
          if ((i-1)>=0&&(j+2)<gridNo &&grid[i-1][j+2]=== grid[i][j]) return true
          if ((i+1)<gridNo && (j+2)<gridNo && grid[i+1][j+2]===grid[i][j]) return true
          if ((j+3)<gridNo && grid[i][j+3]===grid[i][j]) return true
        }
      }
    }
  }
  function checkAvailableMoveTwo (){
    for (var j = 0; j < gridNo; j++) {
      for (var i = 0; i < gridNo-1; i++) {
        if(grid[i][j]===grid[i+1][j]){
          if (((i-2)>=0) &&grid[i-2][j]===grid[i][j])return true
          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j]) return true
          if((i-1)>=0&& (j+1)<gridNo &&grid[i-1][j+1] === grid[i][j]) return true
          if ((i+2)< gridNo &&(j+1)<gridNo &&grid[i+2][j+1]=== grid[i][j]){
            return true
          }
          if ((i+3)<gridNo && grid[i+3][j]===grid[i][j]){
            return true
          }
          if ((i+2)<gridNo&& j-1>=0 && grid[i+2][j-1]===grid[i][j])return true
        }

      }
    }
  }
  function checkAvailableMoveThree(){
    for (var i = 0; i < gridNo; i++) {
      for (var j = 0; j+2 < gridNo; j++) {
        if(grid[i][j]===grid[i][j+2]){
          if(i-1>=0 && j+1<gridNo && grid[i-1][j+1]===grid[i][j]) return true
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]) return true
        }
      }
    }
  }
  function checkAvailableMoveFour(){
    for (var j = 0; j < gridNo; j++) {
      for (var i = 0; i+2 < gridNo; i++)  {
        if(grid[i][j]===grid[i+2][j]){
          if(j-1>=0 && i+1<gridNo && grid[i+1][j-1]===grid[i][j]) return true
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]) return true
        }
      }
    }
  }

})
