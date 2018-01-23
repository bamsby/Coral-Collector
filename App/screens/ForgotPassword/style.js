import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,

  },
  bgImage:{
    height: null,
    width: null,
    flex: 1
  },
  overlayContainer: {
    backgroundColor: "rgba(50, 46, 63, 0.75);",
    // flex: 1,
    position: 'absolute',
    top: 50,
    right: 0,
    left: 0,
    // bottom: 0,
    marginHorizontal: Dimensions.get('window').width > 320 ? 40 : 20,
    marginVertical: 54,
    paddingHorizontal: 23,
    paddingBottom: 16,
    paddingTop: 8,
    // alignItems: 'center'
  },
  logo:{
    height: 65,
    width: 70,
    alignSelf: 'center'
  },
  gothamLight:{
    // fontFamily: 'GothamRoundedLight'
  },
  title: {
    fontSize: 16,
    color: '#ffc600',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular'
  },
  subText: {
    fontSize: 12.5,
    color: '#ffc600',
    textAlign: 'center',
    marginHorizontal: -17,
    marginTop: 29,
    marginBottom: 17.5,
    fontFamily: 'open-sans-reg'
  },
  inputStyle: {
    height: 42,
    backgroundColor: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'open-sans-reg'
  },
  inputField: {
    alignItems: 'stretch',
    marginBottom: 9,

  },
  form: {
    marginTop:15
  },
  btnGrp: {
    marginTop: 13,
  },
  orange:{
    backgroundColor: '#e07d30'
  },
  red: {
    backgroundColor: '#e02e3d'
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable:{
    alignItems: 'center',
    // paddingVertical: 14,
    marginBottom:8,
    height: 41,
    justifyContent: 'center'
  },
  socialBtnTouchable: {
    width: 45,
    height: 45,
    marginHorizontal: 8.5
  },
  fb: {
    backgroundColor: '#328de3'
  },
  google: {
    backgroundColor: '#de1d2b'
  },
  socialBtnGrp:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 19
  },
  forgotPswdLink: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  },
  greenBtn: {
    backgroundColor: '#2fac5d'
  },
  rowFlex: {
    marginHorizontal: -3
  },
  blueText: {
    color: '#1dd7f9',
    fontSize: 12,
  },
  backOverlay: {
    backgroundColor: "rgba(50, 46, 63, 0.75)",
    position: 'absolute',
    top: 30,
    left: 10
  }
})
