import "./../../styles/game/deck.css";
import "./../../styles/game/playerData.css";
import "./../../styles/game/playerHand.css";
import "./../../styles/game/playerRank.css"
import "./../../styles/game/button.css";
import "./../../styles/game/action.css";

import Action from "./action";
import Button from "./button";
import Card from "./card";
import Deck from "./Deck";
import PlayerHand from "./playerHand";
import React from "react";

function GameField() {
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classCount="deckCount closedDeckCount"
          valueCount="29"
          classCards="decks closedDeckCards"
          cards={<Card classCard="card back" />}
        />
        <Deck
          classCount="deckCount openDeckCount"
          valueCount="1"
          classCards="decks openDeckCards"
          cards={<Card classCard="card" />}
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          valueCount="1"
          classCards="decks firsTemporaryDeck"
          cards={<Card classCard="card" />}
        />
      </div>
      <div>
        <PlayerHand
          classPlayerName="playerNames playerName0"
          userId="77777777"
          valuePlayer="Гость 77777777"
          classPlayerRank="playerRank"
          valuePlayerRank="666"
          classCount="hand handCount0"
          valueCount="2"
          classCards="hand handCards0"
          cards={<Card classCard="card back" />}
        />
        <PlayerHand
          classPlayerName="playerNames playerName1"
          userId="88888888"
          valuePlayer="Гость 88888888"
          classPlayerRank="playerRank"
          valuePlayerRank="999"
          classCount="hand handCount1"
          valueCount="1"
          classCards="hand handCards1"
          cards={<Card classCard="card back" />}
        />
      </div>
      <Action classAction="action" valueAction="Ваш ход"/>
      <Button classButton="playerButton" valueButton="Взять карты"/>
    </div>
  );
}

export default GameField;
