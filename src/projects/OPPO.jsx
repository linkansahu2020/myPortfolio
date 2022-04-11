import React from 'react'
import "./OPPO.css"
import html from "../Resourses/html (2).svg";
import css from "../Resourses/icons8-css3.svg";
import react from "../Resourses/icons8-react-native.svg";
import javascript from "../Resourses/icons8-js-squared (2).svg";
import OPPOimg from './OPPOimg.png'
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";

function OPPO() {
    return (
        <div id="oppo" className="viewBox">
            <div className="viewBox_heading">
            <h1>OPPO Clone</h1>
            </div>
            
            <div className="container">
            <div className="description">
                <h1>Description</h1>
                <p>This is the clone of oppo.com which is a website where an user can do online shoping of different electronics products.</p>
                <div className="btn">
                <a target="_blank" href={"https://github.com/linkansahu2020/OPPO-Frontend.git"}>         <div className="first">
                   Github link
                </div></a>
                <a target="_blank" href={"https://oppo-clone.vercel.app/"}>      <div className="second">
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
            <img src={OPPOimg} alt="" />
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

export default OPPO;
