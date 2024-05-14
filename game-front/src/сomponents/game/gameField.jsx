import "./../../styles/game/deck.css";
import "./../../styles/game/userData.css";
import "./../../styles/game/userHand.css";
import "./../../styles/game/userRank.css";
import "./../../styles/game/button.css";
import "./../../styles/game/action.css";

import Action from "./action";
import Button from "./button";
import Deck from "./Deck";
import React from "react";
import UserHand from "./userHand";

function GameField(props) {
  
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classCount="deckCount closedDeckCount"
          valueCount={props.closedDeckElements.countCards}
          classCards="decks closedDeckCards"
          cards={props.closedDeckElements.cards}
        />
        <Deck
          classCount="deckCount openDeckCount"
          valueCount={props.openDeckElements.countCards}
          classCards="decks openDeckCards"
          cards={props.openDeckElements.cards}
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          valueCount={props.firsTemporaryDeckElements.countCards}
          classCards="decks firsTemporaryDeckCards"
          cards={props.firsTemporaryDeckElements.cards}
        />
      </div>
      <div>
        <UserHand
          classUserName="userNames userName0"
          userId={props.handDeck0Elements.userId}
          valueUser={props.handDeck0Elements.userName}
          classUserRank="userRank"
          valueUserRank={props.handDeck0Elements.userRank}
          classCount="hand handCount0"
          valueCount={props.handDeck0Elements.countCards}
          classCards="hand handCards0"
          cards={props.handDeck0Elements.cards}
        />
        <UserHand
          classUserName="userNames userName1"
          userId={props.handDeck1Elements.userId}
          valueUser={props.handDeck1Elements.userName}
          classUserRank="userRank"
          valueUserRank={props.handDeck1Elements.userRank}
          classCount="hand handCount1"
          valueCount={props.handDeck1Elements.countCards}
          classCards="hand handCards1"
          cards={props.handDeck1Elements.cards}
        />
      </div>
      <Action classAction="action" valueAction="Ваш ход" />
      <Button classButton="userButton" valueButton="Взять карты" />
    </div>
  );
}

export default GameField;
