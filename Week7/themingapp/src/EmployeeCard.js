import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext); // 🧠 Access context

  const buttonClass = theme === 'dark' ? 'btn-dark' : 'btn-light';

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <button className={buttonClass}>Message</button>
    </div>
  );
};

export default EmployeeCard;
