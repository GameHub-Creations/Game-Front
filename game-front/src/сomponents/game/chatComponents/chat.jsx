import Dialogs from "./dialogs";
import React from "react";

function Chat(props) {
  let ref = React.createRef();

  function addMessage(event) {
    // Добавляет сообщение по нажатию 'Enter' в поле ввода
    if (event.key === "Enter") {
      props.dispatch({ type: "Add-Message" });
    }
  }

  function changeMessage() {
    // Обновляет текст в поле ввода
    let newText = ref.current.value;
    props.dispatch({ type: "Change-Message", newText: newText });
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
          ref={ref}
          onKeyDown={addMessage}
          value={props.inputMessageData}
          onChange={changeMessage}
        ></textarea>
      </div>
    </div>
  );
}

export default Chat;
