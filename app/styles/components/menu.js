import { StyleSheet, Dimensions } from 'react-native'
import { text, primary, darkPrimary } from '../colors'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    backgroundColor: darkPrimary,
  },
  bottomText: {
    color: text,
  },
  title: {
    color: text,
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    width: deviceWidth,
  },
})
