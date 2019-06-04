import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import './App.css';
import AdminPageComponent from './components/AdminPageComponent';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <ul>
              <li><Link to="/adminPage">Admin Page</Link></li>
            </ul>
            <Route exact path="/adminPage" component={AdminPageComponent}/>
          </BrowserRouter>
      );
  }
  
}

export default App;
