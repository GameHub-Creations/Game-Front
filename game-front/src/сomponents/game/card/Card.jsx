import React from "react";

function Card(props) {
  const {suit, nominal} = props.cards
  
  return (
    <div
      className={props.classCard}
      card-suit={suit}
      car-nominal={nominal}
      onClick={props.updateDeck}
    ></div>
  );
}

export default Card;
