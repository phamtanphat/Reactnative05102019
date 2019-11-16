import {createStore} from 'redux';
import {combineReducers} from 'redux';
import reducerWords from './reducers/reducerWords';

function reducershouldShowForm(state = false, action) {
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}
function reducerfilterMode(state = 'Show_All', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}

const reducer = combineReducers({
  words: reducerWords,
  shouldShowForm: reducershouldShowForm,
  filterMode: reducerfilterMode,
});

const store = createStore(reducer);
export default store;
