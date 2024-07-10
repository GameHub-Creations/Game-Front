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
      <LuMessageSquare className="headerIconMessage" />
      <span className="headerContent">Общие сообщения</span>
      <CiCircleChevDown className="headerIconCollapse" onClick={turnChat} />
      <CiCircleRemove className="headerIconClose" onClick={closeChat} />
    </div>
  );
}

export default Header;
//
