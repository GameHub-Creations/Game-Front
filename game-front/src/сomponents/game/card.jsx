import "./../../styles/game/card.css";

import React from "react";

function Card(props) {
  debugger 
  function onClickCard(data) {
    let cardData = {};
    cardData["userId"] = data["userId"];
    cardData["deckId"] = data["deckId"];
    cardData["cardSuit"] = data["cardSuit"];
    cardData["cardNominal"] = data["cardNominal"];
    return alert(cardData["deckId"]);
  }

  return (
    <div
      onClick={onClickCard}
      className={props.classCard}
      userId={props.userId}
      deckId={props.deckId}
      cardSuit={props.cardSuit}
      cardNominal={props.cardNominal}
    ></div>
  );
}

export default Card;
