// HOW TO I RUN CALLNEWS.JS? Do i need to do module.exports + require (https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file)
// , or do i just need to load up the callnews.js file in the html, before this game.js file?
// var callnews = require('./callnews.js')    // error returned. need browserify

var callnews = require('./callnews.js')

document.addEventListener('DOMContentLoaded', init())

function init () {
  var status = 'Not Started'
  document.body.querySelector('#status').textContent = 'Game Status: ' + status
  // var p1 = new Player()
  // var p2 = new Player()
}

// create an object to store the parameters submitted by players. This function
// is called when the form is submitted
var parameters = {}
function initiateParams () {
  parameters.p1Name = form.p1Name.value
  parameters.p2Name = form.p2Name.value
  parameters.walletSize = form.walletSize.value
  parameters.holdingPeriod = form.holdingPeriod.value
  // console.log(parameters)
}

// add event listener to research button. When this button is clicked, grab
// ticker entered by user, and return related news
var researchGo = document.querySelector('.research-area input[type="button"]')
researchGo.addEventListener('click', displayNews)

var researchTicker = ''
var coyName = ''

function displayNews (event) {
  var coyName = event.target.previousElementSibling.previousElementSibling.value
  var researchTicker = event.target.previousElementSibling.value
  // console.log('researchTicker is: ' + researchTicker)
  // console.log('coyName is: ' + coyName)
  var newsData = callnews.getNews(coyName, researchTicker)
  console.log(newsData)
}



// function Player (thesis, ticker, entryPrice, exitPrice, roi) {
//   this.thesis = thesis
//   this.ticker = ticker
//   this.entryPrice = entryPrice
//   this.exitPrice = exitPrice
// }
