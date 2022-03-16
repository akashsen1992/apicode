import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const AddUser = () => {
    const [Inputs,setInputs] = useState([]);
    const [selectedFile,setSelectedFile] = useState(null)
    var forData = new FormData();
    let history = useHistory(); 
    // const getimage = (e)=>{
      
    //   data.append('image', e.target.files[0]);
    //   data.append('name', e.target.name);
    //   console.log(data);

    // }

    const formSubmit = ()=>{
     
     
        // formData.append('file',);
        let data = new FormData();
    data.append('image', selectedFile);
    data.append('name',Inputs.name);
    data.append('email',Inputs.email);
    data.append('Phone',Inputs.Phone);
         console.log(data);
        axios.post("http://localhost:8000/adddata", data).then(res => {
            console.log(res);
            console.log(res.data);
            //history.push('/');
          });
    }
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(Inputs);
    return (
    <>
     <div className='row'>
       <label>Name</label>
       <input type='text' name='name' className='input-form' onChange={handleChange}/>
       <label>Email</label>
       <input type='email' name='email' className='input-form' onChange={handleChange}/>
       <label>Phone</label>
       <input type='text' name='Phone' className='input-form' onChange={handleChange}/>
       <input type="file" name='image' className='input-form' onChange={(e)=>setSelectedFile(e.target.files[0])} />
       
       <input type='submit' name='submit' onClick={formSubmit} className='btn btn-primary'/>
     </div>
    </>
  )
}

export default AddUser