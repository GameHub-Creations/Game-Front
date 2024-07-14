import "./../../../styles/game/chatComponents/header.css";

import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function Header(props) {
  function turnChat() {
    // Сворачивает чат
    return props.dispatch({ type: "Click-Turn-Chat" });
  }
  function closeChat() {
    // Закрывает чат
    return props.dispatch({ type: "Click-Close-Chat" });
  }
  return (
    <div className="header">
      <LuMessageSquare className="headerIcons headerIconMessage" />
      <span className="headerContent">Общие сообщения</span>
      <CiCircleChevDown className="headerIcons headerIconCollapse" onClick={turnChat} />
      <CiCircleRemove className="headerIcons headerIconClose" onClick={closeChat} />
    </div>
  );
}

export default Header;
//
