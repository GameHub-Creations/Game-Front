import "./App.css";

import { Route, Routes } from "react-router-dom";

import Avatar from "./сomponents/avatar/avatar";
import GameField from "./сomponents/game/gameField/GameField";
import Header from "./сomponents/game/header/Header";
import Main from "./сomponents/main/main";

function App(props) {
  return (
    <div>
      <Header
        classHeaderMenu="headerMenu"
        classMenuItem="menuItem"
      />
      <Routes>
        <Route
          path="/"
          element={
            <GameField
              closedDeckData={props.state.gamePage.closedDeckData}
              openDeckData={props.state.gamePage.openDeckData}
              firsTemporaryDeckData={props.state.gamePage.firsTemporaryDeckData}
              handDeck0Data={props.state.gamePage.handDeck0Data}
              handDeck1Data={props.state.gamePage.handDeck1Data}
              valueActionData={props.state.gamePage.valueActionData}
              valueButtonData={props.state.gamePage.valueButtonData}
              headerStatus={props.state.gamePage.chat.headerStatus}
              headerCollapsedStatus={props.state.gamePage.chat.headerCollapsedStatus}
              dialogsData={props.state.gamePage.chat.dialogsData}
              placeholderData={props.state.gamePage.chat.placeholder}
              inputMessageData={props.state.gamePage.chat.inputMessageData}
              dispatch={props.dispatch}
            />
          }
        />
        <Route path="/main" element={<Main />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
}

export default App;
