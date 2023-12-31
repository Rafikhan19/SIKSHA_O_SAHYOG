import React, { useState } from 'react'
import { Link,  useNavigate  } from 'react-router-dom'
import './Signup.css'
import { auth, createUserWithEmailAndPassword, db } from '../utils/firebase.js';
import { collection, doc, setDoc } from 'firebase/firestore';

const TeacherSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('New user created:', user);
            // Handle successful signup, e.g., redirect or set state
            const teachersCollection = collection(db, 'teachers');
            const newTeacherDoc = doc(teachersCollection, user.uid);

            await setDoc(newTeacherDoc, {
            name,
            email,
            });


            navigate('/teacher/login');

        } catch (error) {
          console.error('Error signing up:', error);
          // signup error
        }
      };

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
                  onChange={(e) => setName(e.target.value)}
                  
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
              <button type="submit" onClick={handleSignup} className="btn btn-success w-100 rounded-0" style={{margin:"0px"}}>
                Sign up
              </button>
              </form>
              <p style={{margin:"2px"}}>Already Have an Account?</p>
              <Link to="/teacher/login" className="btn btn-default  w-100  rounded-0 text-decoration-none" style={{margin:"0px"}}>
                Login
              </Link>
            
          </div>
        </div>
      )
}

export default TeacherSignup