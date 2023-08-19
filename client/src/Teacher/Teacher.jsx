// import React from 'react'

// import { Link } from 'react-router-dom'
// import './Teacher.css'
// import img from '../assets/Teacher_Background.png'
// const Teacher = () => {
//   return (
//    <div className='background_container' >
//    <h1 className='tZ'>Teacher's Zone</h1>
//    <div className='button d-flex vh-100'>
   
//      <Link to="/login" className=" btn  ">
//             Login
//           </Link>
           
       
//           <Link to="/Signup" className="btn  ">
//             Signup
//           </Link>
//           <img src={img} alt='image' ></img>
//           </div>




          
//    </div>
//   )
// }

// export default Teacher

import React from 'react';
import { Link } from 'react-router-dom';
import './Teacher.css';
import img from '../assets/Teacher_Background.png';

const Teacher = () => {
  return (
    <div className='teacher-container'>
      <h1 className='tZ'>Teacher's Zone</h1>
      <div className='content-container'>
        <div className='button-container'>
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/Signup" className="btn">
            Signup
          </Link>
        </div>
        <img src={img} alt='image' className='background-image'></img>
      </div>
    </div>
  );
}

export default Teacher;
