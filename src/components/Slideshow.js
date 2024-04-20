import React, { useState, useEffect } from 'react';
import slidenext from '../images/forwardarrow.png';
import slideprev from '../images/backarrow.png';
import slideshowbg from '../images/slideshowbg.png';
import { Link } from 'react-router-dom';
import logo from '../images/logo-no-background.png';
function Slideshow(){
    const Signup =(
      <div id="choicessignup">
        <Link id="signuplink" to="/signup">Sign Up Now</Link>
      </div>
    )
    const [currentSlide, setCurrentSlide] = useState(0); 
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + slidess.length) % slidess.length);
    }
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slidess.length);
    };
    const slide1 = (
      <div className="slide">
        <img src={logo} alt="logo" id="slidelogo"/>
      </div>
    );
    const slide2 = (
      <div className="slide">
        {Signup}
      </div>
    );
    const slidess=[slide1, slide2];
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide()
      }, 3000);
      return ()=> clearInterval(timer);
    }, [currentSlide, slidess.length]);
    
  
    return (
      <div id="slide-container">
        <button onClick={prevSlide} id="leftbutton"><img src={slideprev}/></button>
        <div className="slides">
          {slidess[currentSlide]}
        </div>
        <button onClick={nextSlide} id="rightbutton"><img src={slidenext}/></button>
      </div>
    );
}
export default Slideshow;