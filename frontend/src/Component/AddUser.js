import React, { useState } from 'react'
const formSubmit = ()=>{
    
}
const AddUser = () => {

    const [Inputs,setInputs] = useState([]);
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
       <input type='number' name='phone' className='input-form' onChange={handleChange}/>
       <input type='submit' name='submit' onClick={formSubmit} className='btn btn-primary'/>
     </div>
    </>
  )
}

export default AddUser