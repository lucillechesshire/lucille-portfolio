import React, { StrictMode } from "react";
import Header from "./sections/Header";
import SingleWorks from "./sections/SingleWorks";
import Footer from "./components/Footer";
import FrontPage from "./sections/FrontPage";
import { Routes } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import ErrorPage from "./components/ErrorPage";
import { StrictMode } from "react";

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <CustomCursor />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <>
            <Route path="/" element={<FrontPage isOpen={isOpen} />} />
            <Route path="/:slug" element={<SingleWorks isOpen={isOpen} />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
