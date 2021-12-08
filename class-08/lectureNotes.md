# Lecture Notes

### 3rd Party APIs

- **Why** 
  - All of the data in the world is literally all over the world
  - REST give us a common language and set of methods to access all of it, with WRRC
  - By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts
- **What** 
  - Identify the APIs that you need
  - Inspect the "shape" of the data and see if it conforms to your needs

- ReST and APIs

* Those APIs are all the same
  * They follow a very similar set of rules -- REST
  * Working over HTTP (which is stateless), REST is a way to use that protocol to share and even mutate/alter data between services.
  * APIs use REST over HTTP to give developers access to data and ways to modify it.
    * With HTTP, you can GET, POST, PUT, PATCH, DELETE
    * With Data, you can Create, Read, Update, or Delete
    * With REST
      * You Create using POST
      * You Update using PUT or PATCH
      * You Delete using DELETE
      * You Read using GET
  * For now, know the words and the actions.
  * We're going to live in the world of Read (GET) for the time being

  ## show deployment