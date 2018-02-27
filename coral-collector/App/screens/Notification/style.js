import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed'
  },

  card: {
    marginVertical: 5,
    marginLeft: 15,
  },
  media: {
    height: 54,
    width: 54,
    backgroundColor: '#acacac',
    borderRadius: 54/2,
    position: 'absolute',
    left: 0,
    top: 5
  },
  text: {
    borderBottomWidth: 0.5,
    marginLeft: 68,
    borderBottomColor: '#acacac',
    paddingTop: 11,
    paddingBottom: 7
  },
  date:{
    fontSize: 9,
    color: '#878787',
  },
  code:{
    color: '#0f83d3',
    fontSize: 10,
    lineHeight: 13.7,
    fontFamily: 'open-sans-semibold'
  },
  openSansSemiBold: {
    fontFamily: 'open-sans-semibold'
  },
  green: {
    color: '#3bb966',
  },
  red: {
    color: '#ec3b47'
  },
  yellow: {
    color: '#ee8c3c'
  },
  notificationText: {
    fontSize: 9
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loved: {
    backgroundColor: '#ec3b47',
    padding: 2
  },
  backed: {
    backgroundColor: '#ee8c3c',
    padding: 2
  },
  comment: {
    backgroundColor: '#3bb966',
    padding: 2
  },
  title: {
    marginLeft: 5
  },
  greyLight: {
    color: '#878787',
    fontSize: 10,
    marginHorizontal: 5
  },
  type: {
    fontSize: 12,
  },
})
