import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/luce-logo.png";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <input id="burger" type="checkbox" checked={isOpen ? true : false} />

      <label for="burger" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            background: pathname === "/movie-database" ? "white" : "black",
          }}
        ></span>
        <span
          style={{
            background: pathname === "/movie-database" ? "white" : "black",
          }}
        ></span>
        <span
          style={{
            background: pathname === "/movie-database" ? "white" : "black",
          }}
        ></span>
      </label>

      <nav
        className="header"
        id="header"
        style={{
          backgroundColor: !isOpen
            ? "transparent"
            : pathname === "/javascript-game"
            ? "#33b2f3"
            : pathname === "/movie-database"
            ? "black"
            : "#f9f9f7",
        }}
      >
        <Link to="/">
          <img className="logo" src={logo}></img>
        </Link>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <HashLink
              to="/#works"
              style={{
                color: pathname === "/movie-database" ? "white" : "black",
              }}
            >
              Works
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#about"
              style={{
                color: pathname === "/movie-database" ? "white" : "black",
              }}
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              style={{
                color: pathname === "/movie-database" ? "white" : "black",
              }}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
