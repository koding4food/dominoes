import { StyleSheet, Dimensions } from 'react-native'
import { text, primary, darkPrimary, lightPrimary, secondaryText, accentColor } from '../colors'

export default StyleSheet.create({
  container: {
    backgroundColor: primary,
    margin: 4,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: lightPrimary,
    backgroundColor: text,
    color: secondaryText,
    padding: 3,
    textAlign: 'center',
  },
  itemsTitle: {
    textAlign: 'center',
    color: text,
    fontWeight: 'bold',
    fontSize: 28,
  },
  itemsTitleContainer: {

  },
})
