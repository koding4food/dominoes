import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Divider } from 'react-native-elements'

import Menu from '../components/Menu'

class MainMenu extends Component {
  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)

    return (
      <View style={{ flex: 1, }}>
        <Menu navigate={navigate} />
      </View>
    )
  }
}

export default MainMenu
