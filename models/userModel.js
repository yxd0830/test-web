/**
 * userModel-file
 */
var mongoose = require('mongoose');

var User = new mongoose.Schema({
    name1: String,
    email: String,
    age: String
});

var userModel = mongoose.model('User', User);

module.exports = userModel;