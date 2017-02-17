import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#43576E',
    color: '#cccccc',
    textAlign: 'center'
  }
}

class Contact extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>Contact us</h2>
          <p>If you have any question, doubt or if there's anything you need please do not hesitate to ask!<br />We are glad to help you out.</p>
          <h4>You got our numbers.</h4>
        </div>
      </div>
    )
  }
}

export default Contact
