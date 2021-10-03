import React, {Component} from "react";
import "./navbar.css";
import {Container, Nav, Navbar} from 'react-bootstrap'

class NavBar extends Component  {
    state = {
        lastScrollY: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
           lastScrollY: window.scrollY
        });
    };

    render() {
        return(
            <>
                <Navbar sticky='top' expand={'md'} className={this.state.lastScrollY === 0 ? 'navBar collapsed' : 'navBar'} >
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

    //button on click function to redirect to pdf

}

export default NavBar