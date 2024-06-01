import Dialogs from "./dialogs";
import React from "react";

function Chat(props) {
  return (
    <div className={props.classChat}>
      <div className={props.classChatTitle}>
        <span>Общие сообщения</span>
      </div>
      <Dialogs
        classChatDialogs={props.classChatDialogs}
        classChatNamePlayer={props.classChatNamePlayer}
        classChatMessage={props.classChatMessage}
        dialogsData={props.dialogsData}
      />
      <div>
        <textarea
          className={props.classChatInput}
          placeholder='Обсудить со всеми'
          ref={props.newMessage}
          onKeyDown={props.addMessage}
        ></textarea>
      </div>
    </div>
  );
}

export default Chat;
