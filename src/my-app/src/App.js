import React, { Component } from 'react';
import LoginComponent from "./LoginStuff/loginComponent"
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './MainStuff/navigationBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="NavigationBar">
            <NavigationBar/>
          </header>

          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <h1>
                Ad Distro
            </h1>
            <LoginComponent/> */}
          </header>
      </div>
    );
  }
}

export default App;
