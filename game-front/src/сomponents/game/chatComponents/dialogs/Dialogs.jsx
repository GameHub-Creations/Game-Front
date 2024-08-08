import "./Dialogs.css";

import Message from "../message/Message";
import React from "react";

function Dialogs(props) {
  return (
    <div className="dialogs">
      {props.dialogs.map((el) => (
        <Message
          key={el.namePlayer}
          valueNamePlayer={el.namePlayer}
          valueMessage={el.message}
          valueMessageTime={el.messageTime}
        />
      ))}
    </div>
  );
}

export default Dialogs;
