import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyCameraGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageCamera: 'a',
    };
  }
  renderPlaceHolderImage() {
    if (this.state.imageCamera) {
      return (
        <Image
          resizeMode="stretch"
          source={require('../asset/ic_android.png')}
          style={{width: 200, height: 200}}
        />
      );
    } else {
      return <Text style={{fontSize: 35}}>No image</Text>;
    }
  }
  render() {
    return (
      <View style={{flex: 10, flexDirection: 'column', margin: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
              }}>
              <Icon name="camera" size={30} color="blue" />
              <Text style={{fontSize: 15, color: 'black'}}>Camera</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
              }}>
              <Icon name="file-image-o" size={30} color="red" />
              <Text style={{fontSize: 15, color: 'black'}}>Camera</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 200,
              height: 200,
              borderColor: 'black',
              borderRadius: 5,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.renderPlaceHolderImage()}
          </View>
        </View>
      </View>
    );
  }
}
