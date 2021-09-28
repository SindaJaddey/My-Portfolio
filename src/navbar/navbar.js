import React from "react";
import "./navbar.css"
const NavBar = () => {
    //button on click function to redirect to pdf
    return(
        <>
            <div className="container mt-3">
                <nav className="navbar fixed-top">
                    <div className={"col"}><a href="#about-me" className="navbar-element">About Me</a></div>
                    <div className={"col"}><a href="#work-experience" className="navbar-element">Work Experience</a> </div>
                    <div className={"col"}><a href="#projects" className="navbar-element">Projects</a></div>
                    <div className={"col"}><a href="#contact-me" className="navbar-element">Contact Me</a></div>
                    <div className={"col"}><a href="#contact-me" className="navbar-element">Resume</a></div>
                </nav>
            </div>
        </>
    )
}

export default NavBar