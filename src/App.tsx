import React, { Component } from 'react';
import { Router } from 'react-router';
import { Home } from './components/Home';
import { createBrowserHistory } from "history";
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Home />
      </Router>
    );
  }
}