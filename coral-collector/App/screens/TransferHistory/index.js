import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Touchable from 'react-native-platform-touchable';
import {FontAwesome} from '@expo/vector-icons';

import styles from './style'

export default class TransferHistoryScreen extends Component {
  render() {
    return (
      <View>
        <View style={[styles.header]}>
          <Touchable style={[styles.menuIconTouchable]} onPress={() => Actions.pop()}>
            <Image source={require('../../../assets/images/back.png')} style={[styles.menuIcon]}/>
          </Touchable>
          <Text style={[styles.gothamLight, styles.title]}>TRANSFER HISTORY</Text>
        </View>
        <ScrollView>
          <View style={[styles.transferCard]}>
            <View style={[styles.row, styles.grayBanner]}>
              <Text style={[styles.bannerText]}>Recycling Drive</Text>
              <Text style={[styles.bannerSmallText, styles.row]}>
                <FontAwesome name="map-marker" />
                338920</Text>
              <View style={[styles.filler]} />
              <Text style={[styles.bannerText]}>2 Jan 2018</Text>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} >
                  <Image source={require('../../../assets/images/profile.png')} style={[styles.image]} />
                </View>
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.transferCard]}>
            <View style={[styles.row, styles.grayBanner]}>
              <Text style={[styles.bannerText]}>Recycling Drive</Text>
              <Text style={[styles.bannerSmallText, styles.row]}>
                <FontAwesome name="map-marker" />
                338920</Text>
              <View style={[styles.filler]} />
              <Text style={[styles.bannerText]}>2 Jan 2018</Text>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.list, styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <View style={[styles.row, styles.spaceBtw]}>
                  <Text style={[styles.name]}>Alice</Text>
                  <Text style={[styles.dateTime]}>2 Jan 2018, 9:30am</Text>
                </View>
                <View style={[styles.row, styles.spaceBtw, {alignItems: 'flex-end'}]}>
                  <View>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                    <Text style={[styles.pledgeText]}>Pledged 2 KG of Newspaper</Text>
                  </View>
                  <View style={[styles.row, {alignItems: 'flex-end'}]}>
                    <Text style={[styles.label]}>Reward: </Text>
                    <Text style={[styles.dollar]}>$2</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    )
  }
}

