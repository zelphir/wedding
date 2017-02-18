import React from 'react'
import GoogleMapReact from 'google-map-react'

import Countdown from './Countdown'
import venueImage from '../images/venue.png'
import marker from '../images/marker.png'
import './Venue.css'

const Marker = ({ text }) => (
  <div style={{position: 'relative', height: 40, width: 40, top: -20, left: -20}}>
    <img src={marker} role='presentation' />
  </div>
)

const options = {
  center: {
    lat: 38.1569344,
    lng: 13.3732059
  },
  zoom: 11
}

const colors = [
  '#DFC38D',
  '#F2EEE7',
  '#F1C19E',
  '#F1B29E'
]

const Venue = (props, context) => (
  <div>
    <div className='section-wrapper venue'>
      <div className='section'>
        <h2>
          {context.translate('venue.h2')}
          <small style={{color: '#43576E'}}>
            {context.translate('venue.small')}
          </small>
        </h2>
        <div className='content'>
          <img src={venueImage} role='presentation' className='image-text' />
          <div>
            <h3>Il Moro Club</h3>
            <h4>Piazza Monsignor Pottino, 3<br />Palermo</h4>
            <p>
              {context.translate('venue.p1')}
              <span style={{textAlign: 'center', display: 'block'}}>
                {
                  colors.map((color, key) => (
                    <span
                      key={key}
                      style={{
                        borderRadius: '50%',
                        width: 15,
                        height: 15,
                        marginRight: 10,
                        background: color,
                        display: 'inline-block'
                      }}
                    />
                  ))
                }
              </span>
              {context.translate('venue.p2')}
            </p>
          </div>
        </div>
        <p>
          {context.translate('venue.p3_1')}
          <em>*Apericena</em>. {context.translate('venue.p3_2')}<br />
          <small><em>* {context.translate('venue.desc')}</em>.</small>
        </p>
      </div>
    </div>
    <div className='section-wrapper maps'>
      <GoogleMapReact
        defaultCenter={options.center}
        defaultZoom={options.zoom}
        options={{
          scrollwheel: false
        }}
        bootstrapURLKeys={{
          key: 'AIzaSyB_kh1u7KbxgxgT1zMP7hFK-Zrq62ke6xs'
        }}
      >
        <Marker
          lat={options.center.lat}
          lng={options.center.lng}
        />
      </GoogleMapReact>
    </div>
    <Countdown />
  </div>
)

Venue.contextTypes = {
  translate: React.PropTypes.func
}

export default Venue
