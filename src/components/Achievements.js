import React from 'react';

const Achievements = ({ achievements }) => {
  console.log('Achievements Props:', achievements); 
  return (
    <div>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;