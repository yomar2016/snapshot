// controllers/user.ctrl.js
var User = require('../models/user.model')
var passport = require('../config/passport')


module.exports.showRegistrationForm = function(req, res, next) {
  res.render('register');
};

module.exports.listUsers = function (req, res, next) {
  User.find()
    .then(function (users) {
      res.status(200).json(users);
    });
};

module.exports.createUser = function(req, res, next) {
  User.register(req.body.email, req.body.password, function(err, user) {
    if (err) return next(err);
    req.login(user, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};

module.exports.showLoginForm = function(req, res, next) {
  res.render('login');
};
/*
module.exports.createSession = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
});
*/
