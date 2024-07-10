import "./../../../styles/game/chatComponents/inputMessages.css";

import React from "react";

function InputMessages(props) {
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
    // Блок ввода сообщений
    <div className="chatMessages">
      <textarea
        className="chatInput"
        placeholder="Обсудить со всеми"
        ref={createRef}
        onKeyDown={addMessage}
        value={props.inputMessageData}
        onChange={changeMessage}
      ></textarea>
    </div>
  );
}

export default InputMessages;
