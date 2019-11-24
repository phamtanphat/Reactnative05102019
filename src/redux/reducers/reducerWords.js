export default function reducerWords(state = [], action) {
  if (action.type === 'GET_ALL_WORD') {
    return action.words;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map(item => {
      if (action._id === item._id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(item => action._id !== item._id);
    return newWords;
  }
  if (action.type === 'ADD_WORD') {
    const coppyWords = Object.assign([], state);
    coppyWords.unshift(action.word);
    return coppyWords;
  }
  return state;
}
