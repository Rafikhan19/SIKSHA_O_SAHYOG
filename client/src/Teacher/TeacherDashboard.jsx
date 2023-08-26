import React, { useState, useEffect } from 'react';
import Assignments from '../utils/Assignments';
// import studentimg from '../assets/student.png'
import ProfileUploader from './ProfileUploader';
import './Teacher.css';
import { auth , db } from '../utils/firebase';
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from 'react-router-dom';

const TeacherDashboard = ({ user }) => {
    const [teacherData, setTeacherData] = useState(null);
    
    useEffect(() => {
      const fetchTeacherData = async () => {
        if (user) {
          const userId = user.uid;
          const teacherRef = doc(db, 'teachers', userId);
  
          try {
            const docSnap = await getDoc(teacherRef);
            if (docSnap.exists()) {
              setTeacherData(docSnap.data());
            } else {
              console.log('No Teacher data found');
            }
          } catch (error) {
            console.error('Error fetching student data:', error);
          }
        }
      };
  
      fetchTeacherData();
    }, [user]);
    console.log(teacherData);
    //collegeId, 
    
    
      const [assignments, setAssignments] = useState([
        { id: 1, title: 'Assignment 1', viewed: false },
        { id: 2, title: 'Assignment 2', viewed: true },
        // Add more assignments as needed
      ]);
    
      const onViewAssignment = assignmentId => {
        setAssignments(prevAssignments =>
          prevAssignments.map(assignment =>
            assignment.id === assignmentId
              ? { ...assignment, viewed: true }
              : assignment
          )
        );
      };
    
      const handleLogout = async () => {
        try {
          await auth.signOut();
          return <Navigate to="/teacher/login" />;
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

      var loadFile = function (event) {
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
      };
      

      return (
        <div className='student_dashboard'>
        <div className="app">
        <div className='app_2'>
        <div className="student-info">
            <div className='student_info_heading'>
            <h5 className='student_clg'>Institutue of Technical Education and Reasearch</h5>
            <h5 className='student_branch'>branch : cse</h5>
           <button className='dashboard_logout' onClick={handleLogout}>Logout</button>
            
            </div>
            <ProfileUploader />
            
            <div className='student_details'> 
            <p className='student_id'>Email: {teacherData?.email}</p>
            <h3 className='student_name'>Welcome {teacherData?.name}</h3>
            </div>
            
        </div>  
       
        <Assignments assignments={assignments} onViewAssignment={onViewAssignment} />
        

       </div>
        </div>
        </div>
      );
}

export default TeacherDashboard