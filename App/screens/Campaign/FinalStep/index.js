/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';
import GreenMenuHeader from '../../partials/GreenHeader/index';

export default class CampaignFinalStepScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <GreenMenuHeader menuTitle="CREATE YOUR CAMPAIGN" />
        <View style={[styles.stepIndicatorContainer]}>
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
        </View>
        <Text style={[styles.title]}>CONGRATULATIONS</Text>
        <Text style={[styles.subTitle]}>your campaign is ready</Text>
        <View style={[styles.shareBtnBlock]}>
          <Text style={[styles.shareBlockTitle]}>Now you can share it with your friends</Text>
          <Touchable style={[styles.button, styles.fb]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
          <Touchable style={[styles.button, styles.twitter]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
          <Touchable style={[styles.button, styles.google]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
          <Touchable style={[styles.button, styles.pinterest]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
          <Touchable style={[styles.button, styles.insta]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
          <Touchable style={[styles.button, styles.contact]}>
            <Text style={[styles.btnText]}>SHARE ON FACEBOOK</Text>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}
