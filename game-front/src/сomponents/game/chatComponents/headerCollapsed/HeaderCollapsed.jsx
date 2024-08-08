import "./HeaderCollapsed.css";

import { CiCircleChevUp, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function HeaderCollapsed(props) {

  let {chatData, setChatData} = props;
  
  function openChat() {
    // Сворачивает чат
    setChatData({
      ...chatData,
      headerStatusData: "block",
      headerCollapsedStatusData: "none",
    });
  }
  function closeChat() {
    // Закрывает чат
    setChatData({
      ...chatData,
      headerStatusData: "none",
      headerCollapsedStatusData: "none",
    });
  }

  return (
    <div
      className="headerCollapsed"
      style={{ display: chatData.headerCollapsedStatusData }}
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
