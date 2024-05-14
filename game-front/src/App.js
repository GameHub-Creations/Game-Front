import "./styles/game/gameField.css";
import "./App.css";
import "./styles/game/header.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Avatar from "./сomponents/avatar/avatar";
import GameField from "./сomponents/game/gameField";
import Header from "./сomponents/game/header";
import Main from "./сomponents/main/main";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header
          classHeaderMenu="headerMenu"
          classMenuItem="menuItem"
          classActive="active"
        />
        <Routes>
          <Route
            path="/"
            element={
              <GameField
                closedDeckElements={props.closedDeckElements}
                openDeckElements={props.openDeckElements}
                firsTemporaryDeckElements={props.firsTemporaryDeckElements}
                handDeck0Elements={props.handDeck0Elements}
                handDeck1Elements={props.handDeck1Elements}
              />
            }
          />
          <Route path="/main" element={<Main />} />
          <Route path="/avatar" element={<Avatar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
