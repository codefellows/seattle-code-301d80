import React, { Component } from 'react';
import billy from './billy.jpeg';

export default class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patsOnHead: 0,
      hugs: 0
    }
  }

  handleClick = () => {
    // when I click this I am going to add 1 to a total of pats on the head that i am keeping track of somewher
    // first I need to track how many pats bill has
    // this wont work!!! this.state.patsOnHead = this.state.patsOnHead + 1
    this.setState({ patsOnHead: this.state.patsOnHead + 1 });

    // 
  }

  render() {
    return (
      <div>
        <img src={billy} alt="description"/>
        <h3>{this.props.name}</h3>
        <p>This is the child, they have {this.state.patsOnHead} pats on the head</p>
        <button onClick={this.handleClick}>Pat on head</button>
      </div>
    )
  }
}

// button.addEventListener('click', handleEvent)
// built in methods to turn on listening
// onClick={}