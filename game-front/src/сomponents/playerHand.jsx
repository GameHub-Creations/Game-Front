import React from "react";

import PlayerData from "./playerData";

function PlayerHand(props) {
  return (
    <div>
          <PlayerData
            classPlayerName={props.classPlayerName}
            userId={props.userId}
            title={props.title}
            valuePlayer={props.valuePlayer}
            valuePlayerRank={props.valuePlayerRank}
          />
          <div className={props.classHandCount}>{props.valueCount}</div>
          <div className={props.classHandCards}>
            {props.card}
          </div>
        </div>
  );
}

export default PlayerHand;
