import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './navbar/navbar';
import Intro from "./intro/intro";
import AboutMe from "./about-me/about-me";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro/>
        <AboutMe/>
    </div>
  );
}

export default App;
