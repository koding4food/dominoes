import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const slideStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideItem: {
    alignItems: 'center',
    backgroundColor: '#036BF4',
    flex: 1,
    justifyContent: 'center',
    width: screenWidth,
  },
  slideText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#6495ED',
  },
})

export default slideStyles
