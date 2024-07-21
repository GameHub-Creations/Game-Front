import "./Header.css";

import { NavLink } from "react-router-dom";
import React from "react";

function Header(props) {
  return (
    <div className={props.classHeaderMenu}>
      <NavLink
        className={props.classMenuItem}
        to="/"
      >
        Игра
      </NavLink>
      <NavLink
        className={props.classMenuItem}
        to="/main"
      >
        Главная страница
      </NavLink>
      <NavLink
        className={props.classMenuItem}
        to="/avatar"
      >
        Личный кабинет
      </NavLink>
    </div>
  );
}
export default Header;
