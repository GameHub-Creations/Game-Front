import React from "react";
import UserData from "./userData";

function UserDeck(props) {
  return (
    <div>
      <UserData
        classUserName={props.classUserName}
        deckId={props.deckId}
        userId={props.userId}
        valueUserName={props.valueUserName}
        classUserRank={props.classUserRank}
        valueUserRank={props.valueUserRank}
      />
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default UserDeck;
