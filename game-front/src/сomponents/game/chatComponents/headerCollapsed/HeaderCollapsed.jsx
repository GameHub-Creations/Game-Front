import "./HeaderCollapsed.css";

import { CiCircleChevUp, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function HeaderCollapsed(props) {

  const {chatData, setChatData} = props;
  
  function openChat() {
    // Сворачивает чат
    setChatData({
      ...chatData,
      headerStatus: "block",
      headerCollapsedStatus: "none",
    });
  }
  function closeChat() {
    // Закрывает чат
    setChatData({
      ...chatData,
      headerStatus: "none",
      headerCollapsedStatus: "none",
    });
  }

  return (
    <div
      className="headerCollapsed"
      style={{ display: chatData.headerCollapsedStatus }}
    >
      <LuMessageSquare className="headerCollapsedIcons headerCollapsedIconMessage" />
      <span className="headerCollapsedContent">Общие сообщения</span>
      <CiCircleChevUp
        className="headerCollapsedIcons headerCollapsedIconOpen"
        onClick={openChat}
      />
      <CiCircleRemove
        className="headerCollapsedIcons headerCollapsedIconClose"
        onClick={closeChat}
      />
    </div>
  );
}

export default HeaderCollapsed;
//
