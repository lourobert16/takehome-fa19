import React, { Component } from 'react'

class App extends Component {
  // YOUR CODE GOES BELOW

  render() {
    const id = this.props.id
    const name = this.props.name
    const nickname = this.props.nickname
    const hobby = this.props.hobby
    return (
      <div>
        <label>The contact's name is {name}</label>
      </div>
    )
  }
}

export default App
