import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Modal from 'react-modal'
import { MatchMediaHOC } from 'react-match-media'
import Slider from 'react-slick'

import './Visit.css'
import videoButton from '../images/videoButton.png'

const images = [
  {
    src: require('../images/cathedral.jpg'),
    label: 'Cathedral'
  },
  {
    src: require('../images/eremiti.jpg'),
    label: 'San Giovanni degli Eremiti'
  },
  {
    src: require('../images/martorana.jpg'),
    label: 'La Martorana'
  },
  {
    src: require('../images/night-life-1.jpg'),
    label: 'Night Life'
  },
  {
    src: require('../images/massimo.jpg'),
    label: 'Massimo Theatre'
  },
  {
    src: require('../images/mondello.jpg'),
    label: 'Mondello Beach'
  },
  {
    src: require('../images/norman-palace.jpg'),
    label: 'Norman Palace'
  },
  {
    src: require('../images/breakfast.jpg'),
    label: 'Light Breakfast'
  },
  {
    src: require('../images/palatina.jpg'),
    label: 'Palatine Chapel'
  }
]

class Visit extends Component {
  state = {modalIsOpen: false}

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render () {
    const videoSettings = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        showinfo: 0
      }
    }

    const modalSettings = {
      content: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000',
        borderRadius: 0,
        padding: 0,
        border: 0
      }
    }

    const sliderSettings = {
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }

    const Desktop = MatchMediaHOC(() => <div>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={modalSettings}
        contentLabel='Visit Sicily'
      >
        <span className='close-modal' onClick={this.closeModal}>&times;</span>
        <YouTube
          videoId='1ecpwfqBZMM'
          opts={videoSettings}
        />
      </Modal>
      <img className='image-text link' src={videoButton} onClick={this.openModal} role='presentation' />
    </div>, '(min-width: 601px)')

    const Mobile = MatchMediaHOC(() => <div className='video-mobile'>
      <YouTube
        videoId='1ecpwfqBZMM'
        opts={{...videoSettings, playerVars: {autoplay: 0}}}
      />
    </div>, '(max-width: 600px)')

    return (
      <div>
        <div className='section-wrapper visit'>
          <div className='section'>
            <h2>What to do in Sicily</h2>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {
            images.map((img, key) => (
              <div className='slide' key={key}>
                <img src={img.src} role='presentation' />
                <div className='label'>{img.label}</div>
              </div>
            ))
          }
        </Slider>
        <div className='section-wrapper visit'>
          <div className='section'>
            <h3>Palermo</h3>
            <p>For millennia at the crossroads of civilisations, Palermo delivers a heady, heavily spiced mix of Byzantine mosaics, Arabesque domes and frescoed cupolas. This is a city at the edge of Europe and at the centre of the ancient world, a place where souk-like markets rub against baroque churches, where date palms frame Gothic palaces and where the blue-eyed and fair have bronze-skinned cousins.</p>
            <p>Centuries of dizzying highs and crushing lows have formed a complex metropolis. Here, crumbling staircases lead to gilded ballrooms and guarded locals harbour hearts of gold. Just don't be fooled. Despite its noisy streets, Sicily’s largest city is a shy beast, rewarding the inquisitive with citrus-filled cloisters, stucco-laced chapels and vintage stores filled with the threads of faded aristocrats. Add to this Italy’s biggest opera house and an ever-growing number of vibrant, new-school eateries and bars and you might just find yourself suddenly, unexpectedly in love.</p>
            <cite>
              <span>- Lonely Planet</span>
              <small>
                <a
                  className='light'
                  href='https://www.lonelyplanet.com/italy/sicily/palermo'
                  target='_blank'
                >
                  Link to the online guide
                </a>
              </small>
            </cite>
            <div className='content'>
              <Mobile />
              <Desktop />
              <div>
                <h3>Sicily</h3>
                <p>Eternal crossroads of the Mediterranean, the gorgeous island of Sicily continues to seduce travellers with its dazzling diversity of landscapes and cultural treasures.</p>
                <p>Watch the video! It's a good Sicily summary.</p>
                <cite>
                  <span>- Lonely Planet</span>
                  <small>
                    <a
                      className='light'
                      href='https://www.lonelyplanet.com/italy/sicily'
                      target='_blank'
                    >
                      Link to the online guide
                    </a>
                  </small>
                </cite>
              </div>
            </div>
            <div>
              <h4>More videos</h4>
              <h5>
                <a
                  className='light'
                  href='http://www.bbc.co.uk/programmes/b08d6t6d/episodes/player'
                  target='_blank'
                >BBC: Sicily: The Wonder of the Mediterranean</a>
              </h5>
              <small>Historian Michael Scott journeys through Sicily to find out how 3,000 years of conquest and settlement have shaped the identity of the island we see today.</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Visit
