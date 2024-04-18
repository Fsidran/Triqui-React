import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Juego</li>
        </NavLink>
        <NavLink
          to="/Results"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Resultados</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
