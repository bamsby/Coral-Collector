import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  header:{
    backgroundColor: '#3dbb69',
    paddingTop: 16,
    paddingBottom: 12,
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
    bottom: 12,
    zIndex: 9
  },
  menuIconTouchableRight: {
    position: 'absolute',
    right: 11,
    bottom: 17,
    zIndex: 9
  },

  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular'
  },

})
