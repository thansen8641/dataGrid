import React from 'react';
import YouTube from 'react-youtube';


// https://youtu.be/M1QAY-lB0DU


const Projects = () => {

  const onReady = (event) => {
    event.target.pauseVideo()
  }

  const opts = {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className='projectsContainer'>
      <div className='projectsTitle'>
        <h1> PROJECTS </h1>
      </div>
      <div className='project1'>
        <div className='Inkorporate'>
          <YouTube videoId='M1QAY-lB0DU' opts={opts} onReady={onReady} />
        </div>
        <div className='vertLine'>
        </div>
        <div className='infoContainer'>
          <h3 className='infoTitle'>
            INKORPORATE
        </h3>
          <p className='infoDesc'>
            - Project Description: Produced an application for tattoo artist to keep track of clientele and organize their data
            </p>
          <p className='infoDesc'>
            - Created overall aesthetic of application and used media queries for a responsive layout depending on user's device.
            </p>
          <p className='infoDesc'>
            - Implemented search bar functionality for faster look up of clientele and tattoo tags.
            </p>
          <p className='infoDesc'>
            - Utilized context within React for easier state management and communication between individual components
        </p>
        </div>
      </div>
    </div>
  )
}

export default Projects