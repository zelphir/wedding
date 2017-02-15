import dateBetween from '../lib/dateBetween'
import React, { Component } from 'react'

export default class Countdown extends Component {
  state = { remaining: null }

  componentDidMount () {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  tick () {
    const startDate = new Date()
    const endDate = new Date(this.props.options.endDate)
    const remaining = dateBetween(startDate, endDate, this.props.options)
    this.setState({ remaining: remaining })
    console.log(remaining)
  }

  render () {
    const { remaining } = this.state
    const { options } = this.props

    const styles = {
      container: {}
    }

    return remaining && (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          { !options.hideDays && <span className='days'>{remaining.days}</span> }
          { !options.hideHours && <span className='hours'>{remaining.hours}</span> }
          { !options.hideMinutes && <span className='minutes'>{remaining.minutes}</span> }
          { !options.hideSeconds && <span className='seconds'>{remaining.seconds}</span> }
        </div>
      </div>
    )
  }
}
