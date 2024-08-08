import "./Deck.css";

import React from "react";

function Deck(props) {

  const {deckData, setDeckData} = props
  const {deckId, userId, countCards} = deckData
  
  return (
    <div>
      <div dec-id={deckId} user-id={userId}></div>
      <div className={props.classCount}>{countCards}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default Deck;
