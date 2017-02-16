import React, { Component } from 'react'
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

class Venue extends Component {
  static defaultProps = {
    center: {lat: 38.153816, lng: 13.365685},
    zoom: 12
  }

  render () {
    return (
      <div>
        <div className='section-wrapper venue'>
          <div className='section'>
            <h2>Ceremony and Venue</h2>
            <div className='content'>
              <img src={venueImage} role='presentation' className='image-text' />
              <div>
                <h3>Il Moro Club</h3>
                <h4>Piazza Monsignor Pottino, 3<br />Palermo</h4>
                <p>24th June 2017 - 6:00 pm</p>
              </div>
            </div>
            <div>
              <p>
                The ceremony and the party will be held in the same place and on the beach so feel free to wear...<br />
                Following the wedding ceremony, there will be a cocktail hour and a standing "Apericena".<br />
                <small>* Vegetarian or gluten-free option will be provided if needed.</small>
              </p>
            </div>
          </div>
        </div>
        <div className='section-wrapper maps'>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{
              gestureHandling: 'none',
              scrollwheel: false
            }}
            bootstrapURLKeys={{
              key: 'AIzaSyB_kh1u7KbxgxgT1zMP7hFK-Zrq62ke6xs'
            }}
          >
            <Marker
              lat={38.1569344}
              lng={13.3732059}
            />
          </GoogleMapReact>
        </div>
        <Countdown />
      </div>
    )
  }
}

export default Venue
