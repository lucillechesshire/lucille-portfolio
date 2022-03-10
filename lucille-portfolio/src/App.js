import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import SingleWorks from "./sections/SingleWorks";
import Footer from "./components/Footer";
import AllWorks from "./components/AllWorks";
import FrontPage from "./sections/FrontPage";
import { Routes } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/:slug" element={<SingleWorks />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
