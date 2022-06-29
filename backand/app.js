const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const imageModel = require('./db/Schema/imageSchema')
const morgan = require('morgan');
const _ = require('lodash');
const userdatas = require('./db/Schema/schema');
let fs = require('fs')
const app = express();

// // enable files upload
// app.use(fileUpload({
//     createParentPath: true
// }));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
require('./db/Connection')

//start app 
const port = process.env.PORT || 8000;

const multer  = require('multer')

app.get('/test',(req,res)=>{
    res.send('testing');
})
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     //console.log(file,"sss");
//       cb(null, file.originalname + '-' + Date.now())
//   }
// });

//! Use of Multer
// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//       callBack(null, 'uploads')     // './public/images/' directory name where save the file
//   },
//   filename: (req, file, callBack) => {
//       callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// var upload = multer({
//   storage: storage
// });
var upload = multer({ dest: 'upload/'});
var type = upload.single('image');




app.post("/uploads", type, (req, res) => {
  var tmp_path = req.file.path;
 var extension =  req.file.mimetype.split('image/')
  var target_path = `upload/${req.file.filename}.`+extension[1];

  res.send(target_path);
});



// app.use(bodyParser.urlencoded({
//     limit: "50mb",
//     extended: false
//   }));
//   app.use(bodyParser.json({limit: "50mb"}));


app.post('/useradd',async (req,res)=>{
  try {
    const data = await userdatas(req.body);
    const final= await data.save()
     res.send(final);    
  } catch (error) {
    res.send(error)
  }   
})

app.get('/getuserdata',async(req,res)=>{
try {
  const search = req.query;
  const searchdata = await userdatas.find(search);
  if(searchdata!=''){
    let data = [{
      message:'data found',
      searchdata
    }]
    res.send(data)
  }else{
    res.send([{message:"No data found"}])
  } 
  
} catch (error) {
   res.send(error)
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

app.get('/getfiltervalue',async (req,res)=>{
  try {
    const searchdata = await userdatas.findOne({$and:[{"comments.like":2},{"comments.user":'user2'},{name:"akashsen191"}]});
    if(searchdata!=''){
      let data = [{
        message:'data found',
        searchdata
      }]
      res.send(data)
    }else{
      res.send([{message:"No data found"}])
    } 
    //res.send(values);
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

