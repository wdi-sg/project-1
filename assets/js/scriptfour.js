
// to check if function is working
//var grid = [[1,undefined,2,3],[4,5,undefined,6],[7,8,9,undefined],[10,11,12,13]]
var grid =[[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined]]
//var grid = [['straw','straw','straw','s'],['choco','choco','choco','cho'],['melon','melon','melon','mm'],['straw','straw','straw','e']]
var total = 0
var timer = 100
//var elements = ['straw','choco','melon']
var gridNo = 4

var $box = $('.box')
var $scoreBox = $('.scoreTotal')

$(function(){
  var click = true
  var toBeDelete =[]
  var readyMove = false
  var toSwitchTwo = []
  setGrid()
  //total = 0
  gameTimer



// timer function
  var gameTimer = setInterval(decreaseTime, 1000)
  //restart() // to restart each games
  // generateElements() // to generate elements if the value is null
  // console.log(grid)

  function decreaseTime(){
    if (timer>0){
      timer-= 1
      $('.timer').text(`${timer}`)
    }
  }
////




  // console.log(grid)
  // console.log(total)



  // if(checkGrid()){
  toSwitchTwo = []
  // if(timer>= 0){
  //   var $newDiv = $('<div class="endtitle">')
  //   $newDiv.append(total)
  //   $newDiv.css({'width':'470px','height':'550px'})
  // }
  $box.on('click', function(){
    //click = false
    $(this).css({'border':"2px solid red"})
    var idArr = this.id.split('')
    toSwitchTwo.push(idArr)
    //console.log(toSwitchTwo)
    console.log(grid)
    if(checkAvailableMoveFour()){
      console.log('true')
    }
    else {
      console.log('false')
    }

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
          //console.log(tempValue)
          $(`#box${iValueOne}${jValueOne}`).removeClass()
          $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
          $(`#box${iValueTwo}${jValueTwo}`).removeClass()
          $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
          // console.log(`box c${grid[iValueOne][jValueOne]}`)
          // console.log(`box c${grid[iValueOne][jValueOne]}`)
          //toSwitchTwo = []
          setTimeout(checkGrid(),1000)
        }
        else if (jValueOne === jValueTwo && (iValueTwo === iValueOne +1 || iValueTwo === iValueOne -1)){
          var tempValue = grid[iValueOne][jValueOne]
          grid[iValueOne][jValueOne] = grid[iValueTwo][jValueTwo]
          grid[iValueTwo][jValueTwo] = tempValue
          //  console.log(tempValue)
          $(`#box${iValueOne}${jValueOne}`).removeClass()
          $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
          $(`#box${iValueTwo}${jValueTwo}`).removeClass()
          $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)
          setTimeout(checkGrid(),1000)
        }
        else {
          alert('invalid move')

        }
      },100)

    }
    // if(checkGrid()){
    //   setTimeout(removeElements,2000)
    // }
    // if(!checkGrid()){
    //   alert('invalid moves')
    // }

  })





    //allow player to move and select and move two elements
  // }


//// restart function
  function restart(){
    grid =[[undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined]]
    generateElements()
    total = 0
    timer = 300
  }
  function setGrid(){
    totalBefore = total
    console.log(total)
    console.log('setgrid')
    grid =[[undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined]]
    removeClassBox()
    generateElements()
    setTimeout(function(){
      total = totalBefore
      console.log(total)
      $scoreBox.text(`${total}`)
    },3000) // consider shorter time frame

  }
  // reset grid should happen if noMoreMoves is true
/// generate element function
  function generateElements(){
    /// to generate the elements
    /// run two for loop to check
    for (var i = 0; i< gridNo;i++){
      for(var j = 0; j<gridNo;j++){
        if (grid[i][j] === undefined){
          var elementValue = Math.ceil(Math.random()*4)
          var $oneBox = $(`#box${i}${j}`)
          $oneBox.addClass(`c${elementValue}`)
          grid[i][j] = elementValue
          continue
          //console.log(elementValue)
          /// using .addClass(elementValue) to link visual
        }
      }
    }
    setTimeout(checkGrid(),700)
  }
  // function checkingDone(){
  //   if(checkGrid()){
  //     removeElements()
  //   }
  // }
// check grid function
  function checkGrid(){

    // to check all possible condition // to include the match of 5 too
    // try using 2 for loop
    /// to check if is match of 4
    /// checking backend (row by row) visual column by column
    for (var i = 0; i<gridNo; i++){
      for (var j = 0; j< (gridNo/2);j++){
        if(grid[i][j] && grid[i][j+1] && grid[i][j+2]
          && grid[i][j] === grid[i][j+1]&& grid[i][j]===grid[i][j+2]){
            //alert('found')
            //if(grid[i][j] === grid[i+1][j])
            // if(j+3<=gridNo-1 && grid[i][j]===grid[i][j+3]){// to check if there is value
            //   toBeDelete.push(`${i}${j+3}`)
            // }
          //total += 10
          toBeDelete.push(`${i}${j}`)
          toBeDelete.push(`${i}${j+1}`)
          toBeDelete.push(`${i}${j+2}`)
          //grid[i][j] = undefined
          /// consider remove class here also
          // /// using id(e.g b12) $(`#b${i}${j}`).removeClass
          // // if using id - consider to use id for i j (get the ide number, split to get i and j)
          //grid[i][j+1] = undefined
          //grid[i][j+2] = undefined

          // $(`#box${i}${j}`).effect("bounce", { times: 3 }, 300 )
          // $(`#box${i}${j+1}`).effect("bounce", { times: 3 }, 300 )
          // $(`#box${i}${j+2}`).effect("bounce", { times: 3 }, 300)
        }
      }
      //console.log(total)// to check
    } // end of first 2 for loop
    // backend column by column visual row by row
    for (var j = 0;j<gridNo;j++){
      for (var i = 0; i<(gridNo/2);i++){
        if(grid[i][j] && grid[i+1][j] && grid[i+2][j] &&
          grid[i][j] === grid[i+1][j]&& grid[i][j] === grid[i+2][j]){
            //alert('found')
            //
            // if(i+3<=gridNo-1 &&grid[i][j] === grid[(i+3)][j]){
            //   //total +=10
            //   toBeDelete.push(`${i+3}${j}`)
            //   // grid[i+3][j]= undefined
            // }
          //total += 10
          toBeDelete.push(`${i}${j}`)
          toBeDelete.push(`${i+1}${j}`)
          toBeDelete.push(`${i+2}${j}`)
          // grid[i][j] = undefined
          // grid[i+1][j] = undefined
          // grid[i+2][j] = undefined
        }
      }
    }
    if (toBeDelete.length>0){
      removeElements()
      //return true
    }
    else {
      // if(checkAvailableMove()){
      //   console.log('true')
      // }
      // if(!checkAvailableMove()){
      //   console.log('false')
      // }
      if (!checkAvailableMove()){
        alert('no more moves')
        setGrid()
      }
      // readyMove = true
      else return false
    }
  }

  function removeElements(){
    var toBeDeleteTwo =[]
    currentTotal=total
    console.log(toBeDelete)
    toBeDelete.forEach(function(gridId) {
      if (!(toBeDeleteTwo.includes(gridId))){
        toBeDeleteTwo.push(gridId)
      }
      // else continue
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
        //console.log(`${idValue}type of${typeof(idValue)}`)
        //console.log(`${typeof(idValue[0])}${idValue[0]}: ${typeof(idValue[1])}${idValue[1]}`)
        iValueHere = Number(idValue[0])
        jValueHere = Number(idValue[1])
        //console.log(`${typeof(iValueHere)}${iValueHere}: ${typeof(jValueHere)}${jValueHere}`)
        total += 5
        console.log(`#box${iValueHere}${jValueHere}`)
        grid[iValueHere][jValueHere] = undefined
        $(`#box${iValueHere}${jValueHere}`).removeClass()
        $(`#box${iValueHere}${jValueHere}`).addClass('box')

      }
      console.log(toBeDeleteTwo)
      if(total > currentTotal){
        setTimeout(pushDown,250)
        $scoreBox.text(`${total}`)
        toBeDelete =[]
        toBeDeleteTwo =[]
      }
      // toBeDelete =[]
      // toBeDeleteTwo =[]
    },400)

  }
  function removeClassBox(){
    for (var i = 0; i< gridNo; i++){
      for(var j=0; j<gridNo ;j++){
        if (grid[i][j] === undefined){
          $oneBox = $(`#box${i}${j}`)
          $(`#box${i}${j}`).removeClass().addClass('box')
        }
      }
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
            else continue
          }
          continue
        }
        else continue
      }
    }
    //delay = 2000
   setTimeout(generateElements,500)
  }

  // function noMoreMoves(){
  //   //   // to detect if no moves
  // }

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

    for (var i = 0; i < gridNo-1; i++) {
      for (var j = 0; j < gridNo-1; j++) {
        if(grid[i][j]===grid[i][j+1]){
          if (((j-2)>=0) &&grid[i][j-2]===grid[i][j]){
            //console.log('case 1')
            //console.log(`${i}${j}:${i}${(j-2>=0)}${j-2}`)
            return true
          }

          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j]){
            // console.log('case 2')
            // console.log(`${i}${j}:${i-1}${j-1}`)
            return true
          }
          if((j-1)>=0&& (i+1)<gridNo &&grid[i+1][j-1] === grid[i][j]){
            // console.log('case 3')
            // console.log(`${i}${j}:${i+1}${j-1}`)
            return true
          }
          if ((i-1)>=0&&(j+2)<gridNo &&grid[i-1][j+2]=== grid[i][j]){
            // console.log('case 4')
            // console.log(`${i}${j}:${i-1}${j+2}`)
            return true
          }
          if ((i+1)<gridNo && (j+2)<gridNo && grid[i+1][j+2]===grid[i][j]){
            // console.log('case 5')
            // console.log(`${i}${j}:${i+1}${j+2}`)
            return true
          }
          if ((j+3)<gridNo && grid[i][j+3]===grid[i][j]){
            // console.log('case 6')
            // console.log(`${i}${j}:${i}${j+3}`)
            return true
          }
          else continue

        }
        else continue
      }
    }

  }

  function checkAvailableMoveTwo (){

    for (var j = 0; j < gridNo-1; j++) {
      for (var i = 0; i < gridNo-1; i++) {
        if(grid[i][j]===grid[i+1][j]){
          if (((i-2)>=0) &&grid[i-2][j]===grid[i][j]){
            // console.log('case 1')
            // console.log(`${i}${j}:${i}${(i-2>=0)}${j}`)
            return true
          }

          if ((i-1)>=0 && (j-1)>=0 &&grid[i-1][j-1]===grid[i][j]){
            // console.log('case 2')
            // console.log(`${i}${j}:${i-1}${j-1}`)
            return true
          }
          if((i-1)>=0&& (j+1)<gridNo &&grid[i-1][j+1] === grid[i][j]){
            // console.log('case 3')
            // console.log(`${i}${j}:${i+1}${j-1}`)
            return true
          }
          if ((i+2)< gridNo &&(j+1)<gridNo &&grid[i+2][j+1]=== grid[i][j]){
            // console.log('case 4')
            // console.log(`${i}${j}:${i+2}${j+1}`)
            return true
          }
          if ((i+3)<gridNo && grid[i+3][j]===grid[i][j]){
            // console.log('case 5')
            // console.log(`${i}${j}:${i+3}${j}`)
            return true
          }
          if ((i+2)<gridNo&& j-1>=0 && grid[i+2][j-1]===grid[i][j]){
            // console.log('case 6')
            // console.log(`${i}${j}:${i+2}${j-1}`)
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
            console.log('case one 1')
            return true
          }
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]){
            console.log('case Two 2')
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
            console.log('case one 1')
            return true
          }
          else if(i+1<gridNo&& j+1<gridNo&&grid[i+1][j+1]=== grid[i][j]){
            console.log('case Two 2')
            return true
          }
        }
      }
    }
  }













})
