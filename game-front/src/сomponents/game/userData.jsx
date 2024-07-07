import React from "react";
import UserRank from "./userRank";

function UserData(props) {
  return (
    <div
      className={props.classUserName}
      deck-id={props.deckId}
      user-id={props.userId}
    >
      {props.valueUserName}
      <UserRank
        classUserRank={props.classUserRank}
        valueUserRank={props.valueUserRank}
      />
    </div>
  );
}

export default UserData;
