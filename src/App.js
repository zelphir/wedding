import React, { Component } from 'react'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import ScrollToTop from 'react-scroll-up'

import Sidenav from './components/Sidenav'
import sections from './sections'
import menu from './images/menu-alt.svg'
import top from './images/top.svg'

class App extends Component {
  state = { isOpen: false }

  toggleVisibility = ({ target: { dataset: { section } } }) => {
    if (section) goToAnchor(section)
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleOnChange = (isOpen) => {
    !isOpen && this.setState({ isOpen: false })
  }

  render () {
    const styles = {
      container: {
        overflow: this.state.isOpen ? 'hidden' : 'inherit'
      }
    }

    return (
      <div style={styles.container}>
        <Sidenav
          toggleVisibility={this.toggleVisibility}
          handleOnChange={this.handleOnChange}
          sections={sections}
          isOpen={this.state.isOpen}
        />
        <span className='menu' onClick={this.toggleVisibility}>
          <img src={menu} role='presentation' />
        </span>
        {
          sections.map(section => (
            <ScrollableAnchor
              key={section.id}
              id={section.id}
              toggleVisibility={this.toggleVisibility}
            >
              {section.content}
            </ScrollableAnchor>
          ))
        }
        <ScrollToTop showUnder={160}>
          <img src={top} role='presentation' />
        </ScrollToTop>
      </div>
    )
  }
}

export default App
