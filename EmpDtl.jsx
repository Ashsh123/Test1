import React, { useEffect, useState } from 'react';
import './EmpLin.css'
const EmpDtl = () => {
  const [detail, setDetails] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employeeDetails'));
    if (storedData) {
      setDetails(storedData);
      JSON.parse(localStorage.setItem(''))
    }
  }, []);


  return (
    <div className='container2'>
      <h1>Employee Details</h1>
      <p><strong>Name:</strong> {detail.name}</p>
      <p><strong>ID:</strong> {detail.eId}</p>
      <p><strong>Department:</strong> {detail.department}</p>
      <p><strong>Designation:</strong> {detail.eDesign}</p>
      <p><strong>Contact:</strong> {detail.eContact}</p>
      <p><strong>Salary:</strong> {detail.salary}</p>
    </div>
  );
};

export default EmpDtl;
