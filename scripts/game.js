// HOW TO I RUN CALLNEWS.JS? Do i need to do module.exports + require (https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file)
// , or do i just need to load up the callnews.js file in the html, before this game.js file?
// var callnews = require('./callnews.js')    // error returned. need browserify

var callnews = require('./callnews.js')

document.addEventListener('DOMContentLoaded', init)

function init () {
  var status = 'Not Started'
  document.body.querySelector('#status').textContent = 'Game Status: ' + status
  // var p1 = new Player()
  // var p2 = new Player()
  // create an object to store the parameters submitted by players. This function
  // is called when the form is submitted
  var form = document.querySelector('form')

  var parameters = {}
  function initiateParams () {
    parameters.p1Name = form.p1Name.value
    parameters.p2Name = form.p2Name.value
    parameters.walletSize = form.walletSize.value
    parameters.holdingPeriod = form.holdingPeriod
    status = 'Parameters submitted, P1 playing'
    console.log(parameters)
  }

  // this will stop the form to submit
  form.addEventListener('submit', function (e) {
    // e.preventDefault()
    initiateParams()
  })

  // add event listener to research button. When this button is clicked, grab
  // and return news (fakenews.json used as json source)
  var researchGoBtns = document.querySelectorAll('.research-area input[type="button"]')
  for (var i = 0; i < researchGoBtns.length; i++) {
    researchGoBtns[i].addEventListener('click', displayNews)
  }

  var newsData = {}
  function displayNews (event) {
    var newsData = callnews.getNews()
    var noOfStories = newsData.length
    for (i = 0; i < noOfStories; i++) {
      var p = document.createElement('p')
      p.textContent = newsData[i].title
      var newsArea = event.target.nextElementSibling.nextElementSibling
      newsArea.appendChild(p)
    }
  }

  // add event listener to Select Ticker button. When this button is clicked, grab
  // ticker entered, and add note to say it's P2 turn to play

  var selectTickerBtns = document.querySelectorAll('.thesis-buy-area input[type="button"]')
  for (var i = 0; i < selectTickerBtns.length; i++) {
    selectTickerBtns[i].addEventListener('click', createPlayerData)
  }

  var player = 1
  var player1Data = {}
  var player2Data = {}
  function createPlayerData (event) {
    if (player === 1) {
      var buyThisTicker = event.target.previousElementSibling.value
      player1Data.ticker = buyThisTicker
      var thesis = event.target.previousElementSibling.previousElementSibling.value
      player1Data.thesis = thesis
      var promptText = event.target.nextElementSibling
      promptText.textContent = 'Thesis and ticker submitted! Next player\'s turn.'
      player = 2
    } else if (player === 2) {
      var buyThisTicker = event.target.previousElementSibling.value
      player2Data.ticker = buyThisTicker
      var thesis = event.target.previousElementSibling.previousElementSibling.value
      player2Data.thesis = thesis
      var promptText = event.target.nextElementSibling
      promptText.textContent = 'All set! Click on Execute Trades below to submit both trades.'
      var p = document.querySelector('#execute-div p')
      var p1text = document.createElement('p')
      p1text.textContent = 'Player 1: ' + JSON.stringify(player1Data)
      var p2text = document.createElement('p')
      p2text.textContent = 'Player 2: ' + JSON.stringify(player2Data)
      p.appendChild(p1text)
      p.appendChild(p2text)
      player = 3    // imagine player 3 is the program, and it is now running to determine winner
    }
  }

  // var executeTradesBtn = document.querySelector('#execute-div input[type="button"]')
  // executeTradesBtn.addEventListener('click', determineWinner)
  //
  // function determineWinner (event) {
  //
  // }

  // function Player (thesis, ticker, entryPrice, exitPrice, roi) {
  //   this.thesis = thesis
  //   this.ticker = ticker
  //   this.entryPrice = entryPrice
  //   this.exitPrice = exitPrice
  // }
}
