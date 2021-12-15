
import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import UpdateModal from './UpdateModal';

class Cats extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.length && this.props.cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat updateCat={this.props.updateCat} info={cat} deleteCat={this.props.deleteCat} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Cat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleUpdateClick = () => {
    // opens a modal that will allow us to update the current instance of cat
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleClick = (e) => {
    console.log(e.target)
    this.props.deleteCat(this.props.info._id)
  }

  render() {
    return (
      <>
        <h3>{this.props.info.name} ({this.props.info.location}) <span onClick={this.handleClick}>[X]</span><span onClick={this.handleUpdateClick}>[U]</span></h3>
        {this.state.showModal && <UpdateModal cat={this.props.info} updateCat={this.props.updateCat} showModal={this.state.showModal} closeModal={this.closeModal}/>}
      </>
    );
  }
}

export default Cats;

// onClick={() => this.props.deleteCats(this.props.info._id)}