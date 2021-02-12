import React from 'react';

const initState = {
  darkMode: true
}


const rootReducer = (state = initState, action ) => {
  console.log('action', action.type)
  if (action.type === 'changeMode') {
    return {...state, darkMode: !state.darkMode}
  }
  return state
}

export default rootReducer;