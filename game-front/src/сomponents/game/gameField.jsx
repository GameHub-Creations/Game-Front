import "./../../styles/game/action.css";
import "./../../styles/game/button.css";
import "./../../styles/game/deck.css";
import "./../../styles/game/userData.css";
import "./../../styles/game/userDeck.css";
import "./../../styles/game/userRank.css";

import Action from "./action";
import Button from "./button";
import Card from "./card";
import Deck from "./Deck";
import React from "react";
import UserDeck from "./userDeck";

function GameField(props) {
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          id={props.closedDeckData.id}
          classCount="deckCount closedDeckCount"
          valueCount={props.closedDeckData.countCards}
          classCards="decks closedDeckCards"
          cards={props.closedDeckData.cards.map((el) => (
            <Card
              classCard="card back"
              dataSuit={el.suit}
              dataNominal={el.nominal}
            />
          ))}
        />
        <Deck
          id={props.openDeckData.id}
          classCount="deckCount openDeckCount"
          valueCount={props.openDeckData.countCards}
          classCards="decks openDeckCards"
          cards={props.openDeckData.cards.map((el) => (
            <Card
              classCard="card"
              dataSuit={el.suit}
              dataNominal={el.nominal}
            />
          ))}
        />
        <Deck
          id={props.firsTemporaryDeckData.id}
          classCount="deckCount firsTemporaryDeckCount"
          valueCount={props.firsTemporaryDeckData.countCards}
          classCards="decks firsTemporaryDeckCards"
          cards={props.firsTemporaryDeckData.cards.map((el) => (
            <Card
              classCard="card"
              dataSuit={el.suit}
              dataNominal={el.nominal}
            />
          ))}
        />
      </div>
      <div>
        <UserDeck
          classUserName="userNames userName0"
          id={props.handDeck0Data.id}
          valueName={props.handDeck0Data.name}
          classUserRank="userRank"
          valueUserRank={props.handDeck0Data.userRank}
          classCount="hand handCount0"
          valueCount={props.handDeck0Data.countCards}
          classCards="hand handCards0"
          cards={props.handDeck0Data.cards.map((el) => (
            <Card
              classCard="card"
              dataSuit={el.suit}
              dataNominal={el.nominal}
            />
          ))}
        />
        <UserDeck
          classUserName="userNames userName1"
          id={props.handDeck1Data.id}
          valueName={props.handDeck1Data.name}
          classUserRank="userRank"
          valueUserRank={props.handDeck1Data.userRank}
          classCount="hand handCount1"
          valueCount={props.handDeck1Data.countCards}
          classCards="hand handCards1"
          cards={props.handDeck1Data.cards.map((el) => (
            <Card
              classCard="card back"
              dataSuit={el.suit}
              dataNominal={el.nominal}
            />
          ))}
        />
      </div>
      <Action classAction="action" valueAction={props.valueActionData} />
      <Button classButton="userButton" valueButton={props.valueButtonData} />
    </div>
  );
}

export default GameField;
