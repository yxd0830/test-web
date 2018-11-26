/**
 * connect mongidb file
 */
var config = require('./config.js');
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
module.exports = function () {
//  var db = mongoose.connect(config.mongodb);
    var conn = mongoose.connect(config.mongodb, {useNewUrlParser:true}, function(err){
      if (err) {
        console.warn('数据库连接失败：'+err);
      } else {
        console.log('数据库成功');
        return conn;
      }
    });
}