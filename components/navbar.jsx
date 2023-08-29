import React from "react";
import { NavLink } from "react-router-dom";
import instaImg from "../src/assets/pngwing1.png";

export default function Navbar() {
    
    return (
        <nav className="navbar">
            <div className="logo">
            <span className="orange">aexit</span><span>/akanksha</span>
            </div>
            
            <span className="nav-tabs">
                <NavLink to="/">home</NavLink>
                <a href="/#projects_section">projects</a>
                <NavLink to="/contact">say hi</NavLink>
            </span>
            <a href="https://www.instagram.com/aexit.zip/"><img src={instaImg} alt="" width="30px"/></a>
            
        </nav>
        
    )
}