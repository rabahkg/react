import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state={ count: 0 };
    }

    // step2: define methods to modify state
    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1});
    }

    // step3: render ui
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2> <br />
        <button onClick={this.increment}></button>
        <button onClick={this.decrement}></button>
      </div>
    )
  }
}
