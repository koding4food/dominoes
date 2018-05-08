import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button } from 'react-native-elements'

import Points from '../components/Points'
import { text } from '../styles/colors'

class Game extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Game',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="settings" size={30} color={tintColor} />
    ),
    headerRight: <Icon
      onPress={() => navigation.navigate('settings')}
      name="settings"
      size={30}
    />,
  })

  render() {
    return (
      <Points />
    )
  }
}

export default Game
