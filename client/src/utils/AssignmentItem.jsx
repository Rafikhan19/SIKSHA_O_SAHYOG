import React from 'react';
// import Assignment from './AssignmentItem';
import './Assignment.css'
const Assignments = ({ assignment, onView }) => {
    return (
      <div className="assignment-item">
        <h4 className='assignment_tilte'>{assignment.title}</h4>
        <div className='assignment_p'>
        <p className='assignment_sts' >Status: {assignment.viewed ? 'Viewed' : 'Pending'}</p>
        <button className='Assignment_button' onClick={() => onView(assignment.id)}>View Assignment</button>
        </div>
      </div>
    );
  }

export default Assignments;