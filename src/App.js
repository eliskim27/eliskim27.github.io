import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
// import Resume from './contents/Resume';
import WorkHistory from './contents/WorkHistory';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          
        
          <Route exact path="/">      <Home />        </Route>
          <Route path="/about">       <About />       </Route>
          <Route path="/education">   <Education />   </Route>
          <Route path="/skills">      <Skills />      </Route>
          {/* <Route path="/resume">      <Resume />      </Route> */}
          <Route path="/workhistory"> <WorkHistory /> </Route>
        </div>
        <NavBar />
      </div>
    </Router>
    );
  }
  
export default App;