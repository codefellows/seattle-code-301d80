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

  handleChange = (event) => {
    console.log(this.state.userName, 'current state')
    console.log(event.target.value);
    this.setState({ userName: event.target.value})
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" value={this.state.userName} placeholder="jane doe" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
