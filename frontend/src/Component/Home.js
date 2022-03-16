import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { confirm } from "react-confirm-box";
const Home = () => {
    const[user,setUser] = useState([]);
    const userdata =async () =>{
        const data = await fetch('http://localhost:8000/getdata');
        let userData = await data.json()
        setUser(userData);
    }
    useEffect(() => {
        userdata();
    }, [])
    useEffect(() => {
        
    }, [userdata])
    const deletedrow = async (data)=>{
        const result = await confirm("Are you sure you want to delete?");
        if (result) {
            console.log("You click yes!");
            const deleted = await axios.delete(`http://localhost:8000/deleteuse/${data}`)  
             userdata();
            return;
          }
       
    } 
    
  return (
    <div>
        <h2>User Data</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
          user.map(userdatas =>
            <tr key={userdatas._id}>
            <td>{userdatas.name}</td>
            <td>{userdatas.email}</td>
            <td><img src={'file:///home/link-2-g/Documents/Shopingcart/backand/'+userdatas.image} alt={userdatas.name} width="100%" /></td>
            <td><a onClick={()=>{deletedrow(userdatas._id)}}>Delete</a></td>
        </tr>
            )
        }
                
            </tbody>
        </table>
    </div>
  )
}

export default Home