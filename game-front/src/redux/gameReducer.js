const userID = Date.now();

let initialState = {
  closedDeckData: {
    userId: null,
    deckId: "00000011",
    name: "Закрытая колода",
    countCards: 31,
    cards: { suit: "peak", nominal: "10" },
  },
  openDeckData: {
    userId: null,
    deckId: "00000012",
    name: "Открытая колода",
    countCards: 1,
    cards: { suit: "peak", nominal: "A" },
  },
  firsTemporaryDeckData: {
    userId: null,
    deckId: "00000013",
    name: "Временная колода",
    countCards: 1,
    cards: { suit: "peak", nominal: "A" },
  },
  handDeck0Data: {
    userId: "10000000",
    deckId: "00000001",
    name: "Гость 77777777",
    userRank: "666",
    countCards: 2,
    cards: { suit: "peak", nominal: "A" },
  },
  handDeck1Data: {
    userId: "20000000",
    deckId: "00000002",
    name: "Гость 88888888",
    userRank: "999",
    countCards: 2,
    cards: { suit: "peak", nominal: "A" },
  },
  valueActionData: "Ваш ход",
  valueButtonData: "Взять карты",
  chat: {
    headerStatus: "block",
    headerCollapsedStatus: "none",
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

  // Клик по кнопке 'Взять карты'
  if (action.type === "Click-Button") {
    alert("click on button");
    // Клик по карте
  } else if (action.type === "Click-Card") {
    alert("click on card");

    // Добавляет сообщение в диалог чата
  } else if (action.type === "Add-Message") {
    state.chat.dialogsData.push({
      name: userID,
      message: state.chat.inputMessageData,
    });
    state.chat.inputMessageData = "";

    // Добавляет введённый символ в поле ввода
  } else if (action.type === "Change-Message") {
    state.chat.inputMessageData = action.newText;
  } else if (action.type === "Click-Turn-Chat") {
    // Сворачивает чат
    state.chat.headerStatus = "none";
    // Отображает шапку чата
    state.chat.headerCollapsedStatus = "block";
    // alert(state.chat.dialogsStatus);
  } else if (action.type === "Click-Open-Chat") {
    // Открывает чат
    state.chat.headerStatus = "block";
    // Сворачивает шапку чата
    state.chat.headerCollapsedStatus = "none";
  } else if (action.type === "Click-Close-Chat") {
    // Закрывает чат
    state.chat.headerStatus = "none";
    // Закрывает шапку чата
    state.chat.headerCollapsedStatus = "none";
  }

  return state;
}
