import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      christmasList: []
    }
  }

  /// make a request using axios to my server, get back the list, set it in state, render the list from state
  christmasListRequest = async() => {
    const gottenChristmasList = await axios.get(`${process.env.REACT_APP_URL}/christmaslist?name=sara&age=40`);
    this.setState({ christmasList: gottenChristmasList.data })
  } 

  componentDidMount() {
    this.christmasListRequest();
  }

  render() {
    return (
      <div>
        <h3 style={{color: "green"}}>D80 christmas list</h3>
        <ul>
          {/* if I have an array with items in it in state, map over it an make li's */}
          {this.state.christmasList.length > 0 && this.state.christmasList.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}
