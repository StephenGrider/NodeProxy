var express = require('express');
var router = express.Router();
var https = require('https');


router.get('*', function(req, response) {
  options = {
    host: 'http://www.google.com',
    port: 80,
    method: 'GET',
  };

  https.request(options, function(res){
    var output = '';

    res.on('error', function(err){
      console.log(err);
    });

    res.on('data', function(chunk){
      output += chunk;
    });

    res.on('end', function(res){
      response.send(JSON.parse(res));
    });

  });
});

module.exports = router;
