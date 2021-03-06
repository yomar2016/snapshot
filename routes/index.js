var express = require('express');
var router = express.Router();
var person = require('../controllers/people.ctrl')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SnapshotJS' });
});

router.get('/person/new', function(req, res) {
  res.render('new');
});

router.get('/people', function(req, res, next) {
  res.render('people', { people: people.list });
});

//syntax below taken from article
//hackhands.com/mongodb-crud-mvc-way-with-passport-authentication
router.post('/person/create', function(req, res, next) {
  console.log(req.body)
  var newPerson = req.body
  console.log(newPerson)
  person.create(newPerson);
  res.redirect('/');
});

module.exports = router;
