import React from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";


const Home = (props) => {
  console.log('home', props)

  const changeMode = (checked, e) => {
  props.changeMode()
  console.log(e)
  }

  if (props.darkMode) {
    return (
      <div>
        <div className='homeContainer'>
          <div className='homeText'>
            <h3> Timothy Hansen </h3>
            <h6> Software Engineer </h6>
            <p> JAVASCRIPT | REACT | HTML | CSS | NODE | EXPRESS | MONGODB | MYSQL | POSTGRESQL | AWS  </p>
          </div>
        </div>
        <label className='modeSwitch'>
          <p className='infoDesc'>Dark Mode</p>
          <Switch onChange={changeMode} checked={props.darkMode} />
        </label>
      </div>
    )
  } else {
    return (
      <div>
        <div className='homeContainer'>
          <div className='homeText'>
            <h3> Timothy Hansen </h3>
            <h6> Software Engineer </h6>
            <p> JAVASCRIPT | REACT | HTML | CSS | NODE | EXPRESS | MONGODB | MYSQL | POSTGRESQL | AWS  </p>
          </div>
        </div>
        <label className='modeSwitch'>
          <p className='infoDesc'>Light Mode</p>
          <Switch onChange={changeMode} checked={props.darkMode} />
        </label>
      </div>
    )
  }
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