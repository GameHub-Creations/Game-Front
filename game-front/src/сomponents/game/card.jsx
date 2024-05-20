import "./../../styles/game/card.css";

import React from "react";

function Card(props) {

  return (
    <div
      className={props.classCard}
      userId={props.userId}
      deckId={props.deckId}
      cardSuit={props.cardSuit}
      cardNominal={props.cardNominal}
      onClick={props.clickCard}
    ></div>
  );
}

export default Card;
