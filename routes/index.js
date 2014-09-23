var express = require('express');
var router = express.Router();
var request = require('request');


router.get('*', function(req, res) {
  request('http://www.google.com', function(err, response, body){
    res.send(response);
  });
});

module.exports = router;
