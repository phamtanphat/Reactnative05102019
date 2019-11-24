// qua reducer xem action truyen len la gi
const URL = 'https://server2301.herokuapp.com/word/';

export function toggle_word(newId, isMemorized) {
  return function(dispatch) {
    fetch(URL + newId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({isMemorized: isMemorized}),
    })
      .then(reponse => reponse.json())
      .then(value => {
        if (value.success === true) {
          return dispatch({type: 'TOGGLE_WORD', _id: newId});
        } else {
          alert('Cap nhat that bai');
        }
      });
  };
}
export function remove_word(_id) {
  return function(dispatch) {
    fetch(URL + _id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(reponse => reponse.json())
      .then(value => {
        if (value.success === true) {
          return dispatch({type: 'REMOVE_WORD', _id});
        } else {
          alert('Xoa that bai');
        }
      });
  };
}
export function add_word(en, vn) {
  return function(dispatch) {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({en, vn}),
    })
      .then(reponse => reponse.json())
      .then(value => {
        if (value.success === true) {
          return dispatch({type: 'ADD_WORD', word: value.word});
        } else {
          alert(value.message);
        }
      });
  };
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
      .then(value => dispatch({type: 'GET_ALL_WORD', words: value.words}));
  };
}
