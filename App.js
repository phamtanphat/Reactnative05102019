/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import MyState from './src/components/MyState';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

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
// 4 : Khi co tham so thu 1 trong connect , cac ban lay lieu cua store thong props cua components
  
  export default connect(mapStateToProps)(MyState);
const store = createStore((state = 10, action) => {
  return state;
});

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <List /> */}
        {/* <Form /> */}
        {/* <Filter /> */}
        <Provider store={store}>
          <MyState />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;

function tinhtong(a = 5, b = 5) {
  return a + b;
}
tinhtong(5);
