import React, { Component } from 'react'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import Sidenav from './components/Sidenav'
import sections from './sections'

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
        overflow: this.state.isOpen ? 'hidden' : 'auto'
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
        {
          sections.map(section => (
            <ScrollableAnchor
              key={section.id}
              id={section.id}
            >
              {section.content}
            </ScrollableAnchor>
          ))
        }
      </div>
    )
  }
}

export default App
