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
  
  let usersData = [
    { userId: "00000001", userName: "Гость 77777777", userRank: "666", "countCards": 2, "cards": null },
    { userId: "00000002", userName: "Гость 88888888", userRank: "999", "countCards": 1, "cards": null },
  ];

  let decksData = [
    { userId: "00000011", userName: "closedDeck", "countCards": 31, "cards": null },
    { userId: "00000012", userName: "openDeck", "countCards": 1, "cards": null },
    { userId: "00000013", userName: "firsTemporaryDeck", "countCards": 1, "cards": null },
  ];
  
  return (
    <div id="gameField" className="content pictureCard shirtCard">
      <div>
        <Deck
          classCount="deckCount closedDeckCount"
          valueCount={decksData[0].countCards}
          classCards="decks closedDeckCards"
          cards={<Card classCard="card back" />}
        />
        <Deck
          classCount="deckCount openDeckCount"
          valueCount={decksData[1].countCards}
          classCards="decks openDeckCards"
          cards={<Card classCard="card" />}
        />
        <Deck
          classCount="deckCount firsTemporaryDeckCount"
          valueCount={decksData[2].countCards}
          classCards="decks firsTemporaryDeck"
          cards={<Card classCard="card" />}
        />
      </div>
      <div>
        <UserHand
          classUserName="userNames userName0"
          userId={usersData[0].userId}
          valueUser={usersData[0].userName}
          classUserRank="userRank"
          valueUserRank={usersData[0].userRank}
          classCount="hand handCount0"
          valueCount={usersData[0].countCards}
          classCards="hand handCards0"
          cards={<Card classCard="card back" />}
        />
        <UserHand
          classUserName="userNames userName1"
          userId={usersData[1].userId}
          valueUser={usersData[1].userName}
          classUserRank="userRank"
          valueUserRank={usersData[1].userRank} 
          classCount="hand handCount1"
          valueCount={usersData[1].countCards}
          classCards="hand handCards1"
          cards={<Card classCard="card back" />}
        />
      </div>
      <Action classAction="action" valueAction="Ваш ход" />
      <Button classButton="userButton" valueButton="Взять карты" />
    </div>
  );
}

export default GameField;
