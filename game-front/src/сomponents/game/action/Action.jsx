import "./Action.css";

import React from "react";

function Action(props) {
  return (
    <div className={props.classAction}>
      <span>{props.valueAction}</span>
    </div>
  );
}

export default Action;
