import React, { Component } from 'react'
import Intro from './Intro'
import Countdown from './Countdown'

import heroImage from '../images/hero.png'

const styles = {
  container: {
    backgroundColor: '#F2EEE7',
    textAlign: 'center'
  },
  image: {
    width: '100%'
  }
}

class Hero extends Component {
  render () {
    return (
      <div>
        <div className='section-wrapper' style={styles.container}>
          <div className='section'>
            <img src={heroImage} style={styles.image} role='presentation' />
          </div>
        </div>
        <Intro />
        <Countdown options={{endDate: '06/24/2017 06:30 PM'}} />
      </div>
    )
  }
}

export default Hero
