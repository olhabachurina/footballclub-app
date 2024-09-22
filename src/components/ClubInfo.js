import React from 'react';

const ClubInfo = ({ founded }) => {
  console.log('ClubInfo Props:', { founded }); // Логируем полученные пропсы
  return (
    <div>
      <h2>Club Information</h2>
      <p>Founded in: {founded}</p>
    </div>
  );
};

export default ClubInfo;