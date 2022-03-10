import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  return (
    <nav
      className="header"
      id="header"
      style={{
        backgroundColor:
          pathname === "/javascript-game"
            ? "#33b2f3"
            : pathname === "/movie-database"
            ? "black"
            : "#f9f9f7",
      }}
    >
      <ul>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
