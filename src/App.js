import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './navbar/navbar';
import Intro from "./intro/intro";
import AboutMe from "./about-me/about-me";
import WorkExperience from "./work-experience/work-exp";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@mui/material";
import Projects from "./projects/projects";
import ContactMe from "./contact-me/contact-me";
import Footer from "./footer/footer";
import Arrow from "./arrow/arrow";
import React, {Component} from "react";


class App extends Component{
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
        const theme = createMuiTheme({palette: {
                warning: {
                    main: '#ee9b00',
                },
                primary:{
                    main: '#45433E'
                }
            },
            typography: {
                fontFamily: [
                    'Gilroy'
                ].join(','),
            },});
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <NavBar/>
                    <Intro/>
                    <AboutMe/>
                    <WorkExperience/>
                    <Projects/>
                    <ContactMe/>
                    <Footer/>
                    {this.state.lastScrollY < 500 ? <Arrow direction="down"/> : <Arrow direction="up"/>}
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
