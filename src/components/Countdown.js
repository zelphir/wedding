import dateBetween from '../lib/dateBetween'
import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#543341',
    color: 'white'
  },
  countdown: {
    fontSize: 24,
    textAlign: 'center'
  }
}

export default class Countdown extends Component {
  state = {
    remaining: null
  }

  componentDidMount () {
    this.tick()
    this.interval = setInterval(this.tick, 60 * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  tick = () => {
    const startDate = new Date()
    const endDate = new Date(this.props.options.endDate)
    const remaining = dateBetween(startDate, endDate)
    this.setState({
      remaining: remaining
    })
  }

  render () {
    const { remaining } = this.state

    return remaining ? (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>Countdown</h2>
          {
            remaining && (
              <div style={styles.countdown}>
                <span className='days'><strong>{remaining.days}</strong> days</span>
                <span className='hours'> <strong>{remaining.hours}</strong> hours</span>
                <span className='minutes'> and <strong>{remaining.minutes}</strong> minutes</span>
              </div>
            )
          }
        </div>
      </div>
    ) : (
      <div />
    )
  }
}
