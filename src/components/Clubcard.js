import React, { useState, useEffect } from "react";

function ClubCard({ club }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Логирование при монтировании и обновлении компонента
  useEffect(() => {
    console.log(`Компонент ClubCard для клуба "${club.name}" отрендерился.`);
    
    return () => {
      console.log(`Компонент ClubCard для клуба "${club.name}" размонтируется.`);
    };
  }, [club.name]);

  // Логирование изменений состояния isFlipped
  useEffect(() => {
    console.log(`Карточка клуба "${club.name}" ${isFlipped ? "перевернута" : "не перевернута"}.`);
  }, [isFlipped, club.name]);

  const handleCardClick = () => {
    console.log(`Карточка клуба "${club.name}" была нажата.`);
    setIsFlipped((prevState) => {
      const newState = !prevState;
      console.log(`Состояние isFlipped изменено на: ${newState}`);
      return newState;
    });
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src={club.emblem} alt={`${club.name} Emblem`} />
          <h3>{club.name}</h3>
          <p>City: {club.city}</p>
          <p>Founded: {club.founded}</p>
        </div>
        <div className="card-back">
          <h3>Achievements</h3>
          <p>Trophies: {club.achievements.trophies}</p>
          <p>Cups: {club.achievements.cups}</p>
          <p>International Titles: {club.achievements.internationalTitles}</p>
          <h3>Team Roster</h3>
          <ul>
            {club.squad.map((player) => (
              <li key={player.name}>
                {player.name} - {player.position}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;