import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Myvectoricon extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="heart" size={30} color="red" />
        <Text> Myvectoricon </Text>
        {/* <Image 
            resizeMode="center"
            source={require('../asset/ic_android.png')} 
            style={{width : 200, height: 200}}/> */}
        <Image 
            resizeMode="center"
            style={{width : 200 , height : 200}}
            source={{uri: 'https://longdienland.com/img/logos/black-logo.png'}} />
      </View>
    );
  }
}
