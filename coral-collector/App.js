import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Font } from 'expo';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginScreen from './App/screens/Login/index';
import SignupScreen from './App/screens/Signup/index';
import ForgotPswdScreen from './App/screens/ForgotPassword/index';
import AccountSettingScreen from './App/screens/AccountSetting/index';
import MyCampaignsScreen from './App/screens/MyCampaigns/index';
import RecyclingDriveBackerScreen from './App/screens/RecyclingDrive/Backers/index';
import RecyclingDriveUpdateScreen from './App/screens/RecyclingDrive/Updates/index';
import RecyclingDriveCommentScreen from './App/screens/RecyclingDrive/Comments/index';
import RecyclingDriveDetailScreen from './App/screens/RecyclingDrive/Details/index';
import CampaignFinalStepScreen from './App/screens/Campaign/FinalStep/index';
import CampaignStepOneScreen from './App/screens/Campaign/StepOne/index';
import CampaignStepTwoScreen from './App/screens/Campaign/StepTwo/index';
import CampaignStepThreeScreen from './App/screens/Campaign/StepThree/index';
import PaymentScreen from './App/screens/Payment/index'
import TransferHistoryScreen from './App/screens/TransferHistory/index'
import NotificationScreen from './App/screens/Notification/index'
import ProfileScreen from './App/screens/Profile/index'
import HomeScreen from './App/screens/Home/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
      'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'gotham-round': require('./assets/fonts/GothamRoundedLight.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded
        ?
      <View style={[styles.container]}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Router>
          <Stack key="root" hideNavBar>
            <Scene key="login" component={LoginScreen} initial />
            <Scene key="signup" component={SignupScreen} />
            <Scene key="forgotpswd" component={ForgotPswdScreen} />
            <Scene key="acctsetting" component={AccountSettingScreen} />
            <Scene key="mycampaign" component={MyCampaignsScreen} />
            <Scene key="recyclingdrivedetail" component={RecyclingDriveDetailScreen} />
            <Scene key="recyclingdrivebacker" component={RecyclingDriveBackerScreen} />
            <Scene key="recyclingdriveupdate" component={RecyclingDriveUpdateScreen}  />
            <Scene key="recyclingdrivecomment" component={RecyclingDriveCommentScreen} />
            <Scene key="champaignfinalstep" component={CampaignFinalStepScreen} />
            <Scene key="champaignstepone" component={CampaignStepOneScreen} />
            <Scene key="champaignsteptwo" component={CampaignStepTwoScreen} />
            <Scene key="champaignstepthree" component={CampaignStepThreeScreen} />
            <Scene key="payment" component={PaymentScreen} />
            <Scene key="notification" component={NotificationScreen} />
            <Scene key="profile" component={ProfileScreen} />
            <Scene key="home" component={HomeScreen} />
            <Scene key="transferhistory" component={TransferHistoryScreen}  />
          </Stack>
        </Router>
      </View>

        :
        null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
