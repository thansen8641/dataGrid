import React from 'react';
import { connect } from 'react-redux'


const Home = (props) => {
  console.log(props)
  return (
    <div>
      <div className='homeContainer'>
        <div className='homeText'>
          <h3> Timothy Hansen </h3>
          <h6> Software Engineer </h6>
          <p> JAVASCRIPT | REACT | HTML | CSS | NODE | EXPRESS | MONGODB | MYSQL | POSTGRESQL | AWS  </p>
        </div>
      </div>
    </div>
  )
}

// for retrieving props from store

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);


// export default Home;