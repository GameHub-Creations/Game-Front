import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./state";

// import reportWebVitals from "./reportWebVitals";


let _callSubscriber = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        state={state}
        clickCard={store.clickCard.bind(store)}
        clickButton={store.clickButton.bind(store)}
        addMessage={store.addMessage.bind(store)}
        changeMessage={store.changeMessage.bind(store)}
      />
    </React.StrictMode>
  );
};

_callSubscriber(store.getState());

store.subscribe(_callSubscriber);
