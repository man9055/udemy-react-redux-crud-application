import React, { Component } from 'react';

class App extends Component {
  render() {
    return <input type="button" value="click" onClick={()=>{console.log(20)}} />;
  }
}

export default App;
