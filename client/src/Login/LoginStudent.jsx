import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, signInWithEmailAndPassword } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginStudent = ({ setUser }) => {
  const [collegeId, setCollegeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = `${collegeId}@example.com`;
      const res = await signInWithEmailAndPassword(auth, email, password);
      // Successful login, redirect or set state accordingly
      const user = auth.currentUser;
      setUser(user);

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

         navigate('/student/dashboard');
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
                <strong>College ID</strong>
              </label>
              <input
                type="number"
                placeholder="Enter College ID"
                autoComplete="off"
                name="collegeID"
                className="form-control rounded-0"
                onChange={(e) => setCollegeId(e.target.value)}
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
            <Link to="/teacher/signup" className=" logbt btn btn-default  w-100 rounded-0 text-decoration-none" style={{margin:"0px"}}>
              Sign Up
            </Link>
          
        </div>
      </div>
      )
}

export default LoginStudent