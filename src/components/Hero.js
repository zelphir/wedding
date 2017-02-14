import React, { Component } from 'react'
import heroImage from '../images/hero.png'

class Hero extends Component {
  render () {
    return (
      <div className='App'>
        <img src={heroImage} style={{width: '100%'}} role='presentation' />
      </div>
    )
  }
}

export default Hero
