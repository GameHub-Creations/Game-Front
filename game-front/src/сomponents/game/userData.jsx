import React from "react";
import UserRank from "./userRank";

function UserData(props) {
  return (
    <div className={props.classUserName} userId={props.userId}>
      {props.valueUser}
      <UserRank
        classUserRank={props.classUserRank}
        valueUserRank={props.valueUserRank}
      />
    </div>
  );
}

export default UserData;
