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
import Touchable from 'react-native-platform-touchable';
import {FontAwesome} from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import SidebarScreen from '../Sidebar/index'

import styles from './style'

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleChange: false,
      title: 'Kolam Ayer RC',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
      'Quia dolori non voluptas contraria est, sed doloris privatio.'+
      'Nos cum te, M. Cupit enim dícere nihil posse ad beatam vitam'+
    'deesse sapienti. Sed in rebus apertissimis nimium longi sumus.'+
      'Duo Reges: constructio interrete. Apparet statim, quae sint officia,'+
      'quae actiones. Potius inflammat, ut coercendi magis quam dedocendi esse'+
    'videantur. Sit enim idem caecus, debilis. Graece donan, Latine voluptatem vocant.',
      descChange: false,
      contactChange: false,
      phone:'+0000000000',
      email: 'kolamayer@gmail.com'
    }
  }

  openSideBar = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SidebarScreen active="profile"/>}
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
          <View style={[styles.header]}>
            <Image source={require('../../../assets/images/profile_bg.png')} style={[styles.overlay]}/>
            <View style={[styles.headerContent]}>
              <Touchable style={[styles.menuIconTouchable]} onPress={() => this.openSideBar()}>
                <Image source={require('../../../assets/images/menu.png')} style={[styles.menuIcon]}/>
              </Touchable>
              <View style={[styles.row, styles.titleContent, {alignItems: 'center'}]}>
                {/*<Text style={[styles.gothamLight, styles.title]}>Kolam Ayer RC</Text>*/}
                <TextInput
                  onChangeText={(text) => this.setState({title: text})}
                  value={this.state.title}
                  style={[{flex: 0.3}, styles.gothamLight, styles.title]}
                  editable={this.state.titleChange}
                  underlineColorAndroid='transparent'
                />
                <Touchable onPress={() => this.setState({titleChange: true})}>
                  <Image source={require('../../../assets/images/pencil.png')}/>
                </Touchable>
              </View>
              <Text style={[styles.code]}>
                <FontAwesome name="map-marker"/> 38A Bendemeer Road #01-818  S(331038)
              </Text>
              <View style={[styles.media]}>
                <Image source={require('../../../assets/images/RC_profile.png')}/>
              </View>
              <View>
                <Touchable style={[styles.editProfileText]} onPress={() => this.setState({descChange: true})}>
                  <Image source={require('../../../assets/images/pencil.png')}/>
                </Touchable>
                {/*<Text style={[styles.profileText]}>*/}
                  {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                  {/*Quia dolori non voluptas contraria est, sed doloris privatio.*/}
                  {/*Nos cum te, M. Cupit enim dícere nihil posse ad beatam vitam*/}
                  {/*deesse sapienti. Sed in rebus apertissimis nimium longi sumus.*/}
                  {/*Duo Reges: constructio interrete. Apparet statim, quae sint officia,*/}
                   {/*quae actiones. Potius inflammat, ut coercendi magis quam dedocendi esse*/}
                   {/*videantur. Sit enim idem caecus, debilis. Graece donan, Latine voluptatem vocant.*/}
                {/*</Text>*/}
                <TextInput placeholder={this.state.desc}
                           multiline={true}
                           onChangeText={(text) => this.setState({desc: text})}
                           value={this.state.desc}
                           editable={this.state.descChange}
                           style={[styles.profileText]}
                />
              </View>
              <View style={[styles.row, {alignItems: 'center', marginTop: 24}]}>
                <View style={[styles.row, {alignItems: 'center'}]}>
                  <FontAwesome name="phone" color="#fff"/>
                  <TextInput onChangeText={(text) => this.setState({phone: text})}
                             value={this.state.phone}
                             editable={this.state.contactChange}
                             style={[styles.contactText]}
                             placeholder={this.state.phone}
                  />
                </View>
                <View style={[styles.row, {alignItems: 'center'}]}>
                  <FontAwesome name="envelope" color="#fff"/>
                  <TextInput onChangeText={(text) => this.setState({email: text})}
                             value={this.state.email}
                             editable={this.state.contactChange}
                             style={[styles.contactText]}
                             placeholder={this.state.email}
                  />
                </View>
                <Touchable onPress={() => this.setState({contactChange: true})}>
                  <Image source={require('../../../assets/images/pencil.png')}/>
                </Touchable>
              </View>
            </View>

          </View>

          <View style={[styles.body]}>
            <View style={[styles.row, styles.block]}>
              <View style={[styles.amountBlock]}>
                <Text style={[styles.label]}>ACCOUNT BALANCE</Text>
                <View style={[styles.row]}>
                  <Text style={[styles.amount]}> $1000</Text>
                  <View style={{backgroundColor: '#3bb866', justifyContent: 'center', paddingHorizontal: 15}}>
                    <FontAwesome name="history" size={15} color="#fff"/>
                  </View>
                </View>
              </View>
              <View style={[styles.payBtn]}>
                <Touchable style={[styles.btnTouchable]} onPress={() => Actions.payment()}>
                  <Text style={[styles.btnText]}>PAY</Text>
                </Touchable>
              </View>
            </View>

            <View style={[styles.row, styles.block]}>
              <View style={[styles.topupBlock]}>
                <Text style={[styles.label, {marginBottom: 10}]}>TOP-UP</Text>
                <Image source={require('../../../assets/images/topup.png')} style={[styles.topupIcon]}/>
              </View>
              <View style={[styles.row , {flex: 4, alignItems: 'flex-end', marginRight: 45}]}>
                <View style={[styles.topUpLi]}>
                  <Text style={[styles.topUpLiText]}>$5</Text>
                </View>
                <View style={[styles.topUpLi]}>
                  <Text style={[styles.topUpLiText]}>$10</Text>
                </View>
                <View style={[styles.topUpLi]}>
                  <Text style={[styles.topUpLiText]}>$20</Text>
                </View>
                <View style={[styles.topUpLi]}>
                  <Text style={[styles.topUpLiText]}>$50</Text>
                </View>
                <View style={[styles.topUpLi]}>
                  <Text style={[styles.topUpLiText]}>$100</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}


