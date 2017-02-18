import React from 'react'

const styles = {
  container: {
    backgroundColor: '#E6D8BB'
  }
}

const Intro = (props, context) => (
  <div className='section-wrapper' style={styles.container}>
    <div className='section'>
      <h1>{context.translate('intro.hello')}</h1>
      <p>{context.translate('intro.p1')}</p>
      <p>{context.translate('intro.p2_1')}<strong>"Finally"</strong>{context.translate('intro.p2_2')}</p>
      <p>{context.translate('intro.p3')}</p>
      <cite>Isa & Roby</cite>
    </div>
  </div>
)

Intro.contextTypes = {
  translate: React.PropTypes.func
}

export default Intro
