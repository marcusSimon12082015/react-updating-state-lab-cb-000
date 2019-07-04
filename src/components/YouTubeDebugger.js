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

  bitHandler = () => {
    this.setState({timesClicked:timesClicked + 1})
  }

  resolutionHandler = () => {
    this.setState({timesClicked:timesClicked + 1})
  }

  render(){
    return(<button className='bitrate' onClick={this.bitHandler}></button><br>
          <button className='bitrate' onClick={this.resolutionHandler}></button>)
  }
}
