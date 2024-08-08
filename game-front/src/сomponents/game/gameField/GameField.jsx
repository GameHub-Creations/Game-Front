import "./GameField.css";
import "./../deck/Deck.css";
import "./../card/Card.css";

import React, { useState } from "react";

import Action from "../action/Action";
import ButtonTakeCards from "../buttonTakeCards/ButtonTakeCards";
import Card from "../card/Card";
import Chat from "../chatComponents/Chat";
import Deck from "../deck/Deck";
import UserDeck from "../userDeck/UserDeck";

function GameField(props) {
  const [closedDeckData, setClosedDeckData] = useState({
    userId: null,
    deckId: "00000011",
    name: "Закрытая колода",
    countCards: 31,
    cards: { suit: "peak", nominal: "10" },
  });
  const [openDeckData, setOpenDeckData] = useState({
    userId: null,
    deckId: "00000012",
    name: "Открытая колода",
    countCards: 1,
    cards: { suit: "peak", nominal: "A" },
  });
  const [temporaryDeckData, setTemporaryDeckData] = useState({
    userId: null,
    deckId: "00000013",
    name: "Временная колода",
    countCards: 1,
    cards: { suit: "peak", nominal: "A" },
  });
  const [handDeck0Data, setHandDeck0Data] = useState({
    userId: "10000000",
    deckId: "00000001",
    name: "Гость 77777777",
    userRank: "666",
    countCards: 2,
    cards: { suit: "peak", nominal: "A" },
  });
  const [handDeck1Data, setHandDeck1Data] = useState({
    userId: "20000000",
    deckId: "00000002",
    name: "Гость 88888888",
    userRank: "999",
    countCards: 2,
    cards: { suit: "peak", nominal: "A" },
  });

  function updateClosedDeck() {
    return alert("click on ClosedDeck");
  }
  function updateOpenDeck() {
    return alert("click on OpenDeck");
  }
  function updateTemporaryDeck() {
    return alert("click on TemporaryDeck");
  }
  function updateHandDeck0() {
    return alert("click on HandDeck0");
  }
  function updateHandDeck1() {
    return alert("click on HandDeck1");
  }
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          deckData={closedDeckData} 
          setDeckData={setClosedDeckData}
          classCount="deckCount closedDeckCount"
          classCards="decks closedDeckCards"
          cards={
            <Card
              classCard="card back"
              cards={handDeck0Data.cards}
              updateDeck={updateClosedDeck}
            />
          }
        />
        <Deck
          classCount="deckCount openDeckCount"
          deckData={openDeckData}
          setDeckData={setOpenDeckData}
          classCards="decks openDeckCards"
          cards={
            <Card
              classCard="card"
              cards={handDeck0Data.cards}
              updateDeck={updateOpenDeck}
            />
          }
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          deckData={temporaryDeckData}
          setDeckData={setTemporaryDeckData}
          classCards="decks firsTemporaryDeckCards"
          cards={
            <Card
              classCard="card"
              cards={handDeck0Data.cards}
              updateDeck={updateTemporaryDeck}
            />
          }
        />
      </div>
      <div>
        <UserDeck
          classUserName="userNames userName0"
          deckData={handDeck0Data}
          setDeckData={setHandDeck0Data}
          classCount="hand handCount0"
          classCards="hand handCards0"
          cards={
            <Card
              classCard="card"
              cards={handDeck0Data.cards}
              updateDeck={updateHandDeck0}
            />
          }
        />
        <UserDeck
          classUserName="userNames userName1"
          deckData={handDeck1Data}
          setDeckData={setHandDeck1Data}
          classCount="hand handCount1"
          classCards="hand handCards1"
          cards={
            <Card
              classCard="card back"
              cards={handDeck1Data.cards}
              updateDeck={updateHandDeck1}
            />
          }
        />
      </div>
      <Action />
      <ButtonTakeCards />
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
