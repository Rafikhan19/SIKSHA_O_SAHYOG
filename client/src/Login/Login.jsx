import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  return (
    <div className="app_login" >

    <div className="login_container">
      <h2>Login</h2>
      <form >
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
        <button type="submit" className="logbt btn btn-success w-100 rounded-0" style={{margin:"0px"}}>
          Login
        </button>
        </form>
        <p style={{margin:"2px"}}>Already Have an Account?</p>
        <Link to="/Signup" className=" logbt btn btn-default border w-100 bg-light rounded-0 text-decoration-none" style={{margin:"0px"}}>
          Sign Up
        </Link>
      
    </div>
  </div>
  )
}

export default Login