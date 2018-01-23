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

import styles from './style'
import TwoIconMenuHeader from '../../partials/TwoIconMenu/index'
import CloudLayout from '../../partials/Cloud/index'

export default class RecyclingDriveCommentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveUpdates: true
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TwoIconMenuHeader menuTitle="RECYCLING DRIVE"/>

        <View style={[styles.body]}>
          <View style={[styles.pageIndicator]}>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="DETAILS" linkTo="recyclingdrivedetail" isActive={false} bgColor="#eb3a46"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="UPDATES (3)" linkTo="recyclingdriveupdate" isActive={false} bgColor="#ee8c3c"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="BACKERS (3)" linkTo="recyclingdrivebacker" isActive={false} bgColor="#3bb866"/>
            </View>
            <View style={[styles.backerCloud]}>
              <CloudLayout cloudText="COMMENTS (54)" linkTo="recyclingdrivecomment" isActive={true} bgColor="#eb3a46"/>
            </View>
          </View>

          <View style={[styles.pageView]}>
            {
              this.state.haveUpdates
              ?
                <View>
                  <View style={[styles.rowFlex]}>
                    <Text style={{fontFamily: 'open-sans-semibold', textAlign: 'center'}}>Only backers can post comments. If you have a question,
                      <Text style={[styles.blueText]}> ask the campaign creator. </Text>
                    </Text>
                  </View>
                  <View style={[styles.addUpdate]}>
                    <TextInput
                      placeholder="add your comment"
                      style={{height: 57, backgroundColor:'#dedede', paddingHorizontal: 15}}
                    />
                    <Text style={[styles.inputChar]}>500/500</Text>
                    <Touchable style={[styles.green, styles.btnTouchable]}>
                      <Text style={styles.btnText}>POST COMMENT</Text>
                    </Touchable>
                  </View>
                  <View style={[styles.commentList]}>
                    <View style={[styles.list]}>
                      <View style={[styles.mediaContainer]}>
                        <View style={[styles.media]} />
                      </View>
                      <View style={[styles.textContainer]}>
                        <Text style={[styles.title]}>JANE</Text>
                        <Text style={[styles.commentText]}>
                          Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                        </Text>
                        <Text style={[styles.time]}>3 days ago</Text>
                      </View>
                    </View>
                    <View style={[styles.list]}>
                      <View style={[styles.mediaContainer]}>
                        <Text style={[styles.time]}>3 days ago</Text>
                      </View>
                      <View style={[styles.textContainer]}>
                        <Text style={[styles.title]}>JANE <Text style={[styles.labelText, styles.orange]}>OWNER</Text></Text>
                        <Text style={[styles.commentText]}>
                          Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                        </Text>

                      </View>
                      <View style={[styles.mediaContainer]}>
                        <View style={[styles.media]} />
                      </View>
                    </View>
                    <View style={[styles.list]}>
                      <View style={[styles.mediaContainer]}>
                        <View style={[styles.media]} />
                      </View>
                      <View style={[styles.textContainer]}>
                        <Text style={[styles.title]}>JANE</Text>
                        <Text style={[styles.commentText]}>
                          Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                        </Text>
                        <Text style={[styles.time]}>3 days ago</Text>
                      </View>
                    </View>
                    <View style={[styles.list]}>
                      <View style={[styles.mediaContainer]}>
                        <View style={[styles.media]} />
                      </View>
                      <View style={[styles.textContainer]}>
                        <Text style={[styles.title]}>JANE</Text>
                        <Text style={[styles.commentText]}>
                          Lorem ipsum dolor sit amet, quo te copiosae periculis. Qui no animal voluptua vituperata, ut nec vitae tantas eirmod. An agam purto dissentiunt est. Option elaboraret eam in, his at quaeque legendos. Pri no eloquentiam consectetuer. Cu argumentum mediocritatem pro.
                        </Text>
                        <Text style={[styles.time]}>3 days ago</Text>
                      </View>
                    </View>
                  </View>
                </View>
              :
                <View style={[styles.noUpdateView]}>
                  <View style={[styles.noUpdateTextContainer]}>
                    <Text style={[styles.noUpdateText]}>Looks like you haven’t got or added any comments</Text>
                    <View style={[styles.triangleContainer]} >
                      <View style={[styles.triangle]} />
                    </View>
                  </View>
                  <View style={[styles.noUpdateTextAreaContainer]}>
                    <TextInput
                      placeholder="Update your comments"
                      style={[styles.noUpdateTextArea]}
                      multiline={true}
                    />
                  </View>
                  <Text style={[styles.inputChar]}>500/500</Text>
                  <Touchable style={[styles.green, styles.btnTouchable]}>
                    <Text style={styles.btnText}>POST COMMENT</Text>
                  </Touchable>

                </View>
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}


