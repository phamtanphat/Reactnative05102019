/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import MyProps from './src/components/MyProps';

const arrayWords = [
  {id: 'a1', en: 'One', vn: 'Mot'},
  {id: 'a2', en: 'Two', vn: 'Hai'},
  {id: 'a3', en: 'Three', vn: 'Ba'},
  {id: 'a4', en: 'Four', vn: 'Bon'},
  {id: 'a5', en: 'Five', vn: 'Nam'},
];
class App extends Component {
  render() {
    return <View style={{flex: 1}} />;
  }
}

export default App;
