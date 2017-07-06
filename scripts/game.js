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

  // create an object to store the parameters submitted by players. This function
  // is called when the form is submitted
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

  // add event listener to research button. When this button is clicked, grab
  // and return news (fakenews.json used as json source)
  var researchGoBtns = document.querySelectorAll('.research-area input[type="button"]')
  for (var i = 0; i < researchGoBtns.length; i++) {
    researchGoBtns[i].addEventListener('click', displayNews)
  }

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

  function createPlayerData (event) {
    var playerData = {}
    var buyThisTicker = event.target.previousElementSibling.value
    playerData.ticker = buyThisTicker
    var thesis = event.target.previousElementSibling.previousElementSibling.value
    playerData.thesis = thesis
    playersDataArr.push(playerData)
    console.log(playersDataArr)

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

    // push playerData object into playersData array
  }

// When Execute Trades button is clicked, determine and display the winner
  var executeTradesBtn = document.querySelector('#execute-div button')
  executeTradesBtn.addEventListener('click', determineWinner)

  function determineWinner (event) {
    for (i=0; i<playersDataArr.length; i++) {
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
    roiP.textContent = parameters.p1Name + ' achieved a return on investment of ' + playersDataArr[0].roi + ', while ' + parameters.p2Name + ' achieved a return on investment of ' + playersDataArr[1].roi
    var walletP = document.querySelector('#wallet')
    walletP.textContent = 'At the end of the holding period, ' + parameters.p1Name + ' had $' + playersDataArr[0].wallet + 'in his/her wallet, while ' + parameters.p2Name + ' had $' + playersDataArr[1].wallet + 'in his/her wallet.'

    console.log(playersDataArr)
  }

  function getPrice (ticker) {
    var req = new XMLHttpRequest()
    var stockUrl = 'https://www.quandl.com/api/v3/datasets/HKEX/' + ticker + '.json?2&api_key=1VqFiTXxySMhKgkyNfPp'
    req.open('GET', stockUrl, false)
    req.send(null)
    // console.log(req.status)
    var dataObj = JSON.parse(req.responseText)
    return dataObj
  }

  // At end of game, send results
  var sendResultsBtn = document.querySelector('#next-steps button[name="send-button"]')
  sendResultsBtn.addEventListener('click', sendEmail)

  function sendEmail (event) {
    var subject = 'Stockbet game: ' + parameters.p1Name + ' vs ' + parameters.p2Name
    var body = winner + ' won. Here is a summary of the parameters and trades. Parameters: ' + parameters + 'Trades: (TBU)'
    window.location.href = 'mailto:user@example.com?subject=' + subject + '&body=' + body // Cannot open on my laptop
  }

  // At end of game, restart game
  var restartBtn = document.querySelector('#next-steps button[name="restart-button"]')
  restartBtn.addEventListener('click', restart)
  function restart (event) {
    window.location.reload()
   }
}
