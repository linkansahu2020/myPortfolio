import React from "react";
import "./Monster.css";
import html from "../Resourses/html (2).svg";
import css from "../Resourses/icons8-css3.svg";
// import react from "../Resourses/icons8-react-native.svg";
import javascript from "../Resourses/icons8-js-squared (2).svg";
import Koov from "../Resourses/Koovs.png";
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";

function Koovs() {
  return (
    <div id="front" className="viewBox">
      <div className="viewBox_heading">
        <h1>KOOVS.com</h1>
      </div>
      <div className="container">
        <div className="description">
          <h1>Description</h1>
          <p>
            An exact clone of Online Shoping Platform website KOOVS.com  using
            HTML, CSS, Javascript and DOM.
          </p>
          <div className="btn">
            <a target="_blank"href={"https://github.com/RishabhTG209/KOOVS_Clone.git"}>
              <div className="first">Github link</div>
            </a>
            <a target="_blank" href={"https://vigorous-meitner-b9028e.netlify.app/"}>
              <div className="second">Check Deployed link</div>
            </a>
          </div>
          <div className="additional">
            <div className="colaborater"></div>
            <div className="stacks">
              <img src={html} alt="" />
              <img src={css} alt="" />
              {/* <img src={react} alt="" /> */}
              <img src={javascript} alt="" />
            </div>
          </div>
        </div>

        <div className="image">
          <img src={Koov} alt="" />
        </div>
      </div>
      <div className="Aright">
        <a href="#co">
          <img src={left} alt="" />
        </a>
        <a href="#contact">
          <img src={right} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Koovs;
