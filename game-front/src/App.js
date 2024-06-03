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


                closedDeckData={props.state.gamePage.closedDeckData}
                openDeckData={props.state.gamePage.openDeckData}
                firsTemporaryDeckData={props.state.gamePage.firsTemporaryDeckData}
                
                handDeck0Data={props.state.gamePage.handDeck0Data}
                handDeck1Data={props.state.gamePage.handDeck1Data}
                clickCard={props.clickCard}
                
                valueActionData={props.state.gamePage.valueActionData}
                
                valueButtonData={props.state.gamePage.valueButtonData}
                clickButton={props.clickButton}
                
                
                dialogsData={props.state.gamePage.chat.dialogsData}
                inputMessageData={props.state.gamePage.chat.inputMessageData}
          
                addMessage={props.addMessage}
                changeMessage={props.changeMessage}

  
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
