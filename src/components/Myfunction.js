/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Myfunction extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Increase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'red', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Decrease
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'slategray', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
