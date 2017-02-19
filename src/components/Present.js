import React, { Component } from 'react'
import ReactGA from 'react-ga'

import BankDetails from './BankDetails'
import guides from '../images/guides.png'

const styles = {
  container: {
    backgroundColor: '#F2EEE7'
  }
}

class Present extends Component {
  state = {
    modalIsOpen: false
  }

  static contextTypes = {
    translate: React.PropTypes.func
  }

  openModal = () => {
    ReactGA.event({
      category: 'Link',
      action: 'Click',
      label: 'Open Bank modal'
    })
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2>
            {this.context.translate('present.h2')}
            <small style={{color: '#43576E'}}>{this.context.translate('present.small')}</small>
          </h2>
          <div className='content'>
            <div className='split-img'>
              <img src={guides} role='presentation' />
            </div>
            <div className='split-text'>
              <p>{this.context.translate('present.p1_1')}
                <em>{this.context.translate('present.em')}</em>
                {this.context.translate('present.p1_2')}
              </p>
              <p>
                {this.context.translate('present.p2_1')}
                <strong>Argentina</strong> {this.context.translate('and')} <strong>Namibia</strong>
                {this.context.translate('present.p2_2')}
              </p>
            </div>
          </div>
          <BankDetails
            openModal={this.openModal}
            closeModal={this.closeModal}
            modalIsOpen={this.state.modalIsOpen}
          />
        </div>
      </div>
    )
  }
}

export default Present
