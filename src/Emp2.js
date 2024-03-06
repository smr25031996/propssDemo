// ChildComponent.js
import React from 'react';

const Component = ({ employees, addEmployee }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addEmployee}>Add Employee</button>
    </div>
  );
};

export default Component;
