import "./../../../styles/game/chatComponents/dialogs.css";

import Message from "./message";
import React from "react";

function Dialogs(props) {
  return (
    <div className="chatDialogs">
      {props.dialogsData.map((el) => (
        <Message
          key={el.name}
          valueNamePlayer={el.name}
          valueMessage={el.message}
        />
      ))}
    </div>
  );
}

export default Dialogs;
