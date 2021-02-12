import React from 'react';
import YouTube from 'react-youtube';





const Projects = () => {

  const onReady = (event) => {
    event.target.stopVideo()
  }

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className='pageContainer'>
      <div className='pageTitle'>
        <h1> PROJECTS </h1>
      </div>
      <div className='project'>
        <div className='projectVideo'>
          <YouTube videoId='M1QAY-lB0DU' opts={opts} onReady={onReady} />
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
          <a className='linkToSite' target="_blank" href="https://inkrprate.herokuapp.com/">- Click here to view project website</a>
        </div>
      </div>

      <div className='project'>
        <div className='infoContainer'>
          <h3 className='infoTitle'>
            Bootlocker
        </h3>
          <p className='infoDesc'>
            - Project Description: Created a replica of a product page for the popular online retail store, Foot Locker.
            </p>
          <p className='infoDesc'>
            - Dynamically rendered webscraped data to the screen through interactions with a RESTful api and a non-relational database management system.
            </p>
          <p className='infoDesc'>
            - Utilized a service oriented architecture to split up module responsibility among a team and deployed individual services through a proxy server and hosted with an AWS EC2 instance.
        </p>
          <a className='linkToSite' target="_blank" href="https://bootlocker.herokuapp.com/">- Click here to view project website</a>

        </div>
        <div className='projectVideo'>
          <YouTube videoId='iRv9NdiH3WM' opts={opts} onReady={onReady} />
        </div>
      </div>


      <div className='project'>
        <div className='projectVideo'>
          <YouTube videoId='OpI3eUrDwzo' opts={opts} onReady={onReady} />
        </div>
        <div className='infoContainer'>
          <h3 className='infoTitle'>
            Bullseye
        </h3>
          <p className='infoDesc'>
            - Project Description: Redesigned an inherited application’s back end processes to accommodate for a robust database sample size and optimize run time speed while maintaining integrity of the application.
            </p>
          <p className='infoDesc'>
            - Achieved a database query time of under 20ms by indexing an id property for constant time lookup to improve latency issues and overall user experience.
            </p>
          <p className='infoDesc'>
            - Stress tested the newly designed database to handle over 1800 RPS with a 0% error rate by implementing three servers hosted on AWS and a load balancer to proxy the individual servers for optimal application performance.
        </p>
        <a className='linkToSite' target="_blank" href="https://docs.google.com/document/d/1DO7iY9WajkLMrIFhEFqkOOu9bovlpzX2cvI01N1gzNU/edit?usp=sharing">- Click here to view project notes</a>
        </div>
      </div>
    </div>
  )
}

export default Projects