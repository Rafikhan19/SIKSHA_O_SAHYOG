import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentSignup from './Signup/StudentSignup'
import TeacherSignup from './Signup/TeacherSignup'
import LoginStudent from './Login/LoginStudent'
import LoginTeacher from './Login/LoginTeacher'
import Teacher from './Teacher/Teacher'
import Option from './option/option'
import Student from './Student/Student'
import StudentDashboard from './Student/StudentDashboard'
import TeacherDashboard from './Teacher/TeacherDashboard'
import { auth } from './utils/firebase'
import PrivateRoute from './utils/PrivateRoute';
import PrivateRouteTeacher from './utils/PrivateRouteTeacher';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
        
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Option />}></Route>
      <Route path="/teachers" element={<Teacher />}></Route>
      <Route path="/students" element={<Student />}></Route>
      <Route path="/teacher/login" element={<LoginTeacher />}></Route>
      <Route path="/teacher/signup" element={<TeacherSignup />}></Route>
      <Route path="/student/login" element={<LoginStudent setUser={setUser} />}></Route>
      <Route path="/student/signup" element={<StudentSignup />}></Route>
      <Route path="/teacher/dashboard" element={<PrivateRouteTeacher user={user} />}>
          <Route index element={<TeacherDashboard user={user} />} />
        </Route>
      <Route path="/student/dashboard" element={<PrivateRoute user={user} />}>
          <Route index element={<StudentDashboard user={user} />} />
        </Route>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
