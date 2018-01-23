import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed'
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 62,
    marginBottom: 20
  },
  circleIcon: {
    marginHorizontal: 8
  },

  btnText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Oswald-Regular',
  },
  btnTouchable:{
    alignItems: 'center',
    // paddingVertical: 14,
    marginBottom:8,
    width: 112.5,
    alignSelf: 'center',
    marginTop: 18,
    height: 41,
    justifyContent: 'center'
  },
  greenBtn: {
    backgroundColor: '#3dbb69'
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    textAlign: 'center',
    color: '#303030'
  },
  inputContainer: {
    alignItems: 'stretch',
  },
  inputChar: {
    textAlign: 'right',
    fontSize: 13,
    color: '#8d8d8c',
    // marginTop: 5.5
  },

  btnGrp: {
    marginTop: 13,
  },
  orange:{
    backgroundColor: '#ee8c3c'
  },
  red: {
    backgroundColor: '#e02e3d'
  },

  list: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#e4e1e1',
    marginBottom: 2
  },
  leftContent: {
    flex: 2,
  },
  rightContent: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listTitle: {
    fontFamily: 'Oswald-Regular',
    fontSize: 15,
    color: '#3dbb69'
  },
  content: {
    fontSize: 8,
    textAlign: 'justify',
    maxHeight: 38,
  },
  price: {
    fontSize: 28,
    fontFamily: 'open-sans-light',
    color: '#3dbb69'
  }
})
