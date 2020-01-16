import React from 'react';
import { connect } from 'react-redux';

class App extends Components {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({
      count: this.state + 1
    })
  }

  handleMinusButton = () => {
    this.setState({
      count: this.state - 1
    })
  }

  render() {
    return (
      <React.Fragment>
      <div>count: {this.state}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
