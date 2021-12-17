# Lecture Notes

Auth 0
- server
  - make auth module that has all of the functions and requirements you need to create the verifyUser function
    - define client
    - define getKey function
    - define verifyUser function
  - export the verifyUser function
  - On the route use the verifyUser function to obtain the users data (email)
  - use that in our db processes

- client
  - set up the index.js as the provider (see docs)
  - make sure to get YOUR auth0 application keys for the provider
    - you can now access this.props.auth0
  - create a login and logout button from the code in the auth0 docs
    - once logged in you can access this.props.auth0.user
  - make sure to wrap any component using auth0 in { withAuth0 } each individual that uses this.props.auth0