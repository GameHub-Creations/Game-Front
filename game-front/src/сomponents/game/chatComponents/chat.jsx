import "./Chat.css";

import React, { useState } from "react";

import Dialogs from "./dialogs/Dialogs";
import Header from "./header/Header";
import HeaderCollapsed from "./headerCollapsed/HeaderCollapsed";
import InputMessages from "./inputMessages/InputMessages";

function Chat() {
  
  const [chatData, setChatData] = useState({
    headerStatus: "block",
    headerCollapsedStatus: "none",
    placeholder: "Обсудить со всеми",
    dialogs: [
      {
        namePlayer: "Гость 88888888",
        message: "Я тебя разматаю",
        messageTime: "12:26",
      },
      {
        namePlayer: "Гость 77777777",
        message: "Иди говна поешь",
        messageTime: "12:26",
      },
    ],
    inputMessage: "",
  });

  return (
    <>
      {/* Блок чата */}
      <div
        className="chat"
        style={{ display: chatData.headerStatus }}
      >
        {/* Блок заголовка чата */}
        <Header chatData={chatData} setChatData={setChatData} />
        <Dialogs dialogs={chatData.dialogs} /> 
        <InputMessages
          chatData={chatData} setChatData={setChatData}
        />
      </div>
      <HeaderCollapsed chatData={chatData} setChatData={setChatData} />
    </>
  );
}

export default Chat;
