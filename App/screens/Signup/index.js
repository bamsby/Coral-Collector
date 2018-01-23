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
import {Checkbox} from 'teaset'
import { FontAwesome } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'
import styles from './style'

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname: 'full name',
      pswd: 'password',
      email: 'email',
      rpswd: 're-enter password'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/bg.png')} style={[styles.bgImage]}/>
        <Touchable style={[styles.backOverlay]} onPress={() => Actions.pop()}>
          <Image source={require('../../../assets/images/back_yellow.png')} />
        </Touchable>
        <View style={styles.overlayContainer}>
          <Text style={[styles.gothamLight, styles.title]}>CREATE ACCOUNT</Text>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({fullname:text})}
                value={this.state.fullname}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({email:text})}
                value={this.state.email}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({pswd:text})}
                value={this.state.pswd}
                style={[styles.inputStyle]}
              />
            </View>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({rpswd:text})}
                value={this.state.rpswd}
                style={[styles.inputStyle]}
              />
            </View>

            <Checkbox
              title='Happy with our weekly newsletter'
              titleStyle={{color: '#fff'}}
              checkedIcon={<FontAwesome name="check-circle" color="#3dbb69" size={20} />}
              uncheckedIcon={<FontAwesome name="circle-thin" color="#3dbb69" size={20}/>}
              checked={this.state.checked}
              onChange={checked => this.setState({checked})}
            />

            <View style={[styles.btnGrp]}>
              <Touchable style={[styles.red, styles.btnTouchable ]} onPress={() => Actions.acctsetting()}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </Touchable>
            </View>

            <View style={[styles.rowFlex]}>
              <Text style={[styles.forgotPswdLink]}>By signing up, you agree to our
                <Text style={[styles.blueText]}> terms of use </Text>
              and <Text style={[styles.blueText]}> privacy policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


