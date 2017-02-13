import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <a href='#section1'> Go to section 1 </a>
        <a href='#section2'> Go to section 2 </a>
        <ScrollableAnchor id={'section1'}>
          <div className='App'>Hello World</div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div style={{height: '400px', backgroundColor: 'red'}}> How are you world? </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default App
