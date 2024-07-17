import "./HeaderCollapsed.css";

import { CiCircleChevUp, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function HeaderCollapsed(props) {
  function openChat() {
    // Разворачивает чат
    return props.dispatch({ type: "Click-Open-Chat" });
  }
  function closeChat() {
    // Закрывает чат
    return props.dispatch({ type: "Click-Close-Chat" });
  }
  return (
    <div
      className="headerCollapsed"
      style={{ display: props.headerCollapsedStatus }}
    >
      <LuMessageSquare className="headerCollapsedIcons headerCollapsedIconMessage" />
      <span className="headerCollapsedContent">Общие сообщения</span>
      <CiCircleChevUp
        className="headerCollapsedIcons headerCollapsedIconOpen"
        onClick={openChat}
      />
      <CiCircleRemove className="headerCollapsedIcons headerCollapsedIconClose" onClick={closeChat} />
    </div>
  );
}

export default HeaderCollapsed;
//
