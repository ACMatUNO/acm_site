var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/members', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/acmw', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loginpage', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/calendar', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/spgrp', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
