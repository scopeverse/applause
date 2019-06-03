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
            <button
            class="applause-button">
                <img
                class="clickable" 
                src={ require('./clapping-hands.svg') }
                onClick={this.makeItClap.bind(this)}
                />
                <span
                class="after-button"
                >{this.state.numOfClaps} clap{`s`}
                </span>
            </button>
    </div>
    )
  }
}

export default Applause;

