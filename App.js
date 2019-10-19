import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: 'blue',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: '700',
            padding: 50,
          }}>
          Hello react
        </Text>
        <Text>react native</Text>
      </View>
    );
  }
}

export default App;
