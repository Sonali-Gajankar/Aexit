import React from "react";
import Img1 from "../src/assets/img1.png";

export default function Home() {
    return (
        <div>
            <section className="hero-section">
                <img className="img1" src={Img1} alt="" />
                <h1 className="main-heading">welcome to aexit</h1>
                <p className="main-subtext">my name is <span className="yellow">akanksha</span> and i am a visual artist</p>
            </section>
            
        </div>
        
    )
}