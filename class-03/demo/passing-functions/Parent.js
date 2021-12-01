import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mom from './assets/mom.jpg';
import Child from './Child.js';
import PopUp from './PopUp.js';

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      momsMoney: 100,
      billyMoney: 0,
      showModal: false
    }
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  giveBillyMoney = (dollars) => {
    if (this.state.momsMoney < 1) {
      this.openModal()
    }
    this.setState({ momsMoney: this.state.momsMoney - dollars, billyMoney: this.state.billyMoney + dollars }, () => { console.log(this.state.momsMoney, 'callback function to set state')})
    console.log(this.state.momsMoney, 'in line code');
  }

  handleClick = () => {
    // transfer $10 to billy account
    this.giveBillyMoney(10);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mom} />
          <Card.Body>
            <Card.Title>Parent</Card.Title>
            <Card.Text>
              I am the parent. I have {this.state.momsMoney} dollars.
            </Card.Text>
          </Card.Body>
          <Button onClick={this.handleClick}>Give Billy Money</Button>
        </Card>
        <Child giveBillyMoney={this.giveBillyMoney} billyMoney={this.state.billyMoney}/>
        <PopUp closeModal={this.closeModal} show={this.state.showModal}/>
      </div>
    )
  }
}
