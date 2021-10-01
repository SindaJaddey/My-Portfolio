import React from "react";
import "./navbar.css";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    //button on click function to redirect to pdf
    return(
        <>
            <Navbar sticky='top' expand={'md'} className="navBar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                            <Nav.Link href="#work-experience">Work Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact-me">Contact</Nav.Link>
                            <Nav.Link href="#contact">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar