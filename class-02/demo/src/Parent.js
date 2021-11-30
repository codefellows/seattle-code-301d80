import React, { Component } from 'react';
import Child from './Child.js';

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childName: ['Finley', 'Holden'],
      dog: 'Rover'
    }
  }

  render() {
    return (
      <div>
        <h3> Hi I am the parent</h3>
        <Child name={this.state.childName[0]} />
        <Child name={this.state.childName[1]} />
      </div>
    )
  }
}


