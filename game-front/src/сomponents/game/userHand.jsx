import React from "react";
import UserData from "./userData";

function UserHand(props) {
  return (
    <div>
      <UserData
        classUserName={props.classUserName}
        userId={props.userId}
        valueUser={props.valueUser}
        classUserRank={props.classUserRank}
        valueUserRank={props.valueUserRank}
      />
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default UserHand;
