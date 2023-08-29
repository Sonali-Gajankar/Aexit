import React, { useEffect } from "react";
import Img1 from "../src/assets/img1.png";
import Sequence from "../src/assets/sequence.png";
import { useLocation } from "react-router-dom";

export default function Home() {

    const location = useLocation();
    console.log('outside ',location);
    useEffect(() => {
        const element = location.hash.substring(1);
        console.log('effect:',location);
        scrollToElement(element);
    }, [location]);

    function scrollToElement(element){
        const elem = document.getElementById(element);
        if (elem) {
            elem.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        else{
            window.scrollTo(0,0);
        }
    };

    
    return (
        <div style={{"height":"100%"}}>
            <section className="home__hero-section">
                <img className="home__img1" src={Img1} alt="" />
                <h1 className="home__main-heading">welcome to aexit</h1>
                <p className="home__main-subtext">my name is <span className="yellow">akanksha</span> and i am a visual artist</p>
            </section>
            <section className="home__section2">
                <div className="home__section2-para1">
                    <p><span className="orange">aexit</span> is a umbrella under which i try to contain my creative curiosities and ideas. my daily life is filled with distractions and insecurities and confusions and hesitations. but with <span className="orange">aexit</span> my commitment was to be unafraid of my own ideas and just to make things.</p>
                </div>
                <div className="home__section2-para2">
                    <p className="orange p1">i dont want to make this my career or make money off it in particular. i just want to make things and see how i feel before, during and after i’ve made them. because the alternative is to not make them and that makes me feel horrible. being an artist in a way that puts me in the middle of it makes me feel fulfilled, like im understanding myself.</p>
                    <p className="orange p2">so if you’re here and you’re looking, thank you for coming by. everything i try to make, i do because i believe in it. you being here is a nice thing, i really appreciate your time.</p>
                </div>
            </section>
            <section className="home__section3" id="projects_section">
                <div className="home__section3-grid">
                    <div className="home__section3-card">
                        <div className="home__section3__img-container">
                            <a href="/sequence"><img className="card_img" src={Sequence} alt="sequence"/></a>
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
            
        </div>
        
    )
}