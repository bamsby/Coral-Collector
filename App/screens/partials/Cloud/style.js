import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  cloudLayout: {
    backgroundColor: 'red',
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
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    // borderTopColor: 'green',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  triangleContainer: {
    position: 'absolute',
    bottom: -18,
    justifyContent: 'center',
    left: 0,
    right: 0,
    alignItems: 'center'
  },
})
