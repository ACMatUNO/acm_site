var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/members', function(req, res, next) {
  res.render('index', { title: 'Members' });
});

router.get('/events', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

router.get('/acmw', function(req, res, next) {
  res.render('index', { title: 'ACMW' });
});

router.get('/loginpage', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/spgrp', function(req, res, next) {
  res.render('index', { title: 'Special Interest Groups' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
module.exports = router;
