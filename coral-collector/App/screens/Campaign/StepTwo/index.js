import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import {FontAwesome} from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import {Actions} from 'react-native-router-flux';
import {Select} from 'teaset';
import {MapView, ImagePicker} from 'expo';
import {Marker} from 'react-native-maps';
import firebase from 'firebase';

import styles from './style';
import GreenMenuHeader from '../../partials/GreenHeader/index';
import { campaignUpdate } from '../../../../actions';

class CampaignStepTwoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      items: [
        'Apple',
        'Banana',
        'Cherry',
        'Durian',
        'Filbert',
        'Grape',
        'Hickory',
        'Lemon',
        'Mango',
      ],
      marker: [
        {
          "latitude": 37.78825,
          "longitude": -122.4324,
          "id": 1
        },
      ],
      image: null,
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.campaignUpdate({ prop: 'imageUri', value: result.uri });
    }
  };

  render() {
    let {image} = this.state;
    return (
      <ScrollView style={styles.container}>
        <GreenMenuHeader menuTitle="CREATE YOUR CAMPAIGN" />
        <View style={[styles.stepIndicatorContainer]}>
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#3dbb69" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
          <FontAwesome name="circle" size={10} color="#c9c8c6" style={[styles.circleIcon]} />
        </View>

        <View>
          <Touchable onPress={this._pickImage}>
            <View style={[styles.imageUpload]}>
              <Image source={require('../../../../assets/images/upload.png')}/>
              <Text style={{fontSize: 12.5, marginTop: 7}}>Upload photo/video</Text>
              {image &&
              <Image source={{ uri: image }} style={{height: 100, width: 150}}/>}
            </View>
          </Touchable>
          <View style={[styles.form]}>
            <View style={[styles.formRow]}>
              <Text style={{ fontSize: 12.5, fontFamily: 'open-sans-bold', marginRight: 10 }}>Event Date</Text>
              <DatePicker
                mode="date"
                date={this.state.date}
                placeholder=" "
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={this.state.date!=="" ? false : true}
                iconSource={require('../../../../assets/images/date.png')}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 50,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    backgroundColor: '#cfcecd',
                    borderWidth: 0
                  }
                }}
                onDateChange={(date) => { this.setState({ date: date })}}
              />
            </View>

            <View style={[styles.formRow]}>
              <Text style={{fontSize: 12.5, fontFamily: 'open-sans-bold', marginRight: 10}}>Event Time</Text>
              <DatePicker
                mode="time"
                placeholder=" "
                date={this.state.time}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={this.state.time!=="" ? false : true}
                iconSource={require('../../../../assets/images/time.png')}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 50,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    backgroundColor: '#cfcecd',
                    borderWidth: 0
                  }
                }}
                onDateChange={(date) => {this.setState({ time: date })}}
              />
            </View>

            <View style={[styles.formRow]}>
              <Text style={{ fontSize: 12.5, fontFamily: 'open-sans-bold', marginRight: 10 }}>Location</Text>
              <TextInput
                placeholder="Location"
                style={{
                  backgroundColor: '#cfcecd',
                    borderWidth: 0,
                    width: 143,
                    marginLeft: 13,
                    height: 40,
                    paddingHorizontal: 15,
                    textAlign: 'center'
                }}
                underlineColorAndroid='transparent'
              />
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

          <View style={[styles.inputContainer]}>
            <Select
              style={styles.selectStyle}
              value={this.state.itemValue}
              items={this.state.items}
              placeholder='Select Campaign Type'
              onSelected={(item, index) => this.setState({itemValue: item})}
              placeholderTextColor="#8d8d8c"
            />
          </View>
          <View style={[styles.btnGrp, {flexDirection: 'row', justifyContent: 'center'}]}>
            <Touchable style={[styles.greenBtn, styles.btnTouchable, {marginHorizontal: 10} ]}
                       onPress={() => Actions.pop()}>
              <Text style={styles.btnText}>PREVIOUS</Text>
            </Touchable>
            <Touchable style={[styles.greenBtn, styles.btnTouchable, {marginHorizontal: 10}]}
                       onPress={() => Actions.champaignstepthree()}>
              <Text style={styles.btnText}>NEXT</Text>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { imageUri } = state.campaignForm;

  return { imageUri };
};

export default connect(mapStateToProps, { campaignUpdate })(CampaignStepTwoScreen);
