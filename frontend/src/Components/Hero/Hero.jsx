import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow_icon.png';
import hand_icon from '../Assets/hand_icon.png';
import hero_icon from '../Assets/hero2_icon.jpeg';


 const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
        <div >
             
                 <img src={hand_icon} alt="" />
                 
                
                <div className="hero-hand-icon">
                <p>new</p>
             <p>collections</p></div>
             <div className="hero-hand-icon">
             <p>for everyone</p></div>
             </div>
            
             
    <div className="hero-latest-btn" style={{width: "210px", height: "50px"}}>
       Latest Collection
       <img src={arrow_icon} alt="" style={{width: "30px"}}/>
    </div>
    </div>
    <div className="hero-right">
     <img src={hero_icon} alt=""style={{width: "120vh", height: "80vh"}} />
    
     
    </div>
    </div>
  );
};
export default Hero;
