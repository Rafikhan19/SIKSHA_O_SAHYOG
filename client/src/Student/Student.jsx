
import React from 'react';
import img1 from '../assets/student.png';
import { Link } from 'react-router-dom';
import './Student.css';

const Student = () => {
  return (
    <div className='student-container'>
      <h1 className='sZ'>Student's Zone</h1>
      <div className='content-container'>
        <img src={img1} alt='image' className='background-image' />
        <div className='button-container'>
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/Signup" className="btn">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Student;
