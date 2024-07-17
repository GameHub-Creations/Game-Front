import "./GameField.css";
import "./../deck/Deck.css";
import "./../card/Card.css";

import Action from "../action/Action";
import ButtonTakeCards from "../buttonTakeCards/ButtonTakeCards";
import Card from "../card/Card";
import Chat from "../chatComponents/Chat";
import Deck from "../deck/Deck";
import React from "react";
import UserDeck from "../userDeck/UserDeck";

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
              classCard="card back"
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
          valueUserRank={props.handDeck1Data.userRank}
          classCount="hand handCount1"
          valueCount={props.handDeck1Data.countCards}
          classCards="hand handCards1"
          cards={
            <Card
              classCard="card back"
              cardSuit={props.handDeck1Data.cards.suit}
              cardNominal={props.handDeck1Data.cards.nominal}
              dispatch={props.dispatch}
            />
          }
        />
      </div>
      <Action classAction="action" valueAction={props.valueActionData} />
      <ButtonTakeCards
        classButton="userButton"
        valueButton={props.valueButtonData}
        dispatch={props.dispatch}
      />
      <Chat
        headerStatus={props.headerStatus}
        headerCollapsedStatus={props.headerCollapsedStatus}
        placeholderData={props.placeholderData}
        dialogsData={props.dialogsData}
        inputMessageData={props.inputMessageData}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default GameField;
