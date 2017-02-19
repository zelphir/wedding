import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: 0,
    padding: 30,
    transform: 'translate(-50%, -50%)'
  }
}

export const BankDetails = (props, context) => {
  return (
    <div>
      <div className='more-info'>
        <span onClick={props.openModal}>{context.translate('present.openModal')}</span>
      </div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel='Info'
        style={customStyles}
      >
        <span className='close-modal' onClick={props.closeModal}>&times;</span>
        <div style={{marginTop: 40}}>
          {context.translate('present.intro')}
        </div>
        <div className='content'>
          <div className='split'>
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
          <div className='split'>
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
      </Modal>
    </div>
  )
}

BankDetails.contextTypes = {
  translate: React.PropTypes.func
}

export default BankDetails
