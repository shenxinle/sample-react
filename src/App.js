import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import ModalDemo from './demo/modal/index';
import ButtonDemo from './demo/button/index';

function AppContent({match, history, location}) {
  const navTo = (path) => {
    return (e) => {
      history.push(path);
    }
  }
  return (
    <div>
      <header className="app-header text-center">
        <h2>
          <img src={logo} className="app-logo" alt="logo" />
          Welcome
        </h2>
      </header>
      <main className="app-body row">
        <div className="app-body-left col col-2">
          <ul>
            <li><Link to="/modal">Modal</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li>Button</li>
          </ul>
        </div>
        <div className="app-body-right col col-10">
          <Route path="/modal" component={ModalDemo}></Route>
          <Route path="/button" component={ButtonDemo}></Route>
        </div>
      </main>
      <footer className="app-footer text-center">
        footer
      </footer>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/" component={AppContent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
