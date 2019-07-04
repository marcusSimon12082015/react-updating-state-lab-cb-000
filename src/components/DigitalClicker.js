// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{
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
    return(<button onClick={this.clickHandler}>{this.timesClicked}</button>)
  }
}
