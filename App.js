/* eslint-disable curly */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import {Provider} from 'react-redux';

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
