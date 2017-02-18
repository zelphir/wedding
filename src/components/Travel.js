import React from 'react'

const styles = {
  container: {
    backgroundColor: '#F2EEE7'
  }
}

const Travel = () => (
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
      <h4>How to get to the City center. There are 3 options:</h4>
      <ul>
        <li>a normal taxi (~€35/€40)</li>
        <li>a shared taxi (follow the signs for <strong>TAXI SHARING</strong>). It is usually a 7/9-seater and it's €7 per person. It stops in different places.</li>
        <li>a coach (it departs right after the taxi), slighty slower. Same stops as the shared taxi, €6.40</li>
      </ul>
      <p>Actually there is also a fourth option, we could come a pick you up! Just let us know.</p>
      <p>Any question feel free to ask, we will try to help you as best as we can.</p>
    </div>
  </div>
)

export default Travel
