import "./../../../styles/game/chatComponents/chatTitle.css";

import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function ChatTitle(props) {
  function turnChat() {
    // Сворачивает чат
    return props.dispatch({ type: "Click-Turn-Chat" });
  }

  return (
    <div className="chatTitle" >
      <LuMessageSquare className="chatTitleIconMessage" />
      <span className="chatTitleContent">Общие сообщения</span>
      <CiCircleChevDown
        className="chatTitleIconCircleMinus"
        onClick={turnChat}
      />
      <CiCircleRemove className="chatTitleIconCircleCross" />
    </div>
  );
}

export default ChatTitle;
//
