import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, signInWithEmailAndPassword } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';



const LoginTeacher = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // Successful login, redirect or set state accordingly
      
      if(res!=null){
        toast('✅ Logged In Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }

     
    //   navigate('/dashboard'); // Redirect to teacher's dashboard
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
      toast('❌ Error Occured!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };



    return (
        <div className="app_login" >
    
        <div className="login_container">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
/>

            <ToastContainer />
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin} type="submit" className="logbt btn btn-success w-100 rounded-0" style={{margin:"0px"}}>
              Login
            </button>
            </form>
            <p style={{margin:"2px"}}>Don't Have An Account?</p>
            <Link to="/teacher/signup" className=" logbt btn btn-default border w-100 bg-light rounded-0 text-decoration-none" style={{margin:"0px"}}>
              Sign Up
            </Link>
          
        </div>
      </div>
      )
}

export default LoginTeacher