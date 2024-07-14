import "./../../../styles/game/chatComponents/message.css";

import React from "react";

function Message(props) {
  return (
    <>
      <div className="namePlayer">{props.valueNamePlayer}</div>
      <div className="message">{props.valueMessage}</div>
      <div className="messagesTime">{props.valueMessageTime}</div>
    </>
  );
}

export default Message;
