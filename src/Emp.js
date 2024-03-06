// ParentComponent.js
import React, { useState } from 'react';
import Component from './Emp2';

const ParComponent = () => {
  const [employees, setEmployees] = useState([
    { empId: 1234, name: 'John', designation: 'SE' },
    { empId: 4567, name: 'Tom', designation: 'SSE' },
    { empId: 8910, name: 'Kevin', designation: 'TA' }
  ]);

  const addEmployee = () => {
    const newEmployee = { empId: 9999, name: 'New Employee', designation: 'New Designation' };
    setEmployees([...employees, newEmployee]);
    alert("buuton clicked")
  };

  return (
    <div>
      <Component employees={employees} addEmployee={addEmployee} />
    </div>
  );
};

export default ParComponent;
