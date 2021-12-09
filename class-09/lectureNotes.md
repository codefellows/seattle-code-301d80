# Lecture Notes


## Refactoring
### Why?
- Code isn't always poetry, we can refactor to make it more readable or visually pleasing
- You want to integrate new technologies/libraries
- You get better and learn new things
- You want to integrate more advanced design patterns
### What?
- Break large functions into smaller chunks
- Identify areas for reusable functions
- Identify common patterns
- Seek opportunities to extend or abstract functionality

## Modularization
### Why?
- To keep it organized
- To make it DRY
- To make it testable
- To make it reuseable
- To make it easier to collaborate
### What?
- Break monolithic code bases into smaller parts
- Breaking code up into smaller pieces (into modules)
- A way of segregating reusable pieces of code that can be shared with other projects







Warm-Up Exercise
Examine the code below. Add a function to your React code that makes a call to your server using the 'axios' libraray as soon as the component mounts, on the '/bananas' route. Update the state of 'bananas' with the results that you get back.

app.js
import React from 'react';

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bananas = ''
    }
  }

  changeBananas = async () => {
    let bananaResult = await axios.get(`${SERVER}/bananas);
    this.setState({ bananas: bananaResult.data })
  }

  componentDidMount() {
    this.changeBananas();
  }

  render() {
    return(
      <div className="app">
        <h1>Bananas!</h1>

        {this.state.bananas && 
          <p>{this.state.bananas}</p>
        }
      </div>
    )
  }
}

export default App;
server.js
'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/bananas', (request, response) => response.send('bananas are great'));

app.listen(3001);