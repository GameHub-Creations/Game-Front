// import { addMessageActionCreator, changeMessageActionCreator } from "./../../../redux/gameReducer";

import Dialogs from "./dialogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Chat(props) {
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
    <div className={props.classChat}>
      <div className={props.classChatTitle}>
        <i className="fas fa-sharp fa-regular fa-comments chatTitleIconMessage"></i>
        <span className="chatTitleContent">Общие сообщения</span>
        <i className="fas fa-regular fa-circle chatTitleIconCircleMinus"></i>
        <i className="fas fa-regular fa-circle chatTitleIconCircleCross"></i>
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
