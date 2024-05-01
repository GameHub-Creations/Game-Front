import React from "react";

function Deck(props) {
  return (
    <div>
      <div className={props.classDeckCount}>{props.valueCount}</div>
      <div className={props.classDeckCards}>{props.card}</div>
    </div>
  );
}

export default Deck;
