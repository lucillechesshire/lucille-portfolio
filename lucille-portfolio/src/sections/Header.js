import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/luce-logo.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Header({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  return (
    <>
      <input
        id="burger"
        type="checkbox"
        checked={isOpen ? true : false}
        readOnly={true}
        alt="navigation burger"
      />

      <label htmlFor="burger" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio" ||
              pathname === "/calculator"
                ? "white"
                : "white",
          }}
        ></span>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio" ||
              pathname === "/calculator"
                ? "#ffffff"
                : "#ffffff",
          }}
        ></span>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio" ||
              pathname === "/calculator"
                ? "#ffffff"
                : "#ffffff",
          }}
        ></span>
      </label>

      <nav
        alt="navigation menu"
        className="header"
        id="header"
        style={{
          backgroundColor: !isOpen
            ? "transparent"
            : pathname === "/javascript-game"
            ? "#000000"
            : pathname === "/movie-database"
            ? "#000000"
            : pathname === "/portfolio"
            ? "#000000"
            : pathname === "/calculator"
            ? "#000000"
            : "#f9f9f7",
        }}
      >
        <Link to="/">
          <motion.img
            onClick={() => setIsOpen(false)}
            whileHover={{
              scale: 1.1,
              rotate: -15,
            }}
            className="logo"
            src={logo}
          ></motion.img>
        </Link>
        <ul
          style={{ pointerEvents: !isOpen ? "none" : "auto" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <li>
            <HashLink to="/#works">
              <motion.span
                style={{
                  display: "inline-block",
                  color:
                    pathname === "/movie-database" ||
                    pathname === "/javascript-game" ||
                    pathname === "/portfolio" ||
                    pathname === "/calculator"
                      ? "#ffffff"
                      : "#000000",
                }}
                whileHover={{ scale: 1.2, color: "#ff0084" }}
              >
                Works
              </motion.span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about">
              <motion.span
                style={{
                  display: "inline-block",
                  color:
                    pathname === "/movie-database" ||
                    pathname === "/javascript-game" ||
                    pathname === "/portfolio" ||
                    pathname === "/calculator"
                      ? "#ffffff"
                      : "#000000",
                }}
                whileHover={{ scale: 1.2, color: "#ff0084" }}
              >
                About
              </motion.span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contact">
              <motion.span
                style={{
                  display: "inline-block",
                  color:
                    pathname === "/movie-database" ||
                    pathname === "/javascript-game" ||
                    pathname === "/portfolio" ||
                    pathname === "/calculator"
                      ? "#ffffff"
                      : "#000000",
                }}
                whileHover={{ scale: 1.2, color: "#ff0084" }}
              >
                Contact
              </motion.span>
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
