/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';
import {connect} from 'react-redux';

class List extends Component {
  filteredWord = () => {
    return this.props.words.filter(item => {
      if (this.props.filterMode === 'Show_All') {
        return true;
      }
      if (this.props.filterMode === 'Show_Forgot' && item.isMemorized) {
        return true;
      }
      if (this.props.filterMode === 'Show_Memorized' && !item.isMemorized) {
        return true;
      }
      return false;
    });
  };
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: 'lightgrey', position: 'relative'}}>
          <View
            style={{
              borderColor: 'white',
              borderRadius: Dimensionapp.getWidth() / 100,
              backgroundColor: 'white',
              margin: Dimensionapp.getWidth() / 70,
              padding: Dimensionapp.getWidth() / 90,
            }}>
            <Form />
          </View>
          <Filter />
          {this.filteredWord().map(item => (
            <Word word={item} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    words: state.words,
    filterMode: state.filterMode,
  };
};

export default connect(mapStateToProps)(List);
