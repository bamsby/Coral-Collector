import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    paddingTop: 10
  },
  pageIndicator: {
    flexDirection: 'row',
    paddingHorizontal: Dimensions.get('window').width > 320 ? 31 : 10
  },
  backerCloud: {
    flex: 1,
    marginHorizontal: 3,
    marginBottom: 17
  },
  pageView: {
    paddingHorizontal: 40
  },
  noUpdateView: {
    marginTop: 13,
  },
  noUpdateTextContainer: {
    height: 63,
    backgroundColor: '#c8c7c7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noUpdateText: {
    color: '#8d8d8c',
    fontSize: 12
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: '#c8c7c7',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  triangleContainer: {
    position: 'absolute',
    bottom: -10,
    justifyContent: 'center',
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  noUpdateTextAreaContainer: {
    marginTop: 48,
    height: 136,
    backgroundColor: '#dcdcdc',
    paddingHorizontal: 19,
    paddingVertical: 12.5
  },
  inputChar: {
    textAlign: 'right',
    fontSize: 13,
    color: '#8d8d8c',
    marginTop: 5.5
  },

  green: {
    backgroundColor: '#3bb966'
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable:{
    alignItems: 'center',
    // paddingVertical: 14,
    marginTop: 12,
    height: 41,
    justifyContent: 'center'
  },

  addUpdate: {
    backgroundColor: '#fff'
  },
  commentList: {
    marginTop: 58,
    marginHorizontal: -40,
    backgroundColor: '#dedede',

  },
  list: {
    paddingTop: 13.5,
    paddingBottom: 18.5,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  mediaContainer: {
    flex: 0.6,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 2,
  },
  media: {
    width: 54,
    height: 54,
    backgroundColor: '#ccc',
    borderRadius: 54 / 2
  },
  mediaText: {
    fontSize: 12,
    color: '#3bb966',
    textAlign: 'center'
  },
  title: {
    fontSize: 12.5,
    // marginTop: 11,
    marginBottom: 7.5,
    fontFamily: 'Oswald-Regular',
    marginRight: 30,
  },
  commentText: {
    fontSize: 8,
    paddingRight: 10
  },
  time: {
    color: '#9e9e9a',
    fontSize: 8,
    position: 'absolute',
    right: 20,
    top: 0
  },
  labelText: {
    fontSize: 7.5,
    fontFamily: 'open-sans-semibold',
    marginLeft: 80,
  },
  orange: {
    backgroundColor: '#ee8c3c',
  },
  rowFlex: {
    marginBottom: 25,
    marginTop: 23
  },
  blueText: {
    color: '#1dd7f9',
    fontSize: 12,
    fontFamily: 'open-sans-semibold'
  },
});
