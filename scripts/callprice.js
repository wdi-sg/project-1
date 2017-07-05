// Modified from: Eloquent JS. Works for quandl, not for google finance

// function getPrice() {
//   var req = new XMLHttpRequest()
//   var stockUrl =
//   req.open('GET', 'https://www.quandl.com/api/v3/datasets/HKEX/02318.json?2&api_key=1VqFiTXxySMhKgkyNfPp', false)
//   req.send(null)
//   console.log('hello')
//   // console.log(req.status)
//   console.log(JSON.parse(req.responseText))
//   var dataObj = JSON.parse(req.responseText)
//   console.log(dataObj.dataset.newest_available_date)
//   // var responseObject = JSON.parse(req.responseText)
//   // var company_id = responseObject['company_id']
//   // console.log(company_id)
// }

module.exports.getPrice = getPrice
