import React, { useState } from 'react';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer.jsx';
import { connect } from 'react-redux';


const NavBar = (props) => {

  console.log('navbar', props)

  return (
    <div className={props.darkMode ? 'darkNavBar' : 'lightNavBar'}>
      <div>
        <img className='logo' src={props.darkMode ? 'https://i.ibb.co/4RzHJbt/icon-flat.png' : 'https://i.ibb.co/kBCvWNt/icon-working.png'} alt="Logo" />
      </div>
        <MenuIcon onClick={props.changeDrawer} className='menuIcon' />
        <Drawer changeDrawer={props.changeDrawer} drawerOpen={props.drawerOpen}/>
      <div className='navigation'>
        <Link className={props.darkMode ? 'darkModeNavLink' : 'lightModeNavLink'} to="/">HOME</Link>
        <Link className={props.darkMode ? 'darkModeNavLink' : 'lightModeNavLink'} to="/About">ABOUT</Link>
        <Link className={props.darkMode ? 'darkModeNavLink' : 'lightModeNavLink'} to="/Projects">PROJECTS</Link>
        <a className={props.darkMode ? 'darkModeNavLink' : 'lightModeNavLink'} target="_blank" href="https://drive.google.com/file/d/1e1shPBbqPoF1es5hwXwudAZYg54vjZlm/view?usp=sharing">RESUME</a>
        <Link className={props.darkMode ? 'darkModeNavLink' : 'lightModeNavLink'} to="/Contact">CONTACT</Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDrawer: () => { dispatch({type: 'changeDrawer'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)