// Due to cross origin issues with the google-news npm, this is the workaround
// using a JSON file with news for HSBC, ticker 0005

// var fakeNews = require('../misc-ref/fakenews.json')
//
// function getNews () {
//   var newsRelatedData = fakeNews.feed.entry
//   var noOfStories = newsRelatedData.length
//   var selectedNewsData = []
//   for (var i = 0; i < noOfStories; i++) {
//     var storyObject = {}
//     storyObject.title = newsRelatedData[i].title.__text
//     storyObject.datePublished = newsRelatedData[i].updated
//     storyObject.storyUrl = newsRelatedData[i].id
//     selectedNewsData.push(storyObject)
//   }
//   return selectedNewsData
//   }
//
// module.exports.getNews = getNews

// Below works on node (save it!!)... but fails on browser.
// this uses the google-news package. Code copied from: https://www.npmjs.com/package/google-news

function getNews (coyName, coyTicker) {
  var GoogleNews, googleNews, track,

  GoogleNews = require('google-news')
  googleNews = new GoogleNews()

  track = coyName + coyTicker

  googleNews.stream(track, function (stream) {
    stream.on(GoogleNews.DATA, function (data) {
      return console.log('Data Event received... ' + data.title)
    })

    stream.on(GoogleNews.ERROR, function (error) {
      return console.log('Error Event received... ' + error)
    })
  })
}
console.log(getNews('HSBC', '0005'))
// module.exports.getNews = getNews


// google-finance package. Google news with a ticker. Copied from:
//  https://github.com/pilwon/node-google-finance/blob/master/examples/callback/company-news-single.js

// var util = require('util');
//
// var _ = require('lodash');
// var googleFinance = require('google-finance');
//
// var SYMBOL = 'NASDAQ:AAPL';
//
// googleFinance.companyNews({
//   symbol: SYMBOL
// }, function (err, news) {
//   if (err) { throw err; }
//   console.log(util.format(
//     '=== %s (%d) ===',
//     SYMBOL,
//     news.length
//   ).cyan);
//   if (news[0]) {
//     console.log(
//       '%s\n...\n%s',
//       JSON.stringify(news[0], null, 2),
//       JSON.stringify(news[news.length - 1], null, 2)
//     );
//   } else {
//     console.log('N/A');
//   }
// });
