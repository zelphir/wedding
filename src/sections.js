import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Countdown from './components/Countdown'

const sections = [
  {
    id: 'hero',
    label: 'Home',
    content: <Hero />
  },
  {
    id: 'intro',
    content: <Intro />
  },
  {
    id: 'countdown',
    content: <Countdown options={{endDate: '06/24/2017 06:00 PM', hideSeconds: true}} />
  }
]

export default sections
