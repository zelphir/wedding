import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#E6D8BB'
  }
}

class Intro extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h1>Hello Everyone!</h1>
          <p>We are so excited to celebrate our special day with our families and friends. Hope you all can make it!</p>
          <p>As you know, we are both from Palermo and we have known each other for over 20 years! We basically grew up together... hence the <strong>"Finally"</strong> and the wedding in Sicily!</p>
          <p>This website contains some information about the wedding, the venue, accomodation and much more! We will be in Palermo the week before the wedding (from the 17th June) and we are planning to organize some sightseeing and spend some time with everyone that will be around the days before and after the wedding. Just let us know when you are planning to come!</p>
        </div>
      </div>
    )
  }
}

export default Intro
