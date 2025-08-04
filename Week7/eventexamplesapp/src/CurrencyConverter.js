
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const euroValue = (parseFloat(inr) / 90).toFixed(2); 
    setEuro(euroValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <label>INR Amount:</label><br />
        <input
          type="number"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
        /><br /><br />
        <button type="submit">Convert</button>
      </form>
      {euro && <p><strong>Converted Euro:</strong> €{euro}</p>}
    </div>
  );
};

export default CurrencyConverter;
