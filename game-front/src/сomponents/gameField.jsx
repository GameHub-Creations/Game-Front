import React from "react";

function GameField() {
  return (
    <div id="game-field" className="lang__ru content picture-card shirt-card">
      <div
        className="player player-1"
        attr-username="Гость 37935792"
        attr-userid="37935792"
        title="Гость 37935792"
      >
        Гость 37935792<span className="user-rank">777</span>
      </div>
      <div
        className="player player-0"
        attr-username="Гость 71337392"
        attr-userid="79208523"
        title="Гость 71337392"
      >
        Гость 71337392<span className="user-rank">888</span>
      </div>
      <div>
        <div className="decks deck-count closed-deck-count">29</div>
        <div className="decks closed-deck-cards">
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
          <div className="card back"></div>
        </div>
        <div className="decks deck-count open-deck-count">1</div>
        <div className="decks open-deck-cards">
          <div className="card"></div>
        </div>
        <div className="decks first-temporary-deck">
          <div className="card"></div>
        </div>
      </div>
      <div>
        <div className="hand hand-count-0">2</div>
        <div className="hand hand-cards-0">
          <div className="hand-card card"></div>
          <div className="hand-card card"></div>
        </div>

        <div className="hand hand-count-1">3</div>
        <div className="hand hand-cards-1">
          <div className="hand-card card back"></div>
          <div className="hand-card card back"></div>
          <div className="hand-card card back"></div>
        </div>
      </div>
      <div className="turn">
        <div className="turn-status">
          <span>Ваш ход</span>
        </div>
        <div className="turn-throw-time"></div>
        <div className="turn-time">
          <span className="time"></span>
        </div>
      </div>
      <div className="buttons-0">
        <button className="player-button">Взять карты</button>
      </div>
    </div>
  );
}

export default GameField;
