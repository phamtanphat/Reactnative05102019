import reducerWords from "./reducerWords";
import reducerfilterMode from "./reducerfilterMode";
import reducershouldShowForm from "./reducershouldShowForm";
import {combineReducers} from 'redux';

const reducer = combineReducers({
  words: reducerWords,
  shouldShowForm: reducershouldShowForm,
  filterMode: reducerfilterMode,
});

export default reducer;
