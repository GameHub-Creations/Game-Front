import React from "react";
import "./../styles/playerRank.css"

function PlayerRank(props) {
  return (
    <span className='playerRank'>{props.value}</span>
  );
}

export default PlayerRank;
