import React, { Component } from 'react'
// import App from './App'

// function updateCounter() {
//   this.handleIncrement()
// }

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    // this.state = {count: 0}
    // updateCounter = updateCounter.bind(this)
  }
  

  // changeStuff() {
  //   this.handleIncrement();
  // }

  render() {
    // const {count} = 
    return (
      <div>
        <label>Current count is: {this.props.count}</label>
      </div>
    )
  }
}

export default Counter
