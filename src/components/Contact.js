import React from 'react'

const styles = {
  container: {
    backgroundColor: '#43576E',
    color: '#cccccc',
    textAlign: 'center'
  }
}

const Contact = (props, context) => (
  <div className='section-wrapper' style={styles.container}>
    <div className='section'>
      <h2>{context.translate('contact.h2')}</h2>
      <p>
        {context.translate('contact.p1')}<br />
        {context.translate('contact.p2')}
      </p>
      <h4>{context.translate('contact.h4')}</h4>
    </div>
  </div>
)

Contact.contextTypes = {
  translate: React.PropTypes.func
}

export default Contact
