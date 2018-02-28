import { YellowBox } from 'react-native';
import _ from 'lodash';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  ListView
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';
import * as Progress from 'react-native-progress';
import Drawer from 'react-native-drawer'
import SidebarScreen from '../Sidebar/index'
import Modal from "react-native-modal";
import ChipField from '../partials/chips';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';

import { campaignFetch } from '../../../actions';
import ListItem from './ListItem';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class HomeScreen extends Component {
  componentWillMount() {
    this.props.campaignFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ campaigns }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(campaigns);
  }

  renderRow(campaign) {
    return (
      <ListItem campaign={campaign} />
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      openDrawer: false,
      isEnabled: false,
      message: '',
      defaultChips1: [
        {
          id: 1,
          text: 'Fund Raising',
          bgColor: '#826b01'
        },
        {
          id: 2,
          text: 'Donation',
          bgColor: '#826b01'
        },

        {
          id: 3,
          text: 'Bendemeer',
          bgColor: '#db1d46'
        },
        {
          id: 4,
          text: 'Hougang',
          bgColor: '#db1d46'
        },

      ],
      defaultChips2: [
        {
          id: 1,
          text: 'Clothes',
          bgColor: '#635d4d'
        },
        {
          id: 2,
          text: 'Newspaper',
          bgColor: '#635d4d'
        },
        {
          id: 3,
          text: 'Bottle',
          bgColor: '#635d4d'
        },
        {
          id: 4,
          text: 'Books',
          bgColor: '#635d4d'
        },
        {
          id: 5,
          text: 'Uniform',
          bgColor: '#635d4d'
        }
      ],
      campaignTypeChips:[
        {
          id:1,
          text: 'Fund Raising',
          bgColor: '#826b01'
        },
        {
          id:2,
          text: 'Donation',
          bgColor: '#826b01'
        },
        {
          id:3,
          text: 'Commercial',
          bgColor: '#826b01'
        }
      ],
      collectibleTypeChips: [
        {
          id:1,
          text: 'Clothes',
          bgColor: '#635d4d'
        },
        {
          id:2,
          text: 'Newspaper',
          bgColor: '#635d4d'
        },
        {
          id:3,
          text: 'Bottles',
          bgColor: '#635d4d'
        },
        {
          id:4,
          text: 'Books',
          bgColor: '#635d4d'
        },
        {
          id:5,
          text: 'Uniform',
          bgColor: '#635d4d'
        },
        {
          id:6,
          text: 'Electronics',
          bgColor: '#635d4d'
        }
      ]
    }

    this.delDefault = this.delDefault.bind(this)
  }

  static defaultProps = {
    items: [
      {
        email: 'JohnDoe@gmail.com',
        name: 'John Doe',
        initials: 'JD'
      },
      {
        email: 'RubenRizzi@fakemail.it',
        name: 'Ruben Rizzi',
        initials: 'RR'
      },
      {
        email: 'KileMeher@yopmail.com',
        name: 'Kile Meher',
        initials: 'KM'
      },
      {
        email: 'FabianPiau@badmail.fr',
        name: 'Fabian Piau',
        initials: 'FP'
      },
      {
        email: 'SanjeBuma@gianni.it',
        name: 'Sanje Buma',
        initials: 'SB'
      }
    ]
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  openSideBar = () => {
    this._drawer.open()
  };

  checkIsEnabled(isEnabled) {
    this.setState({isEnabled});
  }

  delDefault(id, array) {
    console.log('hello',id, array)

    let selectedItems = this.state[array];
    selectedItems.splice(id, 1);
    this.setState({[array]: selectedItems});
  }

  render() {
    const {items} = this.props;
    const {isEnabled, message} = this.state;
    
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SidebarScreen active="home"/>}
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
        <ScrollView style={styles.container}>
          <View style={[styles.header]}>
            <Touchable style={[styles.menuIconTouchable]} onPress={() => this.openSideBar()}>
              <Image source={require('../../../assets/images/menu.png')} style={[styles.menuIcon]}/>
            </Touchable>
            <View style={[styles.row, styles.logoContainer]}>
              <Image source={require('../../../assets/images/logo.png')} style={[styles.logo]}/>
              <Text style={[styles.logoText]}>CORAL</Text>
            </View>
            <Touchable style={[styles.greenBtn]} onPress={() => Actions.champaignstepone()}>
              <Text style={[styles.btnText, styles.OswaldRegular]}>CREATE</Text>
            </Touchable>
          </View>

          <View style={[styles.body]}>
            <ChipField
              ref={c => this._emailField = c}
              itemId="email"
              items={items}
              onSubmitEditing={isEnabled => this.checkIsEnabled(isEnabled)}
              onChipClose={isEnabled => this.checkIsEnabled(isEnabled)}
              inputPlaceHolder="Select Campaign"
              marginHorizontal={10}
            />

            <View style={[styles.chipContainer]}>
              <View style={[styles.chipData]}>
                {
                  this.state.defaultChips1.map((e, index) => {
                    return (

                      <View style={[styles.row, styles.tag, {backgroundColor: e.bgColor}]} key={e.id}>
                        <Text style={[styles.tagText, styles.OpenSansSemiBold]}>{e.text}</Text>
                        <Touchable onPress={() => this.delDefault(index,'defaultChips1')}>
                          <FontAwesome name="close" style={[styles.close]} size={13}/>
                        </Touchable>
                      </View>
                    )
                  })
                }
              </View>

              <View style={[styles.chipData]}>
                {
                  this.state.defaultChips2.map((e, index) => {
                    return (

                      <View style={[styles.row, styles.tag, {backgroundColor: e.bgColor}]} key={e.id}>
                        <Text style={[styles.tagText, styles.OpenSansSemiBold]}>{e.text}</Text>
                        <Touchable onPress={() => this.delDefault(index, 'defaultChips2')}>
                          <FontAwesome name="close" style={[styles.close]} size={13}/>
                        </Touchable>
                      </View>
                    )
                  })
                }
              </View>

              <Touchable style={{flex: 0.17}} onPress={() => this.openModal()}>
                <Image source={require('../../../assets/images/filter.png')} style={[styles.filterIcon]}/>
              </Touchable>
            </View>

            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </View>

          <Modal isVisible={this.state.modalVisible}>
            <View style={[styles.modalContent]}>
              <Text style={[styles.modalTitle]}>Filter</Text>
              <View style={[styles.modalCard]}>
                <Text style={[styles.cardTitleModal]}>Location</Text>
                <View style={[styles.row, {alignItems: 'center'}]}>
                  <View style={{flex: 2, marginHorizontal: -5}}>
                    <ChipField
                      ref={c => this._emailField = c}
                      items={items}
                      onSubmitEditing={isEnabled => this.checkIsEnabled(isEnabled)}
                      onChipClose={isEnabled => this.checkIsEnabled(isEnabled)}
                      inputPlaceHolder="Select Location"
                    />
                  </View>
                  <Touchable style={[styles.plusTouchable ]}>
                    <FontAwesome name="plus" style={{color: "#eb3a46"}} />
                  </Touchable>
                </View>
                <View style={[styles.row]}>
                  <View style={[styles.row, styles.tag, styles.pinkTag]}>
                    <Text style={[styles.tagText, styles.OpenSansSemiBold]}>Bendemeer</Text>
                    <FontAwesome name="close" style={[styles.close]} size={13}/>
                  </View>
                  <View style={[styles.row, styles.tag, styles.pinkTag]}>
                    <Text style={[styles.tagText, styles.OpenSansSemiBold]}>Hougang</Text>
                    <FontAwesome name="close" style={[styles.close]} size={13}/>
                  </View>
                </View>
              </View>

              <View style={[styles.modalCard]}>
                <Text style={[styles.cardTitleModal]}>Campaign Type</Text>

                <View style={[styles.row]}>
                  <View style={[styles.chipData]}>
                    {
                      this.state.campaignTypeChips.map((e, index) => {
                        return (

                          <View style={[styles.row, styles.tag, {backgroundColor: e.bgColor}]} key={e.id}>
                            <Text style={[styles.tagText, styles.OpenSansSemiBold]}>{e.text}</Text>
                            <Touchable onPress={() => this.delDefault(index, 'campaignTypeChips')}>
                              <FontAwesome name="close" style={[styles.close]} size={13}/>
                            </Touchable>
                          </View>
                        )
                      })
                    }
                  </View>
                </View>
              </View>

              <View style={[styles.modalCard]}>
                <Text style={[styles.cardTitleModal]}>Collectible Type</Text>

                <View style={[styles.row]}>
                  <View style={[styles.chipData]}>
                    {
                      this.state.collectibleTypeChips.map((e, index) => {
                        return (

                          <View style={[styles.row, styles.tag, {backgroundColor: e.bgColor}]} key={e.id}>
                            <Text style={[styles.tagText, styles.OpenSansSemiBold]}>{e.text}</Text>
                            <Touchable onPress={() => this.delDefault(index, 'collectibleTypeChips')}>
                              <FontAwesome name="close" style={[styles.close]} size={13}/>
                            </Touchable>
                          </View>
                        )
                      })
                    }
                  </View>
                </View>
              </View>

              <View style={[styles.btnGrp, {flexDirection: 'row', justifyContent: 'center'}]}>
                <Touchable style={[styles.redBtn, styles.btnTouchable, {marginHorizontal: 10} ]}
                           onPress={() => this.closeModal()}>
                  <Text style={styles.btnTextModal}>CANCEL</Text>
                </Touchable>
                <Touchable style={[styles.orangeBtn, styles.btnTouchable, {marginHorizontal: 10}]} >
                  <Text style={styles.btnTextModal}>SAVE</Text>
                </Touchable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  const campaigns = _.map(state.campaigns, (val, uid) => {
    return { ...val, uid };
  });

  return { campaigns };
};

export default connect(mapStateToProps, { campaignFetch })(HomeScreen);
