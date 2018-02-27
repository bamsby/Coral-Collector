import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  cloudLayout: {
    // backgroundColor: 'red',
    paddingVertical: 9,
    position: 'relative',
  },
  cloudText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
   fontFamily: 'Oswald-Regular'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    // overflow: 'hidden',
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    // borderTopColor: 'green',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    overflow: 'visible'

    // width: 0,
    // height: 0,
    // borderStyle: 'solid',
    // // overflow: 'hidden',
    // borderTopWidth: 10,
    // borderRightWidth: 0,
    // borderBottomWidth: 10,
    // borderLeftWidth: 10,
    // borderTopColor: 'transparent',
    // borderRightColor: 'transparent',
    // borderBottomColor: 'transparent',
    // borderLeftColor: 'red',
  },
  triangleContainer: {
    position: 'absolute',
    bottom: -7,
    justifyContent: 'center',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9
  },
})
