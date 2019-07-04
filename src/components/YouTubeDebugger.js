// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  clickHandler = () => {
    this.setState({timesClicked:timesClicked + 1})
  }
  render(){
    return(<button className='bitrate' onClick={this.clickHandler}></button>)
  }
}
