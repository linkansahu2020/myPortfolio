import React from 'react'
import "./OPPO.css"
import html from "../Resourses/html (2).svg";
import css from "../Resourses/icons8-css3.svg";
import javascript from "../Resourses/icons8-js-squared (1).svg";
import snapdeal from "../Resourses/snapdeal.png"
import right from "../Resourses/rightarrow.png";
import left from "../Resourses/left.png";
import express from "../Resourses/icons8-js-squared (2).svg";
function Snapdeal() {
    return (
        <div id="co" className="viewBox">
             <div className="viewBox_heading">
             <h1>Snapdeal.com</h1>
             </div>
            <div className="container">
            <div className="description">
                <h1>Description</h1>
                <p>This is the clone of snapdeal.com which is an ecommerce website where an user can do online shoping of different products. </p>
                <div className="btn">
                <a target="_blank" href={"https://github.com/linkansahu2020/snapdeal-clone.git"}>       <div className="first">
                   Github link
                </div></a>
               <a target="_blank" href={"https://snapdeal-clone-zeta.vercel.app"}>     <div className="second">
                    Check Deployed link
                </div></a>
                
            </div>
            <div className="additional">
                <div className="colaborater">
                  
                </div>
                <div className="stacks">
                <img src={html} alt="" />
                    <img src={css} alt="" />
                  
                    <img src={express} alt=""/>
                    <img src={javascript} alt="" />

                </div>
            </div>
            </div>
           
            <div className="image">
            <img src={snapdeal} alt="" />
            </div>
            </div>
            <div className="mright">
      <a href="#oppo">
      <img src={left} alt="" />
         </a>
      <a href="#front">
          <img src={right} alt="" />
        </a>
      </div>
            
        </div>
    )
}

export default Snapdeal
