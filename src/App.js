import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavMenu/NavBar';

var navLinks = [{title:"Home",href:"/"},{title:"Portfolio",href:"/portfolio"}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar bgColor="rgba(55, 57, 55, 0.9)" titleColor="rgba(255, 110, 0, 0.9)" linkColor="#fafafa"  navData={navLinks} />
      </div>
    );
  }
}

export default App;
