# Lecture Notes

## React
### State and Props
- Props
  - data passed in to a component (from a parent) act like arguments to a function
    - properties of an object
    - READ only (come from the parent and can't be changed by the child)
    - Belongs/controlled by parent component
- State
  - Belongs to the component itself
  - Can be changed by the component
- Similarly
  - both are objects (props = {}, state = {}) in react that allow us to handle data/ State

## State 
- a snapshot of the the data in it's current condition

## Images in React
- Photos can be imported into react js components in your src folder, just like any other resource
- everything in public is served from our website url, you can use the url as an image source in your component child.jpg `<img src={'./child.jpg} />`
- it will depend on where you work what the style guide prefers you do

## Bootstrap React
- a third party component library we can use to import pre-styled components
- components just like any other component we would make, but with styling already added
- steps:
    - go to bootstrap react web page
    - click getting started
    - grab installation script from the beginning of the page
    - run that in the root of your project
    - see further down on the page where it tells you to `import 'bootstrap/dist/css/bootstrap.min.css';` add that line to your index.js OR app.js
    - then explore the component library to see which components you want to use and figure out how to use them
