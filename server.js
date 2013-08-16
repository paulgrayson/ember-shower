var http = require('http'),
    path = require('path'),
    fs = require('fs');

http.createServer(function(request, response) {
  var lookup = path.basename(decodeURI(request.url)) || 'index.html';
  var filename = 'public/' + lookup
});

