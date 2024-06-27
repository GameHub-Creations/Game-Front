// import { addMessageActionCreator, changeMessageActionCreator } from "./../../../redux/gameReducer";

import {
  faCircle,
  faCircleXmark,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import Dialogs from "./dialogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "./title";

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
      <Title classChatTitle={props.classChatTitle} />
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
