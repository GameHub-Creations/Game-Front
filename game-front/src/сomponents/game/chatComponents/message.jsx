import React from "react";

function Message(props) {
  return (
    <>
      <div className={props.classChatNamePlayer}>
        {props.valueChatNamePlayer}
      </div>
      <div className={props.classChatMessage}>
        {props.valueChatMessage}</div>
    </>
  );
}

export default Message;
