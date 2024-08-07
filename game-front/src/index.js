import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

let _callSubscriber = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

_callSubscriber(store.getState());

store.subscribe(() => {
  _callSubscriber(store.getState());
});
