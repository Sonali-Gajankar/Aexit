import React from "react";
import night1 from "../src/assets/Night Blue Series 01 1.png";
import night2 from "../src/assets/Night Blue Series 02 1.png";
import bw1 from "../src/assets/B&W Series 02 1.png";
import bw2 from "../src/assets/B&W Series 01 2.png";
import bw3 from "../src/assets/B&W Series 02 2.png";
import bw4 from "../src/assets/B&W Series 01 3.png";
import bw5 from "../src/assets/B&W Series 02 3.png";
import orange1 from "../src/assets/Orange Series 02 1.png";
import orange2 from "../src/assets/Orange Series 07 2.png";
import o1 from "../src/assets/Orange Series 8-1.png";
import o2 from "../src/assets/Orange Series 8-2.png";
import o3 from "../src/assets/Orange Series 8-3.png";
import o4 from "../src/assets/Orange Series 8-4.png";
import o5 from "../src/assets/Orange Series 8-5.png";

export default function SequenceProject() {
    return (
        <div style={{"height":"100%"}}>
            <div className="project-section1">
                <h1 className="project__heading">sequence</h1>
                <p className="project__subheading">a first project. about the spiral of thoughts experienced before you even begin making anything. a first attempt at being a little honest.</p>
                <div className="project__video">
                    <iframe width="90%" height="100%" src="https://www.youtube-nocookie.com/embed/hmCH57QBHyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <p className="date">1 august 2023</p>
                <p className="project__para">i started working on sequence after a long time of feeling like i was being chased by my own potential. i thought if i don’t prove to ‘everybody’ that i had ideas that meant something to me and that i was able to perfectly execute then, then i was wasting time. i have a day job, and every minute outside of it i spend thinking about how confused i am about all the artistic things i want to do. one contributing factor to that confusion has been the solo player life i live. i am mostly in my room, by myself (i don’t hate it) but i think it begins to feel very isolating to create by yourself and then have not have a person by your side to react to it existing. (and by extension, you existing)
                    <br /><br /><br />
                    <span className="orange">so i made this film,<br />in my room<br />by myself.<br />to just aimlessly talk through a few of my thoughts.</span>
                </p>
            </div>
            <div className="project-section2">
                <h4 className="stills">stills</h4>
                <div className="stills__section1">
                    <img src={night1} alt="night img1" className="project__img"/>
                    <img src={night2} alt="night img2" className="project__img"/>
                </div>
                <div className="stills__section2">
                        <img src={bw1} alt="bw1" className="project__img2_left_cropped"/>
                    
                    <div className="stills__section2_img_container">
                        <img src={bw2} alt="bw2" className="project__img2"/>
                    </div>
                    <div className="stills__section2_img_container">
                        <img src={bw3} alt="bw3" className="project__img2"/>
                    </div>
                    <div className="stills__section2_img_container">
                        <img src={bw4} alt="bw4" className="project__img2"/>
                    </div>
                    <img src={bw5} alt="bw5" className="project__img2_right_cropped"/>
                    
                    
                </div>
                <div className="stills__section3">
                    <img src={orange1} alt="orange1" className="project__img"/>
                    <img src={orange2} alt="orange2" className="project__img"/>
                </div>
                <div className="stills__section4">
                    <div className="o1_img_stack_btm">
                        <img src={o1} alt="o1" className="o_img"/>
                    </div>
                    <div className="o1_img_stack_2">
                        <img src={o2} alt="" className="o_img"/>
                    </div>
                    <div className="o1_img_stack_3">
                        <img src={o3} alt="o3" className="o_img"/>
                    </div>
                    <div className="o1_img_stack_4">
                        <img src={o4} alt="" className="o_img"/>
                    </div>
                    <div className="o1_img_stack_top">
                        <img src={o5} alt="" className="o_img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}