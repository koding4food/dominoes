import { StyleSheet, Dimensions } from 'react-native'
import { text, primary, darkPrimary, lightPrimary, secondaryText, accentColor } from '../colors'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  items: {
    padding: 15,
    backgroundColor: lightPrimary,
    width: deviceWidth * 0.25,
  },
  item: {
    color: secondaryText,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  itemsHeaderContainer: {
    backgroundColor: accentColor,
    padding: 0,
  },
  itemsHeader: {
    textAlign: 'center',
  },
})
