import Dialogs from "./dialogs";
import React from "react";
import { addMessageActionCreator, changeMessageActionCreator } from "../../../state";

function Chat(props) {
  let createRef = React.createRef();

  function addMessage(event) {
    // Добавляет сообщение в диалог чата
    if (event.key === "Enter") {
      props.dispatch(addMessageActionCreator());
    }
  }

  function changeMessage() {
    // Записывает текст введенный в поле ввода
    let newText = createRef.current.value;
    let action = changeMessageActionCreator(newText)
    props.dispatch(action);
  }

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

export default Chat;
