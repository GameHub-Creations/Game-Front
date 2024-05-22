import { Component, createRef } from "react";

export let state = {
  gamePage: {
    closedDeckData: {
      userId: null,
      deckId: "00000011",
      name: "Закрытая колода",
      countCards: 31,
      cards: [{ suit: "♠", nominal: "10" }],
    },
    openDeckData: {
      userId: null,
      deckId: "00000012",
      name: "Открытая колода",
      countCards: 1,
      cards: [{ suit: "♠", nominal: "A" }],
    },
    firsTemporaryDeckData: {
      userId: null,
      deckId: "00000013",
      name: "Временная колода",
      countCards: 1,
      cards: [{ suit: "♠", nominal: "A" }],
    },
    handDeck0Data: {
      userId: "10000000",
      deckId: "00000001",
      name: "Гость 77777777",
      userRank: "666",
      countCards: 2,
      cards: [{ suit: "♠", nominal: "A" }],
    },
    handDeck1Data: {
      userId: "20000000",
      deckId: "00000002",
      name: "Гость 88888888",
      userRank: "999",
      countCards: 2,
      cards: [{ suit: "♠", nominal: "A" }],
    },
    valueActionData: "Ваш ход",
    valueButtonData: "Взять карты",
    dialogsData: [
      {
        name: "Гость 88888888",
        message: "Я тебя разматаю",
      },
      {
        name: "Гость 77777777",
        message: "Иди говна поешь",
      },
    ],
  },
};

export function clickButton() {
  return alert("click on button");
}

export function clickCard(value) {
  let newData = createRef();
  debugger;

  // let cardData = {};
  // cardData["userId"] = data["userId"];
  // cardData["deckId"] = data["deckId"];
  // cardData["cardSuit"] = data["cardSuit"];
  // cardData["cardNominal"] = data["cardNominal"];
  // return alert(cardData["deckId"]);
}
