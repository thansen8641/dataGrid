import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'




const Projects = (props) => {
  const onReady = (event) => {
    event.target.stopVideo()
  }

  const isLaptop = useMediaQuery({ query: '(max-width: 1440px)' });
  console.log('isLaptop', isLaptop)

  const isIphonePlus = useMediaQuery({ query: '(max-width: 450px)' });
  console.log('isIPHONEplus', isIphonePlus)

  const isIphoneX = useMediaQuery({ query: '(max-width: 376px)' });
  console.log('isIPHONEx', isIphoneX)


  // const isIpad = useMediaQuery({query: '(max-width: 768px)' });


  const mobileOpts = {
    width: '380',
    height: '200',
    playerVars: {
      autoplay: 1,
    }
  }

  const iphoneX = {
    width: '350',
    height: '200',
    playerVars: {
      autoplay: 1,
    }
  }

  const opts = {
    playerVars: {
      autoplay: 1
    }
  }





  if (isIphoneX) {
    return (
      <div className='pageContainer'>
        <div className={props.darkMode ? 'darkModePageTitle' : 'lightModePageTitle'}>
          <h1> HERE ARE A FEW PROJECTS I WORKED ON </h1>
        </div>

        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            INKORPORATE
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='M1QAY-lB0DU' opts={iphoneX} onReady={onReady} />
          </div>


          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Produced an application for tattoo artist to keep track of clientele and organize their data
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Created overall aesthetic of application and used media queries for a responsive layout depending on user's device.
            </p>
            </div>
            <div className='mobileInfoContainer2'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Implemented search functionality for faster look up of clientele and tattoo tags.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Utilized context within React for easier state management and communication between individual components
        </p>
              <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://inkrprate.herokuapp.com/">- Click here to view project website</a>
            </div>
          </div>
        </div>

        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BOOTLOCKER
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='iRv9NdiH3WM' opts={iphoneX} onReady={onReady} />
          </div>
          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Created a replica of a product page for the popular online retail store, Foot Locker.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Dynamically rendered webscraped data to the screen through interactions with a RESTful api and a non-relational database management system.
            </p>
            </div>
            <div className='mobileInfoContainer3'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Utilized a service oriented architecture to split up module responsibility among a team and deployed individual services through a proxy server and hosted with an AWS EC2 instance.
        </p>
              <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://bootlocker.herokuapp.com/">- Click here to view project website</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BULLSEYE
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='OpI3eUrDwzo' opts={iphoneX} onReady={onReady} />
          </div>

          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Redesigned an inherited application’s back end processes to accommodate for a robust database sample size and optimize run time speed while maintaining integrity of the application.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Achieved a database query time of under 20ms by indexing an id property for constant time lookup to improve latency issues and overall user experience.
            </p>
            </div>


              <div className='mobileInfoContainer4'>
                <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                  - Stress tested the newly designed database to handle over 1800 RPS with a 0% error rate by implementing three servers hosted on AWS and a load balancer to proxy the individual servers for optimal application performance.
        </p>
                <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://docs.google.com/document/d/1DO7iY9WajkLMrIFhEFqkOOu9bovlpzX2cvI01N1gzNU/edit?usp=sharing">- Click here to view project notes</a>
              </div>
          </div>
        </div>
        <div className={props.darkMode ? 'darkModeBottomLine' : 'lightModeBottomLine'}>

        </div>
      </div >
    )
  }



















  // media query for iphone
  if (isIphonePlus) {
    return (
      <div className='pageContainer'>
        <div className={props.darkMode ? 'darkModePageTitle' : 'lightModePageTitle'}>
          <h1> HERE ARE A FEW PROJECTS I WORKED ON </h1>
        </div>

        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            INKORPORATE
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='M1QAY-lB0DU' opts={mobileOpts} onReady={onReady} />
          </div>


          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Produced an application for tattoo artist to keep track of clientele and organize their data
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Created overall aesthetic of application and used media queries for a responsive layout depending on user's device.
            </p>
            </div>
            <div className='mobileInfoContainer2'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Implemented search functionality for faster look up of clientele and tattoo tags.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Utilized context within React for easier state management and communication between individual components
        </p>
              <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://inkrprate.herokuapp.com/">- Click here to view project website</a>
            </div>
          </div>
        </div>




        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BOOTLOCKER
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='iRv9NdiH3WM' opts={mobileOpts} onReady={onReady} />
          </div>

          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Created a replica of a product page for the popular online retail store, Foot Locker.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Dynamically rendered webscraped data to the screen through interactions with a RESTful api and a non-relational database management system.
            </p>
            </div>


            <div className='mobileInfoContainer3'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Utilized a service oriented architecture to split up module responsibility among a team and deployed individual services through a proxy server and hosted with an AWS EC2 instance.
        </p>
              <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://bootlocker.herokuapp.com/">- Click here to view project website</a>
            </div>
          </div>

        </div>


        <div className='project'>
          <h3 className={props.darkMode ? 'darkModeInfoTitle' : 'lightModeInfoTitle'}>
            BULLSEYE
        </h3>
          <div className='mobileProjectVid1'>
            <YouTube videoId='OpI3eUrDwzo' opts={mobileOpts} onReady={onReady} />
          </div>

          <div className='headMobileInfoContainer'>
            <div className='mobileInfoContainer1'>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Project Description: Redesigned an inherited application’s back end processes to accommodate for a robust database sample size and optimize run time speed while maintaining integrity of the application.
            </p>
              <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                - Achieved a database query time of under 20ms by indexing an id property for constant time lookup to improve latency issues and overall user experience.
            </p>
            </div>


              <div className='mobileInfoContainer4'>
                <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
                  - Stress tested the newly designed database to handle over 1800 RPS with a 0% error rate by implementing three servers hosted on AWS and a load balancer to proxy the individual servers for optimal application performance.
        </p>
                <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://docs.google.com/document/d/1DO7iY9WajkLMrIFhEFqkOOu9bovlpzX2cvI01N1gzNU/edit?usp=sharing">- Click here to view project notes</a>
              </div>
          </div>
        </div>
        <div className={props.darkMode ? 'darkModeBottomLine' : 'lightModeBottomLine'}>

        </div>
      </div >
    )
  }

  return (
    <div className='pageContainer'>
      <div className={props.darkMode ? 'darkModePageTitle' : 'lightModePageTitle'}>
        <h1> HERE ARE A FEW PROJECTS I WORKED ON </h1>
      </div>
      <div className='project'>
        <div className='projectVideo'>
          <YouTube videoId='M1QAY-lB0DU' opts={opts} onReady={onReady} />
        </div>
        <div className='infoContainer'>
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
            - Implemented search functionality for faster look up of clientele and tattoo tags.
              </p>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>
            - Utilized context within React for easier state management and communication between individual components
          </p>
          <a className={props.darkMode ? 'darkModeLinkToSite' : 'lightModeLinkToSite'} target="_blank" href="https://inkrprate.herokuapp.com/">- Click here to view project website</a>
        </div>
      </div>

      <div className='project'>
        <div className='infoContainer'>
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
          <YouTube videoId='iRv9NdiH3WM' opts={opts} onReady={onReady} />
        </div>
      </div>


      <div className='project'>
        <div className='projectVideo'>
          <YouTube videoId='OpI3eUrDwzo' opts={opts} onReady={onReady} />
        </div>
        <div className='infoContainer'>
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
      <div className={props.darkMode ? 'darkModeBottomLine' : 'lightModeBottomLine'}>
      </div>
    </div>
  )
}

export default Projects