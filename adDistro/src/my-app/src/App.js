import React, { Component } from 'react';
import LoginComponent from "./LoginStuff/loginComponent"
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './MainStuff/navigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="NavigationBar">
            <NavigationBar/>
          </header>

          <header className="App-header">
            <LoginComponent/>
          </header>
      </div>
    );  
  }
}

export default App;
