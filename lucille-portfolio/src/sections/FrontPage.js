import React from "react";
import IMAGES from "../assets/images/images.js";
import AllWorks from "../components/AllWorks.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { SliderData } from "../components/SliderData";
// import scrollBar from "../assets/svgs/scroll-bar.svg";

function FrontPage() {
  return (
    <div className="home" id="home">
      {/* <div className="scroll-container">
        <img className="scroll-bar" src={scrollBar} />
      </div> */}
      <section className="title-container">
        <div className="descrip-words">
          <p className="jt --debug coding">
            <span className="jt__row">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
          </p>
          <p className="jt --debug branding">
            <span className="jt__row">
              <span className="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span class="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Branding.</span>
            </span>
          </p>

          <p className="jt --debug innovating">
            <span className="jt__row">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
          </p>

          <p className="jt --debug designing">
            <span className="jt__row">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
          </p>
        </div>
        <h1 className="name-title">
          <div className="lucille">Lucille</div>
          <div className="chesshire">
            Chesshire<span className="dot">.</span>
          </div>
        </h1>
      </section>
      <button className="work-cta">
        <a href="#works">My Work</a>
      </button>
      <div className="arrow bounce">
        <a className="fa fa-arrow-down fa-2x" href="#works"></a>
      </div>
      <AllWorks slides={SliderData} />
      <About />
      <Contact />
    </div>
  );
}

export default FrontPage;
