import "./../../styles/game/action.css";
import "./../../styles/game/button.css";
import "./../../styles/game/deck.css";
import "./../../styles/game/userData.css";
import "./../../styles/game/userDeck.css";
import "./../../styles/game/userRank.css";
import "./../../styles/game/chatComponents/message.css";
import "./../../styles/game/chatComponents/chat.css";

import Action from "./action";
import Button from "./button";
import Card from "./card";
import Chat from "./chatComponents/chat";
import Deck from "./Deck";
import React from "react";
import UserDeck from "./userDeck";

function GameField(props) {
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classCount="deckCount closedDeckCount"
          deckId={props.closedDeckData.deckId}
          userId={props.closedDeckData.userId}
          valueCount={props.closedDeckData.countCards}
          classCards="decks closedDeckCards"
          cards={
            <Card
              classCard="card"
              cardSuit={props.closedDeckData.cards.suit}
              cardNominal={props.closedDeckData.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
        <Deck
          classCount="deckCount openDeckCount"
          deckId={props.openDeckData.deckId}
          userId={props.openDeckData.userId}
          valueCount={props.openDeckData.countCards}
          classCards="decks openDeckCards"
          cards={
            <Card
              classCard="card"
              cardSuit={props.openDeckData.cards.suit}
              cardNominal={props.openDeckData.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          userId={props.firsTemporaryDeckData.userId}
          deckId={props.firsTemporaryDeckData.deckId}
          valueCount={props.firsTemporaryDeckData.countCards}
          classCards="decks firsTemporaryDeckCards"
          cards={
            <Card
              classCard="card"
              cardSuit={props.firsTemporaryDeckData.cards.suit}
              cardNominal={props.firsTemporaryDeckData.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
      </div>
      <div>
        <UserDeck
          classUserName="userNames userName0"
          userId={props.handDeck0Data.userId}
          deckId={props.handDeck0Data.deckId}
          valueUserName={props.handDeck0Data.name}
          classUserRank="userRank"
          valueUserRank={props.handDeck0Data.userRank}
          classCount="hand handCount0"
          valueCount={props.handDeck0Data.countCards}
          classCards="hand handCards0"
          cards={
            <Card
              classCard="card"
              cardSuit={props.handDeck0Data.cards.suit}
              cardNominal={props.handDeck0Data.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
        <UserDeck
          classUserName="userNames userName1"
          userId={props.handDeck1Data.userId}
          deckId={props.handDeck1Data.deckId}
          valueUserName={props.handDeck1Data.name}
          classUserRank="userRank"
          valueUserRank={props.handDeck1Data.userRank}
          classCount="hand handCount1"
          valueCount={props.handDeck1Data.countCards}
          classCards="hand handCards1"
          cards={
            <Card
              classCard="card"
              cardSuit={props.handDeck1Data.cards.suit}
              cardNominal={props.handDeck1Data.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
      </div>
      <Action classAction="action" valueAction={props.valueActionData} />
      <Button
        classButton="userButton"
        valueButton={props.valueButtonData}
        dispatch={props.dispatch}
      />
      <Chat
        dialogsStatus={props.dialogsStatus}
        dialogsData={props.dialogsData}
        inputMessageData={props.inputMessageData}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default GameField;
