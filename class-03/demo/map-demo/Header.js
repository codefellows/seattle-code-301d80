import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

class Header extends Component {
  render() {
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Wizard Cards</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header