/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import MyState from './src/components/MyState';
import {createStore} from 'redux';

const defaultState = {
  count: 1,
  arrayNames: ['Phat', 'Hoa', 'Tuan'],
};
// 1 : Tao ra store (Noi chua du lieu cua app can chia se);
// 2 : Dinh nghia ra cac action
// 3 : Khi action thuc thi nho return ve store moi
// 4 : Khi muon thay doi store ta dung dispatch va truyen vao action
const store = createStore((state = defaultState, action) => {
  if (action.type === 'INCREASE') {
    return {...state, count: state.count + 1};
  }
  if (action.type === 'INSERT') {
    const newArrayNames = Object.assign([], state.arrayNames);
    newArrayNames.push(action.name);
    return {...state, arrayNames: newArrayNames};
  }
  return state;
});

console.log('Truoc khi thay doi store ' + JSON.stringify(store.getState()));
console.log(
  'Thay doi store ' +
    JSON.stringify(store.dispatch({type: 'INSERT', name: 'Teo'})),
);
console.log('Sau khi thay doi store ' + JSON.stringify(store.getState()));

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <List />
        {/* <Form /> */}
        {/* <Filter /> */}
        {/* <MyState /> */}
      </SafeAreaView>
    );
  }
}

export default App;

function tinhtong(a = 5, b = 5) {
  return a + b;
}
tinhtong(5);
