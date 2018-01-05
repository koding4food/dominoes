import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#036BF4',
  },
  title: {
    color: '#036BF4',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    width: deviceWidth,
  },
})
