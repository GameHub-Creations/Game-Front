import React from "react";

function Deck(props) {
  return (
    <div>
      <div deckId={props.deckId} userId={props.userId}></div>
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default Deck;
