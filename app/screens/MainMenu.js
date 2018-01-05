import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Divider } from 'react-native-elements'

import Menu from '../components/Menu'

class MainMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <Menu />
      </View>
    )
  }
}

export default MainMenu
