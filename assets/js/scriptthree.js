
// to check if function is working
//var grid = [[1,undefined,2,3],[4,5,undefined,6],[7,8,9,undefined],[10,11,12,13]]
var grid =[[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined],
[undefined,undefined,undefined,undefined]]
//var grid = [['straw','straw','straw','s'],['choco','choco','choco','cho'],['melon','melon','melon','mm'],['straw','straw','straw','e']]
var total = 0
var timer = 2
//var elements = ['straw','choco','melon']
var gridNo = 4
var $box = $('.box')
var $scoreBox = $('.scoreTotal')
$(function(){

// timer function
  var gameTimer = setInterval(decreaseTime, 1000)
  //restart() // to restart each games
  // generateElements() // to generate elements if the value is null
  // console.log(grid)

  function decreaseTime(){
    if (timer>0){
      timer-= 1
      //console.log(timer)
    }
  }
////
  if(timer >=0){ // to make it work with while loop
    delay = 2000
    setTimeout(generateElements(),delay) //
    //checkGrid()
  }
  console.log(grid)
  console.log(total)

  var toSwitchTwo = []


  // if(checkGrid()){
  toSwitchTwo = []
    $box.on('click', function(){
      var idArr = this.id.split('')
      toSwitchTwo.push(idArr)
      //console.log(toSwitchTwo)

      if (toSwitchTwo.length ===2){
        var iValueOne = Number(toSwitchTwo[0][3])
        var jValueOne = Number(toSwitchTwo[0][4])
        var iValueTwo = Number(toSwitchTwo[1][3])
        var jValueTwo = Number(toSwitchTwo[1][4])
        // console.log(typeof(jValueTwo));
        // console.log(`${iValueOne},${jValueOne}:${iValueTwo},${jValueTwo}`)
        // console.log(grid[iValueOne][jValueOne])
        // console.log(grid[iValueTwo][jValueTwo])
        // var tempValue = grid[iValueOne][jValueOne]
        // grid[iValueOne][jValueOne] = grid[iValueTwo][jValueTwo]
        // grid[iValueTwo][jValueTwo] = tempValue

        //console.log(tempValue)
        // $(`#box${iValueOne}${jValueOne}`).removeClass()
        // $(`#box${iValueOne}${jValueOne}`).addClass(`box c${grid[iValueOne][jValueOne]}`)
        // $(`#box${iValueTwo}${jValueTwo}`).removeClass()
        // $(`#box${iValueTwo}${jValueTwo}`).addClass(`box c${grid[iValueTwo][jValueTwo]}`)


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
          toSwitchTwo = []
          setTimeout(checkGrid(),10000)
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
          toSwitchTwo = []
          setTimeout(checkGrid(),10000)
          //checkGrid ()
          // if (jValueTwo !== (jValueOne +1) && jValueTwo !== (jValueOne -1) ){
          //   alert("invalid move")
          // }
        }
        else {
          alert('invalid move')
          toSwitchTwo = []
        }

        // if (jValueOne === jValueTwo){
        //   if (iValueTwo !== iValueOne +1 && iValueTwo !== iValueOne -1 ){
        //     alert("invalid move")
        //     toSwitchTwo = []
        //   }
        // }
      }
      // var iValue = idArr[3]
      // var jValue = idArr[4]
      // console.log(idArr)
      // console.log(`${iValue}${jValue}`)


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
    setTimeout(checkGrid(),100000)
  }
// check grid function
  function checkGrid(){
    var currentTotal = total
    // to check all possible condition // to include the match of 5 too
    // try using 2 for loop
    /// to check if is match of 4
    /// checking backend (row by row) visual column by column
    for (var i = 0; i<gridNo; i++){
      for (var j = 0; j< (gridNo/2);j++){
        if(grid[i][j] && grid[i][j+1] && grid[i][j+2]
          && grid[i][j] === grid[i][j+1]&& grid[i][j]===grid[i][j+2]){
            //alert('found')
            if(j+3<=gridNo-1 && grid[i][j]===grid[i][j+3]){// to check if there is value
              total +=10 // to add point if is match of 4
              grid[i][j+3]= undefined
            }
          total += 10
          grid[i][j] = undefined /// consider remove class here also
          // /// using id(e.g b12) $(`#b${i}${j}`).removeClass
          // // if using id - consider to use id for i j (get the ide number, split to get i and j)
          grid[i][j+1] = undefined
          grid[i][j+2] = undefined
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

            if(i+3<=gridNo-1 &&grid[i][j] === grid[(i+3)][j]){
              total +=10
              grid[i+3][j]= undefined
            }
          total += 10
          grid[i][j] = undefined
          grid[i+1][j] = undefined
          grid[i+2][j] = undefined
        }
      }
    }
    if (total > currentTotal){
      setTimeout(pushDown(),100000)
      $scoreBox.text(`${total}`)
      return false
    }
    else return true
  }

  function pushDown(){
    for (var i = 0; i< gridNo; i++){
      for(var k = gridNo-1; k >= 0 ;k--){
        if (grid[i][k] === undefined){
          $oneBox = $(`#box${i}${k}`)
          $oneBox.removeClass()
          $oneBox.addClass('box')
          if(k > 0){
            if (grid[i][k-1]!== undefined||grid[i][k-1]){
              grid[i][k] = grid[i][k-1]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-1] = undefined
              continue
            }
            else if(grid[i][k-2]!== undefined||grid[i][k-2]){
              grid[i][k] = grid[i][k-2]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-2] = undefined
              continue
            }
            else if(grid[i][k-3]!== undefined || grid[i][k-3]){
              grid[i][k] = grid[i][k-3]
              $oneBox.addClass(`c${grid[i][k]}`)
              grid[i][k-3] = undefined
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
    setTimeout(generateElements(),100000)
  }

  // function resetGrid(){
  //   if(noMoreMoves()){
  //     grid =[[undefined,undefined,undefined,undefined],
  //     [undefined,undefined,undefined,undefined],
  //     [undefined,undefined,undefined,undefined],
  //     [undefined,undefined,undefined,undefined]]
  //     generateElements()
  //   }
  //
  // }
  // function noMoreMoves(){
  //   //   // to detect if no moves
  // }



















})
