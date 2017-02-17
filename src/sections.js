import React from 'react'
import Hero from './components/Hero'
import Visit from './components/Visit'
import Venue from './components/Venue'

const sections = [
  {
    id: 'home',
    label: 'Home',
    content: <Hero />
  },
  {
    id: 'venue',
    label: 'Ceremony',
    content: <Venue />
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    content: <div />
  },
  {
    id: 'visit',
    label: 'Visit Sicily',
    content: <Visit />
  }
]

export default sections
