import { gameReducer } from "./gameReducer";

let store = {
  _state: {
    gamePage: {
      closedDeckData: {
        userId: null,
        deckId: "00000011",
        name: "Закрытая колода",
        countCards: 31,
        cards: { suit: "♠", nominal: "10" },
      },
      openDeckData: {
        userId: null,
        deckId: "00000012",
        name: "Открытая колода",
        countCards: 1,
        cards: { suit: "♠", nominal: "A" },
      },
      firsTemporaryDeckData: {
        userId: null,
        deckId: "00000013",
        name: "Временная колода",
        countCards: 1,
        cards: { suit: "♠", nominal: "A" },
      },
      handDeck0Data: {
        userId: "10000000",
        deckId: "00000001",
        name: "Гость 77777777",
        userRank: "666",
        countCards: 2,
        cards: { suit: "♠", nominal: "A" },
      },
      handDeck1Data: {
        userId: "20000000",
        deckId: "00000002",
        name: "Гость 88888888",
        userRank: "999",
        countCards: 2,
        cards: { suit: "♠", nominal: "A" },
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
    // Получить данные из state
    return this._state;
  },
  _callSubscriber() {},
 
  subscribe(observer) {
    // Перезапускает страницу при внесении изменений
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // общий метод действий
    this._state.gamePage = gameReducer(this._state.gamePage, action);
    this._callSubscriber(this._state);
  },
};


export default store;
window.store = store;
