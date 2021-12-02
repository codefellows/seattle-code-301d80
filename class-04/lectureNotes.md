# Lecture Notes

## Forms
### Why
- one of the best ways to get input from users
- allows us to collect info/ authenticate a user
### 
- an input or group on input fields a user can interact with and we can read
### How
- standard HTML form elements OR a component library like react-bootstrap

## Event Listeners in React
- attach a listener by adding an attribute to the element we to listen to
- onClick, onSubmit, onChange (there are more)
- onClick
  - when someone click on an element/component do something
- onSubmit
  - when someone submits a form, remember this is just like a form in js e.preventDefault()
- onChange
  - fires the handler any time a change is made to an input field
- pros and cons of onSubmit vs onChange
  - onChange is a little more reacty when used with the value being set by state but captures data as it occurs rather than waiting for a user to complete the form
  - onSubmit when attached to the form captures the values from the entire form and waits for the user to tell the app it is ready to submit data before capture














deploy to netlify today

app.js
import React from 'react';
import Header from './header.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  addCount = () => {
    this.setState({ counter: this.state.counter++ });
  }

  render() {
    return(
      <>
      <button onClick={this.addCount}>Click Me</button>
      <p>{this.state.counter}</p>
      </>
    )
  }
}

export default App;



header.js
import React from 'react';

class Header extends React.Component {
  render(){
    return <h1>{this.props.title}</h1>
  }
}

export default Header;


