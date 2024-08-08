import "./Dialogs.css";

import Message from "../message/Message";
import React from "react";

function Dialogs(props) {
  return (
    <div className="dialogs">
      {props.dialogsData.map((el) => (
        <Message
          key={el.namePlayerData}
          valueNamePlayer={el.namePlayerData}
          valueMessage={el.messageData}
          valueMessageTime={el.messageTimeData}
        />
      ))}
    </div>
  );
}

export default Dialogs;
