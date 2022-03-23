import React from 'react'
import "./contact.css"
import home from "../Resourses/home.svg";
import left from "../Resourses/left.png";

function Contact() {
    return (
        <div id="contact" className="contacts">
            <h1>OK, LET’S CREATE <br/>  SOMETHING GREAT</h1>

 <h3>If you like my work and have some cool project to work on, just send direct message or Contact me through social sites listed below.</h3>
            <div className='account_link'>
              <a target="_blank" href={"https://github.com/linkansahu2020"}>      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a target="_blank" href={"https://www.linkedin.com/in/linkan-kumar-sahu-90bb8a209/"}>  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div> 
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
