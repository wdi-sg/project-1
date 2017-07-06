
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
    parameters.holdingPeriod = form.holdingPeriod.value
    status = 'Parameters submitted, P1 playing'
  }

  // this will stop the form to submit
  form.addEventListener('submit', function (e) {
    e.preventDefault()
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
  // ticker entered, and add text prompt for next step

  var selectTickerBtns = document.querySelectorAll('.thesis-buy-area input[type="button"]')
  for (var i = 0; i < selectTickerBtns.length; i++) {
    selectTickerBtns[i].addEventListener('click', createPlayerData)
  }

  var playersData = []

  var player = 1
  var player1Data = {}
  var player2Data = {}

  var playerData = {}

  function createPlayerData (event) {
    if (player === 1) {
      playerData.id = 1

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

    // push playerData object into playersData array
  }

// When Execute Trades button is clicked, determine and display the winner
  var executeTradesBtn = document.querySelector('#execute-div button')
  executeTradesBtn.addEventListener('click', determineWinner)

  var winner = ''
  function determineWinner (event) {
    // For P1
    var priceData = getPrice(player1Data.ticker)
    var companyName = priceData.dataset.name
    player1Data.companyName = companyName
    var startPrice = priceData.dataset.data[parameters.holdingPeriod][1]
    player1Data.startPrice = startPrice
    var endPrice = priceData.dataset.data[0][1]
    player1Data.endPrice = endPrice
    var startPriceDate = priceData.dataset.data[parameters.holdingPeriod][0]
    player1Data.startPriceDate = startPriceDate
    var endPriceDate = priceData.dataset.data[0][0]
    player1Data.endPriceDate = endPriceDate
    var roi = endPrice / startPrice - 1
    player1Data.roi = roi
    var wallet = (1 + roi) * parameters.walletSize
    player1Data.wallet = wallet
    // console.log(player1Data)

    // For P2
    var priceData = getPrice(player2Data.ticker)
    var startPrice = priceData.dataset.data[parameters.holdingPeriod][1]
    player2Data.startPrice = startPrice
    var endPrice = priceData.dataset.data[0][1]
    player2Data.endPrice = endPrice
    var startPriceDate = priceData.dataset.data[parameters.holdingPeriod][0]
    player2Data.startPriceDate = startPriceDate
    var endPriceDate = priceData.dataset.data[0][0]
    player2Data.endPriceDate = endPriceDate
    var roi = endPrice / startPrice - 1
    player2Data.roi = roi
    var wallet = (1 + roi) * parameters.walletSize
    player2Data.wallet = wallet
    // console.log(player2Data)

    var winner = (player1Data.wallet > player2Data.wallet) ? parameters.p1Name : parameters.p2Name
    var whoWonP = document.querySelector('#who-won')
    whoWonP.textContent = winner + ' won!'
    var roiP = document.querySelector('#roi')
    roiP.textContent = parameters.p1Name + ' achieved a return on investment of ' + player1Data.roi + ', while ' + parameters.p2Name + ' achieved a return on investment of ' + player2Data.roi
    var walletP = document.querySelector('#wallet')
    walletP.textContent = 'At the end of the holding period, ' + parameters.p1Name + ' had $' + player1Data.wallet + 'in his/her wallet, while ' + parameters.p2Name + ' had $' + player2Data.wallet + 'in his/her wallet.'
  }

  function getPrice (ticker) {
    var req = new XMLHttpRequest()
    var stockUrl = 'https://www.quandl.com/api/v3/datasets/HKEX/' + ticker + '.json?2&api_key=1VqFiTXxySMhKgkyNfPp'
    req.open('GET', stockUrl, false)
    req.send(null)
    // console.log(req.status)
    var dataObj = JSON.parse(req.responseText)
    return dataObj
    // console.log(dataObj.dataset.newest_available_date)
    // var responseObject = JSON.parse(req.responseText)
    // var company_id = responseObject['company_id']
    // console.log(company_id)
  }

  // At end of game, send results
  var sendResultsBtn = document.querySelector('#next-steps button[name="send-button"]')
  sendResultsBtn.addEventListener('click', sendEmail)

  function sendEmail (event) {
    console.log('sending email')
    var subject = 'Stockbet game' + parameters.p1Name + ' vs ' + parameters.p2Name
    var body = winner + ' won. Here is a summary of the parameters and trades. Parameters: ' + parameters + 'Trades: (TBU)'
    window.location.href = 'mailto:user@example.com?subject=' + subject + '&body=' + body // Cannot open on my laptop
  }
  // <a href="mailto:email@address.com?subject=Hello world&body=Line one%0DLine two">Email me</a>

  // At end of game, restart game
  var sendResultsBtn = document.querySelector('#next-steps button[name="send-button"]')
  sendResultsBtn.addEventListener('click', sendEmail)
}
