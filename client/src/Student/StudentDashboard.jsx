import React, { useState } from 'react';
import Assignments from '../utils/Assignments';
import studentimg from '../assets/student.png'
import './Student.css';

const StudentDashboard = () => {
    const [student] = useState({
        id: '2141011034',
        name: 'RAndom'
      });
    
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
    
      return (
        <div className='student_dashboard'>
        <div className="app">
        <div className='app_2'>
        <div className="student-info">
            <div className='student_info_heading'>
            <h5 className='student_clg'>Institutue of Technical Education and Reasearch</h5>
            <h5 className='student_branch'>branch : cse</h5>
            
            </div>
            <img className='student_img' src={studentimg} alt='student_img'></img>
            <div className='student_details'> 
            <p className='student_id'>REG ID: {student.id}</p>
            <h3 className='student_name'>Name: {student.name}</h3>

            </div>
            
        </div>  
       
        <Assignments assignments={assignments} onViewAssignment={onViewAssignment} />
        
       
       </div>
        </div>
        </div>
      );
}

export default StudentDashboard