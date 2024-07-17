import "./ButtonTakeCards.css";

import React from "react";

function ButtonTakeCards(props) {

  function onClickButton() {
    return props.dispatch({ type: "Click-Button" })
  }

  
  return (
    <button
      className={props.classButton}
      onClick={onClickButton}
    >
      {props.valueButton}
    </button>
  );
}

export default ButtonTakeCards;
