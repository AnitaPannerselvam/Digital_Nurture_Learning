// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Rohit', 'Gill', 'Jadeja', 'Shami', 'Pant'];
  const evenPlayers = ['Virat', 'Rahul', 'Hardik', 'Bumrah', 'Ashwin', 'Surya'];

  const [p1, p2, p3, ...restOdd] = oddPlayers;
  const [e1, e2, e3, ...restEven] = evenPlayers;

  const T20players = ['Rohit', 'Virat', 'Hardik'];
  const RanjiTrophyPlayers = ['Jaiswal', 'Sarfaraz', 'Iyer'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers]; // ES6 Merge feature

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
      </ul>

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        <li>{e1}</li>
        <li>{e2}</li>
        <li>{e3}</li>
      </ul>

      <h2>Merged List (T20 + Ranji Players)</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
