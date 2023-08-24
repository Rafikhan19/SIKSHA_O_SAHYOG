import React from 'react'
import { Link } from 'react-router-dom'

import './option.css'
const Option = () => {
  return (
    
   <div className='item d-flex vh-100'>
    <h1 className='head'>The 1st Teachers and Student based community</h1>
    <p>We are trying to resolve your assignment problems</p>
    <div className='button2'>
    <Link to='/teachers' className='op_button btn '>Teachers Zone </Link>
    <Link to='/students' className='op_button btn '>Students Zone</Link>

    </div>
   
   </div>
  
  )
}

export default Option