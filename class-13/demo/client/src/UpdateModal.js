import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class UpdateModal extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedCat = {
      name: e.target.name.value || this.props.cat.name,
      location: e.target.location.value || this.props.cat.location,
      color: e.target.color.value || this.props.cat.color,
      hasClaws: e.target.hasClaws.checked
    }
    // some function that puts the updated cat in the DB - pass in updated cat
    this.props.updateCat(updatedCat, this.props.cat._id);
    this.props.closeModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Cat Name</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>City of Residence</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.location} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="color">
              <Form.Label>Coat Color</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.color} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hasClaws">
              <Form.Check type="checkbox" label="Claws?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add a Cat
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}
