
import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
const StudentSignup = () => {
  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign up</h2>
        <form  >
        <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
             
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0" style={{margin:"0px"}}>
            Sign up
          </button>
          </form>
          <p style={{margin:"2px"}}>Already Have an Account?</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" style={{margin:"0px"}}>
            Login
          </Link>
        
      </div>
    </div>
  )
}

export default StudentSignup

