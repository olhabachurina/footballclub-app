import React from "react";
import Clubcard from "./Clubcard";

function ClubList({ clubs }) {
  // Логируем количество клубов, полученных через props
  console.log("Количество клубов для отображения:", clubs.length);

  return (
    <div className="clubs">
      {clubs.map((club) => (
        <Clubcard key={club.id} club={club} />
      ))}
    </div>
  );
}

export default ClubList;