import "./Action.css";

import React, {useState} from "react";

function Action(props) {
  const [actionData, setActionData] = useState("Ваш ход")

  return (
    <div className="action">
      <span>{actionData}</span>
    </div>
  );
}

export default Action;
