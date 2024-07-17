import "./UserDeck.css";

import React from "react";
import UserData from "../userData/UserData";

function UserDeck(props) {
  return (
    <div>
      <UserData
        classUserName={props.classUserName}
        deckId={props.deckId}
        userId={props.userId}
        valueUserName={props.valueUserName}
        valueUserRank={props.valueUserRank}
      />
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default UserDeck;
