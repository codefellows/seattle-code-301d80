import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      // axios npm
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/books',
        headers: { "Authorization": `Bearer ${jwt}`}
      }

      const bookResponse = await axios(config);
      this.setState({ books: bookResponse.data });

    }
  }

  componentDidMount () {
    this.getBooks()
  }

  render() {
    console.log(this.props.auth0.user)
    return (
      <div>
        <h1>Books We Hope</h1>
        {this.state.books.length > 0 && this.state.books.map(book => <li>{book.title}</li>)}
      </div>
    )
  }
}

export default withAuth0(Content);
