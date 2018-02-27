import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#1f1f1d',
    paddingTop: 20,
    paddingBottom: 17,
    position: 'relative'
  },
  menuIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  menuIconTouchable: {
    position: 'absolute',
    left: 11,
    bottom: 10,
    zIndex: 9,
    padding: 5
  },
  gothamLight:{
    // fontFamily: 'GothamRoundedLight'
  },
  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular'
  },
  new: {
    width: 6,
    height: 6,
    backgroundColor: 'red',
    borderRadius: 6/2,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
})
