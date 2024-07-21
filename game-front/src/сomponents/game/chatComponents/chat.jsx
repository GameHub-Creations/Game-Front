import "./Chat.css";

import Dialogs from "./dialogs/Dialogs";
import Header from "./header/Header";
import HeaderCollapsed from "./headerCollapsed/HeaderCollapsed";
import InputMessages from "./inputMessages/InputMessages";
import React from "react";

function Chat(props) {
  // function useOutsideAlerter(onOutsideClick) {
  //   const ref = useRef();

  //   useEffect(() => {
  //     function handleClick(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         onOutsideClick();
  //       }
  //     }

  //     document.addEventListener("mousedown", handleClick);

  //     return () => {
  //       document.removeEventListener("mousedown", handleClick);
  //     };
  //   }, [onOutsideClick]);

  //   return ref;
  // }
  // function removeCursor(event) {
  //   // Разворачивает чат
  //   // let element = document.querySelector(".chat");
  //   // let withinBoundaries = event.composedPath().includes(element);
  //   return props.dispatch({
  //     type: "Remove-Cursor",
  //     // element: element,
  //     // click: withinBoundaries,
  //   });
  // }

  return (
    <>
      {/* Блок чата */}
      <div
        className="chat"
        style={{ display: props.headerStatus }}
        // ref={removeCursor}
      >
        {/* Блок заголовка чата */}
        <Header
          style={{ display: props.dialogsStatus }}
          dispatch={props.dispatch}
        />
        <Dialogs dialogsData={props.dialogsData} dispatch={props.dispatch} />
        <InputMessages
          placeholderData={props.placeholderData}
          inputMessageData={props.inputMessageData}
          dispatch={props.dispatch}
        />
      </div>
      <HeaderCollapsed
        headerCollapsedStatus={props.headerCollapsedStatus}
        dispatch={props.dispatch}
      />
    </>
  );
}

export default Chat;
