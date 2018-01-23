import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {Actions} from 'react-native-router-flux'
import styles from './style'

export default class CloudLayout extends Component {
  render(){
    const linkTo = this.props.linkTo;
    return(
      <Touchable style={[styles.cloudLayout, {backgroundColor: this.props.bgColor}]} onPress={() => Actions.push(linkTo)}>
        <View>
          <Text style={[styles.cloudText]}>{this.props.cloudText}</Text>
          {
            this.props.isActive
              ?
              <View style={[styles.triangleContainer]} >
                <View style={[styles.triangle, {borderTopColor: this.props.bgColor}]} />
              </View>
              :
              null
          }
        </View>

      </Touchable>
    )
  }
}