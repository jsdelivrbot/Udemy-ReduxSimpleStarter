// State argument is not the application state,
// only state this reducer is responsible for
// Redux doesn't allow undefined returns from reducers, so define default value
// for state for the first call, 
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}
