import React from "react";

function Card(props) {
  
  function onClickCard() {
    return props.dispatch({ type: "Click-Card" })
  }
  
  return (
    <div
      className={props.classCard}
      card-suit={props.cardSuit}
      car-nominal={props.cardNominal}
      onClick={onClickCard}
    ></div>
  );
}

export default Card;
