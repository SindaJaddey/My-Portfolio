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


function App() {
    const theme = createMuiTheme({palette: {
            warning: {
                main: '#E9322E',
            },
            primary:{
                main: '#E5E5E5'
            }
        },
        typography: {
            fontFamily: [
                'Montserrat'
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
          </div>
      </ThemeProvider>

  );
}

export default App;
