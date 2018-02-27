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
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

import styles from './style';
import GreenMenuHeader from '../../partials/GreenHeader/index';

export default class CampaignStepOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      rewardName: 'Reward Name',
      rewardAmt: 'Reward Amount',
      rewardDetail: 'Reward Detail',
      anyRewards: false
    };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible:false });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <GreenMenuHeader menuTitle="CREATE YOUR CAMPAIGN" />
        <View style={[styles.stepIndicatorContainer]}>
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
        </View>

        <View>
          <Text style={{ textAlign: 'center', fontFamily: 'open-sans-semibold', color: '#6d6d6d', marginBottom: 12 }}>(optional)</Text>
          <Touchable style={[styles.btnTouchable, styles.greenBtn]} onPress={() => this.openModal()}>
            <View style={{ flexDirection: 'row' }}>
            {
              this.state.anyRewards
                ?
                <Image source={require('../../../../assets/images/add.png')} style={{ marginRight: 10 }} />
                :
                null
            }
            <Text style={[styles.btnText]}>ADD REWARDS</Text>
            </View>
          </Touchable>
        </View>

        {
          this.state.anyRewards
          ?
            <View style={{ paddingHorizontal: Dimensions.get('window').width > 320 ? 66 : 26 }}>
              <View style={[styles.list]}>
                <View style={[styles.leftContent]}>
                  <Text style={[styles.listTitle]}>Recycle 10 Kg and above</Text>
                  <Text style={[styles.content]}>
                    Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                  </Text>
                </View>
                <View style={[styles.rightContent]}>
                  <Text style={[styles.price]}>$2</Text>
                </View>
              </View>
              <View style={[styles.list]}>
                <View style={[styles.leftContent]}>
                  <Text style={[styles.listTitle]}>Recycle 10 Kg and above</Text>
                  <Text style={[styles.content]}>
                    Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                  </Text>
                </View>
                <View style={[styles.rightContent]}>
                  <Text style={[styles.price]}>$5</Text>
                </View>
              </View>
              <View style={[styles.list]}>
                <View style={[styles.leftContent]}>
                  <Text style={[styles.listTitle]}>Recycle 10 Kg and above</Text>
                  <Text style={[styles.content]}>
                    Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                  </Text>
                </View>
                <View style={[styles.rightContent]}>
                  <Text style={[styles.price]}>$10</Text>
                </View>
              </View>
            </View>
          :
            <View style={{ minHeight: 320, justifyContent: 'center', alignItems: 'center' }}>
              <Text>You have not yet added any rewards</Text>
            </View>
        }
        <View style={[styles.btnGrp, { flexDirection: 'row', justifyContent: 'center' }]}>
          <Touchable style={[styles.greenBtn, styles.btnTouchable, { marginHorizontal: 10 }]} onPress={() => Actions.pop()}>
            <Text style={styles.btnText}>PREVIOUS</Text>
          </Touchable>
          <Touchable style={[styles.greenBtn, styles.btnTouchable, { marginHorizontal: 10 }]} onPress={() => Actions.champaignfinalstep()}>
            <Text style={styles.btnText}>NEXT</Text>
          </Touchable>
        </View>

        <Modal isVisible={this.state.modalVisible}>
          <View style={[styles.modalContent]}>
            <View style={[styles.inputContainer]}>
              <TextInput
                onChangeText={(text) => this.setState({ rewardName: text })}
                style={[styles.inputStyle]}
                placeholder="Reward Name"
                underlineColorAndroid='transparent'
              />
              <Text style={[styles.inputChar]}>0/30</Text>
            </View>
            <View style={[styles.inputContainer, { marginBottom: 15 }]}>
              <TextInput
                onChangeText={(text) => this.setState({ rewardAmt: text })}
                style={[styles.inputStyle]}
                placeholder="Reward Amount"
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                onChangeText={(text) => this.setState({ rewardDetail: text })}
                style={[styles.inputStyle]}
                placeholder="Reward Details"
                underlineColorAndroid='transparent'
              />
              <Text style={[styles.inputChar]}>500/500</Text>
            </View>

            <View style={[styles.btnGrp, { flexDirection: 'row', justifyContent: 'center' }]}>
              <Touchable style={[styles.red, styles.btnTouchable, { marginHorizontal: 10 }]} onPress={() => this.closeModal()}>
                <Text style={styles.btnText}>CANCEL</Text>
              </Touchable>
              <Touchable style={[styles.orange, styles.btnTouchable, { marginHorizontal: 10 }]} >
                <Text style={styles.btnText}>SAVE</Text>
              </Touchable>
            </View>
          </View>
        </Modal>

      </ScrollView>
    );
  }
}
