import React from 'react';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import NavBar from './NavBar.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>


        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        {/* <a className='linkToSite' target="_blank" href="https://docs.google.com/document/d/1DO7iY9WajkLMrIFhEFqkOOu9bovlpzX2cvI01N1gzNU/edit?usp=sharing">RESUME</a> */}
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router >
  )
}

export default App