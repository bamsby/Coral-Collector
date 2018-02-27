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
  TextInput,
  ScrollView

} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import Touchable from 'react-native-platform-touchable'
import styles from './style'
import TwoIconMenuHeader from '../../partials/TwoIconMenu/index'
import CloudLayout from '../../partials/Cloud/index'
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

export default class RecyclingDriveDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [
        {
          "latitude": 37.78825,
          "longitude": -122.4324,
          "id": 1
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TwoIconMenuHeader menuTitle="RECYCLING DRIVE"/>

        <View style={[styles.body]}>
          <View style={[styles.pageIndicator]}>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="DETAILS" linkTo="recyclingdrivedetail" isActive={true} bgColor="#eb3a46"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="UPDATES (3)" linkTo="recyclingdriveupdate" isActive={false} bgColor="#ee8c3c"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="BACKERS (3)" linkTo="recyclingdrivebacker" isActive={false} bgColor="#3bb866"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="COMMENTS (54)" linkTo="recyclingdrivecomment" isActive={false} bgColor="#eb3a46"/>
            </View>
          </View>

          <ScrollView style={[styles.pageView]}>
            <View style={[styles.galleryContainer]}>

            </View>
            <View>
              <Progress.Bar
                progress={0.79}
                width={null}
                unfilledColor="#a9a9a6"
                borderRadius={0}
                color="#3bb866"
                height={32.5}
                borderWidth={0}
              />
              <Text style={[styles.progressText]}>79% Pledged</Text>
            </View>
            <View style={[styles.cardFooter]}>
              <View style={[styles.li]}>
                <Text style={[styles.p]}>5000KG</Text>
                <Text style={[styles.span, styles.orange]}> Pledged</Text>
              </View>
              <View style={[styles.li, styles.border]}>
                <Text style={[styles.p]}>30</Text>
                <Text style={[styles.span, styles.green]}> Bakers</Text>
              </View>
              <View style={[styles.li, {flexDirection: 'row'}]}>
                <Text style={[styles.p, {fontSize: 37}]}>15</Text>
                <Text style={[styles.span, styles.red]}> Days to go</Text>
              </View>
            </View>

            <Text style={[styles.textCenter, styles.openSansSemiBold, {fontSize: 9, color:'#4f4d4d'}]}>
              This campaign started on 18 Jan 2018 and will close on 2 Feb 2018 (11:59pm).
            </Text>

            <View style={[styles.goalSection]}>
              <Text style={[styles.textCenter, styles.openSansSemiBold]}>Goal of 5,000 KG  </Text>
              <View style={[styles.row, styles.goalRow]}>
                <View style={[styles.labelContainer, styles.totalLabel]}>
                  <Text style={[styles.label, ]}>Total</Text>
                </View>

                <View style={[styles.progressContainer]}>
                  <Progress.Bar
                    progress={0.78}
                    width={null}
                    unfilledColor="transparent"
                    borderRadius={0}
                    color="#3bb866"
                    height={30}
                    borderWidth={0}
                  />
                  <Text style={[styles.progressGoalText]}>3,950 KG</Text>
                </View>
              </View>

              <View style={[styles.row, styles.goalRow]}>
                <View style={[styles.labelContainer]}>
                  <Text style={[styles.label, ]}>Clothes</Text>
                </View>

                <View style={[styles.progressContainer]}>
                  <Progress.Bar
                    progress={0.5}
                    width={null}
                    unfilledColor="transparent"
                    borderRadius={0}
                    color="#3bb866"
                    height={30}
                    borderWidth={0}
                  />
                  <Text style={[styles.progressGoalText]}>3,950 KG</Text>
                </View>
              </View>

              <View style={[styles.row, styles.goalRow]}>
                <View style={[styles.labelContainer]}>
                  <Text style={[styles.label, ]}>Newspaper</Text>
                </View>

                <View style={[styles.progressContainer]}>
                  <Progress.Bar
                    progress={0.4}
                    width={null}
                    unfilledColor="transparent"
                    borderRadius={0}
                    color="#3bb866"
                    height={30}
                    borderWidth={0}
                  />
                  <Text style={[styles.progressGoalText]}>3,950 KG</Text>
                </View>
              </View>

              <View style={[styles.row, styles.goalRow]}>
                <View style={[styles.labelContainer]}>
                  <Text style={[styles.label, ]}>Bottles</Text>
                </View>

                <View style={[styles.progressContainer]}>
                  <Progress.Bar
                    progress={0.2}
                    width={null}
                    unfilledColor="transparent"
                    borderRadius={0}
                    color="#3bb866"
                    height={30}
                    borderWidth={0}
                  />
                  <Text style={[styles.progressGoalText]}>3,950 KG</Text>
                </View>
              </View>
            </View>

            <View style={[styles.fundRaisingSection]}>
              <Text style={[styles.fundRaisingTitle]}>THE FUND-RAISING PROJECT</Text>
              <Text style={{paddingLeft: 21, marginBottom: 20}}>Collecting paper, clothing, plastic, cans, metal, glass and empty drink packets. All collectable exchange for CASH!</Text>
              <View style={[styles.row, styles.funRaisingRow]}>
                <View style={[styles.left]}>
                  <Image source={require('../../../../assets/images/calendar.png')}/>
                  <Text style={[styles.funRaisingLabel]}>Meeting</Text>
                </View>
                <View style={[styles.right]}>
                  <Text>9.30 AM - 12.30 PM </Text>
                  <Text>2 February 2018</Text>
                </View>
              </View>

              <View style={[styles.row, styles.funRaisingRow]}>
                <View style={[styles.left]}>
                  <Image source={require('../../../../assets/images/location.png')}/>
                  <Text style={[styles.funRaisingLabel]}>Location</Text>
                </View>
                <View style={[styles.right]}>
                  <Text>Block 47A, Link Building </Text>
                  <Text>Bendemeer Road</Text>
                </View>
              </View>
            </View>
            <View style={{height: 150, backgroundColor:'#cfcecd'}}>
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              >
                {
                  this.state.marker.map(marker => (
                    <MapView.Marker coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                                    key={marker.id}
                                    image={require('../../../../assets/images/pin.png')}
                    >
                    </MapView.Marker>
                  ))
                }
              </MapView>
            </View>
            <View style={[styles.fullProfileContainer]}>
              <View style={[styles.card, styles.row]}>
                <View style={[styles.mediaContainer]}>
                  <View style={[styles.media]}></View>
                </View>
                <View style={[styles.textContainer]}>
                  <Text style={[styles.cardTitle]}>Kolam Ayer Whampoa South RC</Text>
                  <View style={[styles.row, {marginBottom: 5}]}>
                    <View style={{flex: 2}}>
                      <Text style={[styles.add, styles.openSansSemiBold]}>38A, Bendemeer Road</Text>
                      <Text style={[styles.add, styles.openSansSemiBold]}>#01-818</Text>
                      <Text style={[styles.add, styles.openSansSemiBold]}>S(331038)</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={[styles.created, styles.textCenter]}>Created</Text>
                      <Text style={[styles.numbCreated, styles.orange, styles.textCenter]}>4</Text>
                    </View>
                  </View>

                </View>
                <View style={[styles.btnContainer]}>
                  <Touchable style={[styles.greenBtn, styles.button]}>
                    <Text style={[styles.btnText, styles.openSansSemiBold]}>Full Profile</Text>
                  </Touchable>
                  <Touchable style={[styles.orangeBtn, styles.button]}>
                    <Text style={[styles.btnText, styles.openSansSemiBold]}>Full Profile</Text>
                  </Touchable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}


