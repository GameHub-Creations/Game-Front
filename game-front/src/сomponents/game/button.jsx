import React from "react";

function Button(props) {
  return (
    <button
      className={props.classButton}
      onClick={props.dispatch({ type: "Click-Button" })}
    >
      {props.valueButton}
    </button>
  );
}

export default Button;
