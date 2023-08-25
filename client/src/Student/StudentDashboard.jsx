import React, { useState } from 'react';
import Assignments from '../utils/Assignments';

const StudentDashboard = () => {
    const [student] = useState({
        id: '123',
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
        <div className="app">
        <div className="student-info">
            <h2>Student Information</h2>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
        </div>  
        <Assignments assignments={assignments} onViewAssignment={onViewAssignment} />
        </div>
      );
}

export default StudentDashboard