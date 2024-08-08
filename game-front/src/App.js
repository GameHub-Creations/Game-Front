import "./App.css";

import { Route, Routes } from "react-router-dom";

import Avatar from "./сomponents/avatar/avatar";
import GameField from "./сomponents/game/gameField/GameField";
import Header from "./сomponents/game/header/Header";
import Main from "./сomponents/main/main";

function App() {
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
            <GameField />
          }
        />
        <Route path="/main" element={<Main />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
}

export default App;
