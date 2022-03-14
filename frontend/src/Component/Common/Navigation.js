import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
      <div className='row'>       
       <div className='header'>
       <div className='col-6'>
         <div className='left-section'>
          <p>Akash</p>
         </div>
         </div>
         <div className='col-6'>
         <div className='right-section'>
           <ul>
            <li><Link  to='/' >Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             <li><Link  to='/adduser'>AddUser</Link> </li>
           </ul>
          </div>
          </div>
       </div>
       </div>
    </>
  )
}

export default Navigation