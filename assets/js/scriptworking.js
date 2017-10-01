
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
    generateElements() //
    checkGrid()
  //console.log(grid)
    pushDown()
  //generateElements()
  }
  console.log(grid)
  console.log(total)

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
          var elementValue = Math.ceil(Math.random()*3)
          var $oneBox = $(`#box${i}${j}`)
          $oneBox.addClass(`c${elementValue}`)
          grid[i][j] = elementValue
          continue
          //console.log(elementValue)
          /// using .addClass(elementValue) to link visual
        }
      }
    }
  }
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
  }
  //

  function pushDown(){
    for (var i = 0; i< gridNo; i++){
      for(var k = gridNo-1; k > 0 ;k--){
        // if(grid[i][k] !== undefined ){
        //   console.log('undefined')
        //   continue
        // }
        $oneBox = $(`#box${i}${k}`)
        if (grid[i][k] === undefined){
          $oneBox.removeClass()
          $oneBox.addClass('box')
          if (grid[i][k-1]!== undefined||grid[i][k-1]){
            grid[i][k] = grid[i][k-1]
            $oneBox.addClass(`c${grid[i][k]}`)
            // if (grid[i][k-1]!== undefined){
            //   //$oneBox.addClass(`c${grid[i][k]}`)
            // }
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

            // if (grid[i][k-3]!== undefined){
            // //$oneBox.addClass(`c${grid[i][k]}`)
            // }
            grid[i][k-3] = undefined
            continue
          }

          else {
            break
          }
          console.log('goin thru')
          // switch (true) {
          //   case (grid[i][k-1]!== undefined||grid[i][k-1]!==null):
          //   grid[i][k] = `${grid[i][k-1]}`
          //   grid[i][k-1] = null
          //   continue
          //
          //   case (grid[i][k-2]!== undefined||grid[i][k-2]!==null):
          //   grid[i][k] = `${grid[i][k-2]}`
          //   grid[i][k-2] = null
          //   continue
          //   case grid[i][k-3]!==undefined||grid[i][k-3]!==null:
          //   grid[i][k] = `${grid[i][k-3]}`
          //   grid[i][k-3] = null
          //   continue
          //   default:
          //   console.log('error')
          // }
        }
        else continue
      }

    }
    //console.log(grid)
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
