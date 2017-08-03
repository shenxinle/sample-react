import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import ModalDemo from './demo/modal/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <header className="app-header text-center">
            <h2>
              <img src={logo} className="app-logo" alt="logo" />
              Welcome
            </h2>
          </header>
          <main className="app-body row">
            <div className="app-body-left col col-2">
              <ul>
                <li>Button</li>
                <li>Button</li>
                <li>Button</li>
                <li>Button</li>
              </ul>
            </div>
            <div className="app-body-right col col-10">
              
            </div>
          </main>
          <footer className="app-footer text-center">
            footer
          </footer>
          <div>
            <ModalDemo></ModalDemo>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
