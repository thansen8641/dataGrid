import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Contact = (props) => {

  console.log('contact', props)
  return (
    <div className='container'>
      <div className={props.darkMode ? 'darkModeContainerText' : 'lightModeContainerText'}>
      <h1>
        WANT TO GET IN TOUCH?
      </h1>
      <p>
        Whether your another programmer looking to chat about ideas on pushing the technological boundaries of an application, or a recruiter looking for their next best employee, I would love to connect. Feel free to reach me below via LinkedIn, Github, or at timothyhansen229@gmail.com.
      </p>
      <p>
        I look forward to hearing from you!
      </p>
      <div className='logoContainer'>
      <SocialIcon className='socialLogo' target="_blank" bgColor={props.darkMode ? '#bc9d57' : '#b98714'}url="https://www.linkedin.com/in/timothy-r-hansen/" />
      <SocialIcon className='socialLogo' url="mailto:timothyhansen229@gmail.com" target="_blank" bgColor={props.darkMode ? '#bc9d57' : '#b98714'}/>
      <SocialIcon className='socialLogo' bgColor={props.darkMode ? '#bc9d57' : '#b98714'} url="https://github.com/thansen8641" target="_blank" />
      </div>
      </div>
    </div>
  )
}

export default Contact