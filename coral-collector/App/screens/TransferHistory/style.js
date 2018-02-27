import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  header:{
    backgroundColor: '#1f1f1d',
    paddingTop: 25,
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
    bottom: 10,
    zIndex: 9,
    padding: 5
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
  new: {
    width: 6,
    height: 6,
    backgroundColor: 'red',
    borderRadius: 6/2,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  grayBanner: {
    backgroundColor: '#797979',
    paddingTop: 13,
    paddingBottom: 8,
    alignItems: 'center',
    paddingHorizontal: 13,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  bannerText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'open-sans-semibold',
  },
  bannerSmallText: {
    color: '#fff',
    fontSize: 9,
    fontFamily: 'open-sans-semibold',
    marginLeft: 12
  },
  filler: {
    flexGrow:1,
  },
  media: {
    width: 56,
    height: 56,
    borderRadius: 56/2,
    backgroundColor: '#ccc',
  },
  mediaContainer:{
    flex: 1
  },
  text:{
    flex: 4,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c5c5'
  },
  list: {
    paddingHorizontal: 21,
    paddingTop: 15
  },
  spaceBtw: {
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'open-sans-semibold',
    fontSize: 10.5,
    marginBottom: 5
  },
  dateTime: {
    fontSize: 9,
    color: '#878787'
  },
  pledgeText: {
    fontSize: 13,
    color: '#6d6d6d'
  },
  label: {
    fontSize: 13,
    color: '#6d6d6d',
    paddingBottom: 3,
    marginRight: 3
  },
  dollar: {
    fontSize: 20,
    color: '#3bb966'
  },
  image: {
    height: 56,
    width: 56,
    resizeMode: 'cover'
  }
})
