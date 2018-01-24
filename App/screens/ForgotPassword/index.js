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
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Actions } from 'react-native-router-flux';
import styles from './style';

export default class ForgotPswdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/bg.png')} style={[styles.bgImage]} />
        <Touchable style={[styles.backOverlay]} onPress={() => Actions.pop()}>
          <Image source={require('../../../assets/images/back_yellow.png')} />
        </Touchable>
        <View style={styles.overlayContainer}>
          <Text style={[styles.gothamLight, styles.title]}>RECOVER YOUR PASSWORD</Text>
          <Text style={[styles.subText]}>
            Enter the email address you used to sign up and we'll send you a link to reset your password.
          </Text>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                style={[styles.inputStyle]}
              />
            </View>


            {/*<CheckBox*/}
            {/*title='Click Here'*/}
            {/*checked={this.state.checked}*/}
            {/*/>*/}

            <View style={[styles.btnGrp]}>
              <Touchable style={[styles.greenBtn, styles.btnTouchable]}>
                <Text style={styles.btnText}>CONTINUE</Text>
              </Touchable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
