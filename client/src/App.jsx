import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Teacher from './Teacher/Teacher'
import Option from './option/option'
import Student from './Student/Student'
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Option />}></Route>
      <Route path="/teachers" element={<Teacher />}></Route>
      <Route path="/students" element={<Student />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      
    </Routes>
  </BrowserRouter>
    
    
  )
}

export default App
