import React from 'react';
import { connect } from 'react-redux';


const About = (props) => {
  console.log('about', props)
  return(
    <div className='container'>
      <div className='containerText'>
      <h1>
        Hey, I'm Tim
      </h1>
      <p>
      The feeling I get when I produce clean and efficient code that works just as I intended parallels the moment in Cast Away when Tom Hanks finally creates fire on his deserted island. It has become an unbelievably fulfilling aspect of my life and keeps me coming back for more. To replicate that same feeling of excitement in a user utilizing an application I worked on is one of the reasons I started programming in the first place.
      </p>
      <p>
      The future of society as we know it is technology. I want to be a part of shaping that future and influence it in a positive manner while simultaneously working on projects that I’m passionate about. It is my dream to build applications for the betterment of the world and to course correct some of the negative light big technology has been receiving lately. Life can be extremely hard at times, so I want to build applications that lift the burdens of life, even if only in a small way.
      </p>
      </div>
    </div>
  )
}

export default About