import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#E6D8BB'
  }
}

class Accommodation extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>Accommodation</h2>
          <p>There are quite a lot of Hotels, B&Bs and AirBnBs in both the city center and in the Beach area (Mondello). Just let us know when you are planning to come and how long you want to stay and we'll help you with your preffered choice.</p>
        </div>
      </div>
    )
  }
}

export default Accommodation
