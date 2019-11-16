export default function reducershouldShowForm(state = false, action) {
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}
