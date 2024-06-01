import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

export let rerenderEntireTree = (
  state,
  clickButton,
  clickCard,
  addMessage,
  changeMessage,
) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        closedDeckData={state.gamePage.closedDeckData}
        openDeckData={state.gamePage.openDeckData}
        firsTemporaryDeckData={state.gamePage.firsTemporaryDeckData}
        handDeck0Data={state.gamePage.handDeck0Data}
        handDeck1Data={state.gamePage.handDeck1Data}
        valueActionData={state.gamePage.valueActionData}
        valueButtonData={state.gamePage.valueButtonData}
        dialogsData={state.gamePage.chat.dialogsData}
        inputData={state.gamePage.chat.inputData}
        clickButton={clickButton}
        clickCard={clickCard}
        addMessage={addMessage}
        changeMessage={changeMessage}
      />
    </React.StrictMode>
  );
};

reportWebVitals();
