import React from "react";
import "./Aboutme.css";
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";

function Aboutme() {
  return (
    <div id="about">
      <div className="personal">
        <h1>About Me</h1>
        <p><span>★  </span>
         A passionate programmer with ability to learn quickly and implement
          and also versatile enough to learn and work in new environment
          Currently looking for an opportunity to work for an organization where
          I can contribute my skills and manage key projects that impact the
          organization, as well as broaden my scope of learning from the
          organization’s team members. </p>
          <p><span>★</span>  A very Enthusiastic person who loves to
          do a job with perfection. I believe that the solution to real-world
          problems is modern technologies. Always interested in talking about
          Data Structures and algorithms. </p>
          <p><span>★</span>My personal interest lies in playing cricket and  stand-up comedy.
          Also, I love spending time to solving t Rubik's, pyramid and Chinese
          cube.
        </p>
      </div>
      <div className="Aright">
      <a href="#land">
      <img src={left} alt="" />
         </a>
      <a href="#oppo">
          <img src={right} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Aboutme;
