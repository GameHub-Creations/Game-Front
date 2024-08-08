import "./Chat.css";

import React, { useState } from "react";

import Dialogs from "./dialogs/Dialogs";
import Header from "./header/Header";
import HeaderCollapsed from "./headerCollapsed/HeaderCollapsed";
import InputMessages from "./inputMessages/InputMessages";

function Chat() {
  
  const [chatData, setChatData] = useState({
    headerStatusData: "block",
    headerCollapsedStatusData: "none",
    placeholderData: "Обсудить со всеми",
    dialogsData: [
      {
        namePlayerData: "Гость 88888888",
        messageData: "Я тебя разматаю",
        messageTimeData: "12:26",
      },
      {
        namePlayerData: "Гость 77777777",
        messageData: "Иди говна поешь",
        messageTimeData: "12:26",
      },
    ],
    inputMessageData: "",
  });

  return (
    <>
      {/* Блок чата */}
      <div
        className="chat"
        style={{ display: chatData.headerStatusData }}
      >
        {/* Блок заголовка чата */}
        <Header chatData={chatData} setChatData={setChatData} />
        <Dialogs dialogsData={chatData.dialogsData} />
        <InputMessages
          chatData={chatData} setChatData={setChatData}
        />
      </div>
      <HeaderCollapsed chatData={chatData} setChatData={setChatData} />
    </>
  );
}

export default Chat;
