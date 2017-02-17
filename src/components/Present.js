import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#F2EEE7'
  }
}

class Present extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>
            Wedding List
            <small style={{color: '#43576E'}}>Argentina or Namibia?</small>
          </h2>
          <p>Here we are... We could just say: <em>"Nothing, we just want to have you there!"</em> And it's true! But we all know that is not gonna happen, so, since we live in a small flat, the only thing we can think about is if you would like to contribute to our next trip. We love to travel!</p>
          <p>There are two countries that we'd like to visit: <strong>Argentina</strong> and <strong>Namibia</strong>! We are still thinking which one first.<br />If you want to help us, you can send a contribution to either our Euro (Italian) or English accounts below:</p>
          <div className='content'>
            <div className='bank'>
              <h5>Italian (EUR)</h5>
              <span>
                Name: <strong>ROBERTO MANZELLA</strong><br />
                Iban: <strong>IT49J0316901600CC0010280674</strong><br />
                ABI: <strong>03169</strong><br />
                CAB: <strong>01600</strong><br />
                BIC: <strong>INGDITM1</strong><br />
                Ref: <strong>WEDDING</strong>
              </span>
            </div>
            <div className='bank'>
              <h5>English (GBP)</h5>
              <span>
                Name: <strong>ROBERTO MANZELLA</strong><br />
                Account number: <strong>89041210</strong><br />
                Sort code: <strong>09-01-28</strong><br />
                BIC: <strong>ABBYGB2LXXX</strong><br />
                Iban: <strong>GB16ABBY09012889041210</strong><br />
                Ref: <strong>WEDDING</strong>
              </span>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Present
