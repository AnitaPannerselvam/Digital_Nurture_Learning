
import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const referenceNo = Math.floor(100000 + Math.random() * 900000); // 6-digit ref no

    alert(`Complaint Submitted Successfully!\n\nEmployee Name: ${employeeName}\nComplaint: ${complaint}\nReference No: ${referenceNo}`);
    setEmployeeName('');
    setComplaint('');
  };
  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontFamily: 'Arial'
    }}>
      <h2>Raise a Complaint 📝</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          />
        </div>

        <div>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="4"
            required
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none' }}
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
