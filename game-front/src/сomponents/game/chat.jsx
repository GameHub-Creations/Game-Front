import "./../../styles/game/chat.css";

import React from "react";

function Chat(props) {
  return (
    <div className="chat">
      <div className="chatTitle">
        <span className="chatContent">Общие сообщения</span>
      </div>
      <div className="chatLogs"> </div>
      <textarea
        className="chatInput"
        placeholder="Обсудить со всеми"
      ></textarea>
    </div>
  );
}

export default Chat;
