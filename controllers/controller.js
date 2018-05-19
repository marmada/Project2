// exports for server.js use
module.exports = function(router, passport) {
  var express = require('express');

  var router = express.Router();

  // Import the model (cat.js) to use its database functions.
  var dietCheater = require('../models/main.js');
  var login = require('../models/login.js');
  var auth = require('../models/auth.js');

  // ENTER ROUTES HERE

  // Route to Post login information from AJAX to "LOGIN" // took sample from github sample i sent

  router.post(
    '/login',
    passport.authenticate('local-login', {
      successRedirect: '/profile', // redirect to the secure profile section
      failureRedirect: '/login', // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  router.post('/register', function(req, res) {
    dietCheater.create(
      ['nickname', 'name', 'lastname', 'email', 'password', 'weightlb'],
      [
        req.body.nickname,
        req.body.name,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.weight,
        req.body.height,
      ],
      function(result) {
        // Send back the ID of the new user
        console.log('user created');

        res.json({id: result.insertId});
       
      }
    );
  });

  // process the signup form
  router.post(
    '/register',
    passport.authenticate('local-signup', {
      successRedirect: '/profile', // redirect to the secure profile section
      failureRedirect: '/register', // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );
};



