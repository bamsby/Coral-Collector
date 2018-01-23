import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    // paddingHorizontal: 53,
    paddingTop: 10
  },
  pageIndicator: {
    flexDirection: 'row',
    paddingHorizontal: Dimensions.get('window').width > 320 ? 31 : 10
  },
  backerCloud: {
    flex: 1,
    marginHorizontal: 3,
    marginBottom: 17
  },
  pageView: {
    paddingHorizontal: 13
  },
  backerCard: {
    marginBottom: 9
  },
  media: {
    height: 54,
    width: 54,
    backgroundColor: '#acacac',
    borderRadius: 54/2,
    position: 'absolute',
    left: 0
  },
  text: {
    borderBottomWidth: 0.5,
    marginLeft: 68,
    borderBottomColor: '#acacac',
    paddingTop: 11,
    paddingBottom: 7
  },
  title:{
    fontSize: 12.5,
    color: '#1f1f1d',
    fontFamily: 'Oswald-Regular',
    lineHeight: 12.5
  },
  code:{
    color: '#0f83d3',
    fontSize: 10,
    lineHeight: 13.7,
    fontFamily: 'open-sans-semibold'
  },
  backer:{
    color: '#ec3b47',
    fontSize: 10,
    lineHeight: 13.7,
    fontFamily: 'open-sans-semibold'
  },
  pledged: {
    color: '#3bb966',
    fontSize: 10,
    position: 'absolute',
    top: 11,
    right: 20,
    fontFamily: 'open-sans-semibold'
  }
})
