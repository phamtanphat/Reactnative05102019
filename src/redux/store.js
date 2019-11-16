import {createStore} from 'redux';
import {combineReducers} from 'redux';

const defaultWords = [
  {id: 'a1', en: 'One', vn: 'Mot', isMemorized: true},
  {id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 'a3', en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false},
  {id: 'a5', en: 'Five', vn: 'Nam', isMemorized: true},
];

function reducerWords(state = defaultWords, action) {
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map(item => {
      if (action.id === item.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(item => action.id !== item.id);
    return newWords;
  }
  if (action.type === 'ADD_WORD') {
    const coppyWords = Object.assign([], state);
    coppyWords.unshift(action.word);
    return coppyWords;
  }
  return state;
}
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
