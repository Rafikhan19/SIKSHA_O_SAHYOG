import React, { useState, useEffect } from 'react';
import Assignments from '../utils/Assignments';
// import studentimg from '../assets/student.png'
import './Student.css';
import { auth , db } from '../utils/firebase';
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from 'react-router-dom';
import ProfileUploader from '../Teacher/ProfileUploader'

const StudentDashboard = ({ user }) => {
    const [studentData, setStudentData] = useState(null);
    
    useEffect(() => {
      const fetchStudentData = async () => {
        if (user) {
          const userId = user.uid;
          const studentRef = doc(db, 'students', userId);
  
          try {
            const docSnap = await getDoc(studentRef);
            if (docSnap.exists()) {
              setStudentData(docSnap.data());
            } else {
              console.log('No student data found');
            }
          } catch (error) {
            console.error('Error fetching student data:', error);
          }
        }
      };
  
      fetchStudentData();
    }, [user]);

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
          return <Navigate to="/student/login" />;
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

      return (
        <div className='student_dashboard'>
        <div className="app">
        <div className='app_2'>
        <div className="student-info">
            <div className='student_info_heading'>
            <h5 className='student_clg'>Institutue of Technical Education and Reasearch</h5>
            <h5 className='student_branch'>Student branch : cse</h5>
            <button className='dashboard_logout' onClick={handleLogout}>Logout</button>
            </div>
            <ProfileUploader />
            
            <div className='student_details'> 
            <p className='student_id'>REG ID: {studentData?.collegeId}</p>
            <h3 className='student_name'>{studentData?.name}</h3>
            </div>
            
        </div>  
       
        <Assignments assignments={assignments} onViewAssignment={onViewAssignment} />
        
       
       </div>
        </div>
        </div>
      );
}

export default StudentDashboard