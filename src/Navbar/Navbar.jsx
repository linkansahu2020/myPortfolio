import React from "react";

import "./Navbar.css";
import logo from "./logo.png"
function Navbar() {



  return (
    <div div className="nav">
     <div className="navbar">
     <a  href="#land">    <div className="logobody">
      <img src={logo} alt="" />
      </div></a>
    
      <div className="options">
        <div className="protfolio"><a href="#about">About </a></div>
        <div className="projects"><a href="#monster">Projects </a> </div>
        <div className="about"> <a href="#contact"> Contact </a> </div>
      </div>
     {/* <div className="menu">
       <img src={menu} alt="" />
     </div> */}
     
    </div>    
        <div className="linkcontainer">
                <div className="email">
                   <p>__________</p>
                   <a target="_blank" href={"mailto:" + "linkansahu2020@gmail.com"}>  <p> linkansahu2020@gmail.com</p></a>

                    
                   </div>      
       
                    <div className="account">
                    <a target="_blank" href={"https://github.com/linkansahu2020"}>      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <a target="_blank" href={"https://www.linkedin.com/in/linkan-kumar-sahu-90bb8a209/"}>  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    <a target="_blank" href={"mailto:" + "linkansahu2020@gmail.com"}>        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                   <p>______</p>

               </div>

                </div>
  
    </div>
  );
}

export default Navbar;
