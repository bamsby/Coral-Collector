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
import { Actions } from 'react-native-router-flux';

import styles from './style';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: 'Username / email',
      pswd: 'Password'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/bg.png')} style={[styles.bgImage]} />
        <ScrollView style={styles.overlayContainer}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
          <Text style={[styles.gothamLight, styles.title]}>CORAL</Text>
          <Text style={[styles.subText, styles.gothamLight]}>Community Recycling Made Simple</Text>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ uname: text })}
                placeholder={this.state.uname}
                style={[styles.inputStyle]}
                placeholderTextColor="#fff"
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ pswd: text })}
                placeholder={this.state.pswd}
                style={[styles.inputStyle]}
                placeholderTextColor="#fff"
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={[styles.btnGrp]}>
              <Touchable style={[styles.orange, styles.btnTouchable]} onPress={() => Actions.home()}>
                <Text style={styles.btnText}>SIGN IN</Text>
              </Touchable>
              <Touchable style={[styles.red, styles.btnTouchable]} onPress={() => Actions.signup()}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </Touchable>
            </View>

            <View style={[styles.socialBtnGrp]}>
              <Touchable style={[styles.fb, styles.socialBtnTouchable]}>
                <FontAwesome name="facebook" style={styles.btnText} />
              </Touchable>
              <Touchable style={[styles.google, styles.socialBtnTouchable]}>
                <FontAwesome name="google-plus" style={styles.btnText} />
              </Touchable>
            </View>

            <Touchable onPress={() => Actions.forgotpswd()}>
              <Text style={[styles.forgotPswdLink]}>Forgot your password?</Text>
            </Touchable>

            <Touchable style={[styles.greenBtn, styles.btnTouchable, { marginTop: 13 }]} onPress={() => Actions.home()}>
              <Text style={[styles.btnText]}>BROWSE CAMPAIGNS</Text>
            </Touchable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
