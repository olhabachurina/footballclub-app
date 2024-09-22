import React from "react";
import PlayerSlider from "./components/PlayerSlider";
import ClubList from "./components/ClubList";
import { clubs } from "./data/clubs";
import "./App.css";

function App() {
  
  console.log("Компонент App отрендерился");

  return (
    <div className="App">
      <PlayerSlider />
      <div className="header-with-video">
        <h1>Football Clubs</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/sHqdx8d820o"
            title="Football Clubs Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;