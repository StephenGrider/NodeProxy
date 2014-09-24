var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('underscore');
var config = require('../config');


router.get('*', function(req, res) {

  options = {
    url: config.url,
    qs: _.omit(req.query, 'proxy_key')
  };

  request(options, function(err, response, body){
    res.send(body);
  });
});

module.exports = router;
