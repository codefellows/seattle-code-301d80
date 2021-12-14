
import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Cats extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.length && this.props.cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat info={cat} deleteCat={this.props.deleteCat} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Cat extends Component {

  handleClick = (e) => {
    console.log(e.target)
    this.props.deleteCat(this.props.info._id)
  }

  render() {
    return (
      <h3>{this.props.info.name} ({this.props.info.location}) <span onClick={this.handleClick}>[X]</span></h3>

    );
  }
}

export default Cats;

// onClick={() => this.props.deleteCats(this.props.info._id)}