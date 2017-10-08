var grid =[]
var total = 0
var timer = 100
var gridNo = 6
var $box = $('.box')
var $scoreBox = $('.scoreTotal')
var $gridbox = $('.gridbox')
var toBeDelete = []
var toSwitchTwo = []
var $character = $('.character')
var $start = $('#start')
var toBeDeleteFinal =[]
var $instructionBtn = $('.instructionBtn')
var $instruction = $('.instruction')
var iValueOne = 0
var jValueOne = 0
var iValueTwo = 0
var jValueTwo = 0
var $oneBox =$('#box')

$(function(){
  var gameTimer = 0
  var settingMode = true
  var gameOver=false
  var gameOverCheck = 0
  $instruction.hide()
  createId()
  $gridbox.css({"height":`${gridNo*105+20}px`,"width":`${gridNo*105+20}px`})
  $instructionBtn.on('click',function(){
    $instruction.slideToggle(100,function(){
    })
  })
  $start.on('click',()=>{

    if (settingMode){
      $('.overText').remove()
      $('.totalScore').remove()
      $('.characterFinal').remove()
      $character.css('background-image','url("./assets/img/yellowteeth.png")')
      gameOver = false
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
  function createId (){
    for (var i = 0; i < gridNo; i++) {
      for (var j = 0; j < gridNo; j++) {
        $div = $(`<div id="box${i}${j}">`)
        $gridbox.append($div)
      }
    }
  }
  function noAvailableMove  (){
    $gridbox.css({"filter": "grayscale(1)"})
    $noMove = $('<div class="noMove">')
    $noMoveTextOne = $('<h2 class="noMoveText">No more moves.</h3>')
    $noMoveTextTwo = $('<h2 class="noMoveText">Resetting the grid</h3>')
    $noMove.append($noMoveTextOne)
    $noMove.append($noMoveTextTwo)
    $gridbox.append($noMove)
    settingMode = true
    setTimeout(function(){
      $noMove.remove()
      $gridbox.css({"filter": "none"})
      removeSetting()
      setGrid()
    },1200)
  }
  function endGame(){
    removeSetting()
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
  $gridbox.on('click', '.box' ,selectBox)
  function selectBox (){
    console.log(grid)
    $(this).css({'border':"2px solid red"})
    var idArr = this.id.split('')
    toSwitchTwo.push(idArr)
    if (toSwitchTwo.length ===2){
      setTimeout(function(){
        iValueOne = Number(toSwitchTwo[0][3])
        jValueOne = Number(toSwitchTwo[0][4])
        iValueTwo = Number(toSwitchTwo[1][3])
        jValueTwo = Number(toSwitchTwo[1][4])
        $(`#box${iValueOne}${jValueOne}`).css({'border':"0"})
        $(`#box${iValueTwo}${jValueTwo}`).css({'border':"0"})
        toSwitchTwo = []
        if (iValueOne === iValueTwo && (jValueTwo === jValueOne +1 || jValueTwo === jValueOne -1)){
          switchingTwo()
        }
        else if (jValueOne === jValueTwo && (iValueTwo === iValueOne +1 || iValueTwo === iValueOne -1)){
          switchingTwo()
        }
        else {
          $(`#box${iValueOne}${jValueOne}`).effect("bounce", { times: 3 }, 150 )
          $(`#box${iValueTwo}${jValueTwo}`).effect("bounce", { times: 3 }, 150 )
        }
      },100)
    }
  }
  function setGrid(){
    totalBefore = total
    grid =[[undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined]]
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
            var elementValue = Math.ceil(Math.random()*6)
            $oneBox = $(`#box${i}${j}`)
            $(`#box${i}${j}`).addClass('box')
            $oneBox.addClass(`c${elementValue}`)
            grid[i][j] = elementValue
          }
        }
      }
      if(settingMode) checkGrid()
      else setTimeout(checkGrid,250)
    }
  }
  function switchingTwo(){
    var tempValue = grid[iValueOne][jValueOne]
    grid[iValueOne][jValueOne] = grid[iValueTwo][jValueTwo]
    grid[iValueTwo][jValueTwo] = tempValue
    $(`#box${iValueOne}${jValueOne}`).removeClass()
    $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
    $(`#box${iValueTwo}${jValueTwo}`).removeClass()
    $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
    if (checkingMatch()){
      setTimeout(checkGrid(),300)
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
  function checkingMatch (){
    /// (row by row)
    for (var i = 0; i<gridNo; i++){
      for (var j = 0; j< ((gridNo+1)/2);j++){
        if(grid[i][j] && grid[i][j+1] && grid[i][j+2]
          && grid[i][j] === grid[i][j+1]&& grid[i][j]===grid[i][j+2]){
            toBeDelete.push(`${i}${j}`)
            toBeDelete.push(`${i}${j+1}`)
            toBeDelete.push(`${i}${j+2}`)
          }
        }
      }
      // column by column
      for (var j = 0;j<gridNo;j++){
        for (var i = 0; i<((gridNo+1)/2);i++){
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
        $gridbox.children().effect("bounce", {times:8}, 700)
        noAvailableMove()
      }
    }
  }
  function finaliseRemoveList(){
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
    currentTotal=total
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
      if(total>700) $character.css("background-image","url('./assets/img/toothfairy.png')")
      else if (total>500) $character.css("background-image","url('./assets/img/pinkteeth.png')")
      else if(total>250) $character.css('background-image','url("./assets/img/whiteteeth.png")')
      else $character.css('background-image','url("./assets/img/yellowteeth.png")')
      if (settingMode) pushDown()
      else setTimeout(pushDown,200)
    }
  }
  function pushDown(){
    for (var j = 0; j< gridNo; j++){
      for(var i = gridNo-1; i > 0 ;i--){
        if (grid[i][j]=== undefined){
          $oneBox = $(`#box${i}${j}`)
          for (var k = i-1; k >= 0 ;k--){
            if(grid[k][j]!==undefined || grid[k][j]){
              grid[i][j] = grid[k][j]
              $oneBox.addClass(`c${grid[i][j]}`)
              grid[k][j] = undefined
              $(`#box${k}${j}`).removeClass().addClass('box')
              break
            }
          }
        }
      }
    }
    if(settingMode) generateElements()
    else setTimeout(generateElements,250)
  }
  function removeSetting(){
    for (var i = 0; i< gridNo; i++){
      for(var j=0; j<gridNo ;j++){
        if (grid[i][j] === undefined || grid[i][j]){
          grid[i][j]= undefined
          $oneBox = $(`#box${i}${j}`)
          $(`#box${i}${j}`).removeClass()
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
