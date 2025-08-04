
import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: 'center' }}>Office Space Rental App</h1>;


  const imageURL = "https://synergyestates.in/wp-content/uploads/2025/03/office-space-fore-rent.jpg";

  
  const office = {
    name: "CyberTech Park",
    rent: 55000,
    address: "Sector 21, Bengaluru"
  };


  const offices = [
    { name: "InnovateHub", rent: 45000, address: "Indiranagar" },
    { name: "TechSpace", rent: 65000, address: "Koramangala" },
    { name: "WorkNest", rent: 55000, address: "HSR Layout" },
    { name: "StartX", rent: 75000, address: "MG Road" },
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      {heading}

      <img src={imageURL} alt="Office Space" style={{ display: 'block', margin: '20px auto', borderRadius: '10px' }} />

    
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> ₹{office.rent}</p>
      <p><strong>Address:</strong> {office.address}</p>

      <hr />

     
      <h2>Other Office Listings</h2>
      <ul>
        {offices.map((item, index) => {
          const rentColor = item.rent < 60000 ? 'red' : 'green'; // 👉 7. Conditional inline CSS
          return (
            <li key={index} style={{ marginBottom: '15px' }}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Rent:</strong> <span style={{ color: rentColor }}>₹{item.rent}</span></p>
              <p><strong>Address:</strong> {item.address}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
