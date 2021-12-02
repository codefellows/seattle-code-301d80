import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class FormChange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleSubmit = (event) => {
    // animal.preventDefault();
    console.log(event.target.userName.value);
    console.log(event.target.userDog.value);
    // console.log(animal)
    this.setState({ userName: event.target.userName.value })
  }

  render() {
    return (
      <div>
        <Form onSubmit={() => this.handleSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="jane doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userDog">
            <Form.Label>Dog</Form.Label>
            <Form.Control type="text" placeholder="dog" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <p>{this.state.userName}</p>
      </div>
    )
  }
}