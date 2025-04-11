import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.incrementFive()}>increment 5</button>
      </div>
    );
  }
}

export default Counter;
