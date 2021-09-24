import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './navbar/navbar';
import Intro from "./intro/intro";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro/>
    </div>
  );
}

export default App;
