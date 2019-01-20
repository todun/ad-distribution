import React, { Component } from 'react';
import LoginComponent from "./LoginStuff/loginComponent"
import './App.css';
import TemporaryDrawer from './MainStuff/tempDrawer';
import AdPanels from './MainStuff/adPanels';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="TempDrawer">
            <TemporaryDrawer/>
          </header>

          <header className="App-header">
            <AdPanels/>
          </header>
      </div>
    );
  }
}

export default App;
