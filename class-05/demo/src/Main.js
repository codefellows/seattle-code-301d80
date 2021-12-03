import { Component } from 'react';
import Restaurants from './Restaurants.js';
import Map from './Map.js';
import location from './fake-data/location.json';
import restaurants from './fake-data/restaurants.json';
import map from './images/map.png';


// this is where I want to bring in my dummy data and image
// I need a search bar... when the user types in the city 'seattle' render dummy data
// set state to allow dummy data to render

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      showDummyData: false
    }
  } 

  handleChange = (e) => {
    const city = e.target.value;
    this.setState({ cityName: city });
  }

  handleClick = (e) => {
    e.preventDefault()
    const newDDValue = this.state.cityName.toLowerCase() === 'seattle' ? true : false;

    this.setState({ showDummyData: newDDValue });
    // turn it to true if they search seattle
    // when I click on this button I want to look at what my city name is in state... if this.state.cityName.toLowerCase() === 'seattle'
    // set some in state to be true to show other components
    // restaurants
    // map - location and the image
  }

  render() {
    return (
      <>
        <form>
          <label for="city">City:
            <input onChange={this.handleChange} type='text' name='city' value={this.state.cityName} /> 
          </label>
          <button onClick={this.handleClick}>Explore!</button>
        </form>
        {/* {this.state.showDummyData && 
          <>
            <Restaurants restaurants={restaurants} location={location}/>
            <Map map={map} location={location}/>
          </>
        } */}

        {this.state.showDummyData ? 
          <>
            <Restaurants restaurants={restaurants} location={location}/>
            <Map map={map} location={location}/>
          </>
          :
          <p>Please search for seattle</p>
        }
      </>
    )
  }
}

export default Main