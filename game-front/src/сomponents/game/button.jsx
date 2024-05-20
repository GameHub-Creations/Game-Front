import React from "react";

function Button(props) {
  function onButtonClick() {
    return alert("click on button");
  }

  return (
    <button onClick={onButtonClick} className={props.classButton}>
      {props.valueButton}
    </button>
  );
}

export default Button;
