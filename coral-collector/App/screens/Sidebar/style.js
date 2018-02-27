import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31312f',
  },
  profileContainer: {
    backgroundColor: '#1f1f1d',
    paddingTop: 21,
    paddingBottom: 16,
    paddingHorizontal: 13,
    flexDirection: 'row',
    flex: 0.55
  },
  mediaContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  media: {
    width: 68.5,
    height: 68.5,
    backgroundColor: '#ccc',
    borderRadius: 68.5/2
  },
  textContainer: {
    flex: 3,
    marginLeft: 18
  },
  profileName: {
    fontFamily: 'Oswald-Regular',
    fontSize: 14,
    color: '#fff',
    marginBottom: 10
  },
  profileAdd: {
    color: '#39c5f9',
    fontSize: 10
  },
  editProfileLink: {
    marginTop: 10,
    color: '#fff',
    fontSize: 12.5
  },
  list: {
    paddingHorizontal: 19,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listText: {
    fontFamily: 'Oswald-Regular',
    color: '#fff',
    fontSize: 16.5,
    marginLeft: 18.5
  },
  logoutContainer: {
    flexDirection: 'row',
    paddingVertical: 22,
    backgroundColor: '#5f5f5f',
    paddingHorizontal: 19,
  },
  activeList: {
    backgroundColor: '#545e6a'
  },
  notificationNumb: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  numbContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#ec3b47',
    borderRadius: 20/2,
    position: 'absolute',
    right: 20,
    justifyContent: 'center'
  }
})