import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className={props.classHeaderMenu}>
      <NavLink
        className={props.classMenuItem}
        activeClassName={props.classActive}
        to="/"
      >
        Игра
      </NavLink>
      <NavLink
        className={props.classMenuItem}
        activeClassName={props.classActive}
        to="/main"
      >
        Главная страница
      </NavLink>
      <NavLink
        className={props.classMenuItem}
        activeClassName={props.classActive}
        to="/avatar"
      >
        Личный кабинет
      </NavLink>
    </div>
  );
}
export default Header;
