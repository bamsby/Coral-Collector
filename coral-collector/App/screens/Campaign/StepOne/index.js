import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
// import { Select } from 'teaset';

import styles from './style';
import GreenMenuHeader from '../../partials/GreenHeader/index';
import { campaignUpdate } from '../../../../actions';

class CampaignStepOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignTitle: 'Your Campaign Title',
      campaignDetails: 'Your Campaign Details',
      campaignGoal: 'Your Campaign Goals',
      items: [
      'Clothes',
      'Newspaper',
      'Bottles',
      'Books',
      'Uniform',
      'Electronics',
      'Others'
    ],
      activeQty:'kg'
    }
    this.changeQty = this.changeQty.bind(this)
  }

  changeQty(qty){
    this.setState({activeQty: qty})
    // this.props.campaignUpdate({prop: 'unit', qty});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <GreenMenuHeader menuTitle="CREATE YOUR CAMPAIGN" />
        <View style={[styles.stepIndicatorContainer]}>
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
        </View>

        <View style={[styles.form]}>
          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.inputStyle]}
              placeholder="Your Campaign Title"
              value={this.props.title}
              onChangeText={value => this.props.campaignUpdate({ prop: 'title', value })}
              placeholderTextColor='#9c9c9c'
              underlineColorAndroid='transparent'
            />
            <Text style={[styles.inputChar]}>0/10</Text>
          </View>

          <View style={[styles.inputContainer]}>
            <TextInput
              style={[styles.inputStyle, { height: 82.5, paddingTop: 16 }]}
              placeholder="Your Campaign Details"
              value={this.props.description}
              onChangeText={value => this.props.campaignUpdate({ prop: 'description', value })}
              multiline={true}
              placeholderTextColor='#9c9c9c'
              underlineColorAndroid='transparent'
            />
            <Text style={[styles.inputChar]}>0/30</Text>
          </View>

          {/* select picker */}
          {/* <View style={[styles.inputContainer]}>
            <Select
              style={styles.selectStyle}
              value={this.state.itemValue}
              items={this.state.items}
              placeholder='Type of Recyclables'
              // onSelected={(item, index) => this.setState({itemValue: item})}
              selectedValue={this.props.recycleType}
              onValueChange={value => this.props.campaignUpdate({ prop: 'recycleType', value })}
              placeholderTextColor="#9c9c9c"
            />
          </View> */}
          <View style={[styles.inputContainer]}>
            <Picker
              style={styles.selectStyle}
              selectedValue={this.props.recycleType}
              mode={'dropdown'}
              onValueChange={value => this.props.campaignUpdate({ prop: 'recycleType', value })}
            >
              <Picker.Item label="Clothes" value="Clothes" />
              <Picker.Item label="Bottles" value="Bottles" />
              <Picker.Item label="Books" value="Books" />
              <Picker.Item label="Uniform" value="Uniform" />
              <Picker.Item label="Electronics" value="Electronics" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>
          <View style={[styles.inputContainer]}>
            <TextInput
              // onChangeText={(text) => this.setState({ campaignDetails: text })}
              style={[styles.inputStyle]}
              placeholder="Your Goal (Eg. 5000 Kg of materials)"
              placeholderTextColor='#9c9c9c'
              underlineColorAndroid='transparent'
              onChangeText={value => this.props.campaignUpdate({ prop: 'goal', value })}              
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Touchable
              style={[styles.chbxBtn, this.state.activeQty === 'kg' ? styles.active : null, {marginLeft: 0 }]}
              onPress={() => this.changeQty('kg')}
            >
              <Text style={[styles.btnText]}>KG</Text>
            </Touchable>
            <Touchable
              style={[styles.chbxBtn, this.state.activeQty === 'pcs' ? styles.active : null]}
              onPress={() => this.changeQty('pcs')}
            >
              <Text style={[styles.btnText]}>PCS</Text>
            </Touchable>
          </View>

          <Touchable style={[styles.btnTouchable, styles.greenBtn]} onPress={()=>Actions.champaignsteptwo()}>
            <Text style={[styles.btnText]}>NEXT</Text>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, description, recycleType, goal, unit } = state.campaignForm;

  return { title, description, recycleType, goal, unit };
};

export default connect(mapStateToProps, { campaignUpdate })(CampaignStepOneScreen);
