import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import backgroundImage from './img/karaoke.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
// <img src={backgroundImage} className="background" alt="" />
