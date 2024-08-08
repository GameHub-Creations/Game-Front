import "./InputMessages.css";

import React from "react";

function InputMessages(props) {
  let { chatData, setChatData } = props;

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
        dialogsData: [
          ...chatData.dialogsData,
          {
            namePlayerData: Date.now(),
            messageData: chatData.inputMessageData,
            messageTimeData: getTime(),
          },
        ],
        inputMessageData: "",
      });
    }
  }

  function changeMessage(e) {
    // Записывает текст введенный в поле ввода
      setChatData({
        ...chatData,
        inputMessageData: e.target.value,
      })
  }

  return (
    // Блок ввода сообщений
    <div className="chatMessages">
      <textarea
        className="chatInput"
        placeholder={chatData.placeholderData}
        onKeyDown={addMessage}
        value={chatData.inputMessageData}
        onChange={changeMessage}
      ></textarea>
    </div>
  );
}

export default InputMessages;
