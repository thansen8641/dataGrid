const initState = {
  posts: [
    {id: 1, title: "Squirtle laid an Egg", body: "cool pokemon!"},
    {id: 2, title: "Bulbasaur laid an Egg", body: "LOve that pokemon!"},
    {id: 3, title: "Charizard laid an Egg", body: "Weak as fuck pokemon"}
  ]
}


const rootReducer = (state = initState, action ) => {
  return state
}

export default rootReducer;