// qua reducer xem action truyen len la gi
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
