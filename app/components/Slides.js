import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { map, addIndex, length } from 'ramda'

import slideStyles from '../styles/components/slides'

const indexedMap = addIndex(map)

const SlideItem = ({ text, shouldAllowAction, onComplete }) => (
  <View
    style={slideStyles.slideItem}
  >
    <Text style={slideStyles.slideText}>{text}</Text>
    {shouldAllowAction &&
      <Button
        buttonStyle={slideStyles.buttonStyle}
        title="Ready"
        raised
        onPress={onComplete}
      />}
  </View>
)

const Slides = ({ items, onComplete }) => (
  <ScrollView
    style={slideStyles.container}
    horizontal
    pagingEnabled
  >
    {indexedMap(({ text }, index) => (
      <SlideItem
        key={text}
        text={text}
        onComplete={onComplete}
        shouldAllowAction={length(items) === index + 1}
      />
    ), items)}
  </ScrollView>
)

export default Slides
