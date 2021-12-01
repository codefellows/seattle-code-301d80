import React, { Component } from 'react';
import characters from './characters.json';
import Character from './Character.js';
import Row from 'react-bootstrap/Row';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row sm={1} md={2} lg={5}>
          {characters.map(character => <Character characterAttribute={character}/>)}
        </Row>
      </div>
    )
  }
}

