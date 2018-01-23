import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 40
  },
  circleIcon: {
    marginHorizontal: 8
  },
  imageUpload: {
    // height: 91,
    backgroundColor: '#cfcecd',
    marginHorizontal: 66,
    alignItems: 'center',
    paddingVertical: 12
  },
  form: {
    alignItems: 'center',
    marginTop: 18.5
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center'
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
  selectStyle: {
    height: 42,
    backgroundColor: '#cfcecd',
    borderRadius: 0
  },
  inputContainer: {
    marginHorizontal: 66,
    marginTop: 8
  }
})
