import "./UserData.css";

import React from "react";
import UserRank from "../userRank/UserRank";

function UserData(props) {
  return (
    <div
      className={props.classUserName}
      deck-id={props.deckId}
      user-id={props.userId}
    >
      {props.valueUserName}
      <UserRank
        valueUserRank={props.valueUserRank}
      />
    </div>
  );
}

export default UserData;
