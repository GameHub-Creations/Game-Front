import "./../../styles/game/deck.css";
import "./../../styles/game/userData.css";
import "./../../styles/game/userHand.css";
import "./../../styles/game/userRank.css";
import "./../../styles/game/button.css";
import "./../../styles/game/action.css";

import Action from "./action";
import Button from "./button";
import Card from "./card";
import Deck from "./Deck";
import React from "react";
import UserHand from "./userHand";

function GameField() {
  
  let closedCardsData = [{ suit: "♥", nominal: "10" }];

  let closedCardsElements = closedCardsData.map((el) => (
    <Card classCard="card back" dataSuit={el.suit} dataNominal={el.nominal} />
  ));

  let openCardsData = [{ suit: "♥", nominal: "10" }];

  let openCardsElements = openCardsData.map((el) => (
    <Card classCard="card" dataSuit={el.suit} dataNominal={el.nominal} />
  ));

  let firsTemporaryCardsData = [{ suit: "♥", nominal: "10" }];

  let firsTemporaryCardsElements = firsTemporaryCardsData.map((el) => (
    <Card classCard="card" dataSuit={el.suit} dataNominal={el.nominal} />
  ));

  let closedDeckElements = {
    userId: "00000011",
    userName: "closedDeck",
    countCards: 31,
    cards: closedCardsElements,
  };

  let openDeckElements = {
    userId: "00000012",
    userName: "openDeck",
    countCards: 1,
    cards: openCardsElements,
  };

  let firsTemporaryDeckElements = {
    userId: "00000013",
    userName: "firsTemporaryDeck",
    countCards: 1,
    cards: firsTemporaryCardsElements,
  };

  
  let handCards0Data = [{ suit: "♥", nominal: "10" }];

  let handCards0Elements = handCards0Data.map((el) => (
    <Card classCard="card" dataSuit={el.suit} dataNominal={el.nominal} />
  ));

  let handDeck0Elements = {
    userId: "00000001",
    userName: "Гость 77777777",
    userRank: "666",
    countCards: 2,
    cards: handCards0Elements,
  };
  
  let handCards1Data = [{ suit: "♥", nominal: "10" }];

  let handCards1Elements = handCards1Data.map((el) => (
    <Card classCard="card" dataSuit={el.suit} dataNominal={el.nominal} />
  ));
  
  let handDeck1Elements = {
    userId: "00000002",
    userName: "Гость 88888888",
    userRank: "999",
    countCards: 2,
    cards: handCards1Elements,
  };

  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classCount="deckCount closedDeckCount"
          valueCount={closedDeckElements.countCards}
          classCards="decks closedDeckCards"
          cards={closedDeckElements.cards}
        />
        <Deck
          classCount="deckCount openDeckCount"
          valueCount={openDeckElements.countCards}
          classCards="decks openDeckCards"
          cards={openDeckElements.cards}
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          valueCount={firsTemporaryDeckElements.countCards}
          classCards="decks firsTemporaryDeckCards"
          cards={firsTemporaryDeckElements.cards}
        />
      </div>
      <div>
        <UserHand
          classUserName="userNames userName0"
          userId={handDeck0Elements.userId}
          valueUser={handDeck0Elements.userName}
          classUserRank="userRank"
          valueUserRank={handDeck0Elements.userRank}
          classCount="hand handCount0"
          valueCount={handDeck0Elements.countCards}
          classCards="hand handCards0"
          cards={handDeck0Elements.cards}
        />
        <UserHand
          classUserName="userNames userName1"
          userId={handDeck1Elements.userId}
          valueUser={handDeck1Elements.userName}
          classUserRank="userRank"
          valueUserRank={handDeck1Elements.userRank}
          classCount="hand handCount1"
          valueCount={handDeck1Elements.countCards}
          classCards="hand handCards1"
          cards={handDeck1Elements.cards}
        />
      </div>
      <Action classAction="action" valueAction="Ваш ход" />
      <Button classButton="userButton" valueButton="Взять карты" />
    </div>
  );
}

export default GameField;
