import React, { Component } from 'react';
import ClubInfo from './ClubInfo';
import Achievements from './Achievements';
import Team from './Team';
import { clubs } from './data'; // Импортируем массив с данными о клубах

class FootballClubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClub: clubs[0]  // По умолчанию выбираем первый клуб
    };
  }

  // Обработчик для выбора клуба
  selectClub = (club) => {
    this.setState({ selectedClub: club });
  };

  render() {
    return (
      <div>
        <h1>Football clubs</h1>
        <div>
          {clubs.map((club) => (
            <button 
              key={club.id} 
              onClick={() => this.selectClub(club)}
              style={{ margin: '10px' }}
            >
              {club.name}
            </button>
          ))}
        </div>

        {/* Отображаем компоненты с информацией о выбранном клубе */}
        <ClubInfo club={this.state.selectedClub} />
        <Achievements achievements={this.state.selectedClub.achievements} />
        <Team squad={this.state.selectedClub.squad} />
      </div>
    );
  }
}

export default FootballClubs;