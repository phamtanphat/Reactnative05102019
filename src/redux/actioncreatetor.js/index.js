// qua reducer xem action truyen len la gi
const URL = 'https://server2301.herokuapp.com/word';

export function toggle_word(newId) {
  return {type: 'TOGGLE_WORD', id: newId};
}
export function remove_word(id) {
  return {type: 'REMOVE_WORD', id};
}
export function add_word(word) {
  return {type: 'ADD_WORD', word};
}

export function toggle_form() {
  return {type: 'TOGGLE_FORM'};
}
export function setfilter_mode(filterMode) {
  return {type: 'SET_FILTER_MODE', filterMode};
}
export function getAllWords() {
  return function(dispatch) {
    fetch(URL)
      .then(reponse => reponse.json())
      .then(value => console.log(value.words))
      .catch(error => alert(error));
  };
}
