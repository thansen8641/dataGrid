import React, { useState } from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";


const Home = (props) => {
  // console.log('home', props)

  if (props.darkMode) {
    document.body.className='darkMode'
  } else {
    document.body.className='lightMode'
  }


  const changeMode = (checked, e) => {
  props.changeMode()
  }

    return (
      <div>
        <div className='homeContainer'>
          <div className={props.darkMode ? 'darkModeHomeText' : 'lightModeHomeText'}>
            <h3> Timothy Hansen </h3>
            <h6> Software Engineer </h6>
            <p> JAVASCRIPT | REACT | HTML | CSS | NODE | EXPRESS | MONGODB | MYSQL | POSTGRESQL | AWS  </p>
          </div>
        </div>
        <label className='modeSwitch'>
          <p className={props.darkMode ? 'darkModeInfoDesc' : 'lightModeInfoDesc'}>{props.darkMode ? 'Dark Mode' : 'Light Mode'}</p>
          <Switch onChange={changeMode} checked={props.darkMode} />
        </label>
      </div>
    )
  }

// for retrieving props from store

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMode: () => { dispatch({type: 'changeMode'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// export default Home;