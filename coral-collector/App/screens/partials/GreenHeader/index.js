import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Actions } from 'react-native-router-flux';

import styles from './style';

export default class GreenMenuHeader extends Component {
  render() {
    return (
    <View style={[styles.header]}>
      <Touchable style={[styles.menuIconTouchable]} onPress={() => this.props.lastPage ? Actions.home() : Actions.pop()}>
        <Image source={require('../../../../assets/images/back.png')} style={[styles.menuIcon]}/>
      </Touchable>
      <Text style={[styles.gothamLight, styles.title]}>{this.props.menuTitle}</Text>
    </View>
    );
  }
}
