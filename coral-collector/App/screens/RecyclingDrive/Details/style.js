import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    // paddingHorizontal: 53,
    paddingTop: 10,

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
    // paddingHorizontal: 13
    marginBottom: 150
  },

  galleryContainer: {
    minHeight: 185,
    backgroundColor: '#f8f1e5',
    padding: 8
  },
  progressText: {
    fontSize: 12.5,
    fontFamily: 'open-sans-semibold',
    color: '#fff',
    position: 'absolute',
    top: 6,
    backgroundColor: 'transparent',
    left: 175,
  },
  cardFooter: {
    paddingVertical: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 8
  },
  li: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  p:{
    // fontSize: 12.5,
    fontSize: 20,
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
    borderColor: '#bfbfbf'
  },
  openSansSemiBold:{
    fontFamily: 'open-sans-semibold'
  },
  textCenter: {
    textAlign: 'center'
  },
  goalSection: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: 'open-sans-bold',
    color: '#fff',
    fontSize: 10
  },
  row: {
    flexDirection: 'row',
  },
  goalRow: {
    marginTop: 10
  },
  labelContainer: {
    flex: 0.77,
    paddingHorizontal: 11.5,
    paddingVertical: 4.5,
    backgroundColor: '#635d4d',
    borderRadius: 10,
    alignItems:'center',
    marginRight: 16,
    justifyContent: 'center'
  },
  progressContainer:{
    flex: 3,
  },
  progressGoalText: {
    fontSize: 12.5,
    fontFamily: 'open-sans-bold',
    color: '#635d4d',
    position: 'absolute',
    top: 6,
    backgroundColor: 'transparent',
    right: 0,
  },
  totalLabel: {
    backgroundColor: '#a67903'
  },
  fundRaisingSection:{
    marginTop: 19
  },
  fundRaisingTitle: {
    fontSize: 18,
    fontFamily: 'Oswald-Regular',
    color: '#ee8c3c',
    paddingLeft: 21,
    marginBottom: 13.5
  },
  funRaisingRow: {
    borderTopWidth: 1,
    borderColor: '#bfbfbf',
    paddingTop: 8,
    paddingBottom: 11,
    paddingHorizontal: 21,
  },
  left: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  funRaisingLabel:{
    fontFamily: 'Oswald-Regular',
    color: '#ee8c3c',
    marginLeft: 6,
    fontSize: 16
  },
  right: {
    flex: 3
  },
  fullProfileContainer: {
    paddingHorizontal: 21,
    paddingVertical: 18,
    // marginBottom: 100
  },
  card: {
    backgroundColor: '#fff'
  },
  mediaContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems:'center'
  },
  textConatiner: {
    flex: 2,
  },
  btnContainer: {
    flex: 2
  },
  media:{
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#ccc'
  },
  cardTitle: {
    fontFamily: 'Oswald-Regular',
    fontSize: 14,
    marginBottom: 8,
    marginRight: 10,
    paddingTop: 13
  },
  add:{
    color: '#2bc2fa',
    fontSize: 9
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greenBtn:{
    backgroundColor: '#3bb866',

  },
  orangeBtn: {
    backgroundColor: '#ee8c3c',
  },
  btnText: {
    color: '#fff'
  },
  created: {
    fontSize: 10,
    color: '#3f3f3d',
    // paddingBottom: 5,
    // borderBottomWidth: 1,
    // borderColor: 'red'
  },
  numbCreated: {
    fontSize: 15,
    fontFamily: 'Oswald-Regular',
  }
})
