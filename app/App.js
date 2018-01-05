import React from 'react'
import { TabNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'

const App = () => {
  const MainNavigator = TabNavigator({
    welcome: { screen: Welcome },
  })

  return (
    <MainNavigator />
  )
}

export default App
