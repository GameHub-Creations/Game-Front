import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import state from "./state";

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
    />
  </React.StrictMode>
);

reportWebVitals();
