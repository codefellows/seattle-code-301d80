import React, { Component } from 'react';

// when written in the return, curly braces inclose a statement/expression to be evaluated

export default class Fruit extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Student: {this.props.student}</p>
      </div>
    )
  }
}

