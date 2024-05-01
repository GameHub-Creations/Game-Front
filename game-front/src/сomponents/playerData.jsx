import React from "react";
import PlayerRank from "./playerRank";

function PlayerData(props) {
  return (
    <div
      className={props.classPlayerName}
      userId={props.userId}
      title={props.title}
    >
      {props.valuePlayer}
      <PlayerRank value={props.valuePlayerRank} />
    </div>
  );
}

export default PlayerData;
