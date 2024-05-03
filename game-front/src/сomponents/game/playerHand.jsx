import React from "react";

import PlayerData from "./playerData";

function PlayerHand(props) {
  return (
    <div>
      <PlayerData
        classPlayerName={props.classPlayerName}
        userId={props.userId}
        valuePlayer={props.valuePlayer}
        classPlayerRank={props.classPlayerRank}
        valuePlayerRank={props.valuePlayerRank}
      />
      <div className={props.classCount}>{props.valueCount}</div>
      <div className={props.classCards}>{props.cards}</div>
    </div>
  );
}

export default PlayerHand;
