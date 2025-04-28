import React, { useState } from 'react';
import './EmpLin.css';

const EmpLin = () => {
  const [formData, setFormData] = useState({
    name: '',
    eId: '',
    department: '',
    eDesign: '',
    eContact: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('employeeData', JSON.stringify(formData));
    alert('Employee details saved to local storage!');
    // Clear the form inputs
    setFormData({
      name: '',
      eId: '',
      department: '',
      eDesign: '',
      eContact: '',
      salary: ''
    });
  };

  return (
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Employee-Name: </label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} required /><br /><br />
        <label htmlFor="eId">Employee-Id: </label>
        <input type="number" id="eId" value={formData.eId} onChange={handleChange} required /><br /><br />
        <label htmlFor="department">Department: </label>
        <select id="department" value={formData.department} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Tester">Tester</option>
          <option value="SDE">SDE</option>
          <option value="Security">Security</option>
          <option value="Backed-end">Backed-end</option>
          <option value="Front-end">Front-end</option>
        </select><br /><br />
        <label htmlFor="eDesign">Employee Designation: </label>
        <input type="text" id="eDesign" value={formData.eDesign} onChange={handleChange} required /><br /><br />
        <label htmlFor="eContact">Employee Contact: </label>
        <input type="tel" id="eContact" value={formData.eContact} onChange={handleChange} required /><br /><br />
        <label htmlFor="salary">Employee Salary: </label>
        <input type="number" id="salary" value={formData.salary} onChange={handleChange} required /><br /><br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmpLin;
