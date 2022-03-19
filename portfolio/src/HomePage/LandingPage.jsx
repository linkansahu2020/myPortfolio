import React from "react";
import "./Landiingpage.css";
import logo from "../Resourses/icons8-node-js (5).svg";
import css from "../Resourses/icons8-css3.svg";
import express from "../Resourses/icons8-js-squared (2).svg";
import html from "../Resourses/html (2).svg";
import javascript from "../Resourses/icons8-js-squared (1).svg";
import react from "../Resourses/icons8-react-native.svg";
import mongo from "../Resourses/icons8-mongodb.svg";
import profile from "../Resourses/profile.jpeg";
import right from "../Resourses/rightarrow.png";
import Resume from "../Resourses/Resume.pdf";

import "animate.css";
function LandingPage() {
  return (
    <>
      <div id="land" className="First_view">
        <div className="profile">
          <div className="profileimg">
          <img src={profile} alt="" />
          </div>
          
          <div className="animations">
            <div className="intro">
              <h2>Hi, my name is</h2>
            </div>
            <div className="myname">
              <h1>Linkan Kumar Sahu</h1>
              <h2>I build things for the web.</h2>
              <div className="btns">
                <a target="_blank" href={"mailto:" + "linkansahu2020@gmail.com"}>
                  <div className="get">Get in Touch</div>
                </a>
                <a target="_blank" href='https://docs.google.com/document/d/1qgWZ8mPq6nbjdSbr-QQToFHShqfYJRTm6YcK-afN178/edit?usp=sharing'>              
                  <div className="get">Resume</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="TechStacks">
          <div className="Techimage">
            <img
              className="animate__animated animate__fadeInLeft "
              src={express}
              alt=""
            />
            <img
              className="animate__animated animate__fadeInLeft animate__delay-1s"
              src={html}
              alt=""
            />
            <img
              className="animate__animated animate__fadeInLeft animate__delay-2s"
              src={logo}
              alt=""
            />
            <img
              className=" ashish animate__animated animate__fadeInLeft animate__delay-3s "
              src={react}
              alt=""
            />
            <img
              className="animate__animated animate__fadeInRight animate__delay-2s "
              src={javascript}
              alt=""
            />
            <img
              className="animate__animated animate__fadeInRight animate__delay-1s "
              src={mongo}
              alt=""
            />
            <img
              className="animate__animated animate__fadeInRight "
              src={css}
              alt=""
            />
          </div>
        </div>
        <div className="right">
        <a href="#about">  <img src={right} alt="" /></a>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
