import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryCity: '',
      locationObject: {},
      error: false
    }
  }

  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_SECRET_PASSWORD}&q=${this.state.queryCity}&format=json`);
        // console.log(result.data[0]);
        this.setState({ locationObject: result.data[0]})
    } catch (error) {
      console.error(error);
      console.log('their was an error');
      this.setState({ error: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.city.value }, this.getLocation);
    // setState can take an optional second argument- callback that will execute AFTER state is set
    // console.log(this.state.queryCity);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="city name" name="city" />
          <button type="submit">Explore!</button>
        </form>
        {this.state.locationObject.display_name? <p>{this.state.locationObject.display_name}</p> : <p>Search for a city to explore</p>}
        {this.state.error && <p>There was an error with your request</p>}
      </div>
    )
  }
}
