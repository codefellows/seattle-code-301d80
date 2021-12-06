# Lecture Notes


## How the internet works?!
- WRRC
- Communication Protocol
  - a system of rules that allows two or more entities of a communications system to transmit information. Protocol defines rules, syntax, symantics, synchronization, and error methods.
  
  - HTTP REQUEST SCHEMA
  {
    host: string
    port: integer
    method: string
    headers: pair list (like Content-Type: text/html; charset=UTF-8)
    body: opaque sequence of bytes (data can be described by the content type in the header)
  }
  - HTTP RESPONSE SCHEMA
  {
    status code: (200, 400, 500)
    headers: pair list
    body: opaque sequence of bytes
  }

## REST
- REST, a resource-oriented architecture: interface uniformity, Client/server architecture, without any state or session preservation, resource representation caching, use of the HTTP protocol and its methods.
  - The architectural style, REST (REpresentational State Transfer) is by far the most standardized way of structuring the web APIs for requests. REST is purely an architectural style based on several principles. The APIs adhering to REST principles are called RESTful APIs. REST APIs use a request/response model where every message from the server is the response to a message from the client. In general, RESTful APIs uses HTTP as its transport protocol. For such cases, lookups should use GET requests. PUT, POST, and DELETE requests should be used for mutation, creation, and deletion respectively (avoid using GET requests for updating information).

## API's
- Application programming interface: acts as a middle layer between two applications to allow them to communicate. 
  - needs to be clear about HOW to ask (good docs)

  
- .env (gitignore) DON'T PUT ON GITHUB
- What is the cloud?
  - The cloud refers to software and services that run on the Internet, instead of locally on your computer



import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageOne:"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      imageTwo: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
      imageThree: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
      imageOneVotes: 0,
      imageTwoVotes: 0,
      imageThreeVotes: 0
    }
  }
  render() {
    return(
      <>
        <h1>Vote on Your Favorite Animal!</h1>
        <p>We have three adorable animals here. Vote on your favorite one and watch their likes go up!</p>
        <div onClick={() => this.setState({ imageOneVotes: this.state.imageOneVotes + 1 })}>
          <h2>UniWhal</h2>
          <span>likes: {this.state.imageOneVotes}</span>
          <img src={this.state.imageOne}>
        </div>
        <div onClick={() => this.setState({ imageTwoVotes: this.state.imageTwoVotes + 1 })}>
          <h2>Baby Rhino</h2>
          <span>likes: {this.state.imageTwoVotes}</span>
          <img src={this.state.imageTwo}>
        </div>
        <div onClick={() => this.setState({ imageThreeVotes: this.state.imageThreeVotes + 1 })}>
          <h2>Baby markhor</h2>
          <span>likes: {this.state.imageThreeVotes}</span>
          <img src={this.state.imageThree}>
        </div>
      </>
    )
  }
}

AdorableAnimal.js
  - could have their own likes
Images could be in a json file to import
<Header.js>
<Main>
  <AdorableAnimals.js>
