import Hero from './components/Hero'
import Visit from './components/Visit'
import Venue from './components/Venue'
import Travel from './components/Travel'
import Accommodation from './components/Accommodation'
import Contact from './components/Contact'
import Present from './components/Present'

const sections = [
  {
    id: 'home',
    label: 'Home',
    content: Hero
  },
  {
    id: 'venue',
    content: Venue
  },
  {
    id: 'travel',
    label: 'Getting there',
    content: Travel
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    content: Accommodation
  },
  {
    id: 'visit',
    label: 'Visit Sicily',
    content: Visit
  },
  {
    id: 'present',
    content: Present
  },
  {
    id: 'contact',
    content: Contact
  }
]

export default sections
