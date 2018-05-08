import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { map } from 'ramda'

import menuStyles from '../styles/components/menu'

const buttons = [
  {
    name: 'play',
    text: 'Resume Game',
    type: 'font-awesome',
    onAction: 'game',
  },
  {
    name: 'gamepad',
    text: 'New Game',
    type: 'font-awesome',
    onAction: 'game',
  },
  {
    name: 'cogs',
    text: 'Settings',
    type: 'font-awesome',
    onAction: 'settings',
  },
  {
    name: 'info-circle',
    text: 'About',
    type: 'font-awesome',
    onAction: 'about ',
  },
]

const Menu = ({ title, menuItems, navigate }) => (
  <View style={menuStyles.container}>
    <View>
      <Text style={menuStyles.title}>{title}</Text>
    </View>
    {map(({ text, type, name, onAction }) => (
      <Button
        buttonStyle={menuStyles.button}
        textStyle={menuStyles.bottomText}
        key={text}
        large
        icon={{ name, type }}
        title={text}
        onPress={() => navigate(onAction)}
      />
    ), menuItems)}
  </View>
)

Menu.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  })),
}

Menu.defaultProps = {
  title: 'Dominoes',
  menuItems: buttons,
}

export default Menu
