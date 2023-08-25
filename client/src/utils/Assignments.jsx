import React from 'react';
import AssignmentItem from './AssignmentItem';

const Assignments = ({ assignments, onViewAssignment }) => {
  return (
    <div className="assignments">
      <h3 className='Assignment_head'>Assignments</h3>
      {assignments.map(assignment => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          onView={onViewAssignment}
          className="Student_assignment"
        />
      ))}
    </div>
  );
}

export default Assignments;