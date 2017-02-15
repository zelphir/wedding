import React, { Component } from 'react'

const styles = {
  container: {
    backgroundColor: '#E6D8BB',
    padding: 20
  },
  h1: {
    textAlign: 'center'
  }
}

class Intro extends Component {
  render () {
    return (
      <div className='section-wrapper' style={styles.container}>
        <div className='section'>
          <h2 style={styles.h1}>Hello World</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec magna et nunc commodo tempus. Aliquam egestas dui sed magna consectetur, vulputate ornare ipsum imperdiet. Nam nec fringilla risus. Curabitur enim sem, molestie quis massa varius, commodo congue arcu. Donec auctor neque nec risus scelerisque, id sagittis justo euismod. Curabitur iaculis, felis non fringilla consectetur, leo orci tincidunt enim, quis luctus metus augue at orci. Suspendisse tristique pellentesque condimentum. Aenean cursus semper ipsum, viverra luctus turpis semper id. Nunc laoreet fermentum metus, at pellentesque lacus.</p>
          <p>Aliquam tristique nisl a sapien feugiat, quis hendrerit quam mattis. Ut sit amet est erat. Integer pulvinar id neque quis vulputate. Suspendisse cursus lectus sed eros placerat consectetur. Ut rutrum nunc in diam ullamcorper varius. Ut et neque at magna molestie bibendum quis eget felis. Cras efficitur risus eu massa tristique, quis aliquam est ullamcorper. Suspendisse pretium lorem eu sapien facilisis consectetur. Morbi tincidunt tortor diam, eu mattis sapien ornare vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ac tempus massa. Donec posuere faucibus sapien eget dapibus.</p>
        </div>
      </div>
    )
  }
}

export default Intro

