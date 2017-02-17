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
    center: {
      lat: 38.1569344,
      lng: 13.3732059
    },
    zoom: 11
  }

  render () {
    return (
      <div>
        <div className='section-wrapper venue'>
          <div className='section'>
            <h2>
              Ceremony and Venue
              <small style={{color: '#43576E'}}>24th June 2017 - 6:00 pm</small>
            </h2>
            <div className='content'>
              <img src={venueImage} role='presentation' className='image-text' />
              <div>
                <h3>Il Moro Club</h3>
                <h4>Piazza Monsignor Pottino, 3<br />Palermo</h4>
                <p>
                  The ceremony and the party will be held in the same place and on the beach so feel free to dress casually. We suggest to wear something fresh, like linen and possibly light colours!<br />
                  Following the wedding ceremony, there will be a cocktail hour and an <em>*Apericena</em>.
                </p>
              </div>
            </div>
            <p>
              <small><em>* Apertivo+Dinner | Vegetarian or gluten-free options will be provided if needed</em>.</small>
            </p>
          </div>
        </div>
        <div className='section-wrapper maps'>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{
              scrollwheel: false
            }}
            bootstrapURLKeys={{
              key: 'AIzaSyB_kh1u7KbxgxgT1zMP7hFK-Zrq62ke6xs'
            }}
          >
            <Marker
              lat={this.props.center.lat}
              lng={this.props.center.lng}
            />
          </GoogleMapReact>
        </div>
        <Countdown />
      </div>
    )
  }
}

export default Venue
