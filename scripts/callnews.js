// google-news package. Copied from: https://www.npmjs.com/package/google-news

var GoogleNews, googleNews, track;

GoogleNews = require('google-news');
googleNews = new GoogleNews();

track = 'AAPL';

googleNews.stream(track, function(stream) {

  stream.on(GoogleNews.DATA, function(data) {
    return console.log('Data Event received... ' + data.title);
  });

  stream.on(GoogleNews.ERROR, function(error) {
    return console.log('Error Event received... ' + error);
  });
});



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
