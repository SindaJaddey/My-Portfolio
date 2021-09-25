import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './navbar/navbar';
import Intro from "./intro/intro";
import AboutMe from "./about-me/about-me";
import WorkExperience from "./work-experience/work-exp";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@mui/material";
import Projects from "./projects/projects";


function App() {
    const theme = createMuiTheme({palette: {
            warning: {
                main: '#E9322E',
            },
        },
        typography: {
            fontFamily: [
                'IBM Plex Mono'
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
          </div>
      </ThemeProvider>

  );
}

export default App;
