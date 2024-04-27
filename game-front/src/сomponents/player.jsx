import React from "react";
import PlayerRank from "./playerRank";

function Player(props) {
  return (
    <div
      className={props.valueClassName}
      userName={props.userName}
      userId={props.userId}
      title={props.title}
    >
      {props.valuePlayer}
      <PlayerRank value={props.valuePlayerRank} />
    </div>
  );
}

export default Player;
