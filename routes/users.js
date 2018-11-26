
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../models/userModel.js');
/* GET users listing. */
router.get('/getUser', function(req, res, next) {
  userModel.findOne({name:"yuanxudong"}, function (err, user) {
    res.json({title: 'Express', user: user });
    console.log(err)
  });
});

router.get('/test', function(req, res, next) {
  res.json({a: 'test'})
})

module.exports = router;
