import "./../../styles/game/action.css";
import "./../../styles/game/button.css";
import "./../../styles/game/deck.css";
import "./../../styles/game/userData.css";
import "./../../styles/game/userDeck.css";
import "./../../styles/game/userRank.css";
import "./../../styles/game/chatComponents/message.css";
import "./../../styles/game/chatComponents/chat.css";
import "./../../styles/game/chatComponents/dialogs.css";

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
          cards={props.closedDeckData.cards.map((el) => (
            <Card
              classCard="card back"
              userId={el.userId}
              deckId={el.deckId}
              cardSuit={el.suit}
              cardNominal={el.nominal}
              clickCard={props.clickCard}
            />
          ))}
        />
        <Deck
          classCount="deckCount openDeckCount"
          deckId={props.openDeckData.deckId}
          userId={props.openDeckData.userId}
          valueCount={props.openDeckData.countCards}
          classCards="decks openDeckCards"
          cards={props.openDeckData.cards.map((el) => (
            <Card
              classCard="card"
              userId={el.userId}
              deckId={el.deckId}
              cardSuit={el.suit}
              cardNominal={el.nominal}
              clickCard={props.clickCard}
            />
          ))}
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          userId={props.handDeck1Data.userId}
          deckId={props.handDeck1Data.deckId}
          valueCount={props.firsTemporaryDeckData.countCards}
          classCards="decks firsTemporaryDeckCards"
          cards={props.firsTemporaryDeckData.cards.map((el) => (
            <Card
              classCard="card"
              userId={el.userId}
              deckId={el.deckId}
              cardSuit={el.suit}
              cardNominal={el.nominal}
              clickCard={props.clickCard}
            />
          ))}
        />
      </div>
      <div>
        <UserDeck
          classUserName="userNames userName0"
          userId={props.handDeck1Data.userId}
          deckId={props.handDeck1Data.deckId}
          valueUserName={props.handDeck0Data.name}
          classUserRank="userRank"
          valueUserRank={props.handDeck0Data.userRank}
          classCount="hand handCount0"
          valueCount={props.handDeck0Data.countCards}
          classCards="hand handCards0"
          cards={props.handDeck0Data.cards.map((el) => (
            <Card
              classCard="card"
              userId={el.userId}
              deckId={el.deckId}
              cardSuit={el.suit}
              cardNominal={el.nominal}
              clickCard={props.clickCard}
            />
          ))}
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
          cards={props.handDeck1Data.cards.map((el) => (
            <Card
              classCard="card back"
              userId={el.userId}
              deckId={el.deckId}
              cardSuit={el.suit}
              cardNominal={el.nominal}
              clickCard={props.clickCard}
            />
          ))}
        />
      </div>
      <Action classAction="action" valueAction={props.valueActionData} />
      <Button
        classButton="userButton"
        valueButton={props.valueButtonData}
        clickButton={props.clickButton}
      />
      <Chat
        classChat="chat"
        classChatTitle="chatTitle"
        
        classChatDialogs="chatDialogs"
        classChatNamePlayer="chatNamePlayer"
        classChatMessage="chatMessage"
        dialogsData={props.dialogsData}
        
        classChatInput="chatInput"
        inputMessageData={props.inputMessageData}
        addMessage={props.addMessage}
        changeMessage={props.changeMessage}
      />
    </div>
  );
}

export default GameField;
