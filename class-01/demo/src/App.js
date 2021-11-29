import React, { Component } from 'react';
import Main from './components/Main.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Main />
        <p>footer</p>
      </div>
    )
  }
}
