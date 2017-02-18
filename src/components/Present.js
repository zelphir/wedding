import React from 'react'

const styles = {
  container: {
    backgroundColor: '#F2EEE7'
  }
}

const Present = (props, context) => (
  <div className='section-wrapper' style={styles.container}>
    <div className='section'>
      <h2>
        {context.translate('present.h2')}
        <small style={{color: '#43576E'}}>{context.translate('present.small')}</small>
      </h2>
      <p>{context.translate('present.p1_1')}
        <em>{context.translate('present.em')}</em>
        {context.translate('present.p1_2')}
      </p>
      <p>
        {context.translate('present.p2_1')}
        <strong>Argentina</strong> {context.translate('and')} <strong>Namibia</strong>
        {context.translate('present.p2_2')}
        <br />
        {context.translate('present.p2_3')}
      </p>
      <div className='content'>
        <div className='bank'>
          <h5>{context.translate('present.c1')}</h5>
          <span>
            {context.translate('name')}: <strong>ROBERTO MANZELLA</strong><br />
            Iban: <strong>IT49J0316901600CC0010280674</strong><br />
            ABI: <strong>03169</strong><br />
            CAB: <strong>01600</strong><br />
            BIC: <strong>INGDITM1</strong><br />
            Ref: <strong>WEDDING</strong>
          </span>
        </div>
        <div className='bank'>
          <h5>{context.translate('present.c2')}</h5>
          <span>
            {context.translate('name')}: <strong>ROBERTO MANZELLA</strong><br />
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

Present.contextTypes = {
  translate: React.PropTypes.func
}

export default Present
