const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const userdatas = require('./db/Schema/schema');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
require('./db/Connection')

//start app 
const port = process.env.PORT || 8000;

const multer  = require('multer')
const upload = multer().single('avatar')
app.get('/test',(req,res)=>{
    res.send('testing');
})



// app.use(bodyParser.urlencoded({
//     limit: "50mb",
//     extended: false
//   }));
//   app.use(bodyParser.json({limit: "50mb"}));

app.post('/adddata',async(req,res)=>{
    try {        
    const maindata = new userdatas(req.body);
    const data = await maindata.save();
    res.send(data);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getdata',async(req,res)=>{
    try {        
        const data = await userdatas.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

app.delete('/deleteuse/:id',(req,res)=>{
  const { id } = req.params;
  console.log(id);
  const deleted = userdatas.findByIdAndDelete(id,(err,data)=>{
    if(err){
      console.log(err);
      res.send(err)
    }else{
      console.log('deleted',data);
      res.send({message:'deleted data',data})
    }
  })
})

app.post('/profile', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log('inter');
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log(err);
      }
  
      // Everything went fine.
    })
  })


app.listen(port, () => 
  console.log(`App is listening on port ${port}`)
);

