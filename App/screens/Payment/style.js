import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  qrcodecontainer: {
    backgroundColor: '#fff',
    padding: 25,
    marginHorizontal: 105,
    marginTop: 95
  },
  modalContent: {
    paddingHorizontal: 10,
    paddingBottom: 25,
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 16.5,
    fontFamily: 'Oswald-Regular',
    textAlign: 'center',
    marginTop: 8
  },
  row: {
    flexDirection: 'row'
  },
  mediaContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 2,
    justifyContent: 'center'
  },
  media: {
    height: 53,
    width: 53,
    borderRadius: 53 / 2,
    backgroundColor: '#ccc'
  },
  profileText: {
    color: '#6d6d6d',
    fontSize: 13,
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular',
    textAlign: 'center'
  },
  btnTouchable: {
    alignSelf: 'center',
    // paddingVertical: 5,
    width: 111,
    height: 41,
    justifyContent: 'center'
  },
  greenBtn: {
    backgroundColor: '#2fac5d'
  },
  orangeBtn: {
    backgroundColor: '#ee8c3c'
  }
});
