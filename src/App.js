import React, { Component } from 'react'
import ScrollToTop from 'react-scroll-up'
import { connect } from 'react-redux'
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import ReactGA from 'react-ga'

import SwitchLanguage from './components/SwitchLanguage'
import Sidenav from './components/Sidenav'

import sections from './sections'

import menu from './images/menu-alt.svg'
import top from './images/top.svg'

class App extends Component {
  state = { isOpen: false }

  toggleVisibility = ({ target: { href } }) => {
    ReactGA.event({
      category: 'Link',
      action: 'Click',
      label: this.state.isOpen ? href.split('#')[1] : 'Open Sidenav'
    })
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleSwitchLanguage = ({ target: { dataset: { lang } } }) => {
    this.props.dispatch(IntlActions.setLocale(lang))
    ReactGA.event({
      category: 'Link',
      action: 'Click',
      label: 'Switch Language',
      value: lang
    })
  }

  handleOnChange = isOpen => {
    !isOpen && this.setState({ isOpen: false })
  }

  getSections = () => {
    if (this.props.locale === 'it') {
      return sections.filter(
        section =>
          section.id !== 'travel' &&
          section.id !== 'accommodation' &&
          section.id !== 'visit'
      )
    }
    return sections
  }

  render () {
    this.state.isOpen
      ? document.body.classList.add('withSidenav')
      : document.body.classList.remove('withSidenav')

    return (
      <div>
        <Sidenav
          toggleVisibility={this.toggleVisibility}
          handleOnChange={this.handleOnChange}
          sections={this.getSections()}
          isOpen={this.state.isOpen}
        />

        <span className='menu' onClick={this.toggleVisibility}>
          <img src={menu} role='presentation' />
        </span>

        <SwitchLanguage
          handleSwitchLanguage={this.handleSwitchLanguage}
          active={this.props.locale}
        />

        {this.getSections().map(Section => (
          <div key={Section.id} id={Section.id}>
            <Section.content />
          </div>
        ))}

        <ScrollToTop showUnder={160}>
          <img src={top} role='presentation' />
        </ScrollToTop>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { Intl: { locale } } = state
  return {
    locale
  }
}

export default connect(mapStateToProps)(withTranslate(App))
