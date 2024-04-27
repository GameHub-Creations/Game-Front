import React from "react";
import "./../styles/turn.css"

function Turn() {
  return (
    <div className="turn">
        <div className="turn-status">
          <span>Ваш ход</span>
        </div>
        <div className="turn-throw-time"></div>
        <div className="turn-time">
          <span className="time"></span>
        </div>
      </div>
  );
}

export default Turn;
