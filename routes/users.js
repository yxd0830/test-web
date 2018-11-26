var express = require('express');
var router = express.Router();


//mongodb
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
// 连接数据库    
var conn = mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser:true}, function(err){
    if(err){
        console.warn('数据库连接失败：'+err);
    }else {
        console.log('数据库成功');
    }
});
var User = new mongoose.Schema({
    name: String,
    email: String,
    age: String
});

var myModel = mongoose.model('users', User);
/* GET users listing. */
router.get('/', function(req, res, next) {
  myModel.findOne({name:"yuanxudong"}, function (err, user) {
    res.json({title: 'Express', user: user });
  });
});

router.post('/add', function(req, res, next) {
	myModel.col.insert(document)
})

module.exports = router;
