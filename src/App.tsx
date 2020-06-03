import React, { Component } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Route render={
          (location: RouteComponentProps<any>): React.ReactNode => {
            return <Home location={location.location}/>
          }
        } />
      </BrowserRouter>
    );
  }
}