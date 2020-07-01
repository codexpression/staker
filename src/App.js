import React, { Component } from 'react';
import Header from './component/Header';
import Process from './component/process';
import Portfolio from './component/portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Process />
        <Portfolio />
      </div>
    );
  }
}



export default App;
