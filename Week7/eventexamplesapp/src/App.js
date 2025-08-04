// src/App.js
import React from 'react';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>React Event Handling Examples</h1>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
