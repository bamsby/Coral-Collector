import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styles from './style'
import {FontAwesome} from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'

export default class SidebarScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.profileContainer]}>
          <View style={[styles.mediaContainer]}>
            <View style={[styles.media]}/>
          </View>
          <View style={[styles.textContainer]}>
            <Text style={[styles.profileName]}>Kolam Ayer RC</Text>
            <Text style={[styles.profileAdd]}>
              <FontAwesome name="map-marker"/> 38A Bendemeer Road #01-818
            </Text>
            <Text style={[styles.profileAdd]}>
              S(331038)
            </Text>
            <Touchable>
              <Text style={[styles.editProfileLink]}>Edit Profile</Text>
            </Touchable>
          </View>
        </View>

        <View style={{flex: 3}}>
          <Touchable onPress={() => Actions.home()}>
            <View style={[styles.list, this.props.active === 'home' ? styles.activeList : null]}>
              <Image source={require('../../../assets/images/sidebarIcons/home.png')}/>
              <Text style={[styles.listText]}>BROWSE CAMPAIGNS</Text>
            </View>
          </Touchable>

          <Touchable onPress={() => Actions.mycampaign()}>
            <View style={[styles.list, this.props.active === 'mycampaign' ? styles.activeList : null]}>
              <Image source={require('../../../assets/images/sidebarIcons/mycampaigns.png')}/>
              <Text style={[styles.listText]}>MY CAMPAIGNS</Text>
            </View>
          </Touchable>

          <Touchable onPress={() => Actions.notification()}>
            <View style={[styles.list, this.props.active === 'notification' ? styles.activeList : null]}>
              <Image source={require('../../../assets/images/sidebarIcons/notification.png')}/>
              <Text style={[styles.listText]}>NOTIFICATIONS</Text>
              <View style={[styles.numbContainer]}>
                <Text style={[styles.notificationNumb]}>3</Text>
              </View>
            </View>
          </Touchable>
          <Touchable onPress={() => Actions.acctsetting()}>
            <View style={[styles.list, this.props.active === 'settings' ? styles.activeList : null]}>
              <Image source={require('../../../assets/images/sidebarIcons/settings.png')}/>
              <Text style={[styles.listText]}>SETTINGS</Text>
            </View>
          </Touchable>
          <Touchable onPress={() => Actions.profile()}>
            <View style={[styles.list, this.props.active === 'profile' ? styles.activeList : null]}>
              <Image source={require('../../../assets/images/sidebarIcons/profile.png')}/>
              <Text style={[styles.listText]}>PROFILE</Text>
            </View>
          </Touchable>
        </View>

        <Touchable onPress={() => Actions.pop()}>
          <View style={[styles.logoutContainer]}>
            <Image source={require('../../../assets/images/sidebarIcons/logout.png')}/>
            <Text style={[styles.listText]}>Logout</Text>
          </View>
        </Touchable>
      </View>
    )
  }
}