import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

import styles from './style';
import { emailChanged, passwordChanged, loginUser } from '../../../actions';
import { Spinner } from '../../common';


class LoginScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //uname: 'Username / email',
  //     //pswd: 'Password'
  //   };
  // }
  componentDidMount() {
    this.props.emailChanged("");
    this.props.passwordChanged("");
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onSignInButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderSignInButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Touchable style={[styles.orange, styles.btnTouchable]} onPress={this.onSignInButtonPress.bind(this)}>
        <Text style={styles.btnText}>SIGN IN</Text>
      </Touchable>
    );
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

            <View style={[styles.btnGrp]}>
              {this.renderSignInButton()}
              <Touchable style={[styles.red, styles.btnTouchable]} onPress={() => Actions.signup()}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </Touchable>
            </View>

            <Text style={[styles.errorTextStyle]}>
              {this.props.error}
            </Text>

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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginScreen);
