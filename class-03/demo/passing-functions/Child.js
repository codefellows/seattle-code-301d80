import React, { Component } from 'react';
import billy from './assets/teen.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class Child extends Component {

  handleClick = () => {
    this.props.giveBillyMoney(20)
  }



  render() {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={billy} />
          <Card.Body>
            <Card.Title>Child</Card.Title>
            <Card.Text>
              I am billy and I have {this.props.billyMoney} dollars
            </Card.Text>
          </Card.Body>
          <Button onClick={this.handleClick}>Ask for $20</Button>
        </Card>
      </div>
    )
  }
}
