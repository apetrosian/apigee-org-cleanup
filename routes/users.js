var express = require('express');
var router = express.Router();

var config = require('../apigee.config.js');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  var r = request.defaults({auth: {'user' : config.user , 'pass' : config.password}});
  var base = 'https://api.enterprise.apigee.com/v1/o/' + config.org+'/';

  r.get(base + 'userroles/orgadmin/users', function(err, usersResponse) {
    if(err) {
      console.log("error: " +err);
    } else {
      res.json(JSON.parse(usersResponse.body));
    }
  });


});

module.exports = router;
