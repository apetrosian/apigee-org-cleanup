var express = require('express');
var router = express.Router();

var config = require('../apigee.config.js');
var request = require('request');

var r = request.defaults({auth: {'user' : config.user , 'pass' : config.password}});
var base = 'https://api.enterprise.apigee.com/v1/o/' + config.org+'/';

/* GET home page. */
router.get('/', function(req, res, next) {

  r.get(base + 'userroles/orgadmin/users', function(err, usersResponse) {
    if(err) {
      console.log("error: " +err);
    } else {
      
      var result = JSON.parse(usersResponse.body)
        .filter(user => user != config.user);
            
      res.json(result);
    }
  });


});

router.delete('/:user_id', function(req, res, next) {
    console.log('delete user: ' + req.params.user_id);
    
    r.del(base + 'userroles/orgadmin/users/' + req.params.user_id, function(err, usersResponse) {
      if(err) {
        console.log("error: " +err);
      } else {
              
        res.json({ message: 'Deleted', id: req.params.user_id });
      }
    });
    
});

module.exports = router;
