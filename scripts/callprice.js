// Modified from: Eloquent JS. Works for quandl, not for google finance

var req = new XMLHttpRequest()
req.open('GET', 'https://www.quandl.com/api/v3/datasets/HKEX/02318.json?2&api_key=1VqFiTXxySMhKgkyNfPp', false)
req.send(null)
console.log(JSON.parse(req.responseText))
