import React from 'react';

const PlayerCard = ({ player }) => {
  console.log('PlayerCard Props:', player); // Логируем данные игрока
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} style={{ width: '100px', height: '100px' }} />
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
    </div>
  );
};

export default PlayerCard;