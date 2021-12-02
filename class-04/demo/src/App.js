import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const listOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: listOfNums
    }
  }

  handleChange = (event) => {
    const selection = event.target.value;
    console.log(selection);
    let newNumberList;

    // if they chose even, update our state to reflect even numbers only
    if (selection === 'even') {
      newNumberList = listOfNums.filter(number => !(number % 2))
    } else if (selection === 'odd') {
      newNumberList = listOfNums.filter(number => number % 2);
    } else if (selection === 'all') {
      newNumberList = listOfNums
    }

    this.setState({ numbers: newNumberList })
    // if they chose odd ....
    // if they chose all reset to the listOfNums
  }





  render() {
    return (
      <>
        <Form>
          <Form.Select onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="even">even</option>
            <option value="odd">odd</option>
          </Form.Select>
        </Form>
        <ListGroup>
          {this.state.numbers.map(number => <ListGroup.Item key={number}>{number}</ListGroup.Item>)}
        </ListGroup>
      </>
    )
  }
}
