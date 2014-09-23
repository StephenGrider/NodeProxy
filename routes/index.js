var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('underscore');


router.get('*', function(req, res) {

  options = {
    url: 'http://www.google.com',
    qs: _.omit(req.query, 'proxy_key')
  };

  request(options, function(err, response, body){
    res.send(body);
  });
});

module.exports = router;
