import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    // position: 'absolute',
    // bottom: -10,
    justifyContent: 'center',
    // left: 0,
    // right: 0,
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

  orange: {
    backgroundColor: '#ee8c3c'
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable: {
    alignItems: 'center',
    // paddingVertical: 14,
    marginTop: 12,
    height: 41,
    justifyContent: 'center'
  },
  commentList: {
    marginTop: 20,
    marginHorizontal: -30
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: '#acacac',
    paddingTop: 4,
    paddingBottom: 15,
    flexDirection: 'row'
  },
  mediaContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 2,
  },
  media: {
    width: 47,
    height: 47,
    backgroundColor: '#ccc',
    borderRadius: 47 / 2
  },
  mediaText: {
    fontSize: 12,
    color: '#3bb966',
    textAlign: 'center'
  },
  title: {
    fontSize: 12.5,
    marginTop: 11,
    marginBottom: 8,
    fontFamily: 'Oswald-Regular'
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
    top: 13
  }
});
