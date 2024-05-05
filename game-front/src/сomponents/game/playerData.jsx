import PlayerRank from "./playerRank";
import React from "react";

function PlayerData(props) {
  return (
    <div className={props.classPlayerName} userId={props.userId}>
      {props.valuePlayer}
      <PlayerRank
        classPlayerRank={props.classPlayerRank}
        valuePlayerRank={props.valuePlayerRank}
      />
    </div>
  );
}

export default PlayerData;
