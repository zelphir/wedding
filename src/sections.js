import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'

const sections = [
  {
    id: 'hero',
    label: 'Home',
    content: <Hero />
  },
  {
    id: 'intro',
    content: <Intro />
  }
]

export default sections
