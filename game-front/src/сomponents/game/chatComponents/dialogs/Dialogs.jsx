import "./Dialogs.css";

import Message from "../message/Message";
import React from "react";

function Dialogs(props) {
  return (
    <div className="dialogs">
      {props.dialogsData.map((el) => (
        <Message
          key={el.valueNamePlayer}
          valueNamePlayer={el.valueNamePlayer}
          valueMessage={el.valueMessage}
          valueMessageTime={el.valueMessageTime}
        />
      ))}
    </div>
  );
}

export default Dialogs;
