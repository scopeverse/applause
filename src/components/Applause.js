import React from 'react';
import '../App.css';

class Applause extends React.Component {
  constructor() {
    super ();
    this.state = {
      numOfClaps: 0
    }
  }
  
  makeItClap () {
    this.setState({
      numOfClaps: this.state.numOfClaps + 1
    })
  }

  render () {
    return (
    <div>
      <h1>Number of Claps: {this.state.numOfClaps}</h1>
      <button onClick={this.makeItClap.bind(this)}>
        Click Here to Clap
      </button>
    </div>
    )
  }
}

export default Applause;