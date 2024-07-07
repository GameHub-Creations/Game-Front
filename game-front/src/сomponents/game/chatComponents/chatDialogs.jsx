import "./../../../styles/game/chatComponents/chatDialogs.css";

import Dialogs from "./dialogs";
import React from "react";

function ChatDialogs(props) {
  let createRef = React.createRef();

  function addMessage(event) {
    // Добавляет сообщение в диалог чата
    if (event.key === "Enter") {
      props.dispatch({
        type: "Add-Message",
      });
    }
  }

  function changeMessage() {
    // Записывает текст введенный в поле ввода
    let newText = createRef.current.value;
    let action = {
      type: "Change-Message",
      newText: newText,
    };
    props.dispatch(action);
  }

  return (
    //  Блок истории сообщений и ввода сообщений
    <div className="chatDialogs">
      {/* Блок истории сообщений*/}
      <Dialogs dialogsData={props.dialogsData} />
      {/*Блок ввода сообщений */}
      <div>
        <textarea
          className="chatInput"
          placeholder="Обсудить со всеми"
          ref={createRef}
          onKeyDown={addMessage}
          value={props.inputMessageData}
          onChange={changeMessage}
        ></textarea>
      </div>
    </div>
  );
}

export default ChatDialogs;
