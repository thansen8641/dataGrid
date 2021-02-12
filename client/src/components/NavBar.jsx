import React from 'react';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import { Link } from "react-router-dom";



const NavBar = (props) => {

  console.log('navbar', props)

    return (
      <div className={props.darkMode ? 'darkNavBar' : 'lightNavBar'}>
        <div>
          <img className='logo' src={'https://i.ibb.co/4RzHJbt/icon-flat.png'} alt="Logo" />
        </div>
        <div className='navigation'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/About">About</Link>
            <Link className='navLink' to="/Projects">Projects</Link>
            <a className='navLink' target="_blank" href="https://drive.google.com/file/d/1e1shPBbqPoF1es5hwXwudAZYg54vjZlm/view?usp=sharing">Resume</a>
            <Link className='navLink' to="/Contact">Contact</Link>
          </div>
      </div>
    )
  }



export default NavBar