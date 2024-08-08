import "./ButtonTakeCards.css";

import React, { useState } from "react";

function ButtonTakeCards(props) {
  const [buttonData, setButtonData] = useState("Взять карты");

  function onClickButton2() {
    return alert("click on button");
  }

  return (
    <button className="userButton" onClick={onClickButton2}>
      {buttonData}
    </button>
  );
}

export default ButtonTakeCards;
