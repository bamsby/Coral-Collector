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

import styles from './style';
import MenuHeader from '../partials/MenuHeader/index';

export default class AccountSettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email Address',
      npswd: 'New Password',
      rpswd: 'Re-enter Password',
      cpswd: 'Current Password',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader menuTitle="ACCOUNT SETTINGS" />

        <View style={[styles.body]}>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.btnGrp]}>
              <Touchable style={[styles.orange, styles.btnTouchable]}>
                <Text style={styles.btnText}>Change Email</Text>
              </Touchable>
            </View>
          </View>

          <View style={[styles.form]}>
            <Text style={[styles.formTitle]}>Would you like to Change your Password?</Text>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ npswd: text })}
                value={this.state.npswd}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ rpswd: text })}
                value={this.state.rpswd}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ cpswd: text })}
                value={this.state.cpswd}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.btnGrp]}>
              <Touchable style={[styles.greenBtn, styles.btnTouchable]}>
                <Text style={styles.btnText}>Change Password</Text>
              </Touchable>
            </View>
          </View>

          <Touchable>
            <Text style={{ color: '#eb3a46', textAlign: 'center', fontSize: 10, fontFamily: 'Oswald-Regular' }}>DELETE MY ACCOUNT</Text>
          </Touchable>
        </View>

      </View>
    );
  }
}
