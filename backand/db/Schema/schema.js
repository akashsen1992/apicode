var mongoose = require('mongoose');
  
var userdatas = new mongoose.Schema({
    name: {type:String,required:true,unique: true},
    email: {type:String,required:true,unique: true},
    Phone:{type:String,required:true},
    image:{type:String},
    tags:Array(),
    comments:Array()
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('userdata', userdatas);