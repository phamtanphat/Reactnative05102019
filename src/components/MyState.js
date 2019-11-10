/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Myfunction from './Myfunction';
import {connect} from 'react-redux';

class MyState extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 40}}>
          Count : {this.props.count}
        </Text>
        <Myfunction />
      </View>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    count: state,
  };
};

export default connect(mapStateToProps)(MyState);
