import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

import { Provider } from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
import store from './store';

// referenced from: https://www.youtube.com/watch?v=93p3LxR9xfM

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
