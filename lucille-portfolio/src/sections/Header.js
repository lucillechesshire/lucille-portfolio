import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo/luce-logo.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Header({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();
  //const [navLinkColor, setNavLinkColor] = useState("#fff");

  function blurOnClick(e) {
    console.log(e.target);

    e.target.blur();
  }

  return (
    <>
      <input
        id="burger"
        type="checkbox"
        checked={isOpen ? true : false}
        readOnly={true}
        alt="navigation burger"
      />
      {console.log(pathname)}
      <label htmlFor="burger" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            backgroundColor: "#ffffff",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#ffffff",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#ffffff",
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
            <HashLink to="/#works" onClick={blurOnClick}>
              <motion.span
                style={{
                  display: "inline-block",
                  color: pathname !== "/" ? "#ffffff" : "#000000",
                }}
                whileHover={{ scale: 1.2 }}
              >
                Works
              </motion.span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" onClick={blurOnClick}>
              <motion.span
                style={{
                  display: "inline-block",
                  color: pathname !== "/" ? "#ffffff" : "#000000",
                }}
                whileHover={{ scale: 1.2 }}
              >
                About
              </motion.span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contact" onClick={blurOnClick}>
              <motion.span
                style={{
                  display: "inline-block",
                  color: pathname !== "/" ? "#ffffff" : "#000000",
                }}
                whileHover={{ scale: 1.2 }}
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
