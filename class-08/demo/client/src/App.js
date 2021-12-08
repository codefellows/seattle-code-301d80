import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map.js';
import Weather from './Weather.js'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryCity: '',
      locationObject: {},
      error: false,
      weather: []
    }
  }

  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_SECRET_PASSWORD}&q=${this.state.queryCity}&format=json`);
        console.log(result.data);
        this.setState({ locationObject: result.data[0]}, this.getWeather)
        this.setState({ error: false });
    } catch (error) {
      console.error(error);
      console.log('there was an error');
      this.setState({ error: true })
    }
  }
  // make a request for weather data, get it back, store it in state, render to screen

  getWeather = async() => {
    // Seatte, King Couty, USA
    // ['Seattle', ' King County', ' USA']
    // let city = this.state.locationObject.display_name.split(',')[0];
    let url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.locationObject.lat}&lon=${this.state.locationObject.lon}`;
    try {
      let results = await axios.get(url);
      this.setState({ weather: results.data })
      this.setState({ error: false })
    } catch (e) {
      this.setState({ error: true })
      this.setState({ weather: [] })
    }
  }

  // getLocation = () => {
  //     axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_SECRET_PASSWORD}&q=${this.state.queryCity}&format=json`)
  //       .then((result) => {
  //         console.log(result);
  //         this.setState({ locationObject: result.data[0]})
  //       })
  //       .catch((e) => console.log(e));

  // }

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
        {this.state.error && <p>There was an error with your request</p>}
        {this.state.locationObject.display_name ? 
        <>
          <p>{this.state.locationObject.display_name}</p>
          <Map locationObject={this.state.locationObject}/> 
        </>
        : <p>Search for a city to explore</p>}
        {this.state.weather.length > 0 && <Weather weather={this.state.weather} />}
        
      </div>
    )
  }
}


// GET: https://maps.locationiq.com/v3/staticmap

// Query parameters:

// key: Authentication key
// center: Defines the center of the map. It takes a comma separated value of a latitude, longitude pair.
// zoom: 1-18

// Example Response: PNG image

// `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_SECRET_PASSWORD}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12`