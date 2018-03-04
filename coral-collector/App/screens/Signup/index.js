import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import { Checkbox } from 'teaset';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

import styles from './style';
import { emailChanged, passwordChanged, newPasswordChanged, signupUser, passwordDifferent } from '../../../actions';
import { Spinner } from '../../common';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'full name',
      pswd: 'password',
      email: 'email',
      rpswd: 're-enter password',
      checked: true
    };
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onNewPasswordChange(text) {
    this.props.newPasswordChanged(text);
  }
  onSignUpButtonPress() {
    const { email, password } = this.props;
    
    if(this.props.password != this.props.newPassword)
      this.props.passwordDifferent();
    else
      this.props.signupUser({ email, password });
  }
  renderSignUpButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Touchable style={[styles.red, styles.btnTouchable]} onPress= {this.onSignUpButtonPress.bind(this)}>
        <Text style={styles.btnText}>SIGN UP</Text>
      </Touchable>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/bg.png')} style={[styles.bgImage]} />
        <Touchable style={[styles.backOverlay]} onPress={() => Actions.pop()}>
          <Image source={require('../../../assets/images/back_yellow.png')} />
        </Touchable>
        <View style={styles.overlayContainer}>
          <Text style={[styles.gothamLight, styles.title]}>CREATE ACCOUNT</Text>
          <View style={[styles.form]}>
            <View style={[styles.inputField]}>
              <TextInput
                onChangeText={(text) => this.setState({ fullname: text })}
                placeholder={this.state.fullname}
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                placeholder="Email"
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}                
                style={[styles.inputStyle]}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                placeholder="Password"
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                style={[styles.inputStyle]}
                secureTextEntry                
              />
            </View>
            <View style={[styles.inputField]}>
              <TextInput
                placeholder="Re-enter Password"
                value={this.props.newPassword}
                onChangeText={this.onNewPasswordChange.bind(this)}
                style={[styles.inputStyle]}
                secureTextEntry
              />
            </View>

            <Checkbox
              title='Happy with our weekly newsletter'
              titleStyle={{ color: '#fff' }}
              checkedIcon={<FontAwesome name="check-circle" color="#3dbb69" size={20} />}
              uncheckedIcon={<FontAwesome name="circle-thin" color="#3dbb69" size={20} />}
              checked={this.state.checked}
              onChange={checked => this.setState({ checked })}
            />

            <View style={[styles.btnGrp]}>
              {this.renderSignUpButton()}              
            </View>

            <Text style={[styles.errorTextStyle]}>
              {this.props.error}
            </Text>

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

const mapStateToProps = ({ auth }) => {
  const { email, password, newPassword, error, loading } = auth;

  return { email, password, newPassword, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, newPasswordChanged, signupUser, passwordDifferent
})(SignupScreen);
