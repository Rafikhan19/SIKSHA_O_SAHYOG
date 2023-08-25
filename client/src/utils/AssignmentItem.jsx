import React from 'react';
import AssignmentItem from './AssignmentItem';

const Assignments = ({ assignment, onView }) => {
    return (
      <div className="assignment-item">
        <h3>{assignment.title}</h3>
        <p>Status: {assignment.viewed ? 'Viewed' : 'Pending'}</p>
        <button onClick={() => onView(assignment.id)}>View Assignment</button>
      </div>
    );
  }

export default Assignments;