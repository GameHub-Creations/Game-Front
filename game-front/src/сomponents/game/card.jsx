import "./../../styles/game/card.css";

import React from "react";

function Card(props) {
  
  function onClickCard() {
    return props.dispatch({ type: "Click-Card" })
  }
  
  return (
    <div
      className={props.classCard}
      cardSuit={props.cardSuit}
      cardNominal={props.cardNominal}
      onClick={onClickCard}
    ></div>
  );
}

export default Card;
