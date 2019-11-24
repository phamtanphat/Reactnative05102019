/* eslint-disable curly */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Myvectoricon from './src/components/Myvectoricon';
import MyCameraGallery from './src/components/MyCameraGallery';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Provider store={store}>
          <List />
        </Provider> */}
        {/* <Myvectoricon /> */}
        <MyCameraGallery />
      </SafeAreaView>
    );
  }
}

export default App;
