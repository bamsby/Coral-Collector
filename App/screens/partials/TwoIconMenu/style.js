import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  header:{
    backgroundColor: '#1f1f1d',
    paddingTop: 16,
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
    bottom: 17,
    zIndex: 9
  },
  menuIconTouchableRight: {
    position: 'absolute',
    right: 11,
    bottom: 17,
    zIndex: 9
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

})
