import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { View, StyleSheet } from 'react-native'

import Welcome from './screens/Welcome'
import MainMenu from './screens/MainMenu'
import Game from './screens/Game'
import GameSettings from './screens/GameSettings'

const App = () => {
  const MainNavigator = TabNavigator({
    welcome: { screen: Welcome },
    main: {
      screen: TabNavigator({
        menu: { screen: MainMenu },
        game: {
          screen: StackNavigator({
            play: { screen: Game },
            settings: { screen: GameSettings },
          }),
        },
      }, {
        swipeEnabled: false,
        lazy: true,
      }),
    },
  }, {
    navigationOptions: {
      tabBarVisible: false,
    },
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
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
