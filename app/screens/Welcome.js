import React, { Component } from 'react'

import Slides from '../components/Slides'

const slideItems = [
  { text: 'Welcome to Dominoes' },
  { text: 'Use this to manage your dominoes games'},
  { text: 'Start a game, share with friends and track the results'},
]

class Welcome extends Component {
  handleComplete = () => {
    console.log('copmpleted')
  }

  render() {
    return (
      <Slides
        items={slideItems}
        onComplete={this.handleComplete}
      />
    )
  }
}

export default Welcome
