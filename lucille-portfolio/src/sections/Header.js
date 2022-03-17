import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/luce-logo.png";
import { HashLink } from "react-router-hash-link";
import Particles from "../components/Particles";
import { motion } from "framer-motion";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <input id="burger" type="checkbox" checked={isOpen ? true : false} />

      <label for="burger" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio"
                ? "white"
                : "white",
          }}
        ></span>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio"
                ? "white"
                : "white",
          }}
        ></span>
        <span
          style={{
            background:
              pathname === "/movie-database" ||
              pathname === "/javascript-game" ||
              pathname === "/portfolio"
                ? "white"
                : "white",
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
            ? "black"
            : pathname === "/movie-database"
            ? "black"
            : pathname === "/portfolio"
            ? "black"
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
                    pathname === "/portfolio"
                      ? "white"
                      : "black",
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
                    pathname === "/portfolio"
                      ? "white"
                      : "black",
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
                    pathname === "/portfolio"
                      ? "white"
                      : "black",
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
