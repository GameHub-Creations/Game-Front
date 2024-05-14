import "./index.css";

import App from "./App";
import Card from "./../src/сomponents/game/card"
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      closedDeckElements={closedDeckElements}
      openDeckElements={openDeckElements}
      firsTemporaryDeckElements={firsTemporaryDeckElements}
      handDeck0Elements={handDeck0Elements}
      handDeck1Elements={handDeck1Elements}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
