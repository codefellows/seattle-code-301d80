import React from 'react';

class Map extends React.Component {
  render() {
    return(
      <div>
        <h3>Map of {this.props.location.search_query}</h3>
        {this.props.map && 
          <img src={this.props.map || ''} />
        }
      </div>
    )
  }
}

export default Map;