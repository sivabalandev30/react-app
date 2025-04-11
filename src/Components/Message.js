import React, {Component} from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "welcome lavanya",
    };
  }

   handler() {
    alert('clicked')
    this.setState({
      Message: "thanks for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.handler()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;