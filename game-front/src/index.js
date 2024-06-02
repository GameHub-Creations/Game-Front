import "./index.css";

// import reportWebVitals from "./reportWebVitals";
import state, {
  addMessage,
  changeMessage,
  clickButton,
  clickCard,
  subscribe,
} from "./state";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        closedDeckData={state.gamePage.closedDeckData}
        openDeckData={state.gamePage.openDeckData}
        firsTemporaryDeckData={state.gamePage.firsTemporaryDeckData}
        
        handDeck0Data={state.gamePage.handDeck0Data}
        handDeck1Data={state.gamePage.handDeck1Data}
        clickCard={clickCard}
        
        valueActionData={state.gamePage.valueActionData}
        
        valueButtonData={state.gamePage.valueButtonData}
        clickButton={clickButton}
        
        
        dialogsData={state.gamePage.chat.dialogsData}
        inputMessageData={state.gamePage.chat.inputMessageData}
   
        addMessage={addMessage}
        changeMessage={changeMessage}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
