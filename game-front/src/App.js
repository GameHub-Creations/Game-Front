import "./App.css";
import "./styles/game/gameField.css";
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
                closedDeckData={props.closedDeckData}
                openDeckData={props.openDeckData}
                firsTemporaryDeckData={props.firsTemporaryDeckData}
                handDeck0Data={props.handDeck0Data}
                handDeck1Data={props.handDeck1Data}
                valueActionData={props.valueActionData}
                valueButtonData={props.valueButtonData}
                dialogsData={props.dialogsData}
                clickButton={props.clickButton}
                clickCard={props.clickCard}
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
