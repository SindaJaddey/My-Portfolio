import React from "react";
import "./navbar.css";

const NavBar = () => {
    //button on click function to redirect to pdf
    return(
        <>
            <div className="container">
                <div className="row navBar fixed-top mx-auto py-3">
                        <div className={"col-sm-1 col-md"}><a href="#about-me" className="navbar-element">About Me</a></div>
                        <div className={"col-sm-1 col-md"}><a href="#work-experience" className="navbar-element">Work Experience</a> </div>
                        <div className={"col-sm-1 col-md"}><a href="#projects" className="navbar-element">Projects</a></div>
                        <div className={"col-sm-1 col-md"}><a href="#contact-me" className="navbar-element">Contact Me</a></div>
                        <div className={"col-sm-1 col-md"}><a href="#contact-me" className="navbar-element">Resume</a></div>
                </div>
            </div>
        </>
    )
}

export default NavBar