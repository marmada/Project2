var express = require('express');

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var main = require('../models/main.js');
var login = require('../models/login.js');
var auth = require('../models/main.js');

// ENTER ROUTES HERE

// Route to Post login information from AJAX to "LOGIN"
router.post('/api/login', function(req, res) {
  var userInfo = req.body;
  console.log(req.body);

});


router.post('/api/register', function(req, res) {
    var userInfo = req.body;
    console.log(req.body);
  
  });
  
// Export routes for server.js to use.
module.exports = router;
