import React from 'react'
import Intro from './Intro'

import heroImage from '../images/hero.png'

const styles = {
  container: {
    backgroundColor: '#F2EEE7',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxWidth: 700
  }
}

const Hero = () => (
  <div>
    <div className='section-wrapper' style={styles.container}>
      <div className='section'>
        <img src={heroImage} style={styles.image} role='presentation' />
      </div>
    </div>
    <Intro />
  </div>
)

export default Hero
