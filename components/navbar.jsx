import React from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import instaImg from "../src/assets/pngwing1.png"

export default function Navbar() {
    
    return (
        <nav className="navbar">
            <div className="logo">
            <span className="orange">aexit</span><span>/akanksha</span>
            </div>
            
            <span className="nav-tabs">
                <NavLink to="/">home</NavLink>
                <NavLink to="/project">projects</NavLink>
                <NavLink to="/contact">say hi</NavLink>
            </span>
            <a href="#"><img src={instaImg} alt="" width="30px"/></a>
            
        </nav>
        
    )
}