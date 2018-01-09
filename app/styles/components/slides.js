import { StyleSheet, Dimensions } from 'react-native'
import { primary, darkPrimary, text } from '../colors'

const screenWidth = Dimensions.get('window').width

const slideStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideItem: {
    alignItems: 'center',
    backgroundColor: primary,
    flex: 1,
    justifyContent: 'center',
    width: screenWidth,
  },
  slideText: {
    color: text,
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: darkPrimary,
  },
  textStyle: {
    color: text,
  },
})

export default slideStyles
