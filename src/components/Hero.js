import React, { Component } from 'react'
import heroImage from '../images/hero.png'

const styles = {
  container: {
    backgroundColor: '#F2EEE7',
    textAlign: 'center',
    padding: '40px 10px'
  },
  image: {
    width: '100%',
    maxWidth: '960px'
  }
}

class Hero extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <img src={heroImage} style={styles.image} role='presentation' />
        </div>
      </div>
    )
  }
}

export default Hero
