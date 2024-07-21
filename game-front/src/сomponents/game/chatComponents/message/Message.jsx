import "./Message.css";

import React from "react";

function Message(props) {
  return (
    <div className="roundedBox">
      <div className="namePlayer">{props.valueNamePlayer}</div>
      <div className="message">
        {props.valueMessage}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="messagesTime">{props.valueMessageTime}</div>
    </div>
  );
}

export default Message;
