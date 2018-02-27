
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

export default class MenuHeader extends Component {
  render() {
    return (
      <View style={[styles.header]}>
        <Touchable style={[styles.menuIconTouchable]} onPress={() => this.props.openSidebar()}>
          <View>
            {
              this.props.new
                ?
                <View style={styles.new}/>
                :
                null
            }
            <Image source={require('../../../../assets/images/menu.png')} style={[styles.menuIcon]}/>
          </View>
        </Touchable>
        <Text style={[styles.gothamLight, styles.title]}>{this.props.menuTitle}</Text>
      </View>
    )
  }
}
