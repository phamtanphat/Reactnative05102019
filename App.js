/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Word from './src/components/Word';
import List from './src/components/List';
import Form from './src/components/Form';

// import MyState from './src/components/MyState';
// import MyProps from './src/components/MyProps';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
          {arrayWords.map(function(word) {
            return <Word word={word} key={word.id} />;
          })}
        </View> */}
        {/* <List /> */}
        <Form />
      </SafeAreaView>
    );
  }
}

export default App;
