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
          <p>There are several flights from London to Palermo, everyday and also more than one per day (if you don't mind stopping in Rome or Milan)</p>
          <ul>
            <li><a href='https://www.ryanair.com' target='_blank'>Ryanair</a>, from Stansted: daily flights</li>
            <li><a href='https://www.easyjet.com/en' target='_blank'>EasyJet</a>, from Gatwick: 5 flights a week (Tue, Wed, Thu, Sat and Sun)</li>
            <li><a href='https://www.britishairways.com' target='_blank'>BA</a>, from Heathrow: 3 flights a week (Tue, Thu and Sun)</li>
            <li><a href='https://www.alitalia.com/en_gb' target='_blank'>Alitalia</a>, from Heathrow: daily flights (more than one a day) with a stop in Rome or Milan, usually the stop is 1-1.5 hours or more</li>
          </ul>
          <p>Any question feel free to ask, we will try to help you as best as we can.</p>
        </div>
      </div>
    )
  }
}

export default Travel
