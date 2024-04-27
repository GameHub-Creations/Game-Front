import React from "react";
import Buttons from "./buttons";

import Turn from "./turn";
import Player from "./player";

import "./../styles/player.css";

function GameField() {
  return (
    <div id="game-field" className="lang__ru content picture-card shirt-card">
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
        <div>
          <Player
            valueClassName="playerNames playerName0"
            userName="Гость 77777777"
            userId="77777777"
            title="Гость 77777777"
            valuePlayer="Гость 77777777"
            valuePlayerRank="666"
          />
          <div className="hand hand-count-0">2</div>
          <div className="hand hand-cards-0">
            <div className="hand-card card"></div>
            <div className="hand-card card"></div>
          </div>
        </div>
        <div>
          <Player
            valueClassName="playerNames playerName1"
            userName="Гость 88888888"
            userId="88888888"
            title="Гость 88888888"
            valuePlayer="Гость 88888888"
            valuePlayerRank="999"
          />
          <div className="hand hand-count-1">3</div>
          <div className="hand hand-cards-1">
            <div className="hand-card card back"></div>
            <div className="hand-card card back"></div>
            <div className="hand-card card back"></div>
          </div>
        </div>
      </div>
      <Turn />
      <Buttons />
    </div>
  );
}

export default GameField;
