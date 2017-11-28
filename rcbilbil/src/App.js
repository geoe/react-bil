import React, { Component } from 'react';
import './css/comm.css';
import './css/app.css';
import './css/homeone.css'
import Header from './component/header'
import Homeone from './component/homeone'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
