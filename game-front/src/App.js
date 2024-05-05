import GameField from "./сomponents/game/gameField";
import "./styles/game/gameField.css";

import "./App.css";
import Header from "./сomponents/game/header";
import "./styles/game/header.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Avatar from "./сomponents/avatar/avatar";
import Main from "./сomponents/main/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header classHeaderMenu="headerMenu" classMenuItem="menuItem" classActive="active"/>
        <Routes>
          <Route path="/" element={<GameField />} />
          <Route path="/main" element={<Main />} />
          <Route path="/avatar" element={<Avatar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
