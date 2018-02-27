/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {FontAwesome} from '@expo/vector-icons';
import styles from './style'
import MenuHeader from '../partials/MenuHeader/index'
import Drawer from 'react-native-drawer'
import SidebarScreen from '../Sidebar/index'

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email Address',
      npswd: 'New Password',
      rpswd: 'Re-enter Password',
      cpswd: 'Current Password',
    }
  }

  openSideBar = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SidebarScreen active="notification"/>}
        side="left"
        acceptTap={true}
        tapToClose={true}
        acceptDoubleTap
        acceptPan
        captureGestures={true}
        tweenDuration={200}
        tweenEasing={'linear'}
        panThreshold={0.08}
        openDrawerOffset={(viewport) => {
                    return 100
                }}
        closedDrawerOffset={0}
      >
        <View style={styles.container}>
          <MenuHeader menuTitle="NOTIFICATIONS" new={true} openSidebar={this.openSideBar} />

          <View>
            <View style={[styles.card]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.date]}>24 nov 2017</Text>
                <View style={[styles.row]}>
                  <Touchable style={[styles.loved]}>
                    <FontAwesome name="heart-o" size={9} color="#fff"/>
                  </Touchable>
                  <Text style={[styles.title]}>Tracy</Text>
                  <Text style={[styles.greyLight]}>loved your</Text>
                  <Text style={[styles.red, styles.type]}>project</Text>
                </View>
                <Text
                  style={[styles.openSansSemiBold, styles.red, styles.notificationText]}>School Collection Campaign</Text>
              </View>
            </View>

            <View style={[styles.card]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.date]}>24 nov 2017</Text>
                <View style={[styles.row]}>
                  <Touchable style={[styles.backed]}>
                    <FontAwesome name="star-o" size={9} color="#fff"/>
                  </Touchable>
                  <Text style={[styles.title]}>Tracy</Text>
                  <Text style={[styles.greyLight]}>backed your</Text>
                  <Text style={[styles.yellow, styles.type]}>project</Text>
                </View>
                <Text style={[styles.openSansSemiBold, styles.yellow, styles.notificationText]}>School Collection Campaign</Text>
              </View>
            </View>

            <View style={[styles.card]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.date]}>24 nov 2017</Text>
                <View style={[styles.row]}>
                  <Touchable style={[styles.comment]}>
                    <FontAwesome name="comment-o" size={9} color="#fff"/>
                  </Touchable>
                  <Text style={[styles.title]}>Tracy</Text>
                  <Text style={[styles.greyLight]}>posted a comment</Text>
                </View>
                <Text style={[styles.openSansSemiBold, styles.green, styles.notificationText]}>School Collection Campaign</Text>
              </View>
            </View>
          </View>

        </View>
      </Drawer>
    );
  }
}


