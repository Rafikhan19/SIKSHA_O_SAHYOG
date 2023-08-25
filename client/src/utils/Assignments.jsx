import React from 'react';
import AssignmentItem from './AssignmentItem';

const Assignments = ({ assignments, onViewAssignment }) => {
  return (
    <div className="assignments">
      <h2>Assignments</h2>
      {assignments.map(assignment => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          onView={onViewAssignment}
        />
      ))}
    </div>
  );
}

export default Assignments;