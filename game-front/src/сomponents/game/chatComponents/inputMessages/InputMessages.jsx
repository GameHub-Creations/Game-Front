import "./InputMessages.css";

import React from "react";

function InputMessages(props) {
  const { chatData, setChatData } = props;

  function addZeroesToDate(time) {
    if (time.getMonth < 10) return "0" + time;
    return time;
  }

  function getTime() {
    let hours = addZeroesToDate(new Date().getHours());
    let minutes = addZeroesToDate(new Date().getMinutes());
    return `${hours}:${minutes}`;
  }

  function addMessage(event) {
    // Добавляет сообщение в диалог чата
    if (event.key === "Enter") {
      setChatData({
        ...chatData,
        dialogs: [
          ...chatData.dialogs,
          {
            namePlayer: Date.now(),
            message: chatData.inputMessage,
            messageTime: getTime(),
          },
        ],
        inputMessage: "",
      });
    }
  }

  function changeMessage(e) {
    // Записывает текст введенный в поле ввода
    setChatData({
      ...chatData,
      inputMessage: e.target.value,
    });
  }

  return (
    // Блок ввода сообщений
    <div className="chatMessages">
      <textarea
        className="chatInput"
        placeholder={chatData.placeholder}
        onKeyDown={addMessage}
        value={chatData.inputMessage}
        onChange={changeMessage}
      ></textarea>
    </div>
  );
}

export default InputMessages;
