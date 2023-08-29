import React from "react";
import Sequence from "../src/assets/sequence.png";

export default function Projects() {
    return (
        <section className="home__section3">
            <div className="home__section3-grid">
                <div className="home__section3-card">
                    <div className="home__section3__img-container">
                        <img className="card_img" src={Sequence} alt="sequence"/>
                    </div>
                    <div className="title">sequence</div>
                    <p>the spiral of thoughts that pass by on the daily</p>
                    <div className="tags">
                        <p>VIDEO</p>
                        <div className="ellipse"></div>
                        <p>PHOTOS</p>
                        <div className="ellipse"></div>
                        <p>PHOTOBOOK</p>
                    </div>
                </div>
                
            </div>
            
        </section>
            /* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hmCH57QBHyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */    
    )
}