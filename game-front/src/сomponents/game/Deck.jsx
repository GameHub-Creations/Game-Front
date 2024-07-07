import React from "react";

function Deck(props) {
  return (
    <div>
      <div dec-id={props.deckId} user-id={props.userId}></div>
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default Deck;
