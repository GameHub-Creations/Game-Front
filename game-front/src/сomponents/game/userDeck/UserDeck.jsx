import "./UserDeck.css";

import React from "react";
import UserData from "../userData/UserData";

function UserDeck(props) {
  
  const { deckData, setDeckData } = props;
  const { userId, deckId, name, userRank, countCards } = deckData;
  
  return (
    <div>
      <UserData
        classUserName={props.classUserName}
        deckId={deckId}
        userId={userId}
        valueUserName={name}
        valueUserRank={userRank}
      />
      <div className={props.classCount}>{countCards}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default UserDeck;
