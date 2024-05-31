import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/detail" activeClassName="active">
            Detail
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
