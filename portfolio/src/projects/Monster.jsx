import React from 'react'
import "./Monster.css"
import html from "../Resourses/html (2).svg";
import css from "../Resourses/icons8-css3.svg";
import react from "../Resourses/icons8-react-native.svg";
import javascript from "../Resourses/icons8-js-squared (2).svg";
import monsterpic from "./monsterpic.png"
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";

function Monster() {
    return (
        <div id="monster" className="viewBox">
            <div className="viewBox_heading">
            <h1>Monsterjob.com clone</h1>
            </div>
            
            <div className="container">
            <div className="description">
                <h1>Description</h1>
                <p>An exact clone of the well-known job search site using React, Javascript,HTML, CSS and Redux.</p>
                <div className="btn">
                <a target="_blank" href={"https://github.com/Darshan-Naik/Monster_clone"}>         <div className="first">
                   Github link
                </div></a>
                <a target="_blank" href={"https://monster-clone.vercel.app/"}>      <div className="second">
                    Check Deployed link
                </div></a>
                
            </div>
            <div className="additional">
                <div className="colaborater">
                  
                </div>
                <div className="stacks">
                <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={react} alt="" />
                    <img src={javascript} alt="" />

                </div>
            </div>
            </div>
           
            <div className=" imagee">
            <img src={monsterpic} alt="" />
            </div>
            </div>
            <div className="mright">
      <a href="#about">
      <img src={left} alt="" />
         </a>
      <a href="#co">
          <img src={right} alt="" />
        </a>
      </div>
        </div>
    )
}

export default Monster
