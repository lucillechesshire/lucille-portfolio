import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/luce-logo.png";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <input id="burger" type="checkbox" />

      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

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
        <Link to="/">
          <img className="logo" src={logo}></img>
        </Link>
        <ul>
          <li>
            <HashLink to="/#works">Works</HashLink>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
