import Dialogs from "./dialogs";
import React from "react";

function Chat(props) {
  let ref = React.createRef();

  function addMessage(event) {
    // Добавляет сообщение по нажатию 'Enter' в поле ввода
    if (event.key === "Enter") {
      props.addMessage();
    }
  }

  function changeMessage() {
    // Добавляет сообщение по нажатию 'Enter' в поле ввода
    let text = ref.current.value;
    props.changeMessage(text);
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
