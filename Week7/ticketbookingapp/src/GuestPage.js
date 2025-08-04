import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can view flight details but cannot book tickets.</p>
      <ul>
        <li>Flight: AI 202 | From: Delhi → Mumbai | Time: 10:00 AM</li>
        <li>Flight: Indigo 501 | From: Chennai → Bangalore | Time: 1:00 PM</li>
      </ul>
    </div>
  );
}

export default GuestPage;
