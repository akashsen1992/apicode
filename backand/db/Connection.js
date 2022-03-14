const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://roup:akkuroup@cluster0.vf0bu.mongodb.net/mongo?retryWrites=true&w=majority',()=>{
    console.log('data connect successfully');
});