import Message from "./message";
import React from "react";

function Dialogs(props) {
  return (
    <div className={props.classChatDialogs}>
      {props.dialogsData.map((el) => (
        <Message
          classChatNamePlayer={props.classChatNamePlayer}
          valueChatNamePlayer={el.name}
          classChatMessage={props.classChatMessage}
          valueChatMessage={el.message}
        />
      ))}
    </div>
  );
}

export default Dialogs;
