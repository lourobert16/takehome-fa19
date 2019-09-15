import React, { Component } from 'react'
import Instructions from './Instructions'
import Contact from './Contact'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 1, name: "Angad", nickname: "greg", hobby: "dirty-ing"},
        {id: 2, name: "Roy", nickname: "uwu", hobby: "weeb"},
        {id: 3, name: "Daniel", nickname: "oppa", hobby: "losing money with options trading"},
      ], 
      id: 4,
      value: '',
      count: 0
    }
  }

  handleIncrement = () => {
    const curr_count = this.state.count
    this.setState({count: curr_count + 1})
  }
  handleDecrement = () => {
    const curr_count = this.state.count
    this.setState({count: curr_count - 1})
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const new_name = this.state.value;
    var new_contacts = this.state.contacts.concat({id: this.state.id, name: new_name, nickname: "yeet", hobby: "yeeting"});
    this.setState({contacts: new_contacts});
    const old_id = this.state.id
    this.setState({id: old_id + 1})
    this.handleIncrement();
    
  }

  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        <Counter count={this.state.count} />
        {this.state.contacts.map(x => (
          <Contact id={x.id} name={x.name} nickcname={x.nickname} hobby={x.hobby} />
        ))}

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}

export default App
