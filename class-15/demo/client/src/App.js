import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Content from './Content.js';


class App extends Component {
  render() {
    return (
      <div>
        <LoginButton />
        <LogoutButton />
        {this.props.auth0.isAuthenticated &&
          <Content />
        } 
      </div>
    )
  }
}

export default withAuth0(App);
// for any component that uses auth0 export with the method withAuth0

