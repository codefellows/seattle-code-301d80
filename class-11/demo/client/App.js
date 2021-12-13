import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      location: ''
    }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value })
  }

  handleClick = () => {
    if (this.state.location) {
      this.getCats(this.state.location);
    } else (
      this.getCats()
    )
  }

  getCats = async (location=null) => {
    const fullUrl = location ? `${url}/cats?location=${location}` : `${url}/cats`
    let catResponse = await axios.get(fullUrl);
    // set some state so we can render the cats
    this.setState({ cats: catResponse.data });

  }

  componentDidMount() {
    this.getCats();
  }



  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={this.state.location} />
        <button onClick={this.handleClick}>Location Sort</button>
        {this.state.cats.length > 0 && this.state.cats.map(cat => <li>{cat.name} : {cat.location}</li>)}
      </div>
    )
  }
}
