/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import MyState from './src/components/MyState';
import {createStore} from 'redux';

// const defaultState = {
//   count : 1,
//   arrayNams : [
//     "Phat","Hoa","Tuan"
//   ]
// }
// 1 : Tao ra store (Noi chua du lieu cua app can chia se);
const store = createStore((state = 1, action) => {
  if  (action.type === 'INCREASE') {return state + 1;}
  return state;
});

console.log('Truoc khi thay doi store ' + store.getState());
console.log(
  'Thay doi store ' + JSON.stringify(store.dispatch({type: 'INCREASE'})),
);
console.log('Sau khi thay doi store ' + store.getState());

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
