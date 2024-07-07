import React from "react";

function Message(props) {
  return (
    <>
      <div className="namePlayer">
        {props.valueNamePlayer}
      </div>
      <div className="message">{props.valueMessage}</div>
    </>
  );
}

export default Message;
 