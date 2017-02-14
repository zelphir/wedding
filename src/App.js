import React, { Component } from 'react'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import Drawer from './lib/Drawer'

import './App.css'
import hero from './images/hero.png'

class App extends Component {
  state = { isOpen: false }

  toggleVisibility = ({ target: { dataset: { section } } }) => {
    if (section) goToAnchor(section, true)
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleOnChange = (isOpen) => {
    !isOpen && this.setState({ isOpen: false })
  }

  render () {
    const reactRootClass = `sidenavOpen${this.state.isOpen}`

    return (
      <div className={reactRootClass}>
        <Drawer
          width={260}
          drawerStyle={{backgroundColor: 'red'}}
          onChange={this.handleOnChange}
          open={this.state.isOpen}
        >
          <button onClick={this.toggleVisibility} data-section='section1'>test</button>
          <button onClick={this.toggleVisibility} data-section='section2'>test</button>
          <button onClick={this.toggleVisibility} data-section='section3'>test</button>
        </Drawer>
        <ScrollableAnchor id={'section1'}>
          <div className='App'>
            <img src={hero} style={{width: '100%'}} role='presentation' />
            <button onClick={this.toggleVisibility}>toggle</button>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div style={{height: '1200px', backgroundColor: 'red'}}> How are you world? </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div style={{height: '1200px', backgroundColor: 'blue'}}> How are you world? </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default App
