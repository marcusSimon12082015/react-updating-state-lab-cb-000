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
    this.setState({settings:{...this.state.settings,bitrate:12}});
  }

  resolutionHandler = () => {
    this.setState({settings:{...this.state.settings.video,resolution:'720p'}});
  }

  render(){
    return(<button className='bitrate' onClick={this.bitHandler}></button><br>
          <button className='bitrate' onClick={this.resolutionHandler}></button>)
  }
}
