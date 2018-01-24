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
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';
import TwoIconMenuHeader from '../../partials/TwoIconMenu/index';
import CloudLayout from '../../partials/Cloud/index';

export default class RecyclingDriveBackerScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TwoIconMenuHeader menuTitle="RECYCLING DRIVE" />

        <View style={[styles.body]}>
          <View style={[styles.pageIndicator]}>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="DETAILS" linkTo="recyclingdrivedetail" isActive={false} bgColor="#eb3a46" />
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="UPDATES (3)" linkTo="recyclingdriveupdate" isActive={false} bgColor="#ee8c3c" />
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="BACKERS (3)" linkTo="recyclingdrivebacker" isActive bgColor="#3bb866" />
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="COMMENTS (54)" linkTo="recyclingdrivecomment" isActive={false} bgColor="#eb3a46" />
            </View>
          </View>

          <View style={[styles.pageView]}>
            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.title]}>ALICE</Text>
                <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                <Text style={[styles.backer]}><FontAwesome name="star" size={9} /> Backed 3 other projects. </Text>
                <Text style={[styles.pledged]}>Pledged 5 KG </Text>
              </View>
            </View>
            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.title]}>ALICE</Text>
                <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                <Text style={[styles.backer]}><FontAwesome name="star" size={9} /> Backed 3 other projects. </Text>
                <Text style={[styles.pledged]}>Pledged 5 KG </Text>
              </View>
            </View>
            <View style={[styles.backerCard]}>
              <View style={[styles.media]}></View>
              <View style={[styles.text]}>
                <Text style={[styles.title]}>ALICE</Text>
                <Text style={[styles.code]}>
                  <FontAwesome name="map-marker" /> 333333</Text>
                <Text style={[styles.backer]}><FontAwesome name="star" size={9} /> Backed 3 other projects. </Text>
                <Text style={[styles.pledged]}>Pledged 5 KG </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


