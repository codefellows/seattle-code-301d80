import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Character extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.characterAttribute.image} />
        <Card.Body>
          <Card.Title>{this.props.characterAttribute.name}</Card.Title>
          <Card.Text>
            {this.props.characterAttribute.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
