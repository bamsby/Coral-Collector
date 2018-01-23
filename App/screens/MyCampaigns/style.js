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
    paddingHorizontal: 31
  },
  campaingCloud: {
    flex: 1,
    marginHorizontal: 3,
    marginBottom: 17
  },
  pageView: {
    paddingHorizontal: 13
  },
  champaignCard: {
    marginBottom: 7
  },
  cardHeader: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 11,
    paddingVertical: 7
  },
  cardTitle: {
    // fontSize: 10,
    color: '#1f1f1d',
    fontFamily: 'Oswald-Regular'
  },
  cardText: {
    fontSize: 7.5,
    // fontFamily: 'OpenSans',
    // fontWeight: 'light'
  },
  authorText: {
    fontSize: 7.5,
    fontFamily: 'open-sans-light',
    // fontWeight: 'light',
    position: 'absolute',
    top: 8,
    right: 5
  },
  cardFooter: {
    backgroundColor: '#d8d8d8',
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
    left: 175,
  }
})
