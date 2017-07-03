// Modified from: https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
// That example uses browser standard, not node. If node, need to install npm xmlhttprequest, and "require" at top of code

var req = new XMLHttpRequest()
req.open("GET", "https://www.quandl.com/api/v3/datasets/HKEX/02318.json?api_key=1VqFiTXxySMhKgkyNfPp", false)
req.send(null)
console.log(JSON.parse(req.responseText))

// THIS SECTION BELOW IS FOR THE GOOGLE FINANCE SOURCE

// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status == 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status);
//       }
//     };
//     xhr.send(null);
// };
//
// getJSON('https://finance.google.com/finance/info?client=ig&q=HKG%3A2318',
// function(err, data) {
//   if (err != null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });

// THIS SECTION BELOW IS FOR THE QUANDL SOURCE
//
// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status == 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status);
//       }
//     };
//     xhr.send(null);
// };
//
// getJSON('https://www.quandl.com/api/v3/datasets/HKEX/02318.json?api_key=1VqFiTXxySMhKgkyNfPp',
// function(err, data) {
//   if (err != null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });
