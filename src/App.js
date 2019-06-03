import React from 'react';
import './App.css';

class Applause extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      clapsCount: 0,
    };
    this.clap = this.clap.bind(this);
  }
  clap(num) {
    // if button is clicked change state of clapsCount by incrementing it
    num = this.state.clapsCount + 1
    this.setState({ clapsCount: num});
  }
  render () {
    return (
    <div>
      <h1>Number of Claps: {this.state.clapsCount}</h1>
      <button onClick={this.clap}>
        Click Here to Clap
      </button>
    </div>
    )
  }
}

// if the person clicks there, increment the clapsCount
// button.onClick 
// this.setState({clapsCount++});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Applause />
      </header>
    </div>
  );
}

export default App;
