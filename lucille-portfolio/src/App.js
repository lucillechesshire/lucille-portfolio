import React from "react";
import Header from "./sections/Header";
import SingleWorks from "./sections/SingleWorks";
import Footer from "./components/Footer";
import FrontPage from "./sections/FrontPage";
import { Routes } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// import AnimatedCursor from "react-animated-cursor";
import PageNotFound from "./components/PageNotFound";
import Cursor from "../src/components/cursor/Cursor";

function App() {
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1020px)",
  });

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Cursor />

      {/* <AnimatedCursor
        className="cursor"
        innerSize={35}
        outerSize={70}
        color="238, 52, 210"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <>
            <Route path="/" element={<FrontPage isOpen={isOpen} />} />
            <Route path="/:slug" element={<SingleWorks isOpen={isOpen} />} />
            <Route path="/404" element={<PageNotFound />} />
          </>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
