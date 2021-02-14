import React from 'react';

const initState = {
  darkMode: true,
  drawerOpen: false
}


const rootReducer = (state = initState, action ) => {
  console.log('action', action.type)
  if (action.type === 'changeMode') {
    return {...state, darkMode: !state.darkMode}
  }
  if (action.type === 'changeDrawer') {
    return {...state, drawerOpen: !state.drawerOpen}
  }
  return state
}

export default rootReducer;