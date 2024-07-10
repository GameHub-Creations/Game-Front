import Dialogs from "./dialogs";
import Header from "./header";
import HeaderCollapsed from "./headerCollapsed";
import InputMessages from "./inputMessages";
import React from "react";

function Chat(props) {
  return (
    <>
      {/* Блок чата */}
      <div className="chat" style={{ display: props.headerStatus }}>
        {/* Блок заголовка чата */}
        <Header style={{ display: props.dialogsStatus }} dispatch={props.dispatch} />
        <Dialogs
          dialogsData={props.dialogsData}
          inputMessageData={props.inputMessageData}
          dispatch={props.dispatch}
        />
        <InputMessages
          inputMessageData={props.inputMessageData}
          dispatch={props.dispatch}
        />
      </div>
      <HeaderCollapsed headerCollapsedStatus={props.headerCollapsedStatus} dispatch={props.dispatch} />
    </>
  );
}

export default Chat;
