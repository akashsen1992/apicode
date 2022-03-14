var mongoose = require('mongoose');
  
var userdatas = new mongoose.Schema({
    name: String,
    email: String,
    Phone:Number
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('userdata', userdatas);