/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
  }
  addWord = () => {
    // const {txtEn, txtVn} = this.state;
    // if (txtEn.length <= 0 || txtVn.length <= 0) {
    //   return alert('Ban chua nhap du thong tin');
    // }
    // const newWord = {
    //   id: Math.random(),
    //   en: txtEn,
    //   vn: txtVn,
    //   isMemorized: false,
    // };
    // const {onAddWord} = this.props;
    // onAddWord(newWord);
    // this.setState({txtEn: '', txtVn: ''});
    this.props.dispatch({type: 'ADD_WORD'});
  };
  renderForm() {
    const {shouldShowForm} = this.props;
    if (shouldShowForm) {
      return (
        <KeyboardAvoidingView behavior="padding">
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
            value={this.state.txtEn}
            onChangeText={function(text) {
              this.setState({txtEn: text});
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
            value={this.state.txtVn}
            onChangeText={function(text) {
              this.setState({txtVn: text});
            }.bind(this)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => this.addWord()}
              style={{
                backgroundColor: '#28a745',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Add word
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.dispatch({type: 'TOGGLE_FORM'})}
              style={{
                backgroundColor: 'red',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.props.dispatch({type: 'TOGGLE_FORM'})}
          style={{
            paddingVertical: Dimensionapp.getWidth() / 30,
            backgroundColor: '#28a745',
            alignItems: 'center',
            borderRadius: Dimensionapp.getWidth() / 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: Dimensionapp.getWidth() / 15,
            }}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return <View>{this.renderForm()}</View>;
  }
}
const mapStateToProps = function(state) {
  return {
    shouldShowForm: state.shouldShowForm,
  };
};

export default connect(mapStateToProps)(Form);
