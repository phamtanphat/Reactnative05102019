/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 'a1', en: 'One', vn: 'Mot', isMemorized: true},
        {id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 'a3', en: 'Three', vn: 'Ba', isMemorized: false},
        {id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false},
        {id: 'a5', en: 'Five', vn: 'Nam', isMemorized: true},
      ],
      shouldShowForm: false,
      filterMode: 'Show_All',
    };
    this.onToggleMemorized = this.onToggleMemorized.bind(this);
    this.onRemoveWord = this.onRemoveWord.bind(this);
    this.onAddWord = this.onAddWord.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onSetFilterMode = this.onSetFilterMode.bind(this);
  }
  onToggleMemorized(id) {
    const newArray = this.state.words.map(item => {
      if (id !== item.id) {
        return item;
      }
      return {...item, isMemorized: !item.isMemorized};
    });
    this.setState({words: newArray});
  }
  onRemoveWord(id) {
    const newArray = this.state.words.filter(item => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newArray});
  }
  jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }
  onAddWord(newWord) {
    const newArray = this.jsonCopy(this.state.words);
    newArray.unshift(newWord);
    this.setState({words: newArray});
  }
  onToggleForm() {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  }
  onSetFilterMode(filterMode) {
    this.setState({filterMode});
  }
  filteredWord = () => {
    return this.state.words.filter(item => {
      if (this.state.filterMode === 'Show_All') {
        return true;
      }
      if (this.state.filterMode === 'Show_Forgot' && item.isMemorized) {
        return true;
      }
      if (this.state.filterMode === 'Show_Memorized' && !item.isMemorized) {
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
            <Form
              onToggleForm={this.onToggleForm}
              onAddWord={this.onAddWord}
              shouldShowForm={this.state.shouldShowForm}
            />
          </View>
          <Filter
            onSetFilterMode={this.onSetFilterMode}
            filterMode={this.state.filterMode}
          />
          {this.filteredWord().map(item => (
            <Word
              word={item}
              onToggleMemorized={this.onToggleMemorized}
              onRemoveWord={this.onRemoveWord}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

// store = {
//   name : 'phat',
//   age : 26,
// }
// {action : 'Change Name', name : newValue}

// Component A : (database : store)

// Component B : (database : store)
