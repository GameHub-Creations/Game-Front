import React from "react";
import Buttons from "./buttons";
import Turn from "./turn";
import "./../styles/deck.css";
import "./../styles/playerData.css";
import "./../styles/playerHand.css";
import Card from "./card";
import PlayerHand from "./playerHand";
import Deck from "./Deck";

function GameField() {
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classDeckCount="deckCount closedDeckCount"
          valueCount="29"
          classDeckCards="decks closedDeckCards"
          card={<Card classCard="card back" />}
        />
        <Deck
          classDeckCount="deckCount openDeckCount"
          valueCount="1"
          classDeckCards="decks openDeckCards"
          card={<Card classCard="card" />}
        />
        <Deck
          classDeckCount="deckCount firsTemporaryDeckCount"
          valueCount="1"
          classDeckCards="decks firsTemporaryDeck"
          card={<Card classCard="card" />}
        />
      </div>
      <div>
        <PlayerHand
          classPlayerName="playerNames playerName0"
          userId="77777777"
          title="Гость 77777777"
          valuePlayer="Гость 77777777"
          valuePlayerRank="666"
          classHandCount="hand handCount0"
          valueCount="2"
          classHandCards="hand handCards0"
          card={<Card classCard="card back" />}
        />
        <PlayerHand
          classPlayerName="playerNames playerName1"
          userId="88888888"
          title="Гость 88888888"
          valuePlayer="Гость 88888888"
          valuePlayerRank="999"
          classHandCount="hand handCount1"
          valueCount="1"
          classHandCards="hand handCards1"
          card={<Card classCard="card back" />}
        />
      </div>
      <Turn />
      <Buttons />
    </div>
  );
}

export default GameField;
