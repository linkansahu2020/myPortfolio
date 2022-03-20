import './App.css';
import 'animate.css';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import LandingPage from './HomePage/LandingPage';
import Navbar from './Navbar/Navbar';
import Monster from '../src/projects/Monster'
import Snapdeal from './projects/Snapdeal';
import Contact from './Contact/contact';
import Aboutme from './About me/Aboutme';
import { useEffect, useState } from 'react';
import Koovs from './projects/Koovs';

function App() {



  window.current?.scrollIntoView({behavior:"smooth"})
  const [loading, setloading] = useState(true)
  const override = css` 
  display:block;
  font-size: 10rem;
  width: 200px;
   .css-vuzd8u{
    width:400px;
     height:400px;
   }
 

  `;
  const color ="#3b978d"

  useEffect(() => {
   setTimeout(() => {
     setloading(false)
   }, 3000);
  }, [])


  return (loading?
    <div style={{backgroundColor:"rgb(10, 25, 47)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
     <HashLoader loading={loading} color={color} css={override} size={150} />
  </div>
    :<div className="App">
    <Navbar/>
      <div class="outer-wrapper">
   
  <div class="wrapper">
       <LandingPage/>  
       
    <div class="slide two">
    <Aboutme/>
    </div>
    <div class="slide three">
    <Monster/>
    </div>
    <div class="slide four">
    <Snapdeal/>
    </div>
    <div class="slide five">
      <Koovs/>
    </div>
    <div class="slide six">
      <Contact/>
    </div>
  </div>
</div>
    
    </div>
  );
}

export default App;