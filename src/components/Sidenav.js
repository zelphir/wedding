import React from 'react'
import Drawer from '../lib/Drawer'

const Sidenav = ({
  handleOnChange,
  isOpen,
  sections,
  toggleVisibility
}) => (
  <Drawer
    width={260}
    drawerStyle={{backgroundColor: 'red'}}
    onChange={handleOnChange}
    open={isOpen}
  >
    {
      sections.map(section => section.label && (
        <button
          onClick={toggleVisibility}
          data-section={section.id}
          key={section.id}
        >
          {section.label}
        </button>
      ))
    }
  </Drawer>
)

export default Sidenav
