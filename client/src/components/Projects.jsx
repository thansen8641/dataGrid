import React from 'react';
import YouTube from 'react-youtube';





const Projects = (props) => {
  console.log('projects', props.drawerOpen)

  const onReady = (event) => {
    event.target.stopVideo()
  }

  const mobileOpts = {
    width: '170',
    height: '200',
    playerVars: {
      autoplay: 1,
    }
  }

  const regOpts = {
    playerVars: {
      autoplay: 1
    }
  }


  return (
    <div className='pageContainer'>
      <div className={props.darkMode ? 'darkModePageTitle' : 'lightModePageTitle'}>
        <h1> HERE ARE A FEW PROJECTS I WORKED ON </h1>
      </div>
      <div className='project'>
        <div className={!props.drawerOpen || props.drawerOpen ? 'mobileProjectVid1' : 'projectVideo'}>
          <YouTube videoId='M1QAY-lB0DU' opts={!props.drawerOpen || props.drawerOpen ? mobileOpts : regOpts} onReady={onReady} />
        </div>
        <div className={!props.drawerOpen || props.drawerOpen ? 'mobileInfoContainer1' : 'infoContainer'}>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            INKORPORATE
        </h3>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Project Description: Produced an application for tattoo artist to keep track of clientele and organize their data
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Created overall aesthetic of application and used media queries for a responsive layout depending on user's device.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Implemented search bar functionality for faster look up of clientele and tattoo tags.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Utilized context within React for easier state management and communication between individual components
        </p>
          <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://inkrprate.herokuapp.com/">- Click here to view project website</a>
        </div>
      </div>

      <div className='project'>
        <div className={!props.drawerOpen || props.drawerOpen ? 'mobileInfoContainer2' : 'infoContainer'}>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BOOTLOCKER
        </h3>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Project Description: Created a replica of a product page for the popular online retail store, Foot Locker.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Dynamically rendered webscraped data to the screen through interactions with a RESTful api and a non-relational database management system.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Utilized a service oriented architecture to split up module responsibility among a team and deployed individual services through a proxy server and hosted with an AWS EC2 instance.
        </p>
         <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://bootlocker.herokuapp.com/">- Click here to view project website</a>

        </div>
        <div className='projectVideo'>
          <YouTube videoId='iRv9NdiH3WM' opts={!props.drawerOpen || props.drawerOpen ? mobileOpts : regOpts} onReady={onReady} />
        </div>
      </div>


      <div className='project'>
        <div className={!props.drawerOpen || props.drawerOpen ? 'mobileProjectVid1' : 'projectVideo'}>
          <YouTube videoId='OpI3eUrDwzo' opts={!props.drawerOpen || props.drawerOpen ? mobileOpts : regOpts} onReady={onReady} />
        </div>
        <div className={!props.drawerOpen || props.drawerOpen ? 'mobileInfoContainer1' : 'infoContainer'}>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BULLSEYE
        </h3>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Project Description: Redesigned an inherited application’s back end processes to accommodate for a robust database sample size and optimize run time speed while maintaining integrity of the application.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Achieved a database query time of under 20ms by indexing an id property for constant time lookup to improve latency issues and overall user experience.
            </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Stress tested the newly designed database to handle over 1800 RPS with a 0% error rate by implementing three servers hosted on AWS and a load balancer to proxy the individual servers for optimal application performance.
        </p>
        <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://docs.google.com/document/d/1DO7iY9WajkLMrIFhEFqkOOu9bovlpzX2cvI01N1gzNU/edit?usp=sharing">- Click here to view project notes</a>
        </div>
      </div>
      <div className={props.darkMode ? 'darkModeSpacer' : 'lightModeSpacer'}>
      </div>
    </div>
  )
}

export default Projects