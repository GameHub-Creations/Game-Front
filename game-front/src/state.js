import { Component, createRef } from "react";

import React from "react";

let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
 
  subscribe(observer) {
    // Перезапускает страницу при внесении изменений
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "Click-Button") {
      return console.log("click on button");
    } 
    else if (action.type === "Click-Card") {
      return console.log("click on card");
    } 
    else if (action.type === "Add-Message") {
      // Добавляет сообщение в диалог чата
      this._state.gamePage.chat.dialogsData.push({
        name: "newUser",
        message: this._state.gamePage.chat.inputMessageData,
      });
      this._state.gamePage.chat.inputMessageData = "";
      this._callSubscriber(this._state);
    } 
    else if (action.type === "Change-Message") {
      // Записывает текст введенный в поле ввода
      this._state.gamePage.chat.inputMessageData = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
