// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timesClicked:0
    }
  }

  clickHandler = () => {
    this.setState({timesClicked:timesClicked + 1})
  }
  render(){
    return(<button onClick={this.clickHandler}></button>)
  }
}