import { Component } from "react";
import Parent from './Parent.js';
import Header from './Header.js';


class App extends Component {

  render () {
    return (
      <>
        <Header />
        <Parent />
      </>
    )
  }
}

export default App