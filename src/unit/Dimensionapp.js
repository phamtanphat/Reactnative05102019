import {Dimensions} from 'react-native';
class Dimensionapp {
  static getWidth() {
    return Dimensions.get('window').width;;
  }
  static getHeight() {
    return Dimensions.get('window').height;;
  }
}
