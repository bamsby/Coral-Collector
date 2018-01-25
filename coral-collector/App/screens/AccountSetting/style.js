import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

  },
  bgImage: {
    height: null,
    width: null,
    flex: 1
  },

  body: {
    paddingHorizontal: 53,
    paddingTop: 30
  },
  gothamLight: {
    // fontFamily: 'GothamRoundedLight'
  },
  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center'
  },
  subText: {
    fontSize: 12.5,
    color: '#ffc600',
    textAlign: 'center',
    marginHorizontal: -17,
    marginTop: 29,
    marginBottom: 17.5
  },
  inputStyle: {
    height: 42,
    backgroundColor: '#cecece',
    textAlign: 'center',
    color: '#5b5757',
    fontSize: 12
  },
  inputField: {
    alignItems: 'stretch',
    marginBottom: 9
  },
  form: {
    marginTop: 15,
    marginBottom: 24,
  },
  btnGrp: {
    marginTop: 3,
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
    marginBottom: 8,
    height: 41,
    justifyContent: 'center'
  },
  socialBtnTouchable: {
    width: 45,
    height: 45,
    marginHorizontal: 8.5
  },

  greenBtn: {
    backgroundColor: '#3bb866'
  },

  formTitle: {
    fontSize: 12.5,
    color: '#5b5757',
    textAlign: 'center',
    marginBottom: 11
  }
});
