const addMessage = "Add-Message";
const changeMessage = "Change-Message";

let initialState = {
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
};

export function gameReducer(state = initialState, action) {
  // Преобразователь state
  if (action.type === "Click-Button") {
    alert("click on button");
  } else if (action.type === "Click-Card") {
    alert("click on card");
  } else if (action.type === addMessage) {
    // Добавляет сообщение в диалог чата
    state.chat.dialogsData.push({
      name: "newUser",
      message: state.chat.inputMessageData,
    });
    state.chat.inputMessageData = "";
  }
  if (action.type === changeMessage) {
    // Записывает текст введенный в поле ввода
    state.chat.inputMessageData = action.newText;
  }
  return state;
}

export function addMessageActionCreator() {
  return {
    type: addMessage,
  };
}

export function changeMessageActionCreator(newText) {
  return {
    type: changeMessage,
    newText: newText,
  };
}
