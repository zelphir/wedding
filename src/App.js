import React, { Component } from 'react'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import './App.css'

class App extends Component {
  state = { visible: false }
  toggleVisibility = () => {
    goToAnchor('section2', true)
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item onClick={this.toggleVisibility} name='home'>Home</Menu.Item>
            <Menu.Item onClick={this.toggleVisibility} name='test'>Test</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <ScrollableAnchor id={'section1'}>
              <div className='App'>
                Hello World
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section2'}>
              <div style={{height: '400px', backgroundColor: 'red'}}> How are you world? </div>
            </ScrollableAnchor>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
  // render () {
  //   return (
  //     <div>
  //       <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
  //       <Sidebar.Pushable as={Segment}>
  //         <Menu.Item href='#section1' name='home'>Home</Menu.Item>
  //         <Menu.Item href='#section2' name='test'>Test</Menu.Item>
  //       </Sidebar.Pushable>
  //       <Sidebar.Pusher>
  //         <ScrollableAnchor id={'section1'}>
  //           <div className='App'>
  //             Hello World
  //           </div>
  //         </ScrollableAnchor>
  //         <ScrollableAnchor id={'section2'}>
  //           <div style={{height: '400px', backgroundColor: 'red'}}> How are you world? </div>
  //         </ScrollableAnchor>
  //       </Sidebar.Pusher>
  //     </div>
  //   )
  // }
}

export default App
