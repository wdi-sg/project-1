var callnews = require('./callnews.js')

document.addEventListener('DOMContentLoaded', init)

function init () {
  var parameters = {}
  var newsData = {}
  var playersDataArr = []
  var player = 1
  var winner = ''

  var status = 'Not Started'
  var statusLine = document.body.querySelector('#status')
  statusLine.textContent = 'Game Status: ' + status

  /* When the form's submit button is clicked, create an object to store the
  parameters submitted by players. */
  var form = document.querySelector('form')

  function initiateParams () {
    parameters.p1Name = form.p1Name.value
    parameters.p2Name = form.p2Name.value
    parameters.walletSize = form.walletSize.value
    parameters.holdingPeriod = form.holdingPeriod.value

    var confirmParamsSubmission = document.createElement('p')
    confirmParamsSubmission.textContent = 'Parameters successfully submitted!'
    form.appendChild(confirmParamsSubmission)

    status = 'Parameters submitted. ' + parameters.p1Name + ' (Player 1) is playing.'
    statusLine.textContent = 'Game Status: ' + status
  }

  // this will stop the form to submit
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    initiateParams()
  })

  /* Add event listener to research button. When this button is clicked, grab
  and display news (fakenews.json used as json source). */
  var researchGoBtns = document.querySelectorAll('.research-area input[type="button"]')
  for (var i = 0; i < researchGoBtns.length; i++) {
    researchGoBtns[i].addEventListener('click', displayNews)
  }

  function displayNews (event) {
    newsData = callnews.getNews()
    var noOfStories = newsData.length
    for (i = 0; i < noOfStories; i++) {
      var p = document.createElement('p')
      p.textContent = newsData[i].title
      var newsArea = event.target.nextElementSibling.nextElementSibling
      newsArea.appendChild(p)
    }
  }

  /* Add event listener to both Select Ticker buttons. When an instance of
  this button is clicked, grab the ticker entered, populate the player data
  array, and add text prompt for next step. */
  var selectTickerBtns = document.querySelectorAll('.thesis-buy-area input[type="button"]')
  for (var i = 0; i < selectTickerBtns.length; i++) {
    selectTickerBtns[i].addEventListener('click', createPlayerData)
  }

  function createPlayerData (event) {
    var playerData = {}
    var buyThisTicker = event.target.previousElementSibling.value
    playerData.ticker = buyThisTicker
    var thesis = event.target.previousElementSibling.previousElementSibling.previousElementSibling.value
    playerData.thesis = thesis
    playersDataArr.push(playerData)

    var promptText = event.target.nextElementSibling
    if (player === 1) {
      promptText.textContent = 'Thesis and ticker submitted! Next player\'s turn.'
      player = 2
      status = 'P1 data submitted. ' + parameters.p2Name + ' (Player 2) is playing.'
      statusLine.textContent = 'Game Status: ' + status
    } else if (player === 2) {
      promptText.textContent = 'All set! Click on Execute Trades below to submit both trades.'
      status = 'P2 data submitted. Next: Execute Trades.'
      statusLine.textContent = 'Game Status: ' + status

      var p = document.querySelector('#execute-div p')
      var p1text = document.createElement('p')
      p1text.textContent = 'Player 1: ' + JSON.stringify(playersDataArr[0])
      var p2text = document.createElement('p')
      p2text.textContent = 'Player 2: ' + JSON.stringify(playersDataArr[1])
      p.appendChild(p1text)
      p.appendChild(p2text)
    }
  }

// When Execute Trades button is clicked, determine winner and display results.
  var executeTradesBtn = document.querySelector('#execute-div button')
  executeTradesBtn.addEventListener('click', determineWinner)

  function determineWinner (event) {
    for (var i = 0; i < playersDataArr.length; i++) {
      var priceData = getPrice(playersDataArr[i].ticker)
      var companyName = priceData.dataset.name
      playersDataArr[i].companyName = companyName
      var startPrice = priceData.dataset.data[parameters.holdingPeriod][1]
      playersDataArr[i].startPrice = startPrice
      var endPrice = priceData.dataset.data[0][1]
      playersDataArr[i].endPrice = endPrice
      var startPriceDate = priceData.dataset.data[parameters.holdingPeriod][0]
      playersDataArr[i].startPriceDate = startPriceDate
      var endPriceDate = priceData.dataset.data[0][0]
      playersDataArr[i].endPriceDate = endPriceDate
      var roi = endPrice / startPrice - 1
      playersDataArr[i].roi = roi
      var wallet = (1 + roi) * parameters.walletSize
      playersDataArr[i].wallet = wallet
    }

    status = 'Results in! See bottom of page.'
    statusLine.textContent = 'Game Status: ' + status

    var winner = (playersDataArr[0].wallet > playersDataArr[1].wallet) ? parameters.p1Name : parameters.p2Name
    var whoWonP = document.querySelector('#who-won')
    whoWonP.textContent = winner + ' won!'
    var roiP = document.querySelector('#roi')

    var p1RoundedRoi = Number(Math.round(playersDataArr[0].roi + 'e4') + 'e-4') * 100
    var p2RoundedRoi = Number(Math.round(playersDataArr[1].roi + 'e4') + 'e-4') * 100
    roiP.textContent = parameters.p1Name + ' achieved a return on investment of ' + p1RoundedRoi + '%, while ' + parameters.p2Name + ' achieved a return on investment of ' + p2RoundedRoi + '%.'

    var walletP = document.querySelector('#wallet')
    walletP.textContent = 'At the end of the holding period, ' + parameters.p1Name + ' had $' + Number(Math.round(playersDataArr[0].wallet + 'e4') + 'e-4') + ' in his/her wallet, while ' + parameters.p2Name + ' had $' + Number(Math.round(playersDataArr[1].wallet + 'e4') + 'e-4') + ' in his/her wallet.'
  }

  function getPrice (ticker) {
    var req = new XMLHttpRequest()
    var stockUrl = 'https://www.quandl.com/api/v3/datasets/HKEX/' + ticker + '.json?2&api_key=HTYeSsV7GoNrvp-mJZRx'
    req.open('GET', stockUrl, false)
    req.send(null)
    var dataObj = JSON.parse(req.responseText)
    return dataObj
  }

  // At end of game, allow player to send results.
  var sendResultsBtn = document.querySelector('#next-steps button[name="send-button"]')
  sendResultsBtn.addEventListener('click', sendEmail)

  function sendEmail (event) {
    var subject = 'Stockbet game: ' + parameters.p1Name + ' vs ' + parameters.p2Name
    var body = winner + ' won. Here is a summary of the parameters and trades. Parameters: ' + JSON.stringify(parameters) + 'Player 1: ' + JSON.stringify(playersDataArr[0]) + 'Player 2: ' + JSON.stringify(playersDataArr[1])
    window.location.href = 'mailto:user@example.com?subject=' + subject + '&body=' + body // Cannot open on my laptop
  }

  // At end of game, allow player to restart game.
  var restartBtn = document.querySelector('#next-steps button[name="restart-button"]')
  restartBtn.addEventListener('click', restart)
  function restart (event) {
    window.location.reload()
  }
}
