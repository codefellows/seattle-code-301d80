import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cats from './Cats'

const url = 'http://localhost:3001';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      location: ''
    }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value })
  }

  handleClick = () => {
    if (this.state.location) {
      this.getCats(this.state.location);
    } else (
      this.getCats()
    )
  }

  getCats = async (location=null) => {
    const fullUrl = location ? `${url}/cats?location=${location}` : `${url}/cats`
    let catResponse = await axios.get(fullUrl);
    // set some state so we can render the cats
    this.setState({ cats: catResponse.data });

  }

  makeCat = async (newCat) => {
    try {
      const catResponse = await axios.post(url + '/cats', newCat);
      this.setState({ cats: [...this.state.cats, catResponse.data] })
    } catch (e) {
      console.error(e);
    }
  }

  deleteCat = async (id) => {
    try {
      await axios.delete(url + '/cats/' + id);
      // remove the cat whose id matches the cat from the cat array
      const updatedCats = this.state.cats.filter(cat => cat._id !== id)
      this.setState({ cats: updatedCats })
    } catch (e) {
      console.error(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newCat = {
      name: e.target.name.value,
      location: e.target.location.value,
      color: e.target.color.value,
      hasClaws: e.target.hasClaws.checked
    }
    console.log(newCat)
    this.makeCat(newCat);
    e.target.reset()
  }

  componentDidMount() {
    this.getCats();
  }



  render() {
    return (
      <Container>
        <input onChange={this.handleChange} type="text" value={this.state.location} />
        <button onClick={this.handleClick}>Location Sort</button>
        {this.state.cats.length > 0 && <Cats deleteCat={this.deleteCat} cats={this.state.cats} />}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Cat Name</Form.Label>
            <Form.Control type="text" placeholder="Butterscotch" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>City of Residence</Form.Label>
            <Form.Control type="text" placeholder="New York" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="color">
            <Form.Label>Coat Color</Form.Label>
            <Form.Control type="text" placeholder="Orange" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="hasClaws">
            <Form.Check type="checkbox" label="Claws?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add a Cat
          </Button>
        </Form>
      </Container>
    )
  }
}