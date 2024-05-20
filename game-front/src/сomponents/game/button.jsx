import React from "react";

function Button(props) {
  return (
    <button className={props.classButton} onClick={props.clickButton}>
      {props.valueButton}
    </button>
  );
}

export default Button;
