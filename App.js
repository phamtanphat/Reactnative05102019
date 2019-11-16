/* eslint-disable curly */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import MyState from './src/components/MyState';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

/* Create store */
// 1 : Tao ra store (Noi chua du lieu cua app can chia se);
// 2 : Dinh nghia ra cac action
// 3 : Khi action thuc thi nho return ve store moi
// 4 : Khi muon thay doi store ta dung dispatch va truyen vao action

/* Connect store with component */
// 1 : Dua cac component muon nhan du lieu tu store vao trong component Provider(Da chua store)
// 2 : Cac component muon lay du lieu trong store phai chay qua method connect(lib react-redux)
// 3 : Neu muon lay gia tri trong store thi ta dung tham so thu 1
// Example :
//   const mapStateToProps = function(state) {
//     return {
//       count: state,
//     };
//   };
// export default connect(mapStateToProps)(MyState);
// 4 : Khi co tham so thu 1 trong connect , cac ban lay lieu cua store thong props cua components
const defaultState = {
  words: [
    {id: 'a1', en: 'One', vn: 'Mot', isMemorized: true},
    {id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 'a3', en: 'Three', vn: 'Ba', isMemorized: false},
    {id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false},
    {id: 'a5', en: 'Five', vn: 'Nam', isMemorized: true},
  ],
  shouldShowForm: false,
  filterMode: 'Show_All',
};

const store = createStore((state = defaultState, action) => {
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.words.map(item => {
      if (action.id === item.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return {...state, words: newWords};
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.words.filter(item => action.id !== item.id);
    return {...state, words: newWords};
  }
  return state;
});

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <List />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;
