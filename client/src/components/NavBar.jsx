import React from 'react';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
        <img className='logo' src={'https://i.ibb.co/4RzHJbt/icon-flat.png'} alt="Logo" />
      </div>
      <div className='navigation'>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/About">About</Link>
        <Link className='navLink' to="/Projects">Projects</Link>
        <Link className='navLink' to="/Resume">Resume</Link>
        <Link className='navLink' to="/Contact">Contact</Link>
      </div>
    </div>
  )
}



export default NavBar