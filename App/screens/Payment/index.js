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
import QRCode from 'react-native-qrcode';
import Modal from "react-native-modal";
import Touchable from 'react-native-platform-touchable';
import styles from './style'
import GreenMenuHeader from '../partials/GreenHeader/index'

export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View style={styles.container}>
        <GreenMenuHeader menuTitle="PAYMENT"/>
        <View style={[styles.qrcodecontainer]}>
          <QRCode
            value="Hello"
            size={115}
            bgColor='black'
            fgColor='white'/>
        </View>

        <Text style={{marginTop: 30, color:'red', textAlign: 'center'}} onPress={() => this.openModal()}>For test: Open Modal</Text>
        <Modal isVisible={this.state.modalVisible}>
          <View style={[styles.modalContent]}>
            <Text style={[styles.modalTitle]}>ALICE</Text>
            <View style={[styles.row]}>
              <View style={[styles.mediaContainer]}>
                <View style={[styles.media]} />
              </View>
              <View style={[styles.text]}>
                <Text style={[styles.profileText]}>Pledged 2 KG of Newspaper</Text>
                <Text style={[styles.profileText]}>Pledged 8 KG of Clothes</Text>
              </View>
            </View>

            <View style={[styles.row, {marginTop: 22, paddingBottom: 14, borderBottomWidth: 1, borderColor: '#ccc'}]}>
              <View style={[styles.leftSection]}>
                <Text style={{fontSize: 12.5}}>Weight Accurate</Text>
                <Text style={{fontSize: 12.5, color: '#6d6d6d'}}>Total Reward: $2</Text>
              </View>
              <View style={[styles.rightSection]}>
                <Touchable style={[styles.greenBtn, styles.btnTouchable]} onPress={() => {this.closeModal()}}>
                  <Text style={[styles.btnText]}>PAY</Text>
                </Touchable>
              </View>
            </View>

            <View style={[styles.row, {marginTop: 27}]}>
              <View style={[styles.leftSection]}>
                <Text style={{fontSize: 12.5}}>Weight Inaccurate</Text>
                <Text style={{fontSize: 12.5, color: '#6d6d6d', backgroundColor: '#cecece', padding: 4, marginTop: 5.5}}>Reward Amount</Text>
              </View>
              <View style={[styles.rightSection]}>
                <Touchable style={[styles.orangeBtn, styles.btnTouchable]}>
                  <Text style={[styles.btnText]}>COUNTER</Text>
                </Touchable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}


