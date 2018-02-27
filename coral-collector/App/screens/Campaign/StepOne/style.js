import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 64
  },
  circleIcon: {
    marginHorizontal: 8
  },

  inputStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    textAlign: 'center',
    color: '#303030'
  },
  inputContainer: {
    alignItems: 'stretch',
    marginBottom: 10,
  },

  form: {
    paddingHorizontal: Dimensions.get('window').width > 320 ? 66 : 26
  },
  inputChar: {
    textAlign: 'right',
    fontSize: 13,
    color: '#8d8d8c',
    marginTop: 5.5
  },
  selectStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    borderRadius: 0
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
    width: 112.5,
    alignSelf: 'center',
    marginTop: 18,
    height: 41,
    justifyContent: 'center'
  },
  greenBtn: {
    backgroundColor: '#3dbb69'
  },
  chbxBtn: {
    flex: 1,
    padding: 5.5,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: '#c9c8c6'
  },
  active: {
    backgroundColor: '#2fac5d'
  }
});
