import React from 'react'
import Drawer from '../lib/Drawer'
import ReactSVG from 'react-svg'

import './Sidenav.css'

const Sidenav = ({
  handleOnChange,
  isOpen,
  sections,
  toggleVisibility
}, context) => (
  <Drawer
    width={230}
    drawerStyle={{backgroundColor: '#3A4245', overflowY: 'scroll'}}
    onChange={handleOnChange}
    open={isOpen}
  >
    {
      sections.map(section => (
        <a
          href={`#${section.id}`}
          key={section.id}
          className='menu-item'
          onClick={toggleVisibility}
        >
          <ReactSVG
            path={require(`../images/${section.id}.svg`)}
            className='menu-icon'
          />
          {
            section.label
            ? section.label
            : context.translate(`${section.id}.label`)
          }
        </a>
      ))
    }
  </Drawer>
)

Sidenav.contextTypes = {
  translate: React.PropTypes.func
}

export default Sidenav
