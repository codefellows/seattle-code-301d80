# Lecture Notes

## What's new in 301?
- warm-ups
  - in multiple languages (python, C#, Java, React, JS)
- Code Challenges
  - 6-10ish short word problems/algorithms 
  - see shred talks if you learn well from video demo
  - first introduction to formal testing and TDD
  - practice for interviews
- more pair programming
  - week 2 we have a short PP session
  - week 3 you are paired with one person all week
- more career assignments
- trello for a lot of weekly project work flow

### How to succeed
- turn in EVERY assignment - very easy to fall behind
  - even if it is not done
- career assignments and reading open
- work with others
- 15 minute rule

## Arrow Functions
- multiple ways to create a function
  - mostly been doing function declarations in 201
  - function expresions are another way and arrow functions are one way to write a function expression 
- function expression vs. declaration
  - Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
  - Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.
  - benifits of function expressions
    - in closures - https://www.youtube.com/watch?v=qikxEIxsXco
    - as an argument to another function
    - to immediately invoke your funciton
- allow us to write concise one line functions
- the contextual this is not bound to the function if you use an arrow function, it will bubble up to the next non-arrow function

## React and Component-Based UI
### Why?
- react is hugely in demand in the industry
- Component based architecture is easier to test and reuse
- dynamicly updates application state without requiring a page reload
- dev advantages
  - reusable parts
  - separation of concerns
### What?
- React (angular and vue) are component based libraries that allow us to build applications using this technique
- Bind state/data to the DOM, they update the dom for us!!
  - react rerenders content when state changes by using a Virtual DOM
- We treat components like they are html elements `<Header />`
- Modularity
  - each component is it's own module, or block of code, that we can make available in another component
  - export the component from it's file, and import it where you want to use it
    - you can also import css and other files to a component module
### How
- WRRC
  - a request is made in the address bar for our website resource and the files are served
  - who is the client, who is the server?
- Use `npx create-react-app <application_name>` to start your project
- refer to the reactAppRemove.md if you want to clean up the file structure before you start
- JSX (syntax extension) allows us to write html markup in javascript 


## Code Challenges
- how to download the challenge
- how to parse the document
- how to run tests
- how to open stretch goals