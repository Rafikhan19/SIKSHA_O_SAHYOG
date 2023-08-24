import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentSignup from './Signup/StudentSignup'
import TeacherSignup from './Signup/TeacherSignup'
import LoginStudent from './Login/LoginStudent'
import LoginTeacher from './Login/LoginTeacher'
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
      <Route path="/teacher/login" element={<LoginTeacher />}></Route>
      <Route path="/teacher/signup" element={<TeacherSignup />}></Route>
      <Route path="/student/login" element={<LoginStudent />}></Route>
      <Route path="/student/signup" element={<StudentSignup />}></Route>
      
    </Routes>
  </BrowserRouter>
    
    
  )
}

export default App
