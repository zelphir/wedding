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
          <p>Any question, doubt, whatever... Just let us know! You got our numbers.</p>
        </div>
      </div>
    )
  }
}

export default Contact
