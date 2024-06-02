import { Component, createRef } from "react";

import React from "react";

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
    chat: {
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
      inputMessageData: "",
    },
  },
};

let rerenderEntireTree = () => {};

export const clickButton = () => {
  return alert("click on button");
};

export const clickCard = (value) => {
  // Создает ссылку на объект
  let newData = createRef();
};

export const addMessage = () => {
  // Добавляет сообщение в диалог чата
  state.gamePage.chat.dialogsData.push({
    name: "newUser",
    message: state.gamePage.chat.inputMessageData,
  });
  state.gamePage.chat.inputMessageData = "";
  rerenderEntireTree(state);
};
export const changeMessage = (text) => {
  // Добавляет текст введенный в поле ввода
  state.gamePage.chat.inputMessageData = text;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  // Перезапускает страницу при внесении изменений
  rerenderEntireTree = observer;
};

export default state;
