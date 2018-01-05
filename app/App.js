import React from 'react'
import { TabNavigator } from 'react-navigation'
import { View, StyleSheet } from 'react-native'

import Welcome from './screens/Welcome'

const App = () => {
  const MainNavigator = TabNavigator({
    welcome: { screen: Welcome },
  }, {
    lazy: true,
  })

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default App
