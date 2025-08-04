
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticClick = this.handleSyntheticClick.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello() {
    console.log('Hello! This is a static message.');
  }

  handleIncrement() {
    this.increment();
    this.sayHello(); 
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticClick(event) {
    alert("I was clicked");
    console.log(event); 
  }

  render() {
    return (
      <div style={{ padding: '20px', borderBottom: '2px solid #ccc' }}>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>Increment</button>&nbsp;
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleSyntheticClick}>Synthetic Event Button</button>
      </div>
    );
  }
}

export default Counter;
