import "./Header.css";

import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";

import { LuMessageSquare } from "react-icons/lu";
import React from "react";

function Header(props) {
  const {chatData, setChatData} = props;
  
  function turnChat() {
    // Сворачивает чат
    setChatData({
      ...chatData,
      headerStatusData: "none",
      headerCollapsedStatusData: "block",
    });
  }
  function closeChat() {
    // Закрывает чат
    setChatData({ ...chatData, headerStatusData: "none" });
  }
  return (
    <div className="header">
      <LuMessageSquare className="headerIcons headerIconMessage" />
      <span className="headerContent">Общие сообщения</span>
      <CiCircleChevDown
        className="headerIcons headerIconCollapse"
        onClick={turnChat}
      />
      <CiCircleRemove
        className="headerIcons headerIconClose"
        onClick={closeChat}
      />
    </div>
  );
}

export default Header;
//
