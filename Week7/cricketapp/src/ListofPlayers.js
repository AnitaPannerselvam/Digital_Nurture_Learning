// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit', score: 80 },
    { name: 'Virat', score: 65 },
    { name: 'Gill', score: 50 },
    { name: 'Rahul', score: 90 },
    { name: 'Jadeja', score: 70 },
    { name: 'Hardik', score: 40 },
    { name: 'Shami', score: 85 },
    { name: 'Bumrah', score: 60 },
    { name: 'Pant', score: 95 },
    { name: 'Ashwin', score: 55 },
    { name: 'Surya', score: 72 },
  ];

  // Filter players with scores below 70
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
