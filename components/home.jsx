import React from "react";
import Img1 from "../src/assets/img1.png";
import Sequence from "../src/assets/seq1.jpg";

export default function Home() {
    return (
        <div style={{"height":"100%"}}>
            <section className="hero-section">
                <img className="img1" src={Img1} alt="" />
                <h1 className="main-heading">welcome to aexit</h1>
                <p className="main-subtext">my name is <span className="yellow">akanksha</span> and i am a visual artist</p>
            </section>
            <section className="section2">
                <div className="section2__para1">
                    <p><span className="orange">aexit</span> is a umbrella under which i try to contain my creative curiosities and ideas. my daily life is filled with distractions and insecurities and confusions and hesitations. but with <span className="orange">aexit</span> my commitment was to be unafraid of my own ideas and just to make things.</p>
                </div>
                <div className="section2__para2">
                    <p className="orange p1">i dont want to make this my career or make money off it in particular. i just want to make things and see how i feel before, during and after i’ve made them. because the alternative is to not make them and that makes me feel horrible. being an artist in a way that puts me in the middle of it makes me feel fulfilled, like im understanding myself.</p>
                    <p className="orange p2">so if you’re here and you’re looking, thank you for coming by. everything i try to make, i do because i believe in it. you being here is a nice thing, i really appreciate your time.</p>
                </div>
            </section>
            <section className="section3">
                <div className="section3__grid">
                    <div className="section3__card">
                        <div className="section3__img-container">
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
                    <div className="section3__card">
                        <div className="section3__img-container">
                            <img className="card_img" src={Sequence} alt="sequence"/>
                        </div>
                        <div className="title">name</div>
                        <p>short description</p>
                        <div className="tags">
                            <p>MED1</p>
                            <div className="ellipse"></div>
                            <p>MED2</p>
                            <div className="ellipse"></div>
                            <p>MED3</p>
                        </div>
                    </div>
                    <div className="section3__card">
                        <div className="section3__img-container">
                            <img className="card_img" src={Sequence} alt="sequence"/>
                        </div>
                        <div className="title">name</div>
                        <p>short description</p>
                        <div className="tags">
                            <p>MED1</p>
                            <div className="ellipse"></div>
                            <p>MED2</p>
                            <div className="ellipse"></div>
                            <p>MED3</p>
                        </div>
                    </div>
                </div>
                
            </section>
            
        </div>
        
    )
}