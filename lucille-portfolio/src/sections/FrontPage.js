import React from "react";
import IMAGES from "../assets/images/images.js";
import AllWorks from "../components/AllWorks.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { SliderData } from "../components/SliderData";
import scrollBar from "../assets/svgs/scroll-bar.svg";

function FrontPage() {
  return (
    <div className="home" id="home">
      <div className="scroll-container">
        <img className="scroll-bar" src={scrollBar} />
      </div>
      <section className="title-container">
        <div className="descrip-words">
          <p className="coding">Coding.</p>
          <p className="branding">Branding.</p>
          <p className="innovating">Innovating.</p>
          <p className="ux">UX/UI.</p>
        </div>
        <h1 className="name-title">
          <div className="lucille">Lucille</div>
          <div className="chesshire">Chesshire</div>
        </h1>
      </section>
      <button className="work-cta">
        <a href="#works">My Work</a>
      </button>
      <div className="arrow bounce">
        <a className="fa fa-arrow-down fa-2x" href="#works"></a>
      </div>
      <div className="line-deco"></div>
      <AllWorks slides={SliderData} />
      <About />
      <Contact />
    </div>
  );
}

export default FrontPage;
