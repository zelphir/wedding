import React from 'react'
import Drawer from '../lib/Drawer'
import ReactSVG from 'react-svg'

import './Sidenav.css'

const Sidenav = ({
  handleOnChange,
  isOpen,
  sections,
  toggleVisibility
}) => (
  <Drawer
    width={230}
    drawerStyle={{backgroundColor: '#3A4245'}}
    onChange={handleOnChange}
    open={isOpen}
  >
    {
      sections.map(section => section.label && (
        <span
          onClick={toggleVisibility}
          data-section={section.id}
          key={section.id}
          className='menu-item'
        >
          <ReactSVG
            path={require(`../images/${section.id}.svg`)}
            className='menu-icon'
          />
          {section.label}
        </span>
      ))
    }
  </Drawer>
)

export default Sidenav
