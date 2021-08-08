import React from 'react';
import Coffee from "../Videos/frenchpress.mp4";
import HomePic from "../Photos/the-cold-drip1.png"

function Hero(){
    return (
        <div id="hero">
            <div className="hero-left">
                <h1 id="heading">
                    The Cold Drip
                </h1>
                <p id="subtitle">
                    The celebration of deliciousness. <br></br>
                    The best of coffee culture brought together in one space.
                </p>
                <div className="line">
                    <p className="scroll-text">Scroll Down to Discover</p>
                </div>
            </div>
            
            <div className="hero-picture">
                <img src={HomePic} alt="The Cold Drip"></img>
            </div>
            <div className="hero-right">
                <video id="video-bg" autoPlay loop muted>
                    <source src={Coffee} type="video/mp4">
                    </source>
                </video>
            </div>
            
        </div>        
    )
}

export default Hero;