import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#F2EEE7'
  }
}

class Travel extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>Getting there</h2>
          <p>Ryanair (from Stansted) has a daily flight, EasyJet (from Gatwick) flyes to Palermo 3-4 times a week, BA (from Heathrow) 3 times a week (could get very expensive) and Alitalia everyday (more than one) from Heathrow as well but with a stop in Rome or Milan (usually the stop is 1-1.5 hours).</p>
          <p>Any question feel free to ask, we will try to help you as best as we can.</p>
        </div>
      </div>
    )
  }
}

export default Travel
