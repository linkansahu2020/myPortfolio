import React from 'react'
import "./Monster.css"
import html from "../Resourses/html (2).svg";
import css from "../Resourses/icons8-css3.svg";
import javascript from "../Resourses/icons8-js-squared (2).svg";
import monsterpic from "./co.png"
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";
function Coshedeuled() {
    return (
        <div id="co" className="viewBox">
             <div className="viewBox_heading">
             <h1>Coshedeuled.com clone</h1>
             </div>
            <div className="container">
            <div className="description">
                <h1>Description</h1>
                <p>This is the clone of CoSchedule.com which deals with Organize All Of Your Marketing In One Place.</p>
                <div className="btn">
                <a target="_blank" href={"https://github.com/khushbookhator/CoSchedule_clone"}>       <div className="first">
                   Github link
                </div></a>
               <a target="_blank" href={"https://coschedule-clonee.netlify.app/"}>     <div className="second">
                    Check Deployed link
                </div></a>
                
            </div>
            <div className="additional">
                <div className="colaborater">
                  
                </div>
                <div className="stacks">
                <img src={html} alt="" />
                    <img src={css} alt="" />
                  
                    <img src={javascript} alt="" />

                </div>
            </div>
            </div>
           
            <div className="image">
            <img src={monsterpic} alt="" />
            </div>
            </div>
            <div className="mright">
      <a href="#monster">
      <img src={left} alt="" />
         </a>
      <a href="#front">
          <img src={right} alt="" />
        </a>
      </div>
            
        </div>
    )
}

export default Coshedeuled
