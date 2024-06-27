import {
  faCircle,
  faCircleXmark,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Title(props) {
  return (
    <div className={props.classChatTitle}>
      <FontAwesomeIcon icon={faComments} className="chatTitleIconMessage" />
      <span className="chatTitleContent">Общие сообщения</span>
      <FontAwesomeIcon icon={faCircle} className="chatTitleIconCircleMinus" />
      <FontAwesomeIcon icon={faCircleXmark} className="chatTitleIconCircleCross"/>
    </div>
  );
}

export default Title;
