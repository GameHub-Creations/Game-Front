
let state = {
  gamePage: {
    closedDeckData: {
      userId: null,
      deckId: "00000011",
      name: "Закрытая колода",
      countCards: 31,
      cards: [{ suit: "♥", nominal: "10" }],
    },
    openDeckData: {
      userId: null,
      deckId: "00000012",
      name: "Открытая колода",
      countCards: 1,
      cards: [{ suit: "♥", nominal: "10" }],
    },
    firsTemporaryDeckData: {
      userId: null,
      deckId: "00000013",
      name: "Временная колода",
      countCards: 1,
      cards: [{ suit: "♥", nominal: "10" }],
    },
    handDeck0Data: {
      userId: "10000000",
      deckId: "00000001",
      name: "Гость 77777777",
      userRank: "666",
      countCards: 2,
      cards: [{ suit: "♥", nominal: "10" }],
    },
    handDeck1Data: {
      userId: "20000000",
      deckId: "00000002",
      name: "Гость 88888888",
      userRank: "999",
      countCards: 2,
      cards: [{ suit: "♥", nominal: "10" }],
    },
    valueActionData: "Ваш ход",
    valueButtonData: "Взять карты",
  },
};

export default state
