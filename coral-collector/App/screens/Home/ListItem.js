import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Touchable from 'react-native-platform-touchable';
import * as Progress from 'react-native-progress';
import { CardSection } from '../../common';
import styles from './style';

class ListItem extends Component {
  onRowPress() {
    Actions.mycampaign({ campaign: this.props.campaign });
  }

  render() {
    const { title, description } = this.props.campaign;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <View style={[styles.card]}>
              <View style={[styles.row, {marginBottom: 4}]}>
                <Text style={[styles.cardTitle, styles.OswaldRegular]}>{title.toUpperCase()}</Text>
                <View style={[styles.row]}>
                  <Touchable style={[styles.cardTag, styles.yellowTag]}>
                    <Text style={[styles.cardTagText, styles.OpenSansSemiBold]}>Fund Raising</Text>
                  </Touchable>
                  <Touchable style={[styles.cardTag]}>
                    <Text style={[styles.cardTagText, styles.OpenSansSemiBold]}>Clothes</Text>
                  </Touchable>
                  <Touchable style={[styles.cardTag]}>
                    <Text style={[styles.cardTagText, styles.OpenSansSemiBold]}>Newspaper</Text>
                  </Touchable>
                </View>
              </View>
              <View style={[styles.subCard]}>
                <View style={[styles.galleryContainer]}></View>
                <View style={[styles.cardTextContainer]}>
                  <View style={[styles.row, {marginVertical: 8}]}>
                    <Image source={require('../../../assets/images/RC.png')}/>        
                    <Text style={[styles.cardText]}>Kolam Ayer Whampoa South RC</Text>
                  </View>
                  <View style={[styles.row, {marginVertical: 8}]}>
                    <Image source={require('../../../assets/images/locationpin.png')}/>
                    <Text style={[styles.cardText]}>Block 47A, Link Building, Bendemeer Road</Text>
                  </View>
                  <View style={[styles.row, {marginVertical: 8}]}>
                    <Image source={require('../../../assets/images/calendar.png')}/>
                    <Text style={[styles.cardText]}>2 Feb 2018, 9.30 am - 12.30 am</Text>
                  </View>
                </View>

                <Text style={[styles.progressIntroText]}>
                  {description}
                </Text>
                <View>
                  <Progress.Bar
                    progress={0.79}
                    width={null}
                    unfilledColor="#000"
                    borderWidth={0}
                    borderRadius={0}
                    color="#3bb866"
                    height={32.5}
                  />
                  <Text style={[styles.progressText]}>79% Pledged</Text>
                </View>

                <View style={[styles.cardFooter]}>
                  <View style={[styles.li]}>
                    <Text style={[styles.p]}>5000KG</Text>
                    <Text style={[styles.span, styles.orange]}> Goal</Text>
                  </View>
                  <View style={[styles.li, styles.border]}>
                    <Text style={[styles.p]}>30</Text>
                    <Text style={[styles.span, styles.red]}> Days To Go</Text>
                  </View>
                  <View style={[styles.li]}>
                    <Text style={[styles.p]}>125</Text>
                    <Text style={[styles.span, styles.green]}> Backers</Text>
                  </View>
                </View>
              </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const title_styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
