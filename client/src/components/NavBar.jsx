import React from 'react';


const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
        <img className='logo' src={'https://i.ibb.co/945pCqf/icon-working.png'} alt="Logo" />
      </div>
      <div className='navigation'>
        <h4 className='navLink'>
          About
        </h4>
        <h4 className='navLink'>
          Projects
        </h4>
        <h4 className='navLink'>
          Resume
        </h4>
        <h4 className='navLink'>
          Contact
        </h4>
      </div>
    </div>
  )
}



export default NavBar