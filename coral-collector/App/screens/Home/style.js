import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container:{
    backgroundColor: '#ededed'
  },
  header:{
    backgroundColor: '#1f1f1d',
    paddingTop: 30,
    paddingBottom: 5,
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
    bottom: 8,
    zIndex: 9,
    padding: 5
  },

  title: {
    fontSize: 15,
    color: '#fff',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular'
  },

  row: {
    flexDirection: 'row'
  },
  logo: {
    width: 42,
    height: 42,
    resizeMode: 'cover'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText:{
    fontSize: 20,
    fontFamily: 'gotham-round',
    color: '#55d400',
  },
  OswaldRegular: {
    fontFamily: 'Oswald-Regular'
  },
  OpenSansSemiBold: {
    fontFamily: 'open-sans-semibold'
  },
  greenBtn: {
    height: 23,
    paddingHorizontal: 7,
    backgroundColor: '#38b663',
    position: 'absolute',
    right: 10,
    bottom: 13
  },
  btnText: {
    color: '#fff'
  },
  card: {
    marginHorizontal: 12,
    marginVertical: 10,
    backgroundColor: '#d0d0ce',
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 10
  },
  cardTitle: {
    fontSize: 16,
    marginRight: 13
  },
  cardTag: {
    height: 18,
    paddingHorizontal: 4,
    backgroundColor: '#635d4d',
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 5
  },
  cardTagText: {
    backgroundColor: 'transparent',
    fontSize: 10,
    color: '#fff'
  },
  yellowTag: {
    backgroundColor: '#826b01'
  },
  subCard: {
    backgroundColor: '#fff'
  },
  galleryContainer: {
    minHeight: 100,
    backgroundColor: '#eee',
  },
  cardTextContainer: {
    paddingHorizontal: 35,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cardText: {
    fontFamily: 'open-sans-light',
    fontSize: 10,
    marginLeft: 8
  },
  progressIntroText: {
    fontFamily: 'open-sans-light',
    paddingHorizontal: 35,
    fontSize: 10,
    marginTop: 7,
    marginBottom: 5
  },
  cardFooter: {
    paddingVertical: 8,
    flexDirection: 'row'
  },
  li: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  p:{
    // fontSize: 12.5,
    fontSize: 14,
    fontFamily: 'Oswald-Regular'
  },
  span: {
    // fontSize: 9,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'open-sans-light',
    // fontWeight: 'light',
  },
  orange: {
    color: '#ee8c3c'
  },
  red:{
    color: '#eb3a46'
  },
  green: {
    color: '#3bb866'
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  progressText: {
    fontSize: 12.5,
    fontFamily: 'open-sans-semibold',
    color: '#fff',
    position: 'absolute',
    top: 6,
    backgroundColor: 'transparent',
    left: (Dimensions.get('window').width - 100)/2,
  },
  modalContent: {
    paddingHorizontal: 12,
    paddingBottom: 24,
    backgroundColor: '#ededed'
  },
  modalTitle: {
    fontSize: 16.5,
    fontFamily: 'Oswald-Regular',
  },
  modalSearch: {
    height: 20,
    backgroundColor: '#fff',
    flex: 2.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 10,
    fontFamily: 'open-sans-reg'
  },
  modalCard: {
    backgroundColor: '#e0dede',
    padding: 8,
    marginVertical: 4
  },
  plusTouchable: {
    flex: 0.2,
    alignItems: 'center'
  },
  cardTitleModal: {
    fontSize: 12,
    fontFamily: 'open-sans-semibold',
    marginBottom: 6.5
  },
  tagText: {
    fontSize: 8,
    color: '#fff'
  },
  tag: {
    padding: 4,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 2,
    marginRight: 4,
    height: 25
  },
  close: {
    marginLeft: 4,
    color: '#fff',
    paddingVertical: 6,
    zIndex: 9,
    paddingHorizontal: 5
  },
  normalTag: {
    backgroundColor: '#635d4d'
  },
  oliveTag: {
    backgroundColor: '#826b01'
  },
  pinkTag: {
    backgroundColor: '#db1d46'
  },
  disabledTag: {
    backgroundColor: '#d1cfcf'
  },
  btnTextModal: {
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
  redBtn: {
    backgroundColor: '#eb3a46'
  },
  orangeBtn: {
    backgroundColor:'#ee8c3c'
  },
  chipContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  chipData: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 0.9,
  },
  filterIcon: {
    height: 20,
    width: 22,
    resizeMode: 'cover'
  }
})
