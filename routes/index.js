var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACM Home', header: 'ACM@UNO' });
});

router.get('/members', function(req, res, next) {
  res.render('members', { title: 'Members' });
});


router.get('/acmw', function(req, res, next) {
  res.render('acmw', { title: 'ACMW' });
});

router.get('/loginpage', function(req, res, next) {
  res.render('loginpage', { title: 'Login' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/spgrp', function(req, res, next) {
  res.render('spgrp', { title: 'Special Interest Groups' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Contact' });
});
module.exports = router;
