import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 62,
    marginBottom: 16
  },
  circleIcon: {
    marginHorizontal: 8
  },

  title: {
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'oswald-bold',
    letterSpacing: 1
  },
  subTitle: {
    marginTop: 11,
    fontSize: 11,
    textAlign: 'center'
  },
  shareBtnBlock:{
    marginTop: 58,
    paddingHorizontal: Dimensions.get('window').width > 320 ? 66 : 26
  },
  shareBlockTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 11,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 8
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Oswald-Regular',
    fontSize: 15.5
  },
  fb:{
    backgroundColor: '#2d94bf'
  },
  twitter:{
    backgroundColor: '#59bce4'
  },
  google:{
    backgroundColor: '#df4444'
  },
  pinterest:{
    backgroundColor: '#c62f2f'
  },
  insta:{
    backgroundColor: '#2f7995'
  },
  contact:{
    backgroundColor: '#796e6f'
  }
})
