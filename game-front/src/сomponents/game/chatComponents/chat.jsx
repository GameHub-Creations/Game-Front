import ChatDialogs from "./chatDialogs";
import ChatTitle from "./chaTitle";
import React from "react";

function Chat(props) {
  return (
    <>
      {/* Блок чата */}
      <div className="chat" style={{ display: props.dialogsStatus }}>
        {/* Блок заголовка чата */}
        <ChatTitle style={{ display: "block" }} dispatch={props.dispatch} />
        <ChatDialogs
          dialogsStatus={props.dialogsStatus}
          dialogsData={props.dialogsData}
          inputMessageData={props.inputMessageData}
          dispatch={props.dispatch}
        />
      </div>
    </>
  );
}

export default Chat;
