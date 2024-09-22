import React from 'react';
import PlayerCard from './PlayerCard';

const Squad = ({ squad }) => {
  console.log('Squad Props:', squad); // Логируем состав команды
  return (
    <div>
      <h2>Squad</h2>
      <div className="squad">
        {squad.length === 0 ? (
          <p>No players available</p>
        ) : (
          squad.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))
        )}
      </div>
    </div>
  );
};

export default Squad;