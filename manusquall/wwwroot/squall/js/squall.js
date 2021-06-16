var url = 'https://github.com/ManuSquall'; // website you want to scrape
var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=json&callback=?';
$.getJSON(yql, function (data) {
    if (data.results[0]) {
        console.log(data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''));  // The scraped data (the whole webpage)
    }
});