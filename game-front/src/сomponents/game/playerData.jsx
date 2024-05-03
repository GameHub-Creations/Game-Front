import React from "react";
import PlayerRank from "./playerRank";

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
