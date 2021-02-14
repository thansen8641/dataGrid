import React from 'react';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import NavBar from './NavBar.jsx';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




const App = (props) => {
  console.log('app', props)
  return (
    <Router>
      <NavBar darkMode={props.darkMode} />
      <Switch>
        <Route exact path="/">
          <Home darkMode={props.darkMode} />
        </Route>


        <Route path="/About">
          <About darkMode={props.darkMode} />
        </Route>
        <Route path="/Projects">
          <Projects darkMode={props.darkMode}/>
        </Route>
        <Route path="/Contact">
          <Contact darkMode={props.darkMode} />
        </Route>
      </Switch>
    </Router >
  )
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMode: () => { dispatch({type: 'changeMode'})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);