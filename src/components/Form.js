/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: null,
      vn: null,
      words: [],
      countId: 0,
    };
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <TextInput
          style={{
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            margin: 10,
            fontSize: 20,
            paddingHorizontal: 20,
          }}
          placeholder="English"
          value={this.state.en}
          onChangeText={function(text) {
            this.setState({en: text});
          }.bind(this)}
        />
        <TextInput
          style={{
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            margin: 10,
            fontSize: 20,
            paddingHorizontal: 20,
          }}
          placeholder="Vietnamese"
          value={this.state.vn}
          onChangeText={function(text) {
            this.setState({vn: text});
          }.bind(this)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              const {countId, en, vn} = this.state;
              const newWord = {
                id: countId,
                en,
                vn,
              };
              this.state.words.push(newWord);

              this.setState({
                words: this.state.words,
                countId: this.state.countId + 1,
              });
            }}
            style={{backgroundColor: '#28a745', padding: 15, borderRadius: 8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Add word
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 15, borderRadius: 8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20}}>
          Word : {JSON.stringify(this.state.words)}
        </Text>
      </KeyboardAvoidingView>
    );
  }
}
