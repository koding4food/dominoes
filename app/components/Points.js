import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Badge } from 'react-native-elements'

import pointsStyle from '../styles/components/points'
import recordStyles from '../styles/components/record'

const Item = () => (
  <Badge style={pointsStyle.item}>
    <Text>200</Text>
  </Badge>
)

const Items = () => (
  <View >
    <View style={pointsStyle.items}>
      <View style={pointsStyle.itemsHeaderContainer}>
        <Text style={pointsStyle.itemsHeader}>Total</Text>
      </View>
      <View>
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  </View>
)

const Record = () => (
  <View style={recordStyles.container} >
    <View style={recordStyles.itemsTitleContainer}>
      <Text style={recordStyles.itemsTitle}>Player</Text>
    </View>
    <View style={recordStyles.inputContainer}>
      <TextInput
        autoCorrect={false}
        placeholder="99"
        style={recordStyles.inputStyle}
        keyboardType="numeric"
      />
    </View>
    <Items />
  </View>
)

// eslint-disable-next-line
class Points extends React.Component {
  render() {
    return (
      <View style={pointsStyle.container}>
        <Record />
        <Record />
        <Record />
      </View>
    )
  }
}

export default Points
