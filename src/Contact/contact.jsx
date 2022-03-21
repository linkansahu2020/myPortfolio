import React from 'react'
import "./contact.css"
import home from "../Resourses/home.svg";
import left from "../Resourses/left.png";

function Contact() {
    return (
        <div id="contact" className="contacts">
            <h1>OK, LET’S CREATE <br/>  SOMETHING GREAT</h1>

 <h3>If you like my work and have some cool project to work on, just send direct message or Contact me through social sites listed below.</h3> 
            <div className="Email"> 
              <a href={"mailto:" + "aroul303@gmail.com"}>  Get in Touch</a> 
           

            </div>
            <div>
                
            </div>
            <div className="mright">
      <a href="#front">
      <img src={left} alt="" />
         </a>
      <a href="#land">
          <img src={home} alt="" />
        </a>
        </div>
        </div>
    )
}

export default Contact
